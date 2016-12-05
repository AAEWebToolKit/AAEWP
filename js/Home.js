var $j = jQuery.noConflict();
var url = window.location.href; 


//var lgin = $j(".menu-item-34").detach();
//var reg = $j(".menu-item-35").detach();

//$j(lgin).appendTo(".site-header");
//$j(reg).appendTo(".site-header");

//$j(lgin).appendTo('#crumbslist');
//$j(reg).appendTo('#crumbslist');

///localStorage.setItem("clicked", "Flushed"); 
var clickedEntity = localStorage.getItem("clicked");
                if(clickedEntity != location.pathname.slice(1,location.pathname.length)){               
               
                localStorage.removeItem("LoginStatus");
              }


//Function To Navigater to next page
function navigate() {
   window.location.href = "/get-started"
  
}
