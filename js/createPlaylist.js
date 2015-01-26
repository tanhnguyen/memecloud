$(document).ready(function () {

	//call link input
	$('.btnLinkVideo').click(function(){
		
		var X=$(this).attr('id');
		if(X==1) {
			$('.enterLinkVideo').stop().fadeOut();
			$(this).attr('id', '0');
		}
		else {
			$('.enterLinkVideo').stop().fadeIn();
			$(this).attr('id', '1');
		}	
	});
	
	//multiselect
	$('.selectSection').SumoSelect({
		placeholder: 'Sắp xếp tự động',
		csvDispCount: 4,	
	});
	
});

$(function() {
	//////sortable
	$( ".sortable" ).sortable({
      placeholder: "highlight"
    });
	
	/////////////Search suggest
	var itemsVideo = [
	  {
		value: "Lệ rơi cover chắc ai đó sẽ về",
		thumb: "img1.jpg",
		title: "Lệ rơi cover chắc ai đó sẽ về",
		date: "21/11/2014",
		uploader: "Thể thao 24/7"
	  },
	  {
		value: "Mãi mãi là niềm đau - Mỹ Lệ",
		thumb: "img2.jpg",
		title: "Mãi mãi là niềm đau - Mỹ Lệ",
		date: "21/11/2014",
		uploader: "GIT"
	  },
	  {
		value: "Bình minh tình yêu - Lý Hải - Hoàng Châu",
		thumb: "img3.jpg",
		title: "Bình minh tình yêu - Lý Hải - Hoàng Châu",
		date: "21/11/2014",
		uploader: "Lý Hải Pro"
	  },
	  {
		value: "Lệ rơi cover chắc ai đó sẽ về",
		thumb: "img4.jpg",
		title: "Lệ rơi cover chắc ai đó sẽ về",
		date: "21/11/2014",
		uploader: "Thể thao 24/7"
	  },
	  {
		value: "Mãi mãi là niềm đau - Mỹ Lệ",
		thumb: "img5.jpg",
		title: "Mãi mãi là niềm đau - Mỹ Lệ",
		date: "21/11/2014",
		uploader: "GIT"
	  },
	  {
		value: "Bình minh tình yêu - Lý Hải - Hoàng Châu",
		thumb: "img6.jpg",
		title: "Bình minh tình yêu - Lý Hải - Hoàng Châu",
		date: "21/11/2014",
		uploader: "Lý Hải Pro"
	  },
	  {
		value: "Lệ rơi cover chắc ai đó sẽ về",
		thumb: "img7.jpg",
		title: "Lệ rơi cover chắc ai đó sẽ về",
		date: "21/11/2014",
		uploader: "Thể thao 24/7"
	  },
	  {
		value: "Mãi mãi là niềm đau - Mỹ Lệ",
		thumb: "img8.jpg",
		title: "Mãi mãi là niềm đau - Mỹ Lệ",
		date: "21/11/2014",
		uploader: "GIT"
	  },
	  {
		value: "Bình minh tình yêu - Lý Hải - Hoàng Châu",
		thumb: "img9.jpg",
		title: "Bình minh tình yêu - Lý Hải - Hoàng Châu",
		date: "21/11/2014",
		uploader: "Lý Hải Pro"
	  }
	  
	];
  
	$( "#itemsVideo" ).autocomplete({
	  minLength: 2,
	  source: itemsVideo,
	  open: function( event, ui ) {
		$('.suggestList').slimScroll({
			height: '300px'
		});
		
	   
	  },
	  close: function( event, ui ) {
		  
		$('.wSearchSuggest').find('.slimScrollDiv').remove();
	  },
	  select: function( event, ui ) {
		  console.log(ui.item.title);
		  // add the selected item
	  
		  return false;
		}
	}).autocomplete( "instance" )._renderItem = function( ul, item ) {
		console.log(this);
		$('.wSearchSuggest').find('.slimScrollDiv').remove();
		ul.appendTo($('.wSearchSuggest'));
		ul.attr('class','suggestList');
		return $( "<li>" )
			.append("<img src='images/" + item.thumb + "' />")
			.append( "<a href='#' class='titleSuggest'>" + item.title + "</a>" )
			.append( "<a href='#' class='uploaderSuggest'>" + item.uploader + "</a>" )
			.appendTo( ul );
	  
			
	};
  
});

