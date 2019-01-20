
$('document').ready(function(){
  console.log('Welcome To My Site!');
})

let vph = $(window).height();

$('#self-img').height(vph/ 1.2)
$('#iphone').height(vph/ 3)


AOS.init({
  duration: 2000,
});
