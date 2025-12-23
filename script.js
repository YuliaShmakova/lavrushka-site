// импортируем из page-flip.module.js
import { PageFlip } from './js/page-flip.module.js';

document.addEventListener('DOMContentLoaded', () => {
    const bookContainer = document.getElementById('book');

    const pageFlip = new PageFlip(bookContainer, {
        width: 400,
        height: 600,
        showCover: true
    });

    const pages = [
        '<div class="page" data-density="hard"><h2>Обложка</h2></div>',
        '<div class="page"><h2>Страница 1</h2><p>Текст первой страницы книги.</p></div>',
        '<div class="page"><h2>Страница 2</h2><p>Текст второй страницы книги.</p></div>',
        '<div class="page" data-density="hard"><h2>Последняя страница</h2></div>'
    ];

    const pageElements = pages.map(html => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.firstElementChild;
    });

    // Загружаем HTML страницы
    pageFlip.loadFromHtml(pageElements);
});
