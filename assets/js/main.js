
$.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCOID-HopBt5NlfrER3z0cjQ6FHjSVssBM', () => {
	var image = {
        url: 'assets/images/icons/marker.png',
        scaledSize: new google.maps.Size(60, 60),
    };
	var uluru = {lat: 13.268309, lng: 123.786880,};
	var map = new google.maps.Map(
		document.getElementById('googleMap'), {zoom: 15, center: uluru}
	);
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: image,
		animation: google.maps.Animation.BOUNCE
	});
})

$(document).ready(function() {
	$("html").niceScroll({
	 	cursorcolor:"white",
	  	cursorwidth:"8px",
	  	background:"rgba(20,20,20,0.3)",
	  	cursorborder:"1px solid white",
	  	cursorborderradius:'20px',
	});
});

const instance = new Typewriter('#typewriter', {
  	strings: ['Hi There 👋', "I'm Bryan Belardo 😉", "Interested in Working together? 😕", "Let's have a talk. ☕"],
  	autoStart: true,
  	loop: true,
});

function hashScroll(link, e){
  	if (link.hash !== "") {
    	e.preventDefault();
    	var hash = link.hash;
    	$('html, body').animate({
      		scrollTop: $(hash).offset().top
    	}, 1000, function(){
      		window.location.hash = hash;
    	});
  	}
}
$(".navbar a").on('click', function(event) {
    hashScroll(this, event);
});

 $(window).scroll(function() {
    $(".slideanimation").each(function(){
      	var position = $(this).offset().top;

      	var winTop = $(window).scrollTop();
        if (position < winTop + 600) {
          	$(this).addClass("slide_up");
        }
    });
});

$("#myForm").on('submit', function(event) {
    event.preventDefault();
    $('.btn-submit-email').attr('disabled', 'disabled').text('Sending...');
    var formData = $(this).serialize();
    $.ajax({
        type: 'POST',
        url: 'mail.php',
        dataType: "json",
        data: formData,
        success: function(response) {
            if (response.success == true){
              console.log(response.message);
              $('.toast').toast('show');
              $("#myForm").trigger('reset');
              SnackbarSuccess();
            }else{
              console.log('Email Sent error.')
              console.log(response.message);
              SnackbarDanger();
            }
            $('.btn-submit-email').removeAttr('disabled').text('Submit');
        },
        error: function(xhr, status, error){
            console.log(xhr);
            $('.btn-submit-email').removeAttr('disabled').text('Submit');
            SnackbarDanger();
        }
    });
});

function SnackbarSuccess() {
    var x = document.getElementById("snackbar-success");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function SnackbarDanger() {
    var x = document.getElementById("snackbar-danger");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

$('.project_image').on('click', function(){
    var modal = document.getElementById("imageModal");
    var img = document.getElementById("project_image");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    $('.section_nav').attr('hidden', 'hidden');

    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
});

$('.close').on('click', function(){
    var modal = document.getElementById("imageModal");
    $('.section_nav').removeAttr('hidden');
    modal.style.display = "none";
});

// Get the modal

