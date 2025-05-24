const authBtn = document.getElementById('authBtn');
const loginModal = document.getElementById('loginModal');
const loginSubmit = document.getElementById('loginSubmit');
const errorMessage = document.getElementById('errorMessage');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const content = document.querySelector('.content');

// Kiểm tra trạng thái đăng nhập khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        loginModal.classList.remove('hidden');
        content.classList.add('hidden');
        authBtn.textContent = 'ĐĂNG NHẬP';
    } else {
        content.classList.remove('hidden');
        authBtn.textContent = 'ĐĂNG XUẤT';
    }
});

authBtn.addEventListener('click', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        localStorage.removeItem('isLoggedIn');
        loginModal.classList.remove('hidden');
        content.classList.add('hidden');
        authBtn.textContent = 'ĐĂNG NHẬP';
    } else {
        loginModal.classList.remove('hidden');
    }
});

loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.add('hidden');
        errorMessage.classList.add('hidden');
        usernameInput.value = '';
        passwordInput.value = '';
    }
});

loginSubmit.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true');
        errorMessage.classList.add('hidden');
        loginModal.classList.add('hidden');
        authBtn.textContent = 'ĐĂNG XUẤT';
        content.classList.remove('hidden');
        alert('Đăng nhập thành công!');
    } else {
        errorMessage.classList.remove('hidden');
    }
});

passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        loginSubmit.click();
    }
});