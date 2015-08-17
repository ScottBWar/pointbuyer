
$(document).ready(function() {
	MODAL_OPEN = false;

	$('.displayArea').click(function() {
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


	console.log(parseInt(" + 3 "[0]))
		console.log(parseInt(" + 3 "[1]))
			console.log(parseInt(" + 3 "[2]))
				console.log(parseInt(" + 3 "[3]))
					console.log(parseInt(" + 3 "[4]))
    

}); 