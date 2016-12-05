var $j = jQuery.noConflict();
var url = window.location.href;


//var lgin = $j(".menu-item-34").detach();
//var reg = $j(".menu-item-35").detach();

//$j(lgin).appendTo(".site-header");
//$j(reg).appendTo(".site-header");

//$j(lgin).appendTo('#crumbslist');
//$j(reg).appendTo('#crumbslist');

//localStorage.setItem("clicked", "Flushed"); 
var clickedEntity = localStorage.getItem("clicked");
  if(clickedEntity != location.pathname.slice(1,location.pathname.length)){               
               
                localStorage.removeItem("LoginStatus");
    }


$j(document).ready(function(){  
 
var lgn = $j("#myLoginModal").detach();
var rgstr = $j("#abc").detach();
var fpass = $j("#myResetModal").detach();

//$j(lgn).insertBefore("#copyright");
//$j(rgstr).insertBefore("#copyright");

$j("#content").css("margin-bottom", "0");
$j("#content").css("margin-top", "0");

$j("#pagesidebar").prepend(lgn);
$j("#pagesidebar").prepend(rgstr);
$j("#pagesidebar").prepend(fpass);

$j("#content").detach();

$j("#user_password-454").attr("title","Passwords should be 8 characters in length");

    $j("#popup").click(function(e){
      div_show();
    });
   


//Function To Display Registration Form Popup
function div_show() {
  if ($j(".display-name")[0]){
	localStorage.setItem("OrgProfileForm", "Empty");   
        window.location.href = "/organizational-profile/";
      }
      else
      {  
        localStorage.setItem("clicked", "organizational-profile/");
         localStorage.setItem("OrgProfileForm", "Empty");
         var lmodal = document.getElementById('myLoginModal');
         lmodal.style.display = "block";
      }
}

});