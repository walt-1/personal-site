$('document').ready(() => {
  console.log('Welcome To My Site!');
})

let width = window.innerWidth;

$('window').resize(() => {
  width = window.innerWidth;
})

if (width <= 991) {
  $('.navbar li').click(() => {
    $('.navbar-toggler').click();
  })
}

AOS.init({
  duration: 2000,
});