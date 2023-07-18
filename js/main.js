const body = document.querySelector('body');
const html = document.querySelector('html');
const burger = document.querySelector('.burger');
const search = document.querySelector('.search');
const header_nav = document.querySelector('.header-nav');
const expend_more = document.querySelector('.expand-more');
const search_close = document.querySelector('.search-close');
const shop_dropdown = document.querySelector('.shop-dropdown');
const dungeonLanding = document.querySelectorAll('.to-dungeon-landing');
const videoPlayerPage = document.querySelector('.to-video-player');
const search_dropdown = document.querySelector('.search-dropdown');
const sing_up = document.getElementById('btn-sing-up');
const login = document.getElementById('btn-login');
const form_login = document.querySelector('.login-form');
const btnPlay = document.querySelector('.main-video button');
const mainVideo = document.querySelector('.main-video video');
const eventsBtns = document.querySelectorAll('.events-btn');
const newsDetails = document.querySelectorAll('.to-news-details');
const news = document.querySelector('.to-news');
const accordions = document.querySelectorAll('.accordion');

const cart = document.querySelector('#cart');
const close_cart = document.querySelector('#close_cart');
const overlay = document.querySelector('#overlay');
const menu_cart = document.querySelector('.side-menu-cart');

const quantity = document.querySelectorAll('.cart-item_quantity');

const vybe_select = document.getElementById('vybe-selct-1');

const cartPage = document.querySelector('.to-cart');
const information = document.querySelector('.to-information');
const shipping = document.querySelector('.to-shipping');
const payment = document.querySelector('.to-payment');
const success = document.querySelector('.to-success');

expend_more.addEventListener('click', () => {
  if (header_nav.classList.contains('open')) {
    header_nav.classList.toggle('open');

    body.classList.toggle('overflow-burger');
    html.classList.toggle('overflow-burger');
  }

  expend_more.classList.toggle('open');
  shop_dropdown.classList.toggle('open');

  body.classList.toggle('overflow-burger');
  html.classList.toggle('overflow-burger');
});

burger.addEventListener('click', () => {
  if (expend_more.classList.contains('open')) {
    expend_more.classList.toggle('open');
    shop_dropdown.classList.toggle('open');
    body.classList.toggle('overflow-burger');
    html.classList.toggle('overflow-burger');
  }

  header_nav.classList.toggle('open');

  body.classList.toggle('overflow-burger');
  html.classList.toggle('overflow-burger');
});

search.addEventListener('click', () => {
  if (expend_more.classList.contains('open')) {
    expend_more.classList.toggle('open');
    shop_dropdown.classList.toggle('open');

    body.classList.toggle('overflow-burger');
    html.classList.toggle('overflow-burger');
  }

  if (header_nav.classList.contains('open')) {
    header_nav.classList.toggle('open');

    body.classList.toggle('overflow-burger');
    html.classList.toggle('overflow-burger');
  }

  search_dropdown.classList.toggle('open');

  body.classList.toggle('overflow-burger');
  html.classList.toggle('overflow-burger');
});

search_close.addEventListener('click', () => {
  search_dropdown.classList.remove('open');

  body.classList.toggle('overflow-burger');
  html.classList.toggle('overflow-burger');
});

sing_up?.addEventListener('click', () => {
  window.location.href = 'create.html';
});

login?.addEventListener('click', () => {
  window.location.href = 'account-dashboard.html';
});

form_login?.addEventListener('submit', (e) => {
  e.preventDefault();
});

eventsBtns?.forEach((btn) =>
  btn?.addEventListener('click', () => (window.location.href = 'details.html'))
);

dungeonLanding?.forEach((el) => {
  el.addEventListener('click', () => {
    window.location.href = 'dungeon-landing.html';
  });
});

videoPlayerPage?.addEventListener('click', () => {
  window.location.href = 'video-player.html';
});

btnPlay?.addEventListener('click', () => {
  mainVideo.paused ? mainVideo.play() : mainVideo.pause();
});

newsDetails?.forEach((el) => {
  el.addEventListener('click', () => {
    window.location.href = 'news-details.html';
  });
});

news?.addEventListener('click', () => {
  window.location.href = 'news.html';
});

accordions?.forEach((accordion) => {
  const labelBlock = accordion.querySelector('.accordion-label_block');
  const content = accordion.querySelector('.content');
  const plusIcon = accordion.querySelector('.plus');
  const minusIcon = accordion.querySelector('.minus');

  labelBlock.addEventListener('click', () => {
    accordion.classList.toggle('active');

    if (accordion.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'inline-block';
    } else {
      content.style.maxHeight = '0';
      plusIcon.style.display = 'inline-block';
      minusIcon.style.display = 'none';
    }
  });
});

cart?.addEventListener('click', () => {
  overlay.classList.toggle('open');
  setTimeout(() => {
    menu_cart.classList.add('open');
  }, 1);
  body.classList.add('overflow-hidden');
});

close_cart?.addEventListener('click', () => {
  menu_cart.classList.remove('open');

  setTimeout(() => {
    overlay.classList.remove('open');
  }, 300);

  body.classList.remove('overflow-hidden');
});

quantity?.forEach((counter) => {
  const minusButton = counter.querySelector('.minus');
  const plusButton = counter.querySelector('.plus');
  const quantityNumber = counter.querySelector('.cart-item_quantity-number');

  minusButton?.addEventListener('click', () => {
    if (quantityNumber.textContent > 1) {
      quantityNumber.textContent--;
    }
  });

  plusButton?.addEventListener('click', () => {
    quantityNumber.textContent++;
  });
});

vybe_select?.addEventListener('click', () => {
  vybe_select.classList.toggle('open');
});

cartPage?.addEventListener('click', () => {
  window.location.href = 'cart/details.html';
});

information?.addEventListener('click', () => {
  window.location.href = 'information.html';
});

shipping?.addEventListener('click', () => {
  window.location.href = 'shipping.html';
});

payment?.addEventListener('click', () => {
  window.location.href = 'payment.html';
});

success?.addEventListener('click', () => {
  window.location.href = 'success.html';
});
