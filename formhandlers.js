'use strict';

$('#submit').click(function(){
	var left = $('#leased').val()-$('#units').val();
	
	$('#remainder').val(left);
});




//-$("#")

