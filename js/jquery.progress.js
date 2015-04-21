(function ( $ ) {
	$.fn.progress = function(percentage) {
		this.each(function() {
			if ($( this ).find('.circle').length < 1) {
				$(this).html('<div class="circle"><div class="mask full"><div class="fill"></div></div><div class="mask"><div class="fill"></div><div class="fill fix"></div></div><div class="shadow"></div></div><div class="inner-circle"><div class="progress-text">0%</div></div>');
			}
		});

		if (percentage > 100) {
			percentage = 100;
		}
		else if (typeof percentage === 'undefined'|| percentage < 0) {
			percentage = 0;
		}

		var current_progress = (percentage*1.8) + 'deg';
		var current_double_progress = (percentage*3.6) + 'deg';

		this.each(function() {
			$( this ).find(".progress-text:first").text(percentage + '%');

			$( this ).find(".mask.full, .fill").animate({transform: 'rotate(' + current_progress + ')'});
			$( this ).find(".fill.fix").animate({transform: 'rotate(' + current_double_progress + ')'});
		});

		return this;
	};
}( jQuery ));
