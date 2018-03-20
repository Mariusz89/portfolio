(function ($) {
    $.fn.ColorPanel = function (options) {
        var panelDiv = this;
		
		$('#cpToggle').click(function(e){
			e.preventDefault();
			 $('ul',panelDiv).slideToggle();
		});
		
        
    };
}(jQuery));

$('#colorPanel').ColorPanel({
	styleSheet: '#cpswitch'
});
	

