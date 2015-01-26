$(document).ready(function () {
	
	//embed script
	$('#embedScript').click(function(){
		$(this).select();
	});
	
	//select Embed
	$('.selectEmbed').SumoSelect({
		placeholder: 'Kích thước'
	});
	
	//multiselect
	$('.selectSection').SumoSelect({
		csvDispCount: 4,	
	});
	$('.selectCategory').SumoSelect({
		csvDispCount: 4,	
	});
	
	//datepicker
	$('#dp').datepicker();
	
	//Edit info video inline
	$('#btnEditInfo').click(function(){
		$(this).hide();
		$(this).closest('.infoVideo').find('.hideForm').removeClass('hideForm').addClass('showForm');
		$(this).closest('.col50pBox').addClass('bgEditVideo');
		
		$('.greyText').addClass('mB10');
		$('.titleTxt').hide();
		$('.sectionTxt').hide();
		$('.sectionVideoEdit').addClass('mB10');	
		$('.descEditVideo').hide();
		
		return false;
		
	}); 
	$('#btnEditInfo').hover(function(){
		$('.titleTxt, .sectionTxt, .descEditVideo').css('background-color','#FFF6C9');
	},function(){
		$('.titleTxt, .sectionTxt, .descEditVideo').css('background','none');	
	}); 
	$('#btnCancelEditInfo').click(function(){
		$('#btnEditInfo').show();
		$(this).closest('.infoVideo').find('.showForm').removeClass('showForm').addClass('hideForm');
		$(this).closest('.col50pBox').removeClass('bgEditVideo');
		
		$('.greyText').removeClass('mB10');
		$('.titleTxt').show();
		$('.sectionTxt').show();
		$('.sectionVideoEdit').removeClass('mB10');	
		$('.descEditVideo').show();
		
		
		return false;
		
	});
	
	//Edit calendar video inline
	$('#btnEditCalendar').click(function(){
		$(this).hide();
		$('#dp').removeAttr('disabled');
		$(this).closest('.calendarVideo').find('.hideForm').removeClass('hideForm').addClass('showForm');
		$(this).closest('.col50pBox').addClass('bgEditVideo');
		
		return false;
	});
	$('#btnCancelEditCalendar').click(function(){
		$('#btnEditCalendar').show();
		$('#dp').attr('disabled', 'disabled');
		$(this).closest('.calendarVideo').find('.showForm').removeClass('showForm').addClass('hideForm');
		$(this).closest('.col50pBox').removeClass('bgEditVideo');
		
		return false;
	});
	
	//Edit thumb video inline
	$('#btnEditThumb').click(function(){
		$(this).hide();
		$(this).closest('.thumbVideo').find('.hideForm').removeClass('hideForm').addClass('showForm');
		$(this).closest('.col50pBox').addClass('bgEditVideo');
		$(this).closest('.thumbVideo').find('#selected').removeClass('active');
		$('.thumbItems ul li a').attr('class','').addClass('enabled');
		$('.thumbItems ul li a').attr('onclick','actionEnabled($(this)); return false;');
		
		return false;
	});
	$('#btnCancelEditThumb').click(function(){
		$('#btnEditThumb').show();
		$(this).closest('.thumbVideo').find('.showForm').removeClass('showForm').addClass('hideForm');
		$('.thumbItems').find('li').removeClass('active');
		$(this).closest('.thumbVideo').find('#selected').addClass('active');
		$('.thumbItems ul li a').attr('onclick','');
		$('.thumbItems ul li a').attr('class','disabled');
		$(this).closest('.col50pBox').removeClass('bgEditVideo');
		return false;
	});
	
	$('.disabled').click(function(){
		return false;
	});
	
	//Edit live URL video inline
	$('#btnEditLive').click(function(){
		$(this).hide();
		$(this).closest('.liveVideo').find('.hideForm').removeClass('hideForm').addClass('showForm');
		$(this).closest('.col50pBox').addClass('bgEditVideo');
		
		$('.liveTxt').hide();
		$('.liveVideo').css('padding-right','0px')
		return false;
		
	}); 
	$('#btnCancelEditLive').click(function(){
		$('#btnEditLive').show();
		$(this).closest('.liveVideo').find('.showForm').removeClass('showForm').addClass('hideForm');
		
		$('.liveTxt').show();
		$('.liveVideo').css('padding-right','40px')
		$(this).closest('.col50pBox').removeClass('bgEditVideo');
		
		return false;
		
	});
	
	//Edit relate video inline
	$('#btnEditRelate').click(function(){
		$(this).hide();
		$(this).parent().find('.searchRelate').css('padding-right','0');
		$(this).parent().find('.btnDelRelate').css('right','0');
		$(this).parent().find('.disableAutoSuggest').hide();
		$(this).parent().find('.searchRelate').find('input').removeAttr('disabled');
		
		$(this).closest('.searchSuggestEdit').find('.hideForm').removeClass('hideForm').addClass('showForm');
		$(this).closest('.col50pBox').addClass('bgEditVideo');
		
		return false;
	});
	$('#btnCancelEditRelate').click(function(){
		
		$('#btnEditRelate').show();
		$(this).closest('.searchSuggestEdit').find('.searchRelate').css('padding-right','40px');
		$(this).closest('.searchSuggestEdit').find('.btnDelRelate').css('right','43');
		$(this).closest('.searchSuggestEdit').find('.disableAutoSuggest').show();
		$(this).closest('.searchSuggestEdit').find('.searchRelate').find('input').attr('disabled','disabled');
		
		$(this).closest('.searchSuggestEdit').find('.showForm').removeClass('showForm').addClass('hideForm');
		$(this).closest('.col50pBox').removeClass('bgEditVideo');
		
		return false;
	});
	
	//Edit Playlist video inline
	$('#btnEditPlaylist').click(function(){
		$(this).hide();
		$(this).closest('.playlistEdit').find('.hideForm').removeClass('hideForm').addClass('showForm');
		$(this).closest('.playlistEdit').find('.disabledPL').removeClass('disabledPL btnDefault').addClass('cyan');
		$(this).closest('.col50pBox').addClass('bgEditVideo');
		
		return false;	
	});
	$('#btnCancelEditPlaylist').click(function(){
		$('#btnEditPlaylist').show();	
		$(this).closest('.playlistEdit').find('.showForm').removeClass('showForm').addClass('hideForm');
		$(this).closest('.playlistEdit').find('.cyan').removeClass('cyan').addClass('disabledPL btnDefault');
		$(this).closest('.col50pBox').removeClass('bgEditVideo');
		
		return false;
	});
	
});


