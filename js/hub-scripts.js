$(document).ready(function () {
	$(document).on('submit', 'form.validation-form', function(event) {
		if(! $(this).valid()){
			return false;
		}
	});

	$(document).on('click','.se_boxes',function(e){
	    if($(this).hasClass('active') === true){
	        $(this).removeClass('active')
	        $(this).find('input[type="checkbox"]').prop('checked',false)
	    }else{
	        $(this).addClass('active')
	        $(this).find('input[type="checkbox"]').prop('checked',true)
	    }
	    selectBoxes();
	});

	if($('.datepicker').length)
	{
		$('.datepicker').datepicker({
		    dateFormat: 'dd-mm-yy'
		});
	}

	$(document).on('keyup', '.title-input', function(event) {
		event.preventDefault();
		$('.slug-input').val(convertToSlug($(this).val()));
	});

});

function selectBoxes()
{
	$('.check_all').each(function(index, el) {
		if($(this).parents('.field-wrapper').find('.d-fields').find('input[type="checkbox"]:not(:checked)').length == 0){
			$(this).prop('checked', true);
		}else{
			$(this).prop('checked', false);
		}
	});
}

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}