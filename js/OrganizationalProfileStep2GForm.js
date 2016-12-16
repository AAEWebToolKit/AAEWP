var $j = jQuery.noConflict();
var url = window.location.href;
 
function getQueryString() { 
  var assoc  = {};
  var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
  var queryString = location.search.substring(1); 
  var keyValues = queryString.split('&'); 

  for(var i in keyValues) { 
    var key = keyValues[i].split('=');
    if (key.length > 1) {
      assoc[decode(key[0])] = decode(key[1]);
    }
  } 

  return assoc; 
}

var qs = getQueryString();

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


function NavigateStep1() {   
    window.location.href = "/organizational-profile/";  
}

   //Populate Data from Org Profile Start Page (organizational-profile)
    //if(url == "http://34.195.47.189/organizational-profile-step2/"){
       var OrgProfileData = localStorage.getItem("OrgProfileForm");
      //alert(OrgProfileData);
       if(localStorage.getItem("OrgProfileForm") !== "Empty"){    
       var str = OrgProfileData.replace("{","");
       var res = str.split(",");
       try{
       for (i = 0, len = res.length, text = ""; i < len; i++) { 
           var splitter = res[i].split(":");
         var name = splitter[0].slice(1, splitter[0].length);
         var value = splitter[1].slice(1, splitter[1].length);
         name = name.substring(0, name.length - 1);
         value = value.substring(0, value.length - 1);         
         var newval = value.replace(/~/g,',');
//alert(name);
switch (name){
 case "input_1":
//Org Name
 $j("#input_2_1").val(newval);
 break;

 case "input_2":
// Country
     $j("#input_2_2").val(newval);
break;
case "input_8":
//Hidden country code
     $j("#input_2_8").val(newval);
 break;
case "input_7":
//City
     $j("#input_2_7").val(newval);
break;
case "input_4.1":
//HeadQuarters
console.log(newval);
var IsChecked = qs["org_hq"] == "Yes, this location is the headquarters for our organization" ? true : false;
if(IsChecked){
  $j("#choice_2_4_1").prop('checked', true);
}
  
break;

}
         //This if statement checks to see if the name in the JSON string has [] which indicates the value is coming from a checkbox
         //if(name == "input_4.1"){
           //var IsChecked = value = "Yes" ? "Yes" : "No";          
          //$j("label[for=" + name.replace(".", "") + "]").html(IsChecked);
         //}else{
		
			//var newval = value.replace(/~/g,',');
			//$j("label[for=" + name + "]").html(newval);
		
           
         //}         
         
       }//For loop
	}//Try
	catch(err){

	}
      }//If statement      
    //}
