 var $j = jQuery.noConflict(); 

function CalculateSig(stringToSign, privateKey){
    //calculate the signature needed for authentication
    var hash = CryptoJS.HmacSHA1(stringToSign, privateKey);

    var base64 = hash.toString(CryptoJS.enc.Base64);
    return encodeURIComponent(base64);
}

//set variables
var d = new Date;
var expiration = 7200; // 1 hour,
var unixtime = parseInt(d.getTime() / 1000);
var future_unixtime = unixtime + expiration;
var publicKey = "293dabb883";
var privateKey = "d6c574f9f4f6a70";

function SetMenuLinks(){
var entry = qs["step1_entry_id"];
//var link = "http://52.87.218.201/create-form-step-3-view/entry/" + qs["step3_entry_id"];


//create signature and url for putting entries
stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
//var put_url = 'http://52.87.218.201/gravityformsapi/entries?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

//create signature and url for first entry
stringToSign = publicKey + ":GET:entries/" + entry + ":" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);

var get_url1 = 'http://52.87.218.201/gravityformsapi/entries/' + entry + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
var errorOccured = "proceed";
$j.get(get_url1, function(data, textStatus)
{
    //get the data from the api for the first entry
    if ( data.status != 200 || ( typeof( data ) != 'object' ) ) {
        //http request failed
        errorOccured = "Yes";
        console.log( 'There was an error attempting to access the API - ' + data.status + ': ' + data.response );
        return;
    }


    entry1 = data.response;
   //console.log('Setting the Navigation Menu');
$j("#menu-item-31").find("a").attr("href", "/map-value-chain/?company_name=" + entry1['1']  + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id='+ entry1['14'] + '&bi_entry_id='+ entry1['18'] + '&cs_entry_id='+ entry1['16'] + '&isCompleted=' + entry1["10"]);
$j("#menu-item-32").find("a").attr("href", "/capture-insights-establish-empathy/?company_name=" + entry1['1']  + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id='+ entry1['14'] + '&bi_entry_id='+ entry1['18'] + '&cs_entry_id='+ entry1['16'] + '&isCompleted=' + entry1["10"]);
$j("#menu-item-33").find("a").attr("href", "/learn-connect/?company_name=" + entry1['1']  + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id='+ entry1['14'] + '&bi_entry_id='+ entry1['18'] + '&cs_entry_id='+ entry1['16'] + '&isCompleted=' + entry1["10"]);

          
           
});

}

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
        localStorage.removeItem("OrgName");
        localStorage.removeItem("attemptType");
    });
    
     //Profile button
   var x = document.getElementsByClassName("ab-item");
var head = document.getElementsByClassName("center");

    $j(x[x.length - 2]).detach();
   var username = document.getElementsByClassName("username");
   var WholeName = document.getElementsByClassName("display-name");
    localStorage.setItem("WholeName", WholeName[0].innerHTML);
var orgname = qs["company_name"];
//console.log(orgname + ' setting in nav file');
if(orgname != 'undefined'){
if(orgname != 'null'){
if(orgname != null){
$j("<h3 id='anchorOrgList' style='margin-bottom:0;margin-top:0'><label id='labelOrgName' style='margin-bottom:0;margin-top:0;margin-left:25%;color:black;font-size:small'></label><a class='ab-item' id='anchorUserProfile' style='font-weight:bold;font-size:small;color:black;margin-bottom:0;margin-top:0;margin-left:35%' href='http://52.87.218.201/user/default/?um_action=edit'>My Account</a><em> | </em><a style='font-weight:bold;color:black;font-size:small;margin-bottom:0;margin-top:0' href='/organization-list/'>Organization List</a></h3>").appendTo(head[0]);//.appendTo('.page_head.hide_mob_headerimg');    
$j("#labelOrgName").html(orgname);
}
else{
$j("<h3 id='anchorOrgList' style='margin-bottom:0;margin-top:0'><label id='labelOrgName' style='margin-bottom:0;margin-top:0;margin-left:25%;color:black;font-size:small'></label><a class='ab-item' id='anchorUserProfile' style='font-weight:bold;font-size:small;color:black;margin-bottom:0;margin-top:0;margin-left:35%' href='http://52.87.218.201/user/default/?um_action=edit'>My Account</a><em> | </em><a style='font-weight:bold;color:black;font-size:small;margin-bottom:0;margin-top:0' href='/organization-list/'>Organization List</a></h3>").appendTo(head[0]);//.appendTo('.page_head.hide_mob_headerimg');    
}
}
else{
$j("<h3 id='anchorOrgList' style='margin-bottom:0;margin-top:0'><label id='labelOrgName' style='margin-bottom:0;margin-top:0;margin-left:25%;color:black;font-size:small'></label><a class='ab-item' id='anchorUserProfile' style='font-weight:bold;font-size:small;color:black;margin-bottom:0;margin-top:0;margin-left:35%' href='http://52.87.218.201/user/default/?um_action=edit'>My Account</a><em> | </em><a style='font-weight:bold;color:black;font-size:small;margin-bottom:0;margin-top:0' href='/organization-list/'>Organization List</a></h3>").appendTo(head[0]);//.appendTo('.page_head.hide_mob_headerimg');    
}
}
else{
$j("<h3 id='anchorOrgList' style='margin-bottom:0;margin-top:0'><label id='labelOrgName' style='margin-bottom:0;margin-top:0;margin-left:25%;color:black;font-size:small'></label><a class='ab-item' id='anchorUserProfile' style='font-weight:bold;font-size:small;color:black;margin-bottom:0;margin-top:0;margin-left:35%' href='http://52.87.218.201/user/default/?um_action=edit'>My Account</a><em> | </em><a style='font-weight:bold;color:black;font-size:small;margin-bottom:0;margin-top:0' href='/organization-list/'>Organization List</a></h3>").appendTo(head[0]);//.appendTo('.page_head.hide_mob_headerimg');    
}
    //$j('.site-header').prepend("<h3 id='anchorOrgList' style='margin-bottom:0'><a class='ab-item' id='anchorUserProfile' style='font-weight:bold;color:black;font-size:large;margin-left:80%;margin-bottom:0' href='http://52.87.218.201/user/default/?um_action=edit'>My Account</a><em> | </em><a style='font-weight:bold;color:black;font-size:large;margin-bottom:0' href='/organization-list/'>Organization List</a></h3>"); 
 //$j("<h3 id='anchorOrgList'><label id='lablelOrgName' style='margin-bottom:0;margin-top:0;margin-left:25%;color:black;font-size:small'>Test Org Name</label><a class='ab-item' id='anchorUserProfile' style='font-weight:bold;font-size:small;color:black;margin-bottom:0;margin-top:0;margin-left:35%' href='http://52.87.218.201/user/default/?um_action=edit'>My Account</a><em> | </em><a style='font-weight:bold;color:black;font-size:small;margin-bottom:0;margin-top:0' href='/organization-list/'>Organization List</a></h3>").appendTo(head[0]);//.appendTo('.page_head.hide_mob_headerimg');    
