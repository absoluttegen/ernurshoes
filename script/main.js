document.querySelector('.element').addEventListener('animationend', function() {
  this.style.pointerEvents = 'auto'; // Делает элемент кликабельным после завершения анимации
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchIcon = document.getElementById('searchIcon');

    // При клике на лупу — показать/скрыть поле ввода
    searchIcon.addEventListener('click', () => {
        if (searchInput.style.display === 'none' || searchInput.style.display === '') {
            searchInput.style.display = 'inline-block';
            searchInput.focus();
        } else {
            searchInput.style.display = 'none';
        }
    });

    // При нажатии Enter — выполнить поиск
    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim().toLowerCase();

            // Список товаров для примера
            const menShoes = ['air max', 'jordan', 'dunk'];
            const womenShoes = ['air force', 'pegasus', 'blazer'];

            if (menShoes.includes(query)) {
                window.location.href = `men.html?search=${encodeURIComponent(query)}`;
            } else if (womenShoes.includes(query)) {
                window.location.href = `women.html?search=${encodeURIComponent(query)}`;
            } else {
                alert('Кроссовки не найдены.');
            }
        }
    });
});

