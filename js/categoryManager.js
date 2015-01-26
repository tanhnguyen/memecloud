$(document).ready(function () {
	
	function callSelected (id) {
	
		//check list
		$('#checkAll' + id).attr('checked', false);
		$('checkboxRow').attr('checked', false);
		$('#checkAll' + id).click(function(event) {
			if(this.checked) { 
				$(this).closest('table').find('.checkboxRow').each(function() {
					this.checked = true;
				});
			}else{
				$(this).closest('table').find('.checkboxRow').each(function() {
					this.checked = false;
				});         
			}
			
		 });	
		 
		 $('#checkAll' + id).closest('.tableData ').find('.checkboxRow').click(function () {
			 if (this.checked == false) {
				 $(this).closest('.tableData').find('.selectived').hide();
			 }else {
				 $(this).closest('.tableData').find('.selectived').show();
			 }
		 });
		 
		 //call advanceSearch
		 $('#advanceSearch' + id).click(function(e){
			 e.preventDefault();
			 var x=1;
			 x=$(this).attr("id");
			 if(x==1) {
				 $(this).closest('.tableData').find('.fillterADS').animate({height:0});
				 $(this).attr("id","0");
			 }else {
				 $(this).closest('.tableData').find('.fillterADS').animate({height:50});
				 $(this).attr("id","1");
			 }
			 
		});
	}
	callSelected(1);
	
});