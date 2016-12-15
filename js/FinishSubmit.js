var company_name = "";
var step1_entry_id = "";
var step3_entry_id = "";
var mvc_entry_id = "";
var empathy_entry_id = "";
var bi_entry_id = "";
var cs_entry_id = "";
var complete = "";
var baseURLEntry = location.protocol + '//' + location.host + location.pathname;

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

function SetCaptureInsightSubMenus(page){
var routeparams = localStorage.getItem("MenuLink");
//console.log(routeparams);
if(routeparams == null || routeparams == 'null'){
switch(page) {
    case "fs":
//console.log('Here1');
$j(".single_post_content").prepend('<h3 id="FSNav" style="background-color:#f3f3f4;margin-top:0;margin-bottom:0;height:100px"><a id="anchorE" style="color: #f1472c; text-decoration: underline;"><img id="empathy_sel" src="/wp-content/uploads/AAEWP/images/but_empathy.png"></img></a><a id="anchorB" style="color: black;text-decoration:underline;"><img src="/wp-content/uploads/AAEWP/images/but_insights.png"></img></a><a id="anchorC" style="color: black;text-decoration:underline;"><img src="/wp-content/uploads/AAEWP/images/but_solutions.png"></img></a><a id="anchorFS" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_finish_sel.png"></img></a></h3>');
var navbar = $j("#FSNav").find("a");

//$j((navbar)[0]).find("img").css("width", "250px");

//$j((navbar)[1]).find("img").css("width", "250px");

//$j((navbar)[2]).find("img").css("width", "250px");

//$j((navbar)[3]).find("img").css("width", "250px");


//$j(".single_post_content").prepend('<h3 id="FSNav" style="visibility:visible"><a id="anchorE" style="color:black;margin-left: 10%" href=""><strong style="color:#F1472C;margin-right:1%">1</strong>Establish Empathy</a><a id="anchorB"  href="" style="color:black;margin-left: 10%"><strong style="color:#F1472C;margin-right:1%">2</strong>Business Insights</a><a id="anchorC" href="" style="color:black;margin-left: 10%"><strong style="color:#F1472C;margin-right:1%">3</strong>Create Solutions</a><a  id="anchorFS" href="" style="color:#F1472C;text-decoration:underline"><strong style="color:#F1472C;margin-right:1%">4</strong>Finish & Submit</a></h3>');

$j("#anchorB").attr("href", "http://52.87.218.201/capture-insights-business-insights/?company_name=" + company_name + '&step1_entry_id=' + step1_entry_id + '&isCompleted=' + complete + '&step3_entry_id=' + step3_entry_id + '&mvc_entry_id=' + mvc_entry_id + '&empathy_entry_id=' + empathy_entry_id + '&bi_entry_id='+ bi_entry_id + '&cs_entry_id='+ cs_entry_id);

$j("#anchorC").attr("href", "http://52.87.218.201/capture-insights-create-solutions/?company_name=" + company_name + '&step1_entry_id=' + step1_entry_id + '&isCompleted=' + complete + '&step3_entry_id=' + step3_entry_id + '&mvc_entry_id=' + mvc_entry_id + '&empathy_entry_id=' + empathy_entry_id + '&bi_entry_id='+ bi_entry_id + '&cs_entry_id='+ cs_entry_id);

$j("#anchorE").attr("href", "http://52.87.218.201/capture-insights-establish-empathy/?company_name=" + company_name + '&step1_entry_id=' + step1_entry_id + '&isCompleted=' + complete + '&step3_entry_id=' + step3_entry_id + '&mvc_entry_id=' + mvc_entry_id + '&empathy_entry_id=' + empathy_entry_id + '&bi_entry_id='+ bi_entry_id + '&cs_entry_id='+ cs_entry_id);

//$j("#anchorB").attr("href", "http://52.87.218.201/capture-insights-business-insights/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

//$j("#anchorC").attr("href", "http://52.87.218.201/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&isCompleted=' + qs["isCompleted"]+ '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

//$j("#anchorE").attr("href", "http://52.87.218.201/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

        break;
}

}
else{

switch(page) {
    case "fs":
//console.log('Here2');
$j(".single_post_content").prepend('<h3 id="FSNav" style="background-color:#f3f3f4;margin-top:0;margin-bottom:0;height:100px"><a id="anchorE" style="color: #f1472c; text-decoration: underline;"><img id="empathy_sel" src="/wp-content/uploads/AAEWP/images/but_empathy.png"></img></a><a id="anchorB" style="color: black;text-decoration:underline;"><img src="/wp-content/uploads/AAEWP/images/but_insights.png"></img></a><a id="anchorC" style="color: black;text-decoration:underline;"><img src="/wp-content/uploads/AAEWP/images/but_solutions.png"></img></a><a id="anchorFS" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_finish_sel.png"></img></a></h3>')

var navbar = $j("#FSNav").find("a");

//$j((navbar)[0]).find("img").css("width", "250px");

//$j((navbar)[1]).find("img").css("width", "250px");

//$j((navbar)[2]).find("img").css("width", "250px");

//$j((navbar)[3]).find("img").css("width", "250px");

//$j(".single_post_content").prepend('<h3 id="FSNav" style="visibility:visible"><a id="anchorE" style="color:black;margin-left: 10%" href=""><strong style="color:#F1472C;margin-right:1%">1</strong>Establish Empathy</a><a id="anchorB"  href="" style="color:black;margin-left: 10%"><strong style="color:#F1472C;margin-right:1%">2</strong>Business Insights</a><a id="anchorC" href="" style="color:black;margin-left: 10%"><strong style="color:#F1472C;margin-right:1%">3</strong>Create Solutions</a><a  id="anchorFS" href="" style="color:#F1472C;text-decoration:underline"><strong style="color:#F1472C;margin-right:1%">4</strong>Finish & Submit</a></h3>');
$j("#anchorB").attr("href","http://52.87.218.201/capture-insights-business-insights/" + routeparams);// "http://52.87.218.201/capture-insights-business-insights/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorC").attr("href","http://52.87.218.201/capture-insights-create-solutions/" + routeparams);// "http://52.87.218.201/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorE").attr("href", "http://52.87.218.201/capture-insights-establish-empathy/" + routeparams);// "http://52.87.218.201/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);
 
 break;
}

}

}

