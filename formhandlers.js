'use strict';

$('#submit').click(function(){
	var units = $('#units').val();
	var left = $('#leased').val()-units;
	
	if (left < 0){
	       $('#remainder').val(Math.abs(left));
        } else {
        	$('#remainder').val(0);
        }
});

$('#clear').click(function(){
	$('#leased').val('');
	$('#others').val('');
	$('#thisMonth').val('');
	$('#remainder').val('');
});




//-$("#")