//call btn enable thumb
function actionEnabled(obj){
	$('.thumbItems').find('li').removeClass('active');
	obj.parent().addClass('active');
}

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
	
	///////////////Flot Chart
	var d3 = [];
	for (var i = 1; i <= 10; i += 1) {
	  d3.push([i, parseInt((Math.floor(Math.random() * (1 + 1000 - 10))) + 10)]);
	}
	$("#flot-chart").length && $.plot($("#flot-chart"), [{
			data: d3,
			label: "Page Views"
		}], 
		{
		  series: {
			  lines: {
				  show: true,
				  lineWidth: 1,
				  fill: true,
				  fillColor: {
					  colors: [{
						  opacity: 0.3
					  }, {
						  opacity: 0.3
					  }]
				  }
			  },
			  points: {
				  show: true
			  },
			  shadowSize: 2
		  },
		  grid: {
			  hoverable: true,
			  clickable: true,
			  tickColor: "#f0f0f0",
			  borderWidth: 0
		  },
		  colors: ["#1bb399","#177bbb"],
		  xaxis: {
			  ticks: 15,
			  tickDecimals: 0
		  },
		  yaxis: {
			  ticks: 10,
			  tickDecimals: 0
		  },
		  tooltip: true,
		  tooltipOpts: {
			content: "Ngày %x.1 có %y.4 lượt xem",
			defaultTheme: false,
			shifts: {
			  x: 0,
			  y: 20
			}
		  }
		}
	);

	
	
	
	
  
});