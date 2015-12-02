

function toggleMobileNav(){
    $('nav, .mobile-nav').toggleClass('open');
}

$(document).ready(function(){
    $('.mobile-nav').click(toggleMobileNav);
});

// initialise the slick script
$(document).ready(function(){
  $('.shootsgallery').slick({
  	// setting-name: setting-value
<<<<<<< HEAD
  	// adaptiveHeight: false
=======
	// variableWidth: true  	
>>>>>>> gh-pages

});
});

// initialise the slick script for home page
$(document).ready(function(){
  $('.homegallery').slick({
  	// setting-name: setting-value
  	autoplay: true,
  	autoplaySpeed: 2000,
  	dots: true,
  	infinite: true,
  	speed: 500,
  	fade: true,
  	cssEase: 'linear'
});
});
	

<<<<<<< HEAD
// image slider

// var images=["images/events/_D3S0956.jpg","images/Events/_D3S0984.jpg","images/Events/_DSC0969.jpg","images/Events/_DSC1048.jpg","images/Events/_DSC2531.jpg","images/Events/_DSC2947.jpg","images/Events/_DSC6620.jpg", "images/Events/_DSC6620.jpg", "images/Events/_DSC6780.jpg","images/Events/_DSC9264.jpg"];
// var i=0;

// var motorsportimages=["images/Motorsport/_D3S0984.jpg", "images/Motorsport/_DSC1270.jpg","images/Motorsport/_DSC4255.jpg","images/Motorsport/_DSC9896.jpg","images/Motorsport/_DSC8138.jpg","images/Motorsport/_DSC9646.jpg","images/Motorsport/_DSC9896.jpg"]
// var peopleimages=["images/People/_DSC0379.jpg","images/People/_DSC2589.jpg","images/People/_DSC2633.jpg","images/People/_DSC3513.jpg","images/People/_DSC3809.jpg","images/People/_DSC5345.jpg","images/People/_DSC6107.jpg","images/People/Rob Hall.jpg"]

// function nextImage(){
    // if(i+1<images.length){
    //     changeImage(i++);
    // }
    //Shorthand

//     if(){

//     }

//     i+1<images.length ? changeImage(i++):0;
// }


// function previousImage(){
//     if(i>0){
//         changeImage(i--);
//     }
    //Shorthand
    //i>0 ? changeImage(--i):0;
// }


// function changeImage(){
//     $(".image-container > img").attr("src",images[i]);
// }

// how do I get multiple events?
// how do I get give alt tags for each one?

// when a button is clicked to the next or previous function
// $(document).ready(function(){

//     $(".buttons-wrapper .btn[value='Next']").on("click",nextImage);
//     $(".buttons-wrapper .btn[value='Prev']").on("click",previousImage);

// });


// $('.image-container').each(function (idx, item) {
//    var carouselId = "carousel" + idx;
//    this.id = carouselId;


//    $(this).slick({
//        slide: "#" + carouselId +" .image-item",
//        appendArrows: "#" + carouselId + " .prev_next",
//        prevArrow: '<a>Previous</a>',
//        nextArrow: '<a>Next</a>'
//    });
// });
=======
>>>>>>> gh-pages