function GetAnyEntryID(section){
var qs = getQueryString();
switch(section) {
   case "org":  

//create signature and url for putting entries
stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);

//create signature and url for first entry
stringToSign = publicKey + ":GET:entries/" + qs["step1_entry_id"] + ":" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var get_url6 = 'http://52.87.218.201/gravityformsapi/entries/' + qs["step1_entry_id"] + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

$j.get(get_url6, function(data, textStatus)
{
    //get the data from the api for the first entry
    if ( data.status != 200 || ( typeof( data ) != 'object' ) ) {
        //http request failed
        errorOccured = "Yes";
        console.log( 'There was an error attempting to access the API - Getting Step 3 Entry ID for Finish & Submit ' );
        return;
    }
entry9 = data.response;
$j("#edit_id").val(entry9['12']);
//console.log(entry9['12'] + ' inside callback');
return entry9['12'];


});

break;
   case "empathy":

//create signature and url for putting entries
stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);

//create signature and url for first entry
stringToSign = publicKey + ":GET:entries/" + qs["step1_entry_id"] + ":" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var get_url6 = 'http://52.87.218.201/gravityformsapi/entries/' + qs["step1_entry_id"] + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

$j.get(get_url6, function(data, textStatus)
{
    //get the data from the api for the first entry
    if ( data.status != 200 || ( typeof( data ) != 'object' ) ) {
        //http request failed
        errorOccured = "Yes";
        console.log( 'There was an error attempting to access the API - Getting Step 3 Entry ID for Finish & Submit ' );
        return;
    }
entry9 = data.response;
$j("#edit_empathy_id").val(entry9['14']);
//console.log(entry9['12'] + ' inside callback');
return entry9['14'];


});
break;
 case "mvc":

//create signature and url for putting entries
stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);

//create signature and url for first entry
stringToSign = publicKey + ":GET:entries/" + qs["step1_entry_id"] + ":" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var get_url6 = 'http://52.87.218.201/gravityformsapi/entries/' + qs["step1_entry_id"] + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

$j.get(get_url6, function(data, textStatus)
{
    //get the data from the api for the first entry
    if ( data.status != 200 || ( typeof( data ) != 'object' ) ) {
        //http request failed
        errorOccured = "Yes";
        console.log( 'There was an error attempting to access the API - Getting Step 3 Entry ID for Finish & Submit ' );
        return;
    }
entry9 = data.response;
$j("#edit_mvc_id").val(entry9['13']);
//console.log(entry9['12'] + ' inside callback');
return entry9['13'];


});
break;
 case "bi":

