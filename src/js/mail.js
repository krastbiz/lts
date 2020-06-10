$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();

		yaCounter50825473.reachGoal('formRequestSubmit', function () {});

		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function(){
			$(this).find('input').val("");
			$("form").trigger("reset");

			$(".popup").hide();
			$(".overlay").hide();
			// $(".overlay-form").hide();
			// $(".overlay-thanks").show();
		});

	});
});