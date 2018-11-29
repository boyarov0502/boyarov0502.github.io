$(function(){
	'use strict';
	$('.form').on('submit', function(e){
		e.preventDefault();
		var fd = new FormData( this );
		$.ajax({
			url: 'phpmailer/mail.php',
			type: 'POST',
			contentType: false,
			processData: false,
			data: fd,
			success: function(msg){
				console.log(fd)
			}
		});
	});
});

$('.slider').slick({
  dots: true
});
// Использует jQuery, должен быть загружен после document.ready

$('.switcher').each(function switcherCheck(index) {
    if ($('.switcher').eq(index).find('input').is(":checked")) {
        $(this).addClass('checked');
    }
    else {
        $(this).removeClass('checked');
    }
})
$('.switcher input').click(function () {
    $(this).parent('.switcher').toggleClass('checked');
});
var itemsLength = $('.list').children().length;

if ( itemsLength > 10 && itemsLength < 21 ) {
	$('.list').addClass('list_columns_two');
}
else if ( itemsLength >= 21 ) {
	$('.list').addClass('list_columns_three');
}