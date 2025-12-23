import { PageFlip } from 'page-flip';

const book = document.getElementById('book');

const pageFlip = new PageFlip(book, {
  width: 400,
  height: 600,
  size: "fixed",
  showCover: true,
  display: "double",
  drawShadow: true,
  flippingTime: 800,
  maxShadowOpacity: 0.5,
  mobileScrollSupport: true
});

// Загружаем страницы
pageFlip.loadFromHTML(document.querySelectorAll('.page_project'));

// Начать с первой страницы
pageFlip.turnToPage(0);

// Кнопки навигации
document.getElementById('prev').addEventListener('click', () => pageFlip.flipPrev());
document.getElementById('next').addEventListener('click', () => pageFlip.flipNext());

// Кнопки Firefox
document.getElementById('pressLeft').addEventListener('click', (e) => {
  e.preventDefault();
  pageFlip.flipPrev();
});
document.getElementById('pressRight').addEventListener('click', (e) => {
  e.preventDefault();
  pageFlip.flipNext();
});
