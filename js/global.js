$(document).ready(function () {
	
	/////placeholder for IE
	$('input, textarea').placeholder();
	
	///////////////////////////////////////////////////////////////////////
	//fixed sidebar and header
	///////////////////////////////////////////////////////////////////////
	
	$('.header').width($('.header').parent().width());
	$( window ).resize(function() {
	  $('.header').width($('.header').parent().width());
	});
	
	//detect mobile
	var isDesktop = (function(){
		try {
			document.createEvent("TouchEvent");
		}
		catch(e){
			return true;
		}
		return false;
	})();
	
	//Nav sidebar	
	$('#nav > li > a.active').closest('li').find('ul').show();
	$('#nav > li > a').click(function(){
	  if ($(this).attr('class') != 'active'){
		  $('#nav li ul').slideUp();
		  $(this).next().slideToggle();
		  $('#nav li a').removeClass('active');
		  $(this).addClass('active');
		  
		  $('#nav li a .icoDown').removeClass('animateArrow');
		  $(this).find('.icoDown').addClass('animateArrow');
	  }else if ($(this).attr('class') == 'active'){
		  $('#nav li a').removeClass('active');
		  $('#nav li ul').slideUp();
		  $(this).find('.icoDown').removeClass('animateArrow');
	  }
	});
	
	//tabs Global
	$('.tabs li a').click(function(e){
		e.preventDefault();
		$('.tabs li, .tabsContentGlobal .current').removeClass('current');
		$(this).parent().addClass('current');
		var currentTab = $(this).attr('href');
		$(currentTab).addClass('current');
	});
	
	//tooltip Global
	$('.tooltipText').hover(function(){
			// Hover over code
			var title = $(this).attr('title');
			$(this).data('tipText', title).removeAttr('title');
			$('<p class="tooltipGlobal"></p>')
			.text(title)
			.appendTo($(this))
			.fadeIn('slow');
			
			var widthTooltip = $('.tooltipGlobal').width();
			var widthIcon    = $(this).width();
			var centerTooltip = (widthTooltip/2) - (widthIcon/2);
			console.log(widthTooltip);
			console.log(widthIcon);
			console.log(centerTooltip);
			$('.tooltipGlobal').css('left', - centerTooltip ) ;
			
	}, function() {
			// Hover out code
			$(this).attr('title', $(this).data('tipText'));
			$('.tooltipGlobal').remove();
	});
	
	
	///////////////////////////////////////////////////////////////////////
	//pop up 
	///////////////////////////////////////////////////////////////////////
	
	$('[data-popup-target]').click(function (e) {
		e.preventDefault();
		$('html').addClass('overlay');
		var activePopup = $(this).attr('data-popup-target');
		$(activePopup).addClass('visible animatePopup');
 
	});
 
	$(document).keyup(function (e) {
		if (e.keyCode == 27 && $('html').hasClass('overlay')) {
			clearPopup();
		}
	});
 
	$('.popup-exit').click(function () {
		clearPopup();
	});
 
	$('.popup-overlay').click(function () {
		clearPopup();
	});
 
	function clearPopup() {
		$('.popup.visible').addClass('transitioning').removeClass('visible animatePopup');
		$('html').removeClass('overlay');
 
		setTimeout(function () {
			$('.popup').removeClass('transitioning');
		}, 200);
	}
	
	
	///////////////////////////////////////////////////////////////////////
	//on click dropdownDiv 
	///////////////////////////////////////////////////////////////////////
	var $dropdown = $(".dropdownDiv");
	$(".btnDropdown").click(function(e) {
		e.preventDefault();
		$('body').find('.dropdownDiv').hide().css('opacity','0');
		$thisDropdown = $(this).closest('.dropdown').find('.dropdownDiv');
		var X=$(this).attr('id');
		if(X==1) {
			$thisDropdown.animate({'margin-top': 0 + 'px', opacity: 0});
			$(this).attr('id', '0');
		}
		else {
			$thisDropdown.show();
			$thisDropdown.animate({'margin-top': 10 + 'px', opacity: 1});
			$(this).attr('id', '1');
		}
	});
	
	//Mouse click on sub menu
	$(".dropdownDiv").mouseup(function() {
		return false
	});
	
	//Mouse click on my account link
	$(".btnDropdown").mouseup(function() {
		return false
	});
	
	//Document Click
	$(document).mouseup(function() {
		$('body').find('.dropdownDiv').hide().css('margin-top','0');
		$(".btnDropdown").attr('id', '');
	});
	
	if (isDesktop) {
		
        //slimscroll relate video
        $('.scrollable').slimScroll({
            size: '5px',
            distance: '2px',
            color: "#888888",
            allowPageScroll: true
        });
		//disable scrollbar
		$(".scrollable").bind("mouseover", function () {
			disabler.disable_scrolling();
		});
		$(".scrollable").bind("mouseleave", function () {
			disabler.enable_scrolling();
		});

    }
	
	
  
});