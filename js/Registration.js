 var $j = jQuery.noConflict();
 
  $j(document).ready(function() {  

function validateForm(){
var elementExists = document.getElementsByClassName("um-field-error");

    //Check Errors after postback
    if($j(elementExists).length == 0){   

var mailchimp = {};
    mailchimp.dc='us3';
    mailchimp.id='cb403c9a34';
    mailchimp.institute = 'aspeninstitute';
    mailchimp.u ='c348a87e312c77fbe418f9151';
    mailchimp.action = 'subscribe';
    
var url = 'https://' + mailchimp.institute +'.' + mailchimp.dc + '.list-manage.com/' + mailchimp.action +'/post?u=' + mailchimp.u + '&amp;id=' + mailchimp.id + '&EMAIL=' + $j("#user_email-454").val() + '&FNAME=' + $j("#first_name-454").val() + '&LNAME=' + $j("#last_name-454").val();

 $j.post( url, function( data, status ) {
  		//alert(status);
});

} //Check errors after postback complete

}
     var r = $j(".um-form" ).find( "form" )
      $j(r).detach();
      $j(r).attr("id", "registration_form");
    if(r.length == 1){
      $j(".placebo").after($j(r));//inserts registraton form into modal popup container    
         
     //Registration Form submit button
             var fc = $j( "#registration_form" ).children( ".um-row._um_row_1");
          var fcc = $j(fc).children(".um-col-1");
          var fccc= $j( "#registration_form" ).children( ".um-col-alt");
          var fcccc = $j(fccc).children(".um-left.um-half");
         var regbutton = $j(fcccc).children(".um-button"); 
          $j(fcccc).children(".um-button").click(function(e){
			//reCaptchaAPI();
        });         
      //Set onsubmit attribute of registraton form
       $j($j(r)).attr("onsubmit", "return validateForm()");
         
    //Get values on submit for reCaptcha
         $j($j(r)).submit(function() {        
           
    // get all the inputs into an array.
    var $jinputs = $j('#registration_form :input');
   
    // get an associative array of just the values.
    var values = {};
    $jinputs.each(function() {	
	
        values[this.name] = $j(this).val();
	
    });
       localStorage.setItem("RegistrationForm", JSON.stringify(values));
           //alert(JSON.stringify(values));

	});
    ///End reCaptcha response              
         
         $j(fcccc).children(".um-button").val("Accept Terms of Service");        
         $j(fcccc).children(".um-button").prop("disabled",true); //disable button until terms of service is agreed upon
      $j(".um-button").css("background-color","#696969");
        
         $j('<div class="um-col-alt" id="divAcceptTerms" style="width:400px"><div class="um-left um-half" style="width:400px"><input type="checkbox" id="cbox1" value="Accepted"><label for="cbox1" style="width:200px">I agree to the AAE <a href="#"><strong>Terms of Service</strong</a></label></div><br><div class="g-recaptcha" data-sitekey="6LeiRwwUAAAAAB1Jz0bSaWvjBnzI4us-mF0dIr0A"></div></div><br>').insertBefore($j(fccc));
         //$j('<div class="um-col-alt"><div class="um-left um-half"><div class="g-recaptcha" data-sitekey="6LeiRwwUAAAAAB1Jz0bSaWvjBnzI4us-mF0dIr0A"></div></div></div>').insertAfter($j("#divAcceptTerms"));
         //$j('<div class="um-field um-field-first_name um-field-text"><div class="um-field-area"><input type="checkbox" id="cbox1" value="Accepted"><label for="cbox1">I agree to the AAE <a href="#"><strong>Terms of Service</strong</a></label></div></div>').appendTo($j(fcc));
         //$j('<div class="um-field um-field-first_name um-field-text"><div class="um-field-area"><div class="g-recaptcha" data-sitekey="6LeiRwwUAAAAAB1Jz0bSaWvjBnzI4us-mF0dIr0A"></div></div></div>').appendTo($j(fcc));
         
         //$j('#confirm_user_password-454').remove();
         //$j('label[for=confirm_user_password-454]').remove();
         //$j('div[data-key=confirm_user_password]').remove();
         $j('.um-right.um-half').remove();
        
      $j("#cbox1").change(function() {
         if(this.checked) {
            $j(fcccc).children(".um-button").prop("disabled",false); //enable button terms of service because agreed upon
            $j(fcccc).children(".um-button").prop("enabled",true); //enable button terms of service because agreed upon
           $j(fcccc).children(".um-button").css("background-color","#0066ff");
            $j(fcccc).children(".um-button").val("SUBMIT");
           $j(fcccc).children(".um-button").click(function() {
validateForm();    
});
         }
         else{
             $j(fcccc).children(".um-button").prop("disabled",true);
            $j(fcccc).children(".um-button").css("background-color","#696969");
             $j(fcccc).children(".um-button").val("Accept Terms of Service");
         }
      }); 
}////If statement ends here
});