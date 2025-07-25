const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//========== Gallery Slider ==========//
let slider = document.querySelector('.slider');
let list = document.querySelector('.list');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let items = document.querySelectorAll('.list .item');
let count  = items.length;
let active = 0;
let leftTransform = 0;
let width_item;

next.onclick = () => {
  active = active >= count - 1 ? count - 1 : active + 1;
  runCarousel();
}

prev.onclick = () => {
  active = active <= 0 ? active : active - 1;
  runCarousel();
}

function runCarousel() {
  width_item = items[active].offsetWidth;
  prev.style.display = (active == 0) ? 'none' : 'block';
  next.style.display = (active == count - 1) ? 'none' : 'block';

  let old_active = document.querySelector('.item.active');
  if (old_active) old_active.classList.remove('active');
  items[active].classList.add('active');

  leftTransform = width_item * (active - 1) * -1;
  list.style.transform = `translateX(${leftTransform}px)`;
}

window.addEventListener('load', () => {
  runCarousel();
});

window.addEventListener("resize", () => {
  runCarousel();
});
