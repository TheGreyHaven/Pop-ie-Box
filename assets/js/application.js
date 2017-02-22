

$(document).ready(function(){
	var currentIndex = 1,
	  items = $('#boxes > div'),
	  itemAmt = items.length;

	function cycleItems() {
	  var item = $('#boxes > div').eq(currentIndex);
	  items.hide();
	  item.css('display','inline-block');
	}

	$('.next').click(function() {
	  currentIndex += 1;
	  if (currentIndex > itemAmt - 1) {
	    currentIndex = 0;
	  }
	  cycleItems();
	});


	$('.prev').click(function() {
	  currentIndex -= 1;
	  if (currentIndex < 0) {
	    currentIndex = itemAmt - 1;
	  }
	  cycleItems();
	});

// color, season and flower type selectors
	// $("#colorList > li").on('click', function(){
	


});


