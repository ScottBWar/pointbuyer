
$(document).ready(function() {
	MODAL_OPEN = false;
	console.log('document ready and modal is ' + MODAL_OPEN)

	$('.displayArea').click(function() {
		console.log("clicked and modal is " + MODAL_OPEN)
		if(MODAL_OPEN === false){
			window.location = ('#openModal');
		MODAL_OPEN = true;
		$('body').addClass('dark');
		}
		else if(MODAL_OPEN === true){
			window.location = ('#close');
			MODAL_OPEN = false;
			$('body').removeClass('dark');
		}
	});
    

}); 