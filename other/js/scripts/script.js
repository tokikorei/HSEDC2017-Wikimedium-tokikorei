$(document).ready(function(){
	var $header = $('.header');

	$('.header-mobileButton').on('click', function(){
		$('.header-mobileMenu').addClass('isOpened');
	});

	$('.header-cross').on('click', function(){
		$('.header-mobileMenu').removeClass('isOpened');
	});

	$(window).on('scroll', function(){
		if ((window.scrollY > 500) && !$header.hasClass('isClosed')) {
			$header.addClass('isClosed');
		} else if ((window.scrollY <= 500) && $header.hasClass('isClosed')) {
			$header.removeClass('isClosed');
		}
	});

	$('.switcher-column').on('click', function(){
		var id = $(this).data("id");

		$('.switcher-column').removeClass('isActive');
		$(this).addClass('isActive');

		$(".content").removeClass("isActive");
		$(".content[data-id='" + id + "']").addClass("isActive"); //[data-id='" + id + "'] склеивание строчек

	});


	// var sum =0;
	//  for(var i = 1; i < 1000; i++) {
	// 	if ((i % 3 == 0) || (i % 5 == 0)) {
 //         sum += i
	// 	}
	//  }
	// console.log(sum);

	//var fib = [1, 2],
		//i = 2,
		//last = 3,
		//sum = 2;

	//while (last <= 4e6) {
		//if (last % 2 === 0) {
			//sum += last;
		//}
		//last = fib[i-1] + fib[i-2];
		//fib.push(last);
		//i++;


	//}
	//console.log(fib);
	//console.log(sum);

	});