//create signature and url for putting entries
stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);

//create signature and url for first entry
stringToSign = publicKey + ":GET:entries/" + qs["step1_entry_id"] + ":" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var get_url6 = 'http://52.87.218.201/gravityformsapi/entries/' + qs["step1_entry_id"] + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

$j.get(get_url6, function(data, textStatus)
{
    //get the data from the api for the first entry
    if ( data.status != 200 || ( typeof( data ) != 'object' ) ) {
        //http request failed
        errorOccured = "Yes";
        console.log( 'There was an error attempting to access the API - Getting Step 3 Entry ID for Finish & Submit ' );
        return;
    }
entry9 = data.response;
$j("#edit_bi_id").val(entry9['18']);
//console.log(entry9['12'] + ' inside callback');
return entry9['18'];

});
break;
 case "cs":

//create signature and url for putting entries
stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);

//create signature and url for first entry
stringToSign = publicKey + ":GET:entries/" + qs["step1_entry_id"] + ":" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var get_url6 = 'http://52.87.218.201/gravityformsapi/entries/' + qs["step1_entry_id"] + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

$j.get(get_url6, function(data, textStatus)
{
    //get the data from the api for the first entry
    if ( data.status != 200 || ( typeof( data ) != 'object' ) ) {
        //http request failed
        errorOccured = "Yes";
        console.log( 'There was an error attempting to access the API - Getting Step 3 Entry ID for Finish & Submit ' );
        return;
    }
entry9 = data.response;
$j("#edit_cs_id").val(entry9['16']);
//console.log(entry9['12'] + ' inside callback');
return entry9['16'];


});
break;
}
}

function GenerateQueryString(){
var qs = getQueryString();

//create signature and url for putting entries
stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);

//create signature and url for first entry
stringToSign = publicKey + ":GET:entries/" + qs["step1_entry_id"] + ":" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var get_url5 = 'http://52.87.218.201/gravityformsapi/entries/' + qs["step1_entry_id"] + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

$j.get(get_url5, function(data, textStatus)
{
    //get the data from the api for the first entry
    if ( data.status != 200 || ( typeof( data ) != 'object' ) ) {
        //http request failed
        errorOccured = "Yes";
        console.log( 'There was an error attempting to access the API - Generating QueryString for Finish & Submit' );
        return;
    }
entry8 = data.response;


company_name = entry8['1'];
step1_entry_id = entry8['id'];
step3_entry_id = entry8['12'];
mvc_entry_id = entry8['13'];
empathy_entry_id = entry8['14'];
bi_entry_id = entry8['18'];
cs_entry_id = entry8['16'];
complete = entry8['10'];

//console.log(mvc_entry_id + ' for ' + company_name);
var menulinks = localStorage.getItem("MenuLink");

if(menulinks == null){
var menulinks = '?company_name=' + entry8['1'] + '&step1_entry_id=' + entry8['id'] + '&isCompleted=' + entry8['10'] + '&step2_entry_id=' + entry8['12'] + '&step3_entry_id=' + entry8['12'] + '&mvc_entry_id=' + entry8['13'] + '&empathy_entry_id='+ entry8['14'] + '&bi_entry_id='+ entry8['18'] + '&cs_entry_id='+ entry8['16'];
localStorage.setItem("MenuLink", menulinks);
}
else if(menulinks == 'null'){
var menulinks = '?company_name=' + entry8['1'] + '&step1_entry_id=' + entry8['id'] + '&isCompleted=' + entry8['10'] + '&step2_entry_id=' + entry8['12'] + '&step3_entry_id=' + entry8['12'] + '&mvc_entry_id=' + entry8['13'] + '&empathy_entry_id='+ entry8['14'] + '&bi_entry_id='+ entry8['18'] + '&cs_entry_id='+ entry8['16'];
localStorage.setItem("MenuLink", menulinks);
}
else if (menulinks == 'undefined'){
var menulinks = '?company_name=' + entry8['1'] + '&step1_entry_id=' + entry8['id'] + '&isCompleted=' + entry8['10'] + '&step2_entry_id=' + entry8['12'] + '&step3_entry_id=' + entry8['12'] + '&mvc_entry_id=' + entry8['13'] + '&empathy_entry_id='+ entry8['14'] + '&bi_entry_id='+ entry8['18'] + '&cs_entry_id='+ entry8['16'];
localStorage.setItem("MenuLink", menulinks);
}
else if (menulinks == ''){
var menulinks = '?company_name=' + entry8['1'] + '&step1_entry_id=' + entry8['id'] + '&isCompleted=' + entry8['10'] + '&step2_entry_id=' + entry8['12'] + '&step3_entry_id=' + entry8['12'] + '&mvc_entry_id=' + entry8['13'] + '&empathy_entry_id='+ entry8['14'] + '&bi_entry_id='+ entry8['18'] + '&cs_entry_id='+ entry8['16'];
localStorage.setItem("MenuLink", menulinks);
}


});
}

