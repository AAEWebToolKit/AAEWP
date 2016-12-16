var $j = jQuery.noConflict();


//var lgin = $j(".menu-item-34").detach();
//var reg = $j(".menu-item-35").detach();

//$j(lgin).appendTo(".site-header");
//$j(reg).appendTo(".site-header");
//<h1><button id="btnValueChain" style="margin-left: 40%; visibility: hidden;width:200px">ENTER VALUE CHAIN MAPPING DATA</button></h1>
//$j(lgin).appendTo('#crumbslist');
//$j(reg).appendTo('#crumbslist');

var clickedEntity = localStorage.getItem("clicked");
                if(clickedEntity != location.pathname.slice(1,location.pathname.length)){               
               
                localStorage.removeItem("LoginStatus");
              }

$j(document).ready(function(){ 

var lgn = $j("#myLoginModal").detach();
var rgstr = $j("#abc").detach();
var fpass = $j("#myResetModal").detach();
var mvcbutton = $j("#btnValueChain").detach();//This button will be manually placed on the page. So remove this once the page is setup

$j("#pagesidebar").prepend(lgn);
$j("#pagesidebar").prepend(rgstr);
$j("#pagesidebar").prepend(fpass);
$j(mvcbutton).insertBefore(".footer_wrap.layer_wrapper ");//Remove this once the page is setup with image and content
$j("#pagesidebar").css("margin-top", "0");

$j("#content").detach();
/* 
   if(qs["company_name"] != null){
   if(qs["company_name"] != 'undefined'){   
   if(qs["mvc_entry_id"] == ""){
$j("#btnValueChain").css("visibility", "visible");
$j("#btnValueChain").css("float", "none");
$j("#btnValueChain").click(function(e){
window.location.href = "/create-map-value-chain/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&step2_entry_id=" + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&empathy_entry_id='+ qs["empathy_entry_id"];;

});
}
else{
$j("#btnValueChain").detach();
var mvc_entry_id = qs["mvc_entry_id"];
$j('<form action="http://34.195.47.189/create-map-value-chain/" method="post"><button style="margin-left:50%;float:none" class="sticky-list-edit submit main">EDIT VALUE CHAIN MAPPING DATA</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+mvc_entry_id+'"></form>').insertBefore('#footer');//.insertBefore('#myLoginModal');

}
}
else{
$j("#btnValueChain").detach();
}
}
else{
$j("#btnValueChain").detach();
}*/
});

