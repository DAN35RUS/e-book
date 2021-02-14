$(document).ready(function(){
    // Requires jQuery

$(document).on('click','.js-menu_toggle.closed',function(e){
	e.preventDefault(); $('.list_load, .list_item').stop();
	$(this).removeClass('closed').addClass('opened');

	$('.side_menu').css({ 'left':'0px' });

	var count = $('.list_item').length;
	$('.list_load').slideDown( (count*.6)*100 );
	$('.list_item').each(function(i){
		var thisLI = $(this);
		timeOut = 100*i;
		setTimeout(function(){
			thisLI.css({
				'opacity':'1',
				'margin-left':'0'
			});
		},100*i);
	});
});

$(document).on('click','.js-menu_toggle.opened',function(e){
	e.preventDefault(); $('.list_load, .list_item').stop();
	$(this).removeClass('opened').addClass('closed');

	$('.side_menu').css({ 'left':'-250px' });

	var count = $('.list_item').length;
	$('.list_item').css({
		'opacity':'0',
		'margin-left':'-20px'
	});
	$('.list_load').slideUp(300);
});    
});

// /* begin Scroll Down Button */
// (function() {
//     'use strict';
  
//     var btnScrollDown = document.querySelector('#scroll_down');
  
//     function scrollDown() {
//         var targetDiv = $("#scroll");
//         var height=targetDiv.height();
//        // targetDiv.animate({"scrollTop":height},”slow”); 

    
//    console.log("scrollTop: "+targetDiv.scrollTop());
//    console.log("height: "+targetDiv.height());
//    targetDiv.scrollTop(targetDiv.scrollTop()+targetDiv.height());
   
//     }
  
//     btnScrollDown.addEventListener('click', scrollDown);
//   })();
//   /* end Scroll Down Button */
  
//   /* begin Scroll Up Button */
// (function() {
//     'use strict';
  
//     var btnScrollDown = document.querySelector('#scroll_up');
  
//     function scrollUp() {
//         var targetDiv = $("#scroll");
//         var height=targetDiv.height();
      

    
//    console.log("scrollTop: "+targetDiv.scrollTop());
//    console.log("height: "+targetDiv.height());
//    targetDiv.scrollTop(targetDiv.scrollTop()-targetDiv.height());
   
//     }
  
//     btnScrollDown.addEventListener('click', scrollUp);
//   })();
//   /* end Scroll Up Button */
// function loadPage  (event)  {
    
//     if (event.target.classList.contains("menu-link")){
//     $("#scroll").load(event.target.id+".html")
// }
// };
 
//  document.addEventListener('click', loadPage);  