$(document).ready(function () {
	
	//call range Time
	$('.btnPickTime').click(function(){
			
		var X=$(this).attr('id');
		if(X==1) {
			$('.wRangeTime').animate({
				height: 0
			});
			$('.btnPickTime i').removeClass('animateArrow');
			$(this).attr('id', '0');
		}
		else {
			$('.wRangeTime').animate({
				height: 146
			});
			$('.btnPickTime i').addClass('animateArrow');
			$(this).attr('id', '1');
		}
	});
	
	//datepicker
	$('#dp, #dp1').datepicker();
	
	
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