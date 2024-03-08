$(document).ready(function() {
 $('.menu-toggle').on('click', function(){
    $('.nav').toggleClass('showing');
    $('.nav ul').toggleClass('showing');
 });

 $('.post-wrapper').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2500,
   nextArrow: $('.next'),
   prevArrow: $('.prev'),
 });

 responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 3,
       infinite: true,
       dots: true
     }
   },
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2
     }
   },
   {
     breakpoint: 412,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]

});

const url = 'https://youtube-to-mp4.p.rapidapi.com/url=&title?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6Swd7d6aufQ&title=ACOTAR%20';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'AIzaSyAtahjTr6Dr2IOS1OpKFobaaAS8Y2VmbXI',
		'X-RapidAPI-Host': 'youtube-to-mp4.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}




