var $j = jQuery.noConflict();
var url = window.location.href; 

function navigateStep1() {   
    window.location.href = "/organizational-profile/";  
}

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

var OrgProfileData = localStorage.getItem("OrgProfileForm");
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
			 
			 //This if statement checks to see if the name in the JSON string has [] which indicates the value is coming from a checkbox
				if(name == "input_4.1"){
					var IsChecked = value = "Yes" ? "Yes" : "No";          
					$j("label[for=" + name.replace(".", "") + "]").html(IsChecked);
				}else{
				//if(name == "input_7"){
					var newval = value.replace(/~/g,',');
					$j("label[for=" + name + "]").html(newval);
			   
				}         
			 
		   }
	}
	catch(err){

	}
}      