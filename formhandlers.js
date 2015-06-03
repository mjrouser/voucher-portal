'use strict';


var remaning = function (){
	var units = $('#units').val();
	var left = $('#leased').val()-units;
	
	if (left < 0){
	       $('#remainder').val(Math.abs(left));
        } else {
        	$('#remainder').val(0);
        }
};


$('#submit').click(function (){
	var units = $('#units').val();
	var left = $('#leased').val()-units;
	
	if (left < 0){
	       $('#remainder').val(Math.abs(left));
        } else {
        	$('#remainder').val(0);
        }
       }
);

$('#load').click(function () {
	$('#leased').val(4);
	$('#thisMonth').val(2228);
	$('#others').val(0);
	$('#lastMonth').val(2228);
	$('#12Month').val(2153);
	$('#yearOver').val(2219);
	$('#remainder').val(function (){
	    var units = $('#units').val();
	    var left = $('#leased').val()-units;
	
	    if (left < 0){
	          $('#remainder').val(Math.abs(left));
           } else {
        	   $('#remainder').val(0);
           }
        });
});


$('#clear').click(function(){
	$('#leased').val('');
	$('#thisMonth').val('');
	$('#others').val('');
	$('#lastMonth').val('');
	$('#12Month').val('');
	$('#yearOver').val('');
	$('#remainder').val('');

});


$('#submitTwo').click(function(){
	var units = $('#unitsTwo').val();
	var left = $('#leasedTwo').val()-units;
	
	if (left < 0){
	       $('#remainderTwo').val(Math.abs(left));
        } else {
        	$('#remainderTwo').val(0);
        }
});

$('#clearTwo').click(function(){
	$('#leasedTwo').val('');
	$('#othersTwo').val('');
	$('#thisMonthTwo').val('');
	$('#remainderTwo').val('');
});


$('#submitThree').click(function(){
	var units = $('#unitsThree').val();
	var left = $('#leasedThree').val()-units;
	
	if (left < 0){
	       $('#remainderThree').val(Math.abs(left));
        } else {
        	$('#remainderThree').val(0);
        }
});

$('#clearThree').click(function(){
	$('#leasedThree').val('');
	$('#othersThree').val('');
	$('#thisMonthThree').val('');
	$('#remainderThree').val('');
});

$('#submitFour').click(function(){
	var units = $('#unitsFour').val();
	var left = $('#leasedFour').val()-units;
	
	if (left < 0){
	       $('#remainderFour').val(Math.abs(left));
        } else {
        	$('#remainderFour').val(0);
        }
});

$('#clearFour').click(function(){
	$('#leasedFour').val('');
	$('#othersFour').val('');
	$('#thisMonthFour').val('');
	$('#remainderFour').val('');
});


$('#submitFive').click(function(){
	var units = $('#unitsFive').val();
	var left = $('#leasedFive').val()-units;
	
	if (left < 0){
	       $('#remainderFive').val(Math.abs(left));
        } else {
        	$('#remainderFive').val(0);
        }
});

$('#clearFive').click(function(){
	$('#leasedFive').val('');
	$('#othersFive').val('');
	$('#thisMonthFive').val('');
	$('#remainderFive').val('');
});


$('.closeall').click(function(){
  $('.panel-collapse.in')
    .collapse('hide');
});
$('.openall').click(function(){
  $('.panel-collapse:not(".in")')
    .collapse('show');
});