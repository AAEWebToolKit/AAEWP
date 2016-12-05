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
//Uncomment below after the image/content is added in the pagesidebar container like the GetStarted and Map Value Chain pages
/*
var lgn = $j("#myLoginModal").detach();
var rgstr = $j("#abc").detach();
var fpass = $j("#myResetModal").detach();
var econtainer = $j("#btnEmpathyContainer").detach();
var enav = $j("#EmpathyNav").detach();
var placeholder = $j("#placeholder").detach();

$j("#pagesidebar").prepend(lgn);
$j("#pagesidebar").prepend(rgstr);
$j("#pagesidebar").prepend(fpass);
$j("#pagesidebar").prepend(econtainer);
$j("#pagesidebar").prepend(placeholder);
$j("#pagesidebar").prepend(enav);

$j("#content").detach();
*/
  
if(qs["company_name"] != null){
if(qs["company_name"] != 'undefined'){
if(qs["empathy_entry_id"] == ""){ 
$j("#btnEmpathyContainer").css("visibility", "visible");
  $j("#btnEmpathy").click(function(e){
 window.location.href = "/establish-empathy-form/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id='+ qs["empathy_entry_id"] + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
});
}
else{
$j("#btnEmpathyContainer").detach();
$j("#EmpathyNav").detach();
var empathy_entry_id = qs["empathy_entry_id"];
$j('<form action="http://52.87.218.201/establish-empathy-form/" method="post"><button style="width:200px" class="sticky-list-edit submit">EDIT EMPATHY DATA</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+empathy_entry_id+'"></form>').insertBefore('#placeholder');

}
}
}
});



//Function To Navigate to next page
//function navigate() {

   //window.location.href = "/create-establish-empathy/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&mvc_entry_id=" + qs["mvc_entry_id"]
  
//}


