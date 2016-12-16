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

//var lgin = $j(".menu-item-34").detach();
//var reg = $j(".menu-item-35").detach();

//$j(lgin).appendTo(".site-header");
//$j(reg).appendTo(".site-header");

//$j(lgin).appendTo('#crumbslist');
//$j(reg).appendTo('#crumbslist');


var clickedEntity = localStorage.getItem("clicked");
                if(clickedEntity != location.pathname.slice(1,location.pathname.length)){               
               
                localStorage.removeItem("LoginStatus");
 }

$j(document).ready(function(){  
   if(qs["company_name"] != null){
if(qs["company_name"] != 'undefined'){
if(qs["empathy_entry_id"] == ""){ 
$j("#btnEmpathyContainer").css("visibility", "visible");
    $j("#btnEmpathy").click(function(e){
 //window.location.href = "/create-establish-empathy/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id='+ qs["empathy_entry_id"];
});
}
else{
$j("#btnEmpathyContainer").detach();
var empathy_entry_id = qs["empathy_entry_id"];
$j('<form action="http://34.195.47.189/create-establish-empathy/" method="post"><button style="width:200px" class="sticky-list-edit submit">EDIT EMPATHY DATA</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+empathy_entry_id+'"></form>').insertBefore('#myLoginModal');
/*$j("#btnEmpathy").click(function(e){
$j("#btnEmpathy").html("EDIT EMPATHY DATA");
 window.location.href = "/create-establish-empathy-view/entry/" + qs["empathy_entry_id"] + "/"
});*/
}
}
}
});



//Function To Navigate to next page
//function navigate() {

   //window.location.href = "/create-establish-empathy/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&mvc_entry_id=" + qs["mvc_entry_id"]
  
//}


