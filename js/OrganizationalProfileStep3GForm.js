var $j = jQuery.noConflict();
var url = window.location.href; 

$j(document).ready(function() {

$j( "#input_3_50" ).prop( "disabled", true );
$j( "#input_3_76" ).prop( "disabled", true );
$j( "#choice_3_77_1" ).prop({
  disabled: true
});

$j( "#input_3_50" ).addClass("gf_left_third" );
$j( "#input_3_76" ).addClass("gf_middle_third" );
$j( "#choice_3_77_1" ).addClass("gf_right_third" );;

});
/*
function initialize() { 
            //var e = document.getElementById("ddlViewBy");
	    //var strUser = e.options[e.selectedIndex].value; //This value could go below in the country value section                    
            var options = {
                types: ['(cities)'],
                componentRestrictions: {country: document.getElementById("input_3_75").value}
            };
            var input = document.getElementById('input_3_76');
            var autocomplete = new google.maps.places.Autocomplete(input , options);
	    
        }

        google.maps.event.addDomListener(window, 'load', initialize);
	$j("#input_3_74").attr("onchange", "popHiddenField()");
        $j("#input_3_76").attr("onfocus", "clearField()");        
	

function popHiddenField() {
    var x = document.getElementById("input_3_74").value;
    document.getElementById("input_3_75").value = x;
     clearField();
    initialize();
}

function clearField() {   
    document.getElementById("input_3_76").value = "";  
}


function navigateStep1() {   
    window.location.href = "/organizational-profile/";  
}
*/

function checkAlphanumericChars(str){
	var letters = /^[0-9a-zA-Z]+$/;  
	if(!inputtxt.value.match(letters)){  
		document.form1.text1.focus();  
		return false;  
	}  
}

function checkEmailAddr(str) {
    var atpos = str.indexOf("@");
    var dotpos = str.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=str.length) {
        return false;
    }
}

