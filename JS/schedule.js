document.addEventListener("DOMContentLoaded", function () {
  const raceList = document.querySelector(".race-list");

  function formatDateRange(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date
      .toLocaleString("default", { month: "short" })
      .toUpperCase();
    const startDate = new Date(date);
    startDate.setDate(day - 2);
    const startDay = startDate.getDate();
    return startDay === day ? `${day} ${month}` : `${startDay}-${day} ${month}`;
  }

  async function loadSchedule() {
    try {
      const response = await fetch("http://localhost:3000/api/schedule"); // Gọi API từ server
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Dữ liệu lịch đua:", data);

      if (data.message) {
        raceList.innerHTML = `<p>${data.message}</p>`;
      } else {
        raceList.innerHTML = data
          .map((race, index) => {
            const raceDate = formatDateRange(race.Date);
            const roundNumber = index + 1;
            const currentDate = new Date("2025-05-24T18:12:00+07:00"); // 06:12 PM +07
            const raceEndDate = new Date(race.Date);
            raceEndDate.setDate(raceEndDate.getDate());

            let raceStatus = "future";
            if (raceEndDate < currentDate) raceStatus = "past";
            else if (
              raceEndDate.getFullYear() === currentDate.getFullYear() &&
              raceEndDate.getMonth() === currentDate.getMonth() &&
              raceEndDate.getDate() >= currentDate.getDate() - 2 &&
              raceEndDate.getDate() <= currentDate.getDate()
            )
              raceStatus = "current";

            return `
              <div class="race-event ${raceStatus}" data-race-id="${
              race.RaceID
            }">
                <div class="race-date">
                  <span class="date-range">${raceDate}</span>
                  <span class="round-label">ROUND ${roundNumber}</span>
                </div>
                <div class="race-details">
                  <img src="${
                    race.FlagURL || "../images/flags/default.png"
                  }" alt="${race.CountryName} Flag" class="flag" />
                  <span class="location">${race.CountryName.toUpperCase()}</span>
                  <span class="grand-prix">FORMULA 1 ${race.RaceName.toUpperCase()} 2025</span>
                </div>
                <div class="schedule-details-expanded">
                  <div id="sessions-${race.RaceID}"></div>
                </div>
              </div>
            `;
          })
          .join("");

        updateRaceEventListeners();
      }
    } catch (error) {
      console.error("Lỗi khi tải lịch đua:", error);
      raceList.innerHTML = `<p>Lỗi khi tải dữ liệu: ${error.message}</p>`;
    }
  }

  async function loadSessions(raceId) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/schedule/${raceId}/sessions`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(`Dữ liệu phiên cho Race ID ${raceId}:`, data);

      const sessionsDiv = document.getElementById(`sessions-${raceId}`);
      if (data.message) {
        sessionsDiv.innerHTML = `<p>${data.message}</p>`;
      } else {
        sessionsDiv.innerHTML = data
          .map(
            (session) => `
              <div class="expanded-session">
                <span class="session-name">${session.SessionType.toUpperCase()}</span>
                <span class="session-time">${new Date(
                  session.SessionStartDateTime
                ).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })} ${
              session.SessionEndDateTime
                ? "- " +
                  new Date(session.SessionEndDateTime).toLocaleString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : ""
            }</span>
              </div>
            `
          )
          .join("");
      }
    } catch (error) {
      console.error(`Lỗi khi tải phiên cho Race ID ${raceId}:`, error);
      document.getElementById(
        `sessions-${raceId}`
      ).innerHTML = `<p>Lỗi khi tải phiên: ${error.message}</p>`;
    }
  }

  function updateRaceEventListeners() {
    const raceEvents = document.querySelectorAll(".race-event");
    raceEvents.forEach((event) => {
      event.addEventListener("click", function () {
        raceEvents.forEach((ev) => {
          ev.classList.remove("active");
          const expanded = ev.querySelector(".schedule-details-expanded");
          if (expanded) expanded.classList.remove("active");
        });

        this.classList.add("active");
        const detailsExpanded = this.querySelector(
          ".schedule-details-expanded"
        );
        if (detailsExpanded) {
          detailsExpanded.classList.add("active");
          const raceId = this.getAttribute("data-race-id");
          loadSessions(raceId);
        }
      });
    });
  }

  document.querySelectorAll(".main-nav-links a").forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      const page = navLink.textContent.trim().toLowerCase();
      document
        .querySelectorAll(".main-nav-links a")
        .forEach((link) => link.classList.remove("active"));
      navLink.classList.add("active");

      if (page === "schedule") window.location.href = "HTML/schedule.html";
      else if (page === "results") window.location.href = "HTML/results.html";
      else if (page === "latest") window.location.href = "HTML/Home.html";
      else if (page === "drivers") window.location.href = "HTML/Drivers.html";
      else console.log("No redirect for:", page);
    });
  });

  loadSchedule();
});
