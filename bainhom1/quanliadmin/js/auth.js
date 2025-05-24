// auth.js
document.addEventListener("DOMContentLoaded", function() {
    const authArea = document.getElementById("authArea");
  
    function renderLoggedInUI(username) {
      authArea.innerHTML = `
        <div class="user-dropdown">
          <button class="user-btn" id="userBtn">${username} ⮟</button>
          <div class="user-menu hidden" id="userMenu">
            <button id="logoutBtn">Đăng xuất</button>
          </div>
        </div>
      `;
      document.getElementById("userBtn").addEventListener("click", toggleUserMenu);
      document.getElementById("logoutBtn").addEventListener("click", logout);
    }
  
    function toggleUserMenu() {
      document.getElementById("userMenu").classList.toggle("hidden");
    }
  
    function logout() {
      if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
        localStorage.removeItem("adminUsername");
        location.reload();
      }
    }
  
    function login() {
      const username = "Admin"; // Giả lập username
      localStorage.setItem("adminUsername", username);
      renderLoggedInUI(username);
    }
  
    const savedUsername = localStorage.getItem("adminUsername");
    if (savedUsername) {
      renderLoggedInUI(savedUsername);
    } else {
      document.getElementById("loginBtn").addEventListener("click", login);
    }
  });
  