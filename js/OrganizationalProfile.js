var $j = jQuery.noConflict();
var url = window.location.href; 

   if(url == "http://34.195.47.189/organizational-profile/"){     
      var OrgProfileData = localStorage.getItem("OrgProfileForm");
     //alert(OrgProfileData);
     if(localStorage.getItem("OrgProfileForm") != "Empty"){ 
          //alert('Org Profile Not Empty');   
       var str = OrgProfileData.replace("{","");
       var res = str.split(",");
       for (i = 0, len = 4, text = ""; i < len; i++) { 
           var splitter = res[i].split(":");
         var name = splitter[0].slice(1, splitter[0].length);
         var value = splitter[1].slice(1, splitter[1].length);
         name = name.substring(0, name.length - 1);
         value = value.substring(0, value.length - 1);
       
      if(name =="ccf_field_IsHQ[]"){
        var chkBox = $j(".ccf-form.ccf-theme-default input:checkbox");
         var IsChecked = value = "1" ? true : false;        
         $j(chkBox).prop("checked", IsChecked);
         $j(chkBox).prop("disabled", true);
        
       }else{
       $j(".ccf-form.ccf-theme-default input[name=" + name + "]").val(value);
         $j(".ccf-form.ccf-theme-default input[name=" + name + "]").prop("disabled",true);
       $j(".ccf-form.ccf-theme-default select[name=" + name + "]").val(value);
          $j(".ccf-form.ccf-theme-default select[name=" + name + "]").prop("disabled",true);
         
       $j(".btn.btn-primary.ccf-submit-button").prop("disabled",true);
       }      
	}//End For Loop      
     
  }//End Get Session Variable
  else{
      //alert('Here2');
    $j('.ccf-form.ccf-theme-default').submit(function() {
    // get all the inputs into an array.
    var $jinputs = $j('.ccf-form.ccf-theme-default :input');
   //alert('Here3');
    // get an associative array of just the values.
    var values = {};
    $jinputs.each(function() {
        values[this.name] = $j(this).val();
    });
       localStorage.setItem("OrgProfileForm", JSON.stringify(values));
       //alert(JSON.stringify(values));

	});
  }


}//End Outer If
