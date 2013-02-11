
$(document).ready(function() {
  $('div.item').on('click', function(){
		var $selectedItem = $('div.itemSelected');
		$selectedItem.removeClass('itemSelected');
		$selectedItem.addClass('item');
		this.className = 'itemSelected';
	});  
	
	Accordion();
});

function Accordion() {
	$('#accordion ul').hide(); // hide all unordered lists inside the accordion list
	$('#accordion ul:first').show(); //show the first unordered list inside the accordion
	
	$('#accordion li a').on('click',
		function() {
			var checkElement = $(this).next();
			if((checkElement.is('ul')) && (checkElement.is(':visible'))) { //if you click on an unordered list and this list is opened (visible)
				//return false; //nothing happen	s
				$('#accordion ul:visible').slideUp('normal'); // the list that is visible will close (slideUp)
				$('#accordion ul:visible').parent().removeClass('itemSelectedHeader');
				$('#accordion ul:visible').parent().addClass('header');
				return false;
			}
			if((checkElement.is('ul')) && (!checkElement.is(':visible'))) { //if you click on an unordered list and this list is not opened (visible)
				$('#accordion ul:visible').slideUp('normal'); // the list that is visible will close (slideUp)
				$('#accordion ul:visible').parent().removeClass('itemSelectedHeader');
				$('#accordion ul:visible').parent().addClass('header');
				checkElement.slideDown('normal'); //the list you clicked will open (slideDown)
				checkElement.parent().removeClass('header');
				checkElement.parent().addClass('itemSelectedHeader');
				return false;
			}
		}
	);
}