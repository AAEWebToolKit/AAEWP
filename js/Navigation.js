 var $j = jQuery.noConflict(); 
$j(document).ready(function() { 
    
    //Handles routing user based on which button they used to login (Login buton or Get Started Button)
     //Using this if block was for demo
    var clickedEntity = localStorage.getItem("clicked");
    //alert(clickedEntity);
    var ls= localStorage.getItem("LoginStatus");
    var url = window.location.href;
   //alert(window.location.pathname);
    if(clickedEntity != ""){
    if(clickedEntity != null){
    if(clickedEntity != "Flushed"){
      if(clickedEntity != null){
        if(ls != "False"){
          if(ls != "null"){
            if(ls != null){
              if(ls !=  ""){
      localStorage.setItem("clicked", "Flushed");
       
      GetStartedFunction(clickedEntity);
              }
            }
          }
        }
      }
    }
    }
    }


///////////////////////////////Login Code//////////////////////////////////////
    var lgnButton = document.getElementsByClassName("um-button");
    $j(lgnButton[0]).click(function(e){
     //alert('Here');
      localStorage.setItem("LoginStatus", "False");      
    });
  if ($j(".display-name")[0]){
    //Logout button
   var z = document.getElementsByClassName("ab-item");
    $j(z[z.length - 1]).click(function(e){
       //localStorage.setItem("OrgProfileForm", null);
      localStorage.removeItem("OrgProfileForm");
      localStorage.removeItem("RegistrationForm");
      localStorage.removeItem("WholeName");
       localStorage.removeItem("clicked");
       localStorage.removeItem("LoginStatus");
	localStorage.removeItem("MenuLink");
	localStorage.removeItem("step1_entry_id");
	localStorage.removeItem("company_name");
    });
    
     //Profile button
   var x = document.getElementsByClassName("ab-item");
var head = document.getElementsByClassName("center");

    $j(x[x.length - 2]).detach();
   var username = document.getElementsByClassName("username");
   var WholeName = document.getElementsByClassName("display-name");
    localStorage.setItem("WholeName", WholeName[0].innerHTML);
    //$j('.site-header').prepend("<h3 id='anchorOrgList' style='margin-bottom:0'><a class='ab-item' id='anchorUserProfile' style='font-weight:bold;color:black;font-size:large;margin-left:80%;margin-bottom:0' href='http://52.87.218.201/user/default/?um_action=edit'>My Account</a><em> | </em><a style='font-weight:bold;color:black;font-size:large;margin-bottom:0' href='/organization-list/'>Organization List</a></h3>"); 
 $j("<h3 id='anchorOrgList' style='margin-bottom:0;margin-top:0;margin-left:75%'><a class='ab-item' id='anchorUserProfile' style='font-weight:bold;font-size:small;color:black;margin-bottom:0;margin-top:0' href='http://52.87.218.201/user/default/?um_action=edit'>My Account</a><em> | </em><a style='font-weight:bold;color:black;font-size:small;margin-bottom:0;margin-top:0' href='/organization-list/'>Organization List</a></h3>").appendTo(head[0]);//.appendTo('.page_head.hide_mob_headerimg');    
var y = document.getElementById("anchorUserProfile");
    y.href = y.href.replace("default", username[0].innerHTML);   
/////////////////////////////////////////////////////////////////This line will insert the Edit Profile link in the Word Press DropDown///////////// 
///////$j("<a class='ab-item' id='anchorUserProfile' href='http://52.87.218.201/user/default'>Edit Profile</a>").appendTo("#wp-admin-bar-edit-profile");
//////////////////////////////////////////////////////////////////////////////////////////////End////////////////////////////////////////    

    
    
    if(clickedEntity != ""){
    if(clickedEntity != null){
    if(clickedEntity != "Flushed"){
      if(clickedEntity != null){
        
     localStorage.setItem("LoginStatus", "True"); 
        var route = localStorage.getItem("clicked");
         localStorage.setItem("clicked", "Flushed");
     GetStartedFunction(route);
      }
    }
    }
    }
   
  }
    else{
      var Stat = localStorage.getItem("LoginStatus");
      //alert(Stat);
      if(Stat != ""){
        if(Stat != null){
          if(Stat != "null"){
            if(Stat == "False"){
               if ($j(".display-name")[0]){
                 localStorage.setItem("LoginStatus", "True");                 
                  
               }
              else
              {
                var clickedEntity = localStorage.getItem("clicked");
                if(clickedEntity == location.pathname.slice(1,location.pathname.length)){               
               var lmodal = document.getElementById('myLoginModal');
                $j(".tryagain").css("visibility", "visible");
                  
                  lmodal.style.display = "block";
              }
                
              }//end else above
              
            }
          }
        }
      }
    }//end else

//////////////////////////////////code from above (right below document start//////////////////
if ($j(".display-name")[0]){  
  $j(".sidebox").detach();//Hides User Information that displays after user logs in (Profile Press & RS Members Plugin)      
} 
else {
  var head = document.getElementsByClassName("center");
   $j('#wpadm-login-form').attr('action', 'http://52.87.218.201/');  
   $j('#anchorOrgList').detach();  
   $j('<h3 style="margin-bottom:0;color:black" class="menu-item-34"><a style="margin-left:75%;font-weight:bold;font-size:small;color:black;margin-bottom:0" id="anchorRegister" href="#">Sign Up</a><em> | </em><a style="font-weight:bold;font-size:small;color:black;margin-bottom:0" id="anchorLogin" href="#">Login</a></h3>').appendTo(head[0]);//.appendTo('.page_head.hide_mob_headerimg');
  
} 
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////Login Code Ends Here
var randomNumStep2 = Math.floor((Math.random() * 10) + 1);
console.log(localStorage.getItem("MenuLink"));

if(localStorage.getItem("MenuLink") != null){
var routeparams = localStorage.getItem("MenuLink");
console.log('Here in Nav Menu');
$j("#menu-item-31").find("a").attr("href", "/map-value-chain/" + routeparams);
$j("#menu-item-32").find("a").attr("href", "/capture-insights-establish-empathy/" + routeparams);
$j("#menu-item-33").find("a").attr("href", "/learn-connect/" + routeparams);

}
else{
var isCompleted = "";
 if(qs["step3_entry_id"] != 'undefined'){
if(qs["step3_entry_id"] != null){
if(qs["step3_entry_id"] != 'null'){
isCompleted = 'Complete';
}
}
}
$j("#menu-item-31").find("a").attr("href", "/map-value-chain/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&step2_entry_id=" + randomNumStep2 + '&step3_entry_id=' + qs["step3_entry_id"] + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id='+ qs["empathy_entry_id"] + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"] + '&isCompleted=' + isCompleted);
$j("#menu-item-32").find("a").attr("href", "/capture-insights-establish-empathy/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id='+ qs["empathy_entry_id"]+ '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]+ '&isCompleted=' + isCompleted);
$j("#menu-item-33").find("a").attr("href", "/learn-connect/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id='+ qs["empathy_entry_id"]+ '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]+ '&isCompleted=' + isCompleted);
}   

});