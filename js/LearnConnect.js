var $j = jQuery.noConflict();
var url = window.location.href;

//set variables
var d = new Date;
var expiration = 7200; // 1 hour,
var unixtime = parseInt(d.getTime() / 1000);
var future_unixtime = unixtime + expiration;
var publicKey = "293dabb883";
var privateKey = "d6c574f9f4f6a70";

function CalculateSig(stringToSign, privateKey){
    //calculate the signature needed for authentication
    var hash = CryptoJS.HmacSHA1(stringToSign, privateKey);

    var base64 = hash.toString(CryptoJS.enc.Base64);
    return encodeURIComponent(base64);
}



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

$j("#btnAddOrganization").click(function(e){
window.location.href = "/organizational-profile/";

});

$j("#btnViewOrgList").click(function(e){
window.location.href = "/organization-list/";

});

$j("#anchorFollowUp").attr("href", "/learn-connect/follow-up/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

function SetProfileSubmitted(){
var qs = getQueryString();

//create signature and url for putting entries
stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var put_url = 'http://52.87.218.201/gravityformsapi/entries?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

//create signature and url for first entry
stringToSign = publicKey + ":GET:entries/" + qs["step1_entry_id"] + ":" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var get_url4 = 'http://52.87.218.201/gravityformsapi/entries/' + qs["step1_entry_id"] + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

var errorOccured = "proceed";
$j.get(get_url4, function(data, textStatus)
{
    //get the data from the api for the first entry
    if ( data.status != 200 || ( typeof( data ) != 'object' ) ) {
        //http request failed
        errorOccured = true;
        console.log( 'There was an error attempting to access the API - ' + data.status + ': ' + data.response );
        return;
    }


    entry3 = data.response;
    entry3['is_starred'] = 1;
    entry3['19'] = 'Submitted';
    

        var entries = Array();
        entries[0] = entry3;        
        entry_json = JSON.stringify(entries);

        //update the entries
        $j.ajax({
            url: put_url,
            type: 'PUT',
            data: entry_json,
            contentType:'application/json',
            success: function(result) {
		console.log('success');
		},
            error: function(result, textStatus, errorThrown){alert('error ' + errorThrown);}
        });


});

}

var baseURLEntry = location.protocol + '//' + location.host + location.pathname;
if(baseURLEntry.indexOf("http://52.87.218.201/learn-connect/") > -1){
var isSubmitted = localStorage.getItem("Submit");
console.log(isSubmitted);
$j(document).ready(function() {

if ($j(".display-name")[0]){
$j("#btnAddOrganization").css("visibility", "visible");
$j("#btnViewOrgList").css("visibility", "visible");
}
if(isSubmitted == "Yes"){
$j("#InsightsMessage").html('INSIGHTS SUCCESSFULLY SUBMITTED');
SetProfileSubmitted();
localStorage.removeItem("Submit");
}
else{
$j("#InsightsMessage").html('SUBMIT INSIGHTS TO DOWNLOAD YOUR TOOLKIT');
$j("#btnDownloadCSV").detach();
$j("#Message").detach();
$j("#anchorFollowUp").detach();
}
});
}
if(baseURLEntry.indexOf("http://52.87.218.201/learn-connect/follow-up/") > -1){
function validateForm() {

    localStorage.setItem("EmailConfirmed", "Yes");
}

var Confirmed = localStorage.getItem("EmailConfirmed");

if(Confirmed == "Yes")
{
  document.getElementById('myConfirmationPrompt').style.display = "block";
}
var orgspan = document.getElementsByClassName("promptclose")[0];
var confirmationspan = document.getElementsByClassName("promptclose")[1];

$j("#btnEmailUpdates").click(function(e){
document.getElementById('myOrgPrompt').style.display = "block";
});

$j("#btnSubscribe").click(function(e){

document.getElementById('myConfirmationPrompt').style.display = "block";
});

orgspan.onclick = function() {
   document.getElementById('myOrgPrompt').style.display = "none";
}

confirmationspan.onclick = function() {
localStorage.removeItem("EmailConfirmed");
   document.getElementById('ConfirmationPrompt').style.display = "none";
}

$j("#btnCloseModal").click(function(e){
localStorage.removeItem("EmailConfirmed");
document.getElementById('myConfirmationPrompt').style.display = "none";
});

$j("#anchorResources").attr("href", "/learn-connect/resources/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);
}




