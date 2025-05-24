// JavaScript để xử lý điều hướng
document.querySelectorAll(".main-nav nav a").forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    const page = navLink.getAttribute("data-page");
    console.log("Clicked nav item:", page); // Gỡ lỗi: kiểm tra giá trị data-page

    // Xóa class active khỏi tất cả các mục điều hướng
    document.querySelectorAll(".main-nav nav a").forEach((link) => {
      link.classList.remove("active");
    });

    // Thêm class active cho mục được nhấp
    navLink.classList.add("active");

    // Chuyển hướng đến trang tương ứng
    if (page === "schedule") {
      window.location.href = "../HTML/schedule.html";
    } else if (page === "results") {
      window.location.href = "../HTML/results.html";
    } else {
      console.log("No redirect for:", page); // Gỡ lỗi
      // Không chuyển hướng cho các trang khác, giữ nguyên trang home
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Dữ liệu giả lập cho các mục
  const data = {
    races: {
      2025: [
        {
          grandPrix: "Australia",
          date: "16 Mar 2025",
          winner: "Lando Norris",
          car: "McLaren Mercedes",
          laps: 57,
          time: "1:42:06.304",
        },
        {
          grandPrix: "China",
          date: "23 Mar 2025",
          winner: "Oscar Piastri",
          car: "McLaren Mercedes",
          laps: 56,
          time: "1:30:55.026",
        },
        {
          grandPrix: "Japan",
          date: "06 Apr 2025",
          winner: "Max Verstappen",
          car: "Red Bull Racing Honda RBPT",
          laps: 53,
          time: "1:22:09.983",
        },
        {
          grandPrix: "Bahrain",
          date: "13 Apr 2025",
          winner: "Oscar Piastri",
          car: "McLaren Mercedes",
          laps: 57,
          time: "1:35:39.435",
        },
        {
          grandPrix: "Saudi Arabia",
          date: "20 Apr 2025",
          winner: "Oscar Piastri",
          car: "McLaren Mercedes",
          laps: 50,
          time: "1:21:06.758",
        },
      ],
      2024: [
        {
          grandPrix: "Bahrain",
          date: "02 Mar 2024",
          winner: "Max Verstappen",
          car: "Red Bull Racing Honda RBPT",
          laps: 57,
          time: "1:31:44.742",
        },
        {
          grandPrix: "Saudi Arabia",
          date: "09 Mar 2024",
          winner: "Max Verstappen",
          car: "Red Bull Racing Honda RBPT",
          laps: 50,
          time: "1:20:43.273",
        },
        {
          grandPrix: "Australia",
          date: "24 Mar 2024",
          winner: "Carlos Sainz",
          car: "Ferrari",
          laps: 58,
          time: "1:20:26.843",
        },
        {
          grandPrix: "Japan",
          date: "07 Apr 2024",
          winner: "Max Verstappen",
          car: "Red Bull Racing Honda RBPT",
          laps: 53,
          time: "1:54:23.566",
        },
        {
          grandPrix: "China",
          date: "21 Apr 2024",
          winner: "Max Verstappen",
          car: "Red Bull Racing Honda RBPT",
          laps: 56,
          time: "1:40:52.554",
        },
      ],
      2023: [
        {
          grandPrix: "Bahrain",
          date: "05 Mar 2023",
          winner: "Max Verstappen",
          car: "Red Bull Racing Honda RBPT",
          laps: 57,
          time: "1:33:56.736",
        },
        {
          grandPrix: "Saudi Arabia",
          date: "19 Mar 2023",
          winner: "Sergio Perez",
          car: "Red Bull Racing Honda RBPT",
          laps: 50,
          time: "1:21:14.894",
        },
        {
          grandPrix: "Australia",
          date: "02 Apr 2023",
          winner: "Max Verstappen",
          car: "Red Bull Racing Honda RBPT",
          laps: 58,
          time: "2:32:38.371",
        },
        {
          grandPrix: "Azerbaijan",
          date: "30 Apr 2023",
          winner: "Sergio Perez",
          car: "Red Bull Racing Honda RBPT",
          laps: 51,
          time: "1:32:42.436",
        },
        {
          grandPrix: "Miami",
          date: "07 May 2023",
          winner: "Max Verstappen",
          car: "Red Bull Racing Honda RBPT",
          laps: 57,
          time: "1:27:38.241",
        },
      ],
    },
    drivers: {
      2025: [
        {
          pos: 1,
          driver: "Oscar Piastri",
          nationality: "AUS",
          car: "McLaren Mercedes",
          points: 99,
        },
        {
          pos: 2,
          driver: "Lando Norris",
          nationality: "GBR",
          car: "McLaren Mercedes",
          points: 89,
        },
        {
          pos: 3,
          driver: "Max Verstappen",
          nationality: "NED",
          car: "Red Bull Racing Honda RBPT",
          points: 87,
        },
        {
          pos: 4,
          driver: "George Russell",
          nationality: "GBR",
          car: "Mercedes",
          points: 73,
        },
        {
          pos: 5,
          driver: "Charles Leclerc",
          nationality: "MON",
          car: "Ferrari",
          points: 47,
        },
        {
          pos: 6,
          driver: "Kimi Antonelli",
          nationality: "ITA",
          car: "Mercedes",
          points: 38,
        },
      ],
      2024: [
        {
          pos: 1,
          driver: "Max Verstappen",
          nationality: "NED",
          car: "Red Bull Racing Honda RBPT",
          points: 120,
        },
        {
          pos: 2,
          driver: "Charles Leclerc",
          nationality: "MON",
          car: "Ferrari",
          points: 98,
        },
        {
          pos: 3,
          driver: "Lando Norris",
          nationality: "GBR",
          car: "McLaren Mercedes",
          points: 83,
        },
        {
          pos: 4,
          driver: "Carlos Sainz",
          nationality: "ESP",
          car: "Ferrari",
          points: 73,
        },
        {
          pos: 5,
          driver: "Sergio Perez",
          nationality: "MEX",
          car: "Red Bull Racing Honda RBPT",
          points: 62,
        },
        {
          pos: 6,
          driver: "George Russell",
          nationality: "GBR",
          car: "Mercedes",
          points: 55,
        },
      ],
      2023: [
        {
          pos: 1,
          driver: "Max Verstappen",
          nationality: "NED",
          car: "Red Bull Racing Honda RBPT",
          points: 150,
        },
        {
          pos: 2,
          driver: "Sergio Perez",
          nationality: "MEX",
          car: "Red Bull Racing Honda RBPT",
          points: 100,
        },
        {
          pos: 3,
          driver: "Charles Leclerc",
          nationality: "MON",
          car: "Ferrari",
          points: 80,
        },
        {
          pos: 4,
          driver: "Carlos Sainz",
          nationality: "ESP",
          car: "Ferrari",
          points: 70,
        },
        {
          pos: 5,
          driver: "Lewis Hamilton",
          nationality: "GBR",
          car: "Mercedes",
          points: 65,
        },
        {
          pos: 6,
          driver: "George Russell",
          nationality: "GBR",
          car: "Mercedes",
          points: 50,
        },
      ],
    },
    team: {
      2025: [
        { pos: 1, team: "McLaren-Mercedes", points: 188 },
        { pos: 2, team: "Mercedes", points: 111 },
        { pos: 3, team: "Red-Bull-Racing-Honda-RBPT", points: 89 },
        { pos: 4, team: "Ferrari", points: 78 },
        { pos: 5, team: "Williams-Mercedes", points: 25 },
        { pos: 6, team: "Haas-Ferrari", points: 20 },
        { pos: 7, team: "Aston-Martin-Aramco-Mercedes", points: 10 },
        { pos: 8, team: "Racing-Bulls-Honda-RBPT", points: 8 },
      ],
      2024: [
        { pos: 1, team: "Red-Bull-Racing-Honda-RBPT", points: 210 },
        { pos: 2, team: "Ferrari", points: 190 },
        { pos: 3, team: "McLaren-Mercedes", points: 175 },
        { pos: 4, team: "Mercedes", points: 150 },
        { pos: 5, team: "Aston-Martin-Aramco-Mercedes", points: 90 },
        { pos: 6, team: "Williams-Mercedes", points: 50 },
        { pos: 7, team: "Haas-Ferrari", points: 30 },
        { pos: 8, team: "Racing-Bulls-Honda-RBPT", points: 20 },
      ],
      2023: [
        { pos: 1, team: "Red-Bull-Racing-Honda-RBPT", points: 250 },
        { pos: 2, team: "Mercedes", points: 200 },
        { pos: 3, team: "Ferrari", points: 180 },
        { pos: 4, team: "McLaren-Mercedes", points: 160 },
        { pos: 5, team: "Aston-Martin-Aramco-Mercedes", points: 100 },
        { pos: 6, team: "Williams-Mercedes", points: 60 },
        { pos: 7, team: "Haas-Ferrari", points: 40 },
        { pos: 8, team: "Racing-Bulls-Honda-RBPT", points: 25 },
      ],
    },
    "fastest-lap": {
      2025: [
        {
          pos: 1,
          driver: "Max Verstappen",
          grandPrix: "Japan",
          fastestLap: "1:29.456",
        },
        {
          pos: 2,
          driver: "Oscar Piastri",
          grandPrix: "Saudi Arabia",
          fastestLap: "1:30.123",
        },
        {
          pos: 3,
          driver: "Lando Norris",
          grandPrix: "Australia",
          fastestLap: "1:30.789",
        },
        {
          pos: 4,
          driver: "George Russell",
          grandPrix: "Bahrain",
          fastestLap: "1:31.234",
        },
        {
          pos: 5,
          driver: "Charles Leclerc",
          grandPrix: "China",
          fastestLap: "1:31.567",
        },
      ],
      2024: [
        {
          pos: 1,
          driver: "Max Verstappen",
          grandPrix: "Bahrain",
          fastestLap: "1:28.987",
        },
        {
          pos: 2,
          driver: "Charles Leclerc",
          grandPrix: "Australia",
          fastestLap: "1:29.123",
        },
        {
          pos: 3,
          driver: "Lando Norris",
          grandPrix: "China",
          fastestLap: "1:29.456",
        },
        {
          pos: 4,
          driver: "Sergio Perez",
          grandPrix: "Japan",
          fastestLap: "1:29.789",
        },
        {
          pos: 5,
          driver: "George Russell",
          grandPrix: "Saudi Arabia",
          fastestLap: "1:30.234",
        },
      ],
      2023: [
        {
          pos: 1,
          driver: "Max Verstappen",
          grandPrix: "Bahrain",
          fastestLap: "1:28.654",
        },
        {
          pos: 2,
          driver: "Sergio Perez",
          grandPrix: "Saudi Arabia",
          fastestLap: "1:29.012",
        },
        {
          pos: 3,
          driver: "Charles Leclerc",
          grandPrix: "Australia",
          fastestLap: "1:29.345",
        },
        {
          pos: 4,
          driver: "Lewis Hamilton",
          grandPrix: "Azerbaijan",
          fastestLap: "1:29.678",
        },
        {
          pos: 5,
          driver: "George Russell",
          grandPrix: "Miami",
          fastestLap: "1:30.123",
        },
      ],
    },
  };

  // Trạng thái bộ lọc
  let currentFilters = {
    year: "2025",
    apiType: "team",
    filter: "all",
  };

  // Xử lý dropdown
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const dropdownMenu = toggle.nextElementSibling;
      const isVisible = dropdownMenu.classList.contains("show");

      // Đóng tất cả dropdown khác
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.classList.remove("show");
      });

      // Toggle dropdown hiện tại
      if (!isVisible) {
        dropdownMenu.classList.add("show");
      }
    });
  });

  // Đóng dropdown khi click ra ngoài
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".filter-dropdown")) {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.classList.remove("show");
      });
    }
  });

  // Hàm cập nhật bộ lọc "Results"
  function updateResultsFilter() {
    const { year, apiType } = currentFilters;
    const resultsMenu = document.querySelector(".results-menu");
    resultsMenu.innerHTML = "";

    // Tùy thuộc vào apiType, tạo danh sách tùy chọn cho bộ lọc "Results"
    let filterOptions = [];
    if (apiType === "races") {
      // Lọc theo đội (Car)
      filterOptions = [
        ...new Set(data.races[year].map((item) => item.car)),
      ].sort();
    } else if (apiType === "drivers" || apiType === "fastest-lap") {
      // Lọc theo tay đua (Driver)
      filterOptions = [
        ...new Set(data[apiType][year].map((item) => item.driver)),
      ].sort();
    } else if (apiType === "team") {
      // Lọc theo đội (Team)
      filterOptions = [
        ...new Set(data.team[year].map((item) => item.team)),
      ].sort();
    }

    // Thêm tùy chọn "All"
    const allItem = document.createElement("li");
    allItem.className =
      "f1-menu-item font-formulaOne uppercase cursor-pointer font-bold active";
    allItem.dataset.filter = "all";
    allItem.innerHTML = `<a href="/en/results/${year}/${apiType}">All</a>`;
    resultsMenu.appendChild(allItem);

    // Thêm các tùy chọn khác
    filterOptions.forEach((option) => {
      const li = document.createElement("li");
      li.className = "f1-menu-item font-formulaOne uppercase cursor-pointer";
      li.dataset.filter = option;
      li.innerHTML = `<a href="/en/results/${year}/${apiType}/${option.replace(
        /\s/g,
        "-"
      )}"">${option}</a>`;
      resultsMenu.appendChild(li);
    });

    // Cập nhật sự kiện cho các mục trong bộ lọc "Results"
    resultsMenu.querySelectorAll(".f1-menu-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const dropdown = item.closest(".filter-dropdown");
        const toggle = dropdown.querySelector(".dropdown-toggle");
        toggle.textContent = item.textContent;
        dropdown.querySelector(".dropdown-menu").classList.remove("show");

        // Xóa trạng thái active
        resultsMenu
          .querySelectorAll(".f1-menu-item")
          .forEach((i) => i.classList.remove("active"));
        item.classList.add("active");

        currentFilters.filter = item.dataset.filter;
        updateTable();
      });
    });

    // Reset bộ lọc "Results" về "All"
    document.querySelector('[data-type="filter"]').textContent = "All";
    currentFilters.filter = "all";
  }

  // Hàm cập nhật bảng
  function updateTable() {
    const { year, apiType, filter } = currentFilters;

    // Lấy dữ liệu theo năm và loại
    const categoryData = data[apiType][year] || [];

    // Cập nhật tiêu đề
    const title = document.querySelector("h1");
    if (apiType === "races") {
      title.textContent = `${year} Race Results`;
    } else if (apiType === "drivers") {
      title.textContent = `${year} Driver Standings`;
    } else if (apiType === "team") {
      title.textContent = `${year} Team Standings`;
    } else if (apiType === "fastest-lap") {
      title.textContent = `${year} DHL Fastest Lap Award`;
    }

    // Cập nhật bảng
    const thead = document.querySelector(".f1-table thead tr");
    const tbody = document.querySelector(".f1-table tbody");
    thead.innerHTML = "";
    tbody.innerHTML = "";

    if (apiType === "races") {
      // Cập nhật tiêu đề cột
      thead.innerHTML = `
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Grand Prix</p></th>
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Date</p></th>
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Winner</p></th>
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Car</p></th>
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Laps</p></th>
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Time</p></th>
        `;

      // Cập nhật dữ liệu với bộ lọc
      const filteredData =
        filter === "all"
          ? categoryData
          : categoryData.filter((item) => item.car === filter);
      filteredData.forEach((item, index) => {
        const row = document.createElement("tr");
        row.className = `race-row ${
          index % 2 === 0 ? "bg-brand-white" : "bg-grey-10"
        }`;
        row.innerHTML = `
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${item.grandPrix}</p></td>
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${item.date}</p></td>
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${item.winner}</p></td>
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${item.car}</p></td>
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${item.laps}</p></td>
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${item.time}</p></td>
          `;
        tbody.appendChild(row);
      });
    } else if (apiType === "drivers") {
      // Cập nhật tiêu đề cột
      thead.innerHTML = `
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Pos</p></th>
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Driver</p></th>
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Nationality</p></th>
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Car</p></th>
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Pts</p></th>
        `;

      // Cập nhật dữ liệu với bộ lọc
      const filteredData =
        filter === "all"
          ? categoryData
          : categoryData.filter((item) => item.driver === filter);
      filteredData.forEach((item, index) => {
        const row = document.createElement("tr");
        row.className = `driver-row ${
          index % 2 === 0 ? "bg-brand-white" : "bg-grey-10"
        }`;
        row.innerHTML = `
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${
              item.pos
            }</p></td>
            <td class="p-normal whitespace-nowrap driver-cell">
              <p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">
                <a class="driver-link" href="driver/${item.driver.replace(
                  /\s/g,
                  "-"
                )}"">${item.driver}</a>
              </p>
            </td>
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${
              item.nationality
            }</p></td>
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${
              item.car
            }</p></td>
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${
              item.points
            }</p></td>
          `;
        tbody.appendChild(row);
      });
    } else if (apiType === "team") {
      // Cập nhật tiêu đề cột
      thead.innerHTML = `
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Pos</p></th>
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Team</p></th>
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Pts</p></th>
        `;

      // Cập nhật dữ liệu với bộ lọc
      const filteredData =
        filter === "all"
          ? categoryData
          : categoryData.filter((item) => item.team === filter);
      filteredData.forEach((item, index) => {
        const row = document.createElement("tr");
        row.className = `team-row ${
          index % 2 === 0 ? "bg-brand-white" : "bg-grey-10"
        }`;
        row.dataset.team = item.team;
        row.innerHTML = `
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${
              item.pos
            }</p></td>
            <td class="p-normal whitespace-nowrap team-cell">
              <img src="https://www.formula1.com/images/teams/${item.team
                .toLowerCase()
                .replace(/\s/g, "")}.png" alt="${
          item.team
        } Logo" class="team-logo" />
              <p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">
                <a class="team-link" href="team/${
                  item.team
                }">${item.team.replace(/-/g, " ")}</a>
              </p>
            </td>
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${
              item.points
            }</p></td>
          `;
        tbody.appendChild(row);
      });
    } else if (apiType === "fastest-lap") {
      // Cập nhật tiêu đề cột
      thead.innerHTML = `
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Pos</p></th>
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Driver</p></th>
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Grand Prix</p></th>
          <th class="p-normal text-left whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-bold non-italic uppercase leading-snug f1-text__micro text-fs-15px">Fastest Lap</p></th>
        `;

      // Cập nhật dữ liệu với bộ lọc
      const filteredData =
        filter === "all"
          ? categoryData
          : categoryData.filter((item) => item.driver === filter);
      filteredData.forEach((item, index) => {
        const row = document.createElement("tr");
        row.className = `fastest-lap-row ${
          index % 2 === 0 ? "bg-brand-white" : "bg-grey-10"
        }`;
        row.innerHTML = `
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${
              item.pos
            }</p></td>
            <td class="p-normal whitespace-nowrap driver-cell">
              <p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">
                <a class="driver-link" href="driver/${item.driver.replace(
                  /\s/g,
                  "-"
                )}"">${item.driver}</a>
              </p>
            </td>
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${
              item.grandPrix
            }</p></td>
            <td class="p-normal whitespace-nowrap"><p class="f1-text font-titillium tracking-normal font-normal non-italic normal-case leading-none f1-text__micro text-fs-15px">${
              item.fastestLap
            }</p></td>
          `;
        tbody.appendChild(row);
      });
    }
  }

  // Xử lý sự kiện click trên các mục trong bộ lọc
  const filterItems = document.querySelectorAll(".f1-menu-item");
  filterItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      // Cập nhật mục đang chọn trong dropdown
      const dropdown = item.closest(".filter-dropdown");
      const toggle = dropdown.querySelector(".dropdown-toggle");
      toggle.textContent = item.textContent;

      // Đóng dropdown
      dropdown.querySelector(".dropdown-menu").classList.remove("show");

      // Xóa trạng thái active của tất cả mục trong cùng dropdown
      item
        .closest(".dropdown-menu")
        .querySelectorAll(".f1-menu-item")
        .forEach((i) => {
          i.classList.remove("active");
        });

      // Thêm trạng thái active cho mục được chọn
      item.classList.add("active");

      // Cập nhật trạng thái bộ lọc
      const filterType = toggle.dataset.type;
      if (filterType === "year") {
        currentFilters.year = item.dataset.value;
        updateResultsFilter();
      } else if (filterType === "apiType") {
        currentFilters.apiType = item.dataset.value;
        updateResultsFilter();
      }

      // Cập nhật bảng
      updateTable();
    });
  });

  // Khởi tạo bộ lọc "Results" và bảng ban đầu
  updateResultsFilter();
  updateTable();
});
