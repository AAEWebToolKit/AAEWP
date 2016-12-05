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


$j(document).ready(function(){  
if(qs["company_name"] != null){
if(qs["company_name"] != 'undefined'){
if(qs["bi_entry_id"] == ""){ 
$j("#btnBIContainer").css("visibility", "visible");
$j("#btnBI").click(function(e){
 window.location.href = "/business-insights-form/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id='+ qs["empathy_entry_id"] + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
});
}
else{
$j("#btnBIContainer").detach();
$j("#BINav").detach();
var bi_entry_id = qs["bi_entry_id"];
$j('<form action="http://52.87.218.201/business-insights-form/" method="post"><button style="width:200px" class="sticky-list-edit submit">EDIT BUSINESS INSIGHT DATA</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+bi_entry_id+'"></form>').insertBefore('#placeholder');

}
}
}
});



//Function To Navigate to next page
//function navigate() {

   //window.location.href = "/create-establish-empathy/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&mvc_entry_id=" + qs["mvc_entry_id"]
  
//}


