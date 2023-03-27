const sidebar = document.querySelector('.sidebar');

const openSide = () => {
  sidebar.classList.add('open');
};
const closeSide = () => {
  sidebar.classList.remove('open');
};

let swiper = new Swiper('.SwiperMe', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disbledonInteraction: false,
  },
});
