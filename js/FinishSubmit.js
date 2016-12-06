    //set variables
    var d = new Date;
    var expiration = 7200; // 1 hour,
    var unixtime = parseInt(d.getTime() / 1000);
    var future_unixtime = unixtime + expiration;
    var publicKey = "293dabb883";
    var privateKey = "d6c574f9f4f6a70";
    var method = "GET";

var CanSubmit = true;


function getQueryString() { 
  var assoc  = {};
  var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
  var queryString = location.search.substring(1); 
  var keyValues = queryString.split('&'); 
 var baseURLEntry = location.protocol + '//' + location.host + location.pathname;
  for(var i in keyValues) { 
    var key = keyValues[i].split('=');
    if (key.length > 1) {
      assoc[decode(key[0])] = decode(key[1]);
    }
  } 

  return assoc; 
} 

function CalculateSig(stringToSign, privateKey){
        //calculate the signature needed for authentication
        var hash = CryptoJS.HmacSHA1(stringToSign, privateKey);
        var base64 = hash.toString(CryptoJS.enc.Base64);
        return encodeURIComponent(base64);
}

function LinkCSandProfileOne(){
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
        errorOccured = "Yes";
        console.log( 'There was an error attempting to access the API - ' + data.status + ': ' + data.response );
        return;
    }

if(errorOccured == "proceed"){
    entry3 = data.response;
    entry3['is_starred'] = 1;
if(entry3['16'] == ""){
    entry3['16'] = qs["cs_entry_id"]; 
}
else if(entry3['16'] == "undefined"){
entry3['16'] = qs["cs_entry_id"]; 
}   
   

        var entries = Array();
        entries[0] = entry3;        
        entry_json = JSON.stringify(entries);

        //update the entries
        $j.ajax({
            url: put_url,
            type: 'PUT',
            data: entry_json,
            contentType:'application/json',
            success: function(result) {console.log('success');},
            error: function(result, textStatus, errorThrown){alert('error ' + errorThrown);}
        });
}
});
}