function LinkCSandProfileOne(){
var qs = getQueryString();
var solutionsupdate = false;
//create signature and url for putting entries
stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var put_url = 'http://52.87.218.201/gravityformsapi/entries?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

//create signature and url for first entry
stringToSign = publicKey + ":GET:entries/" + qs["step1_entry_id"] + ":" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var get_url4 = 'http://52.87.218.201/gravityformsapi/entries/' + qs["step1_entry_id"] + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
var errorOccured = "proceed";
var newcreatesolutionsid = "";
$j.get(get_url4, function(data, textStatus)
{
    //get the data from the api for the first entry
    if ( data.status != 200 || ( typeof( data ) != 'object' ) ) {
        //http request failed
        errorOccured = "Yes";
        console.log( 'There was an error attempting to access the API - Linking Create Solutions to step 1' );
        return;
    }

if(errorOccured == "proceed"){
    entry3 = data.response;
    entry3['is_starred'] = 1;
if(entry3['16'] == ""){
    entry3['16'] = qs["cs_entry_id"];
newcreatesolutionsid = qs["cs_entry_id"]; 
}
else if(entry3['16'] == "undefined"){
entry3['16'] = qs["cs_entry_id"];
newcreatesolutionsid = qs["cs_entry_id"];  
}
else{
newcreatesolutionsid = entry3['16']; 
solutionsupdate = true;
}  

if(qs["cs_enty_id"] != entry3['16']){
if(solutionsupdate){
var route = newcreatesolutionsid

stringToSign = publicKey + ":" + deletemethod + ":" + route + ":" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var url = 'http://52.87.218.201/gravityformsapi/' + route + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

$j.ajax({
    url: url,
    type: 'DELETE',
    contentType:'application/json',
    success: function(result) {console.log('dup sticky list create solutions entry deleted');},
    error: function(result, textStatus, errorThrown){console.log('error ' + errorThrown + ' CREATE SOLUTIONS sticky list delete');}
});

}
}
   var d = new Date();
entry3['20'] = d.toDateString();

        var entries = Array();
        entries[0] = entry3;        
        entry_json = JSON.stringify(entries);

        //update the entries
        $j.ajax({
            url: put_url,
            type: 'PUT',
            data: entry_json,
            contentType:'application/json',
            success: function(result) {console.log('Adding CREATE SOLUTIOS entry ID to Step 1');},
            error: function(result, textStatus, errorThrown){console.log('error ' + errorThrown + ' Finish & Submit for Learn & Connect');}
        });
}
});
}


