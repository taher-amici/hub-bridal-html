var formStatus = true;
$(document).ready(function() {

    $(document).on('change', '.dress_options_main, .color_option_main, .dress_size_main', function(event) {
        var parent = $(this).parents('.modal:first');
        var val1 = (parent.find('.dress_options_main:checked').length) ? (isNaN(parent.find('.dress_options_main:checked').attr('modify_price')) ? 0 : parent.find('.dress_options_main:checked').attr('modify_price')) : 0;
        var val2 = (parent.find('.color_option_main:checked').length) ? (isNaN(parent.find('.color_option_main:checked').attr('modify_price')) ? 0 : parent.find('.color_option_main:checked').attr('modify_price')) : 0;
        var val3 = (parent.find('.dress_size_main').children('option:selected').length) ? (isNaN(parent.find('.dress_size_main').children('option:selected').attr('modify_price')) ? 0 : parent.find('.dress_size_main').children('option:selected').attr('modify_price')) : 0;

        var num = Number(parent.find('.main-price').attr('price')) + Number(val1) + Number(val2) + Number(val3);
        parent.find('.main-price').text(parent.find('.main-price').attr('symbol') + formatMoney(num, 2, ".", ","));
    });

    $('form.add-to-cart, form.update-cart').validate({
        errorPlacement: function(error, element) {
            if(element.attr("type") == "checkbox" || element.attr("type") == "radio" || element.attr("type") == "select"){
                error.appendTo(element.parents('.form-field:first'));
            } else {
                error.insertAfter(element);
            }
        }
    });

    $(document).on('submit', 'form#contact_us', function(event) {
        if(! $(this).valid()){
            return false;
        }
    });

    $(document).on('submit', 'form.update-cart', function(event) {
        if(! $(this).valid()){
            return false;
        }
    });

    $(document).on('submit', 'form.add-to-cart', function(event) {
        event.preventDefault();
        if(formStatus === false) {
            return false;
        }

        if(! $(this).valid()){
            return false;
        }

        var _this = $(this);
        initAjaxForm(_this);

        $.ajax({
            type: 'POST',
            url: _this.attr('action'),
            dataType:"json",
            data: _this.serialize(),
        })
        .done(function(status, data, xhr) {
            $('.cart-block').load('/_includes/cart-box', function(){
                finishAjaxForm();
                $(this).find('.remove-cart-link').each(function(index, el) {
                    $(this).attr('href', $(this).attr('href').replace('__CHANGE__', current_uri));
                });
                $(".sample-modal").modal('hide');
                $(".cart-inner").stop().slideDown();
            });
        })
        .fail(function(data) {
            alert("There is some issue adding product into your cart. Please refresh and try again.")
            finishAjaxForm();
        })
    });

});

function finishAjaxForm()
{
    formStatus = true;
    $('.ajax-loader').removeClass('show');
}

function initAjaxForm(_this)
{
    formStatus = false;
    _this.find('.ajax-loader').addClass('show');
}
function formatMoney(number, decPlaces, decSep, thouSep)
{
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
    decSep = typeof decSep === "undefined" ? "." : decSep;
    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
    var sign = number < 0 ? "-" : "";
    var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
    var j = (j = i.length) > 3 ? j % 3 : 0;

    return sign + (j ? i.substr(0, j) + thouSep : "") + i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) + (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
}
