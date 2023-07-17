window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener ('click', function(){
    document.querySelector('#menu').classList.toggle('is-active')
  });

  document.querySelector('#close').addEventListener ('click', function(){
    document.querySelector('#menu').classList.remove('is-active')
  });

  document.querySelector('#search-svg').addEventListener ('click', function(){
    document.querySelector('#form').classList.toggle('form-active')
  });

  document.querySelector('#search-close').addEventListener ('click', function(){
    document.querySelector('#form').classList.remove('form-active')
  });

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  // пагинация
  pagination: {
  el: '.swiper-pagination',
  // type: 'bullets',
  clickable: true,
  },
  // навигация
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
});

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
  btn.classList.remove('tabs-nav__btn--active')});
  e.currentTarget.classList.add('tabs-nav__btn--active');

  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
  tabsBtn.classList.remove('tabs-item--active')});

  document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

$(".accordion").accordion({
  heightStyle: "content",
  active: Boolean,
  collapsible: true
});
})
