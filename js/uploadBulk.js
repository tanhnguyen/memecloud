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
		return false;
	});
	
	//Add Tags
	$('#tags, #tags1, #tags2, #tags3').tagsInput({
	   'height':'103px',
	   'width':'100%',
	   'defaultText':'Thêm từ khóa',
	   'placeholderColor' : '#999999'
	});
	//multiselect
	$('.selectSection').SumoSelect({
		placeholder: 'Chọn thể loại',
		csvDispCount: 4,	
	});
	$('.selectCategory').SumoSelect({
		placeholder: 'Chọn chuyên mục',
		csvDispCount: 4,	
	});
	
});