var y = document.getElementById("anchorUserProfile");

    y.href = y.href.replace("default", username[0].innerHTML);

//style='margin-bottom:0;margin-top:0;margin-left:75%'   
/////////////////////////////////////////////////////////////////This line will insert the Edit Profile link in the Word Press DropDown///////////// 
///////$j("<a class='ab-item' id='anchorUserProfile' href='http://52.87.218.201/user/default'>Edit Profile</a>").appendTo("#wp-admin-bar-edit-profile");
//////////////////////////////////////////////////////////////////////////////////////////////End////////////////////////////////////////    

    
    
    if(clickedEntity != ""){
    if(clickedEntity != null){
    if(clickedEntity != "Flushed"){
      if(clickedEntity != null){
        
     localStorage.setItem("LoginStatus", "True"); 
        var route = localStorage.getItem("clicked");
alert(route);
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
                var type = localStorage.getItem("attemptType");
                if(type != "Registration"){
                if(clickedEntity == location.pathname.slice(1,location.pathname.length)){               
               		var lmodal = document.getElementById('myLoginModal');
                	$j(".tryagain").css("visibility", "visible");                  
                  	lmodal.style.display = "block";
              		}
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
   $j('<h3 style="margin-bottom:0;margin-top:0;color:black" class="menu-item-34"><a style="margin-left:75%;font-weight:bold;font-size:small;color:black;margin-bottom:0" id="anchorRegister" href="#">Sign Up</a><em> | </em><a style="font-weight:bold;font-size:small;color:black;margin-bottom:0" id="anchorLogin" href="#">Login</a></h3>').appendTo(head[0]);//.appendTo('.page_head.hide_mob_headerimg');
  
} 
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////Login Code Ends Here
var randomNumStep2 = Math.floor((Math.random() * 10) + 1);
//console.log(localStorage.getItem("MenuLink"));

if(localStorage.getItem("MenuLink") != null){
var routeparams = localStorage.getItem("MenuLink");
//console.log('Here in Nav Menu');
$j("#menu-item-31").find("a").attr("href", "/map-value-chain/" + routeparams);
$j("#menu-item-32").find("a").attr("href", "/capture-insights-establish-empathy/" + routeparams);
$j("#menu-item-33").find("a").attr("href", "/learn-connect/" + routeparams);

}
else{
//SetMenuLinks();

var isCompleted = "";
 if(qs["step3_entry_id"] != 'undefined'){
if(qs["step3_entry_id"] != null){
if(qs["step3_entry_id"] != 'null'){
isCompleted = 'Complete';
}
}
}
$j("#menu-item-31").find("a").attr("href", "/map-value-chain/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&step2_entry_id=" + randomNumStep2 + '&step3_entry_id=' + qs["step3_entry_id"] + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id='+ qs["empathy_entry_id"] + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"] + '&isCompleted=' + isCompleted);
$j("#menu-item-32").find("a").attr("href", "/capture-insights-establish-empathy/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + '&step3_entry_id=' + qs["step3_entry_id"] + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id='+ qs["empathy_entry_id"]+ '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]+ '&isCompleted=' + isCompleted);
$j("#menu-item-33").find("a").attr("href", "/learn-connect/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + '&step3_entry_id=' + qs["step3_entry_id"] + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id='+ qs["empathy_entry_id"]+ '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]+ '&isCompleted=' + isCompleted);

}   

});