document.addEventListener('DOMContentLoaded', function() {
    var btnGiaiDau = document.getElementById('btnQuanLyGiaiDau');
    var parentLi = btnGiaiDau.parentElement;

    btnGiaiDau.addEventListener('click', function(event) {
        event.preventDefault();
        parentLi.classList.toggle('show-submenu');
    });

    document.addEventListener('click', function(event) {
        if (!parentLi.contains(event.target) && parentLi.classList.contains('show-submenu')) {
            parentLi.classList.remove('show-submenu');
        }
    });
});
