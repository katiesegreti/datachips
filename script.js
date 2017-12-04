$(document).ready(function() {


  /* $('.banner').mouseenter(function() {
       $(this).animate({
           height: '+=85px'
       }),
       $(".btn").css('display', 'inline-block')
       //$(".btn").animate({
         //  height: '+=10px'
       //}),
       //$(".btn").css("color","#ffff1a")
   });

   $('.banner').mouseleave(function() {
       $(this).animate({
           height: '-=85px'
       }),
       $(".btn").css('display', 'none')
       //$(".btn").animate({
        //   height: '-=10px'
      // }),
       //$(".btn").css("color","#E1F1EF")
   }); */
//enlarge image
   


   $('.the50s').mouseenter(function() {
   		$('.fifties').addClass('highlight');
   	});
   	$('.the60s').mouseenter(function() {
   		$('.sixties').addClass('highlight');
   	});
   	$('.the70s').mouseenter(function() {
   		$('.seventies').addClass('highlight');
   	});
   	$('.the80s').mouseenter(function() {
   		$('.eighties').addClass('highlight');   		
	});
   	$('.the90s').mouseenter(function() {
   		$('.nineties').addClass('highlight');
   });
   	$('.the00s').mouseenter(function() {
   		$('.zeros').addClass('highlight');
   	});
   	$('.the10s').mouseenter(function() {
   		$('.teens').addClass('highlight'); 
   	});
   	$('.tvlist li').mouseleave(function() {
   		$('.shows li').removeClass('highlight');
   	});

   	//filter charts
   	$('.thrones').click(function(e) {
   		e.preventDefault();
   		$('.chartList li').removeClass('active');
   		$(this).addClass('active');
   		$('.section img').addClass('hidden');
   		$('.got').removeClass('hidden');

   	});
   	$('.othertv').click(function(e) {
   		e.preventDefault();
   		$('.chartList li').removeClass('active');
   		$(this).addClass('active');
   		$('.section img').addClass('hidden');
   		$('.tv').removeClass('hidden');
   	});
   	$('.work').click(function(e) {
   		e.preventDefault();
   		$('.chartList li').removeClass('active');
   		$(this).addClass('active');
   		$('.section img').addClass('hidden');
   		$('.assetmgmt').removeClass('hidden');
   	});
   	$('.other').click(function(e) {
   		e.preventDefault();
   		$('.chartList li').removeClass('active');
   		$(this).addClass('active');
   		$('.section img').addClass('hidden');
   		$('.misc').removeClass('hidden');
   	});

   	$('#all').click(function(e) {
   		e.preventDefault();
   		$('.chartList li').removeClass('active');
   		$(this).addClass('active');
   		$('.section img').removeClass('hidden');
   	});
});

