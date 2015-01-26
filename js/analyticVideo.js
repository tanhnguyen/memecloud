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
	
	
	///////////////View Chart
	var vDataView = [['01/11',100], ['02/11', 9521], ['03/11', 9026], ['04/11', 8498], ['05/11', 6815], ['06/11', 8015], ['07/11', 1215], ['08/11', 4015], ['09/11', 7015], ['10/11', 6815]];
	$("#viewChart").length && $.plot($("#viewChart"), [{
			data: vDataView,
			label: "Lượt xem"
		}], 
		{
		  series: {
			  lines: {
				  show: true,
				  lineWidth: 1,
				  fill: false,
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
		  colors: ["#04c2d8","#04c2d8"],
		  xaxis: {
			  mode: "categories",
			  tickFormatter: function(val, axis) {
				  return val.toLocaleString();
			  }
		  },
		  yaxis: {
			  ticks: 5,
			  tickDecimals: 0
		  },
		  tooltip: true,
		  tooltipOpts: {
			content: "Ngày %x có %y lượt xem",
			defaultTheme: false,
			shifts: {
			  x: 0,
			  y: 20
			}
		  }
		}
	);
	
	///////////////durationChart
	var vDataDuration = [['2%',100.00], ['10%', 95.21], ['16%', 90.26], ['50%', 84.98], ['55%', 68.15], ['60%', 80.15], ['75%', 12.15], ['80%', 40.15], ['87%', 70.15], ['98%', 68.15]];
	$("#durationChart").length && $.plot($("#durationChart"), [{
			data: vDataDuration,
			label: "Tỷ lệ người xem"
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
		  colors: ["#04c2d8","#04c2d8"],
		  xaxis: {
			  mode: "categories",
			  tickFormatter: function(val, axis) {
				  return val.toLocaleString();
			  }
		  },
		  yaxis: {
			  ticks: 5,
			  max: 100,
			  min:0,
			  tickDecimals: 2
		  },
		  tooltip: true,
		  tooltipOpts: {
			content: "Có %y.2% lượt xem được %x thời lượng của video",
			defaultTheme: false,
			shifts: {
				x: -60,
				y: 25
			}
		  }
		}
	);
	
	////////seekChart
	var vDataSeek = [['00:00',100.00], ['00:45', 95.21], ['01:15', 90.26], ['02:25', 84.98], ['03:18', 68.15], ['03:22', 46.15], ['03:50', 79.15], ['04:18', 89.15]];
	
	$("#seekChart").length && $.plot($("#seekChart"), [{
			data: vDataSeek,
			label: "Tỷ lệ người xem"
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
		  colors: ["#04c2d8","#04c2d8"],
		  xaxis: {
			  mode: "categories",
		  },
		  yaxis: {
			  ticks: 5,
			  max: 100,
			  min:0,
			  tickDecimals: 2
		  },
		  tooltip: true,
		  tooltipOpts: {
			content: "Có %y% lượt xem đã xem đoạn này của video",
			defaultTheme: false,
			shifts: {
			  x: 0,
			  y: 20
			}
		  }
		}
	);
	
  ///////////// playbackChart
  var playbackChart = [
    {
      label: "thethao247.vn",
      data: 40
    },    
    {
      label: "meme.vn",
      data: 22
    },
    {
      label: "m.thethao247.vn",
      data: 20
    },
    {
      label: "video.thethao247.vn",
      data: 12
    },
    {
      label: "tinmoi.vn",
      data: 18
    }
  ] 
  //console.log(playbackChart);
  $("#playbackChart").length && $.plot($("#playbackChart"), playbackChart, {
    series: {
      pie: {
		 
        combine: {
              color: "#999",
              threshold: 0.05,
			  radius: 1
            },
        show: true
      }
    },    
    colors: ["#78CD51","#04C2D8","#FFBE41","#e64b3a","#937FC7"],
    legend: {
      show: false
    },
    grid: {
        hoverable: true,
        clickable: false
    },
    tooltip: true,
    tooltipOpts: {
      //content: "%s: %p.0%"
	  content: "Có %y.0 lượt xem tại http://%s",
	  defaultTheme: false,
	  shifts: {
		  x: 20,
		  y: 0
	  }
    }
  });
	
  ///////////// deviceChart
  var deviceChart = [
    {
      label: "Web iOS",
      data: 840
    },    
    {
      label: "Web Android",
      data: 1522
    },
    {
      label: "Web Desktop",
      data: 2220
    }
  ] 
  $("#deviceChart").length && $.plot($("#deviceChart"), deviceChart, {
    series: {
      pie: {
		 
        combine: {
              color: "#999",
              threshold: 0.05,
			  radius: 1
            },
        show: true
      }
    },    
    colors: ["#FFBE41","#e64b3a","#937FC7"],
    legend: {
      show: false
    },
    grid: {
        hoverable: true,
        clickable: false
    },
    tooltip: true,
    tooltipOpts: {
      //content: "%s: %p.0%"
	  content: "Có %y.0 lượt xem trên %s",
	  defaultTheme: false,
	  shifts: {
		  x: 20,
		  y: 0
	  }
    }
  });	
  
  ///////////// sourceChart
  var sourceChart = [
    {
      label: "Không xác định",
      data: 40000
    }    
  ] 
  $("#sourceChart").length && $.plot($("#sourceChart"), sourceChart, {
    series: {
      pie: {
		 
        combine: {
              color: "#999",
              threshold: 0.05,
			  radius: 1
            },
        show: true
      }
    },    
    colors: ["#e64b3a"],
    legend: {
      show: false
    },
    grid: {
        hoverable: true,
        clickable: false
    },
    tooltip: true,
    tooltipOpts: {
	  content: "Có %y.0 lượt xem từ nguồn %s",
	  defaultTheme: false,
	  shifts: {
		  x: 20,
		  y: 0
	  }
    }
  });
  
  ///////////// locationChart
  var locationChart = [
    {
      label: "Không xác định",
      data: 40
    },    
    {
      label: "Hà Nội",
      data: 22
    },
    {
      label: "TP HCM",
      data: 20
    },
    {
      label: "An Giang",
      data: 12
    },
    {
      label: "Đà Nẵng",
      data: 18
    },
	{
      label: "Đắk Lắk",
      data: 40
    },    
    {
      label: "Đồng Nai",
      data: 22
    },
    {
      label: "Lạng Sơn",
      data: 20
    },
    {
      label: "Quảng Nam",
      data: 12
    },
    {
      label: "Quảng Ngãi",
      data: 18
    }
  ] 
  $("#locationChart").length && $.plot($("#locationChart"), locationChart, {
    series: {
      pie: {
		 
        combine: {
              color: "#999",
              threshold: 0.05,
			  radius: 1
            },
        show: true
      }
    },    
    colors: ["#78CD51","#04C2D8","#FFBE41","#e64b3a","#937FC7"],
    legend: {
      show: false
    },
    grid: {
        hoverable: true,
        clickable: false
    },
    tooltip: true,
    tooltipOpts: {
      //content: "%s: %p.0%"
	  content: "Có %y.0 lượt xem tại %s",
	  defaultTheme: false,
	  shifts: {
		  x: 20,
		  y: 0
	  }
    }
  });
  
	
});