if(baseURLEntry.indexOf("http://52.87.218.201/finish-submit/") > -1){
$j(document).ready(function() {

var qs = getQueryString();



if(qs["cs_entry_id"] != 'undefined'){
if(qs["cs_entry_id"] != 'null'){
if(qs["cs_entry_id"] != null){
if(qs["cs_entry_id"] != ''){
LinkCSandProfileOne();
}
}
}
}


GenerateQueryString();

SetCaptureInsightSubMenus("fs");


var routes = localStorage.getItem("MenuLink");

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
            document.write( 'There was an error attempting to access the API - EMPATHY fetch for Finish & Submit' );

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
   //console.log('This ID is ' + ee);
if(isSubmitted == "Complete"){
$j("#btnEmpathy").detach();
//var empathy_entry_id = qs["empathy_entry_id"];
$j('<form action="http://52.87.218.201/establish-empathy-form/" method="post"><button style="width:200px" class="sticky-list-edit submit finsub">Edit</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" id="edit_empathy_id" value="'+obj.id+'"></form>').appendTo('.EmpathyButton');
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
    window.location.href = 'http://52.87.218.201/establish-empathy-form/' + routes;//?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
});
}
    
});
}//Total Count
else{
if(qs["isCompleted"] == "Complete"){
$j("#btnEmpathy").html('Start');
$j("#btnEmpathy").click(function() {
window.location.href = 'http://52.87.218.201/establish-empathy-form/' + routes;//?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];  
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
            document.write( 'There was an error attempting to access the API - VALUE CHAIN fetch for Finish & Submit');

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
//var mvc_entry_id = qs["mvc_entry_id"];
$j('<form action="http://52.87.218.201/create-map-value-chain/" method="post"><button style="width:200px" class="sticky-list-edit submit finsub">Edit</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" id="edit_mvc_id" value="'+obj.id+'"></form>').appendTo('.ValueChainButton');
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
    window.location.href = 'http://52.87.218.201/create-map-value-chain/' + routes;//?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
});
}    

//}//Check Org Profile Complete

});// jquery Each loop
}//Check Total Count
else{
if(qs["isCompleted"] == "Complete"){
$j("#btnValueChain").html('Start');
$j("#btnValueChain").click(function() {
window.location.href = 'http://52.87.218.201/create-map-value-chain/' + routes;//?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];  
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
            document.write( 'There was an error attempting to access the API - CREATE SOLUTIONS fetch for Finish & Submit');

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
//var cs_entry_id = qs["cs_entry_id"];
$j('<form action="http://52.87.218.201/create-solutions-form/" method="post"><button style="width:200px" class="sticky-list-edit submit finsub">Edit</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" id="edit_cs_id" value="'+obj.id+'"></form>').appendTo('.CreateSolutionsButton');
$j("#lblCompleteCS").css("visibility", "visible");

}// Is the current map value chain complete
else{
CanSubmit = false;
$j("#btnCreateSolutions").html('Start');

$j("#btnCreateSolutions").click(function() {
    window.location.href = 'http://52.87.218.201/create-solutions-form/' + routes;//?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]   + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
});
}    

//}//Check Org Profile Complete

});// jquery Each loop
}//Check Total Count
else{
if(qs["isCompleted"] == "Complete"){
$j("#btnCreateSolutions").html('Start');
$j("#btnCreateSolutions").click(function() {
window.location.href = 'http://52.87.218.201/create-solutions-form/' + routes;//?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]   + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];  
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
            document.write( 'There was an error attempting to access the API - BUSINESS INSIGHTS fetch for Finish & Submit');

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
//var bi_entry_id = qs["bi_entry_id"];
$j('<form action="http://52.87.218.201/business-insights-form/" method="post"><button style="width:200px" class="sticky-list-edit submit finsub">Edit</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" id="edit_bi_id" value="'+obj.id+'"></form>').appendTo('.BusinessInsightsButton');
$j("#lblCompleteBI").css("visibility", "visible");

}// Is the current map value chain complete
else{
CanSubmit = false;
$j("#btnBusinessInsights").html('Start');

$j("#btnBusinessInsights").click(function() {
    window.location.href = 'http://52.87.218.201/business-insights-form/' + routes;//?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
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
window.location.href = 'http://52.87.218.201/business-insights-form/' + routes;//?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];  
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
window.location.href = 'http://52.87.218.201/insights-successfully-submitted/' + routes;//?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + qs["step2_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];

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
//var step3_id = GetStep3EntryID('org');//qs["step3_entry_id"];
$j('<form action="http://52.87.218.201/organization-profile_step3/" method="post"><button style="width:200px" class="sticky-list-edit submit finsub">Edit</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" id="edit_id" value="'+GetAnyEntryID('org')+'"></form>').appendTo('.OrgProfileButton');

}
else{
if(qs["step1_entry_id"] == 'undefined'){
$j("#btnOrgProfile").html('Start');
}
//var step1_entry_id = qs["step1_entry_id"]; 
$j("#btnOrgProfile").click(function() {
if(qs["step1_entry_id"] != 'undefined'){
window.location.href = "/organization-profile_step3/" + routes;//?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id='+ qs["empathy_entry_id"] + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
}
else{
window.location.href = "/organizational-profile/" + routes;//?company_name=" + qs["company_name"]  + "&step1_entry_id=" + qs["step1_entry_id"]  + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id='+ qs["empathy_entry_id"] + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"];
}
});
//$j('<form action="http://52.87.218.201/organizational-profile/" method="post"><button style="width:200px" class="sticky-list-edit submit">Finish</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+ step1_entry_id +'"></form>').appendTo('.OrgProfileButton');

}

});
}