if(baseURLEntry.indexOf("http://52.87.218.201/finish-submit/") > -1){
$j(document).ready(function() {

var qs = getQueryString();
//var menulinks = '?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&isCompleted=' + qs["isComplete"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id='+ qs["emapthy_entry_id"] + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
//localStorage.setItem("MenuLink", menulinks);

LinkCSandProfileOne();

document.getElementById('myStatusPrompt').style.display = "block";

    var route = "forms/13/entries"; //The number is the id of the gravity form

    stringToSign = publicKey + ":" + method + ":" + route + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var url = 'http://52.87.218.201/gravityformsapi/' + route + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
    var companyname = $j("#input_2_1").val();
    
    var WholeName = localStorage.getItem("WholeName");
    var search = {
        field_filters : [
            {
                key: '25', // this is the id of the hidden field on the gravity form (will be 9 on the real gravity that is already created)
                operator: 'is',
                value: qs["company_name"] // This will be the WholeName variable created when the user logs in
            },
         	{
                key: '23',
                value: qs["step1_entry_id"],//This is OrgProfile Step 1 entry id
                operator: 'is'
            }
        ]
    };

//convert to a JSON string and url encode it so the JSON formatting persists
search = encodeURI(JSON.stringify(search));

//add search to url
url += '&search=' + search;

    $j.get(url, function(data, textStatus)
    {
        //get the data from the api
        if ( data.status != 200 || ( typeof( data ) != 'object' ) ) {
            //http request failed
            document.write( 'There was an error attempting to access the API - ' + data.status + ': ' + data.response );

            return;
        }
        response          = data.response;
        entries           = response.entries; //entries is a collection of Entry objects
        total_count       = response.total_count;

//alert(JSON.stringify(entries) + 'CompanyEntryId=' + qs["entry_id"]);
//alert('CompanyEntryId=' + qs["entry_id"]);
var i = 1;
//Here the isSubmitted value comes from the checkbox on the Establish Empathy form (when the value is selected the submit button becomes visible).
//Other forms are using the API to update the hidden field (Completed). The first is better for forms that don't require routing. The API doesn't have to 
//be called upon to set the form in submitted status. 
if(total_count > 0){
var isSubmitted = "Not Complete";
//alert(JSON.stringify(entries));
$j.each(entries,function(_,obj) {

if(obj.hasOwnProperty("27"))
{
isSubmitted = obj["27"];
}

    var ee = obj.id;
   
if(isSubmitted == "Complete"){
$j("#btnEmpathy").detach();
var empathy_entry_id = qs["empathy_entry_id"];
$j('<form action="http://52.87.218.201/establish-empathy-form/" method="post"><button style="width:200px" class="sticky-list-edit submit">Edit</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+empathy_entry_id+'"></form>').appendTo('.EmpathyButton');
$j("#lblCompleteEE").css("visibility", "visible");
/////////////////////////////////////Replacing with sticky list form button//////////////////////////
/*$j("#btnEmpathy").html('Edit');
$j("#btnEmpathy").click(function() {
    window.location.href = 'http://52.87.218.201/create-establish-empathy-view/entry/' + ee + '/';
});*/
/////////////////////////////////////Replacing with sticky list form button//////////////////////////
}
else{
CanSubmit = false;
$j("#btnEmpathy").html('Start');
$j("#btnEmpathy").click(function() {
    window.location.href = 'http://52.87.218.201/establish-empathy-form/?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
});
}
    
});
}//Total Count
else{
if(qs["isCompleted"] == "Complete"){
$j("#btnEmpathy").html('Start');
$j("#btnEmpathy").click(function() {
window.location.href = 'http://52.87.218.201/etablish-empathy-form/?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];  
});
    
}
else{
$j("#btnEmpathy").html('Start');
var orgspan = document.getElementsByClassName("promptclose")[0];

$j("#btnEmpathy").click(function() {
document.getElementById('myOrgPrompt').style.display = "block";    
});
orgspan.onclick = function() {
   document.getElementById('myOrgPrompt').style.display = "none";
}
   
}
}
});
////////////////////////////////////////////////End Form 13 Empathy Fetch/////////////////////////////////////////////

///////////////////////////////////////////////Begin Form 11 Map Value Chain Fetch//////////////////////////////////////////
    var MVCroute = "forms/11/entries"; //The number is the id of the gravity form
    stringToSign = publicKey + ":" + method + ":" + MVCroute + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    url = 'http://52.87.218.201/gravityformsapi/' + MVCroute + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
       
    var MVCsearch = {
        field_filters : [
            {
                key: '8', // this is the id of the hidden field on the gravity form (will be 9 on the real gravity that is already created)
                operator: 'is',
                value: qs["company_name"] // This will be the WholeName variable created when the user logs in
            },
         	{
                key: '9',
                value: qs["step1_entry_id"],//This is OrgProfile Step 1 entry id
                operator: 'is'
            }
        ]
    };

//convert to a JSON string and url encode it so the JSON formatting persists
MVCsearch = encodeURI(JSON.stringify(MVCsearch));

//add search to url
url += '&search=' + MVCsearch;

    $j.get(url, function(data, textStatus)
    {
        //get the data from the api
        if ( data.status != 200 || ( typeof( data ) != 'object' ) ) {
            //http request failed
            document.write( 'There was an error attempting to access the API - ' + data.status + ': ' + data.response );

            return;
        }
        response          = data.response;
        entries           = response.entries; //entries is a collection of Entry objects
        total_count       = response.total_count;


var isSubmitted = "Not Complete";
if(total_count > 0){
$j.each(entries,function(_,obj) {

if(obj.hasOwnProperty("12"))
{
isSubmitted = obj["12"];
}

    var ee = obj.id;
//if(qs["isCompleted"] == "Complete"){   
if(isSubmitted == "Complete"){
$j("#btnValueChain").detach();
var mvc_entry_id = qs["mvc_entry_id"];
$j('<form action="http://52.87.218.201/create-map-value-chain/" method="post"><button style="width:200px" class="sticky-list-edit submit">Edit</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+mvc_entry_id+'"></form>').appendTo('.ValueChainButton');
$j("#lblCompleteValueChain").css("visibility", "visible");
/////////////////////////////////////Replacing with sticky list form button//////////////////////////
/*$j("#btnValueChain").html('Edit');
$j("#btnValueChain").click(function() {
    window.location.href = 'http://52.87.218.201/create-map-value-chain-view/entry/' + ee + '/';
});*/
/////////////////////////////Replacing with sticky list form button///////////////////////////////////
}// Is the current map value chain complete
else{
CanSubmit = false;
$j("#btnValueChain").html('Start');

$j("#btnValueChain").click(function() {
    window.location.href = 'http://52.87.218.201/create-map-value-chain/?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
});
}    

//}//Check Org Profile Complete

});// jquery Each loop
}//Check Total Count
else{
if(qs["isCompleted"] == "Complete"){
$j("#btnValueChain").html('Start');
$j("#btnValueChain").click(function() {
window.location.href = 'http://52.87.218.201/create-map-value-chain/?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];  
});
    
}
else{
$j("#btnValueChain").html('Start');
var orgspan = document.getElementsByClassName("promptclose")[0];

$j("#btnValueChain").click(function() {
document.getElementById('myOrgPrompt').style.display = "block";    
});
orgspan.onclick = function() {
   document.getElementById('myOrgPrompt').style.display = "none";
}
   
}
}
});//Ajax GET
//////////////////////////////////////////////End Form 11 Map Value Chain Fetch////////////////////////////////////////////

///////////////////////////////////////////////Begin Form 14 Create Solutions Fetch//////////////////////////////////////////
    var CSroute = "forms/14/entries"; //The number is the id of the gravity form
    stringToSign = publicKey + ":" + method + ":" + CSroute + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    url = 'http://52.87.218.201/gravityformsapi/' + CSroute + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
       
    var CSsearch = {
        field_filters : [
            {
                key: '11', // this is the id of the hidden field on the gravity form (will be 9 on the real gravity that is already created)
                operator: 'is',
                value: qs["company_name"] // This will be the WholeName variable created when the user logs in
            },
         	{
                key: '9',
                value: qs["step1_entry_id"],//This is OrgProfile Step 1 entry id
                operator: 'is'
            }
        ]
    };

//convert to a JSON string and url encode it so the JSON formatting persists
CSsearch = encodeURI(JSON.stringify(CSsearch));

//add search to url
url += '&search=' + CSsearch;

    $j.get(url, function(data, textStatus)
    {
        //get the data from the api
        if ( data.status != 200 || ( typeof( data ) != 'object' ) ) {
            //http request failed
            document.write( 'There was an error attempting to access the API - ' + data.status + ': ' + data.response );

            return;
        }
        response          = data.response;
        entries           = response.entries; //entries is a collection of Entry objects
        total_count       = response.total_count;


var isSubmitted = "Not Complete";
if(total_count > 0){
$j.each(entries,function(_,obj) {

if(obj.hasOwnProperty("13"))
{
isSubmitted = obj["13"];
}

    var ee = obj.id;
//if(qs["isCompleted"] == "Complete"){   
if(isSubmitted == "Complete"){
$j("#btnCreateSolutions").detach();
var cs_entry_id = qs["cs_entry_id"];
$j('<form action="http://52.87.218.201/create-solutions-form/" method="post"><button style="width:200px" class="sticky-list-edit submit">Edit</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+cs_entry_id+'"></form>').appendTo('.CreateSolutionsButton');
$j("#lblCompleteCS").css("visibility", "visible");

}// Is the current map value chain complete
else{
CanSubmit = false;
$j("#btnCreateSolutions").html('Start');

$j("#btnCreateSolutions").click(function() {
    window.location.href = 'http://52.87.218.201/create-solutions-form/?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]   + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
});
}    

//}//Check Org Profile Complete

});// jquery Each loop
}//Check Total Count
else{
if(qs["isCompleted"] == "Complete"){
$j("#btnCreateSolutions").html('Start');
$j("#btnCreateSolutions").click(function() {
window.location.href = 'http://52.87.218.201/create-solutions-form/?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]   + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];  
});
    
}
else{
$j("#btnCreateSolutions").html('Start');
var orgspan = document.getElementsByClassName("promptclose")[0];

$j("#btnCreateSolutions").click(function() {
document.getElementById('myOrgPrompt').style.display = "block";    
});
orgspan.onclick = function() {
   document.getElementById('myOrgPrompt').style.display = "none";
}
    
}
}
});//Ajax GET
//////////////////////////////////////////////End Form 14 Create Solutions Fetch////////////////////////////////////////////


///////////////////////////////////////////////Begin Form 12 Business Insights Fetch//////////////////////////////////////////
    var BIroute = "forms/12/entries"; //The number is the id of the gravity form
    stringToSign = publicKey + ":" + method + ":" + BIroute + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    url = 'http://52.87.218.201/gravityformsapi/' + BIroute + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
       
    var BIsearch = {
        field_filters : [
            {
                key: '32', // this is the id of the hidden field on the gravity form (will be 9 on the real gravity that is already created)
                operator: 'is',
                value: qs["company_name"] // This will be the WholeName variable created when the user logs in
            },
         	{
                key: '30',
                value: qs["step1_entry_id"],//This is OrgProfile Step 1 entry id
                operator: 'is'
            }
        ]
    };

//convert to a JSON string and url encode it so the JSON formatting persists
BIsearch = encodeURI(JSON.stringify(BIsearch));

//add search to url
url += '&search=' + BIsearch;

    $j.get(url, function(data, textStatus)
    {
        //get the data from the api
        if ( data.status != 200 || ( typeof( data ) != 'object' ) ) {
            //http request failed
            document.write( 'There was an error attempting to access the API - ' + data.status + ': ' + data.response );

            return;
        }
        response          = data.response;
        entries           = response.entries; //entries is a collection of Entry objects
        total_count       = response.total_count;


var isSubmitted = "Not Complete";
if(total_count > 0){
$j.each(entries,function(_,obj) {

if(obj.hasOwnProperty("34"))
{
isSubmitted = obj["34"];
}

    var ee = obj.id;
//if(qs["isCompleted"] == "Complete"){   
if(isSubmitted == "Complete"){
$j("#btnBusinessInsights").detach();
var bi_entry_id = qs["bi_entry_id"];
$j('<form action="http://52.87.218.201/business-insights-form/" method="post"><button style="width:200px" class="sticky-list-edit submit">Edit</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+bi_entry_id+'"></form>').appendTo('.BusinessInsightsButton');
$j("#lblCompleteBI").css("visibility", "visible");

}// Is the current map value chain complete
else{
CanSubmit = false;
$j("#btnBusinessInsights").html('Start');

$j("#btnBusinessInsights").click(function() {
    window.location.href = 'http://52.87.218.201/business-insights-form/?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
});
}    

//}//Check Org Profile Complete
document.getElementById('myStatusPrompt').style.display = "none";
});// jquery Each loop
}//Check Total Count
else{
document.getElementById('myStatusPrompt').style.display = "none";
if(qs["isCompleted"] == "Complete"){
$j("#btnBusinessInsights").html('Start');
$j("#btnBusinessInsights").click(function() {
window.location.href = 'http://52.87.218.201/business-insights-form/?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];  
});
    
}
else{
$j("#btnBusinessInsights").html('Start');
var orgspan = document.getElementsByClassName("promptclose")[0];

$j("#btnBusinessInsights").click(function() {
document.getElementById('myOrgPrompt').style.display = "block";    
});
orgspan.onclick = function() {
   document.getElementById('myOrgPrompt').style.display = "none";
}
    
}
}
});//Ajax GET
//////////////////////////////////////////////End Form 12 Business Insights Fetch////////////////////////////////////////////
// Click Finish & Submit button
if(qs["isCompleted"] == "Complete"){
if(CanSubmit){
$j("#btnSubmitInsights").click(function() {

var orgspan = document.getElementsByClassName("loginclose")[0];
document.getElementById('mySubmitModal').style.display = "block"; 
orgspan.onclick = function() {
document.getElementById('mySubmitModal').style.display = "none";
}

$j("#btnForwardInsights").click(function() {
localStorage.setItem("Submit", "Yes");
window.location.href = 'http://52.87.218.201/learn-connect/?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];

});

document.getElementById("anchorCancel").onclick = function() {
    document.getElementById('mySubmitModal').style.display = "none";
}


});
}
else{

$j("#btnSubmitInsights").click(function() {
var orgspan = document.getElementsByClassName("promptclose")[0];
document.getElementById('myOrgPrompt').style.display = "block"; 
orgspan.onclick = function() {
   document.getElementById('myOrgPrompt').style.display = "none";
}
});
}
}
else{

$j("#btnSubmitInsights").click(function() {
var orgspan = document.getElementsByClassName("promptclose")[0];
document.getElementById('myOrgPrompt').style.display = "block"; 
orgspan.onclick = function() {
   document.getElementById('myOrgPrompt').style.display = "none";
}
});
}

//Click event of Organization Link
if(qs["isCompleted"] == "Complete"){
$j("#btnOrgProfile").detach();
$j("#lblCompleteOrgProfile").css("visibility", "visible");
var step3_entry_id = qs["step3_entry_id"];
$j('<form action="http://52.87.218.201/organization-profile_step3/" method="post"><button style="width:200px" class="sticky-list-edit submit">Edit</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+step3_entry_id+'"></form>').appendTo('.OrgProfileButton');

}
else{
//var step1_entry_id = qs["step1_entry_id"]; 
$j("#btnOrgProfile").click(function() {
if(qs["step1_entry_id"] != 'undefined'){
window.location.href = "/organization-profile_step3/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id='+ qs["empathy_entry_id"] + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
}
else{
window.location.href = "/organizational-profile/?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id='+ qs["empathy_entry_id"] + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
}
});
//$j('<form action="http://52.87.218.201/organizational-profile/" method="post"><button style="width:200px" class="sticky-list-edit submit">Finish</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+ step1_entry_id +'"></form>').appendTo('.OrgProfileButton');

}

});
}