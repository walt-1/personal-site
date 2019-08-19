$('document').ready(function () {
  console.log('Welcome To My Site!');
})

$('.navbar-collapse').click(() => {
  $('.navbar-toggler').click();
})


AOS.init({
  duration: 2000,
});