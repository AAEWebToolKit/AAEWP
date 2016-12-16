var $j = jQuery.noConflict();
var url = window.location.href; 

 function initialize() { 
            //var e = document.getElementById("ddlViewBy");
	    //var strUser = e.options[e.selectedIndex].value; //This value could go below in the country value section                    
            var options = {
                types: ['(cities)'],
                componentRestrictions: {country: document.getElementById("input_2_8").value}
            };
            var input = document.getElementById('input_2_7');
            var autocomplete = new google.maps.places.Autocomplete(input , options);
	    
        }

        google.maps.event.addDomListener(window, 'load', initialize);
	$j("#input_2_2").attr("onchange", "popHiddenField()");
    
        $j("#input_2_7").attr("onfocus", "clearField()");
        
	//var WholeName = localStorage.getItem("WholeName");
		//alert(WholeName);
            //document.getElementById("input_2_9").value = WholeName;

//var myList = document.getElementById("OrganizationListView");
//myList.href = myList.href.replace("default", WholeName);

function popHiddenField() {
    var x = document.getElementById("input_2_2").value;
    document.getElementById("input_2_8").value = x;
    clearField();
    initialize();
}

function clearField() {   
    document.getElementById("input_2_7").value = "";  
}



function NavigateStep2() {   
    window.location.href = "/organizational-profile-step2/";  
}

   if(url == "http://34.195.47.189/organizational-profile/"){ 
localStorage.removeItem("MenuLink");
 $j('#gform_2').submit(function() {
    // get all the inputs into an array.
    var $jinputs = $j('#gform_2 :input');
   
    // get an associative array of just the values.
    var values = {};
    $jinputs.each(function() {
	if(this.name == "input_7"){
	var City = $j(this).val();
	values[this.name] = City.replace(/,/g,'~');
	}else{
        values[this.name] = $j(this).val();
	}
    });
       localStorage.setItem("OrgProfileForm", JSON.stringify(values));
       //alert(JSON.stringify(values));

	});
    
      //var OrgProfileData = localStorage.getItem("OrgProfileForm");
     //alert(OrgProfileData);
/*if(localStorage.getItem("OrgProfileForm") != null){
  if(localStorage.getItem("OrgProfileForm") != "null"){
     if(localStorage.getItem("OrgProfileForm") != "Empty"){ 
          //alert('Org Profile Not Empty');   
       var str = OrgProfileData.replace("{","");
       var res = str.split(","); 
      try{     
       for (i = 0, len = res.length, text = ""; i < len; i++) { 
           var splitter = res[i].split(":");
         var name = splitter[0].slice(1, splitter[0].length);
         var value = splitter[1].slice(1, splitter[1].length);
         name = name.substring(0, name.length - 1);
         value = value.substring(0, value.length - 1);
       
      if(name =="input_4.1"){
        var chkBox = $j("#gform_2 input:checkbox");
         var IsChecked = value = "Yes" ? "checked" : "";
         var IsCheckedBool = value = "Yes" ? true : false;
         //$j(chkBox).setAttribute("checked", IsChecked);        
         $j(chkBox).prop("checked", IsCheckedBool);
         $j(chkBox).prop("disabled", true);
        
       }else{
       if(name == "input_7"){
        var newval = value.replace(/~/g,',');                 
       	$j("#gform_2 input[name=" + name + "]").val(newval);
        $j("#gform_2 input[name=" + name + "]").prop("disabled",true);
        $j("#gform_submit_button_2").hide();
	             
        //$j("#gform_submit_button_2").prop("disabled",true);
        //$j("#gform_submit_button_2").detach();
	$j("#gform_save_2_link").hide();
	}
	else{
	$j("#gform_2 input[name=" + name + "]").val(value);
         $j("#gform_2 input[name=" + name + "]").prop("disabled",true);
       	$j("#gform_2 select[name=" + name + "]").val(value);
        $j("#gform_2 select[name=" + name + "]").prop("disabled",true);
        $j("#gform_submit_button_2").hide();
	
	//$j("#gform_submit_button_2").prop("disabled",true);
        //$j("#gform_submit_button_2").detach();
	$j("#gform_save_2_link").hide();

	}
       }
            
	}//End For Loop  
        }
        catch(err){
       }
       finally{
      
    }//Try Catch Finally ends
  $j("#orgprofilewrapper").after('<button style="margin-left:25%" type="button" onclick="NavigateStep2()">Step 2</button>');
     //$j("#gform_wrapper_2").after('<button type="button" onclick="NavigateStep2()">Step 2</button>'); 
  }
}//End Get Session Variable
  else{
   
    $j('#gform_2').submit(function() {
    // get all the inputs into an array.
    var $jinputs = $j('#gform_2 :input');
   
    // get an associative array of just the values.
    var values = {};
    $jinputs.each(function() {
	if(this.name == "input_7"){
	var City = $j(this).val();
	values[this.name] = City.replace(/,/g,'~');
	}else{
        values[this.name] = $j(this).val();
	}
    });
       localStorage.setItem("OrgProfileForm", JSON.stringify(values));
       //alert(JSON.stringify(values));

	});
  }
}
else{
   
    $j('#gform_2').submit(function() {
    // get all the inputs into an array.
    var $jinputs = $j('#gform_2 :input');
   
    // get an associative array of just the values.
    var values = {};
    $jinputs.each(function() {
	if(this.name == "input_7"){
	var City = $j(this).val();
	values[this.name] = City.replace(/,/g,'~');
	}else{
        values[this.name] = $j(this).val();
	}
    });
       localStorage.setItem("OrgProfileForm", JSON.stringify(values));
       //alert(JSON.stringify(values));

	});
  }*/

}//End Outer If


