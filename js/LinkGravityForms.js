var $j = jQuery.noConflict();

//$j("#search-box-filter_9").val("Terrance Willis");
//$j("#gv_search_button_342").trigger( "click" );
//$j(".gv-grid-col-1-1.gv-left").detach();

function fnExcelReport()
{
    var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange; var j=0;
    tab = document.getElementById('table1'); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE "); 

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
        txtArea1.document.open("txt/html","replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus(); 
        sa=txtArea1.document.execCommand("SaveAs",true,"Say Thanks to Sumit.xls");
    }  
    else                 //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  

    return (sa);
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

function SetCaptureInsightSubMenus(page){
var routeparams = localStorage.getItem("MenuLink");
console.log(routeparams);
if(routeparams == null || routeparams == 'null'){
switch(page) {
    case "ee":

$j("#anchorBI").attr("href", "http://52.87.218.201/capture-insights-business-insights/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorCS").attr("href", "http://52.87.218.201/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&isCompleted=' + qs["isCompleted"]+ '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorFS").attr("href", "http://52.87.218.201/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

        break;
    case "bi":
        $j("#anchorEE").attr("href", "http://52.87.218.201/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorCS").attr("href", "http://52.87.218.201/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorFS").attr("href", "http://52.87.218.201/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

        break;
    case "cs":
        $j("#anchorEE").attr("href", "http://52.87.218.201/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorBI").attr("href", "http://52.87.218.201/capture-insights-business-insights/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorFS").attr("href", "http://52.87.218.201/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

        break;
    case "ee-form":
$j("#anchorBI").attr("href", "http://52.87.218.201/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorCS").attr("href", "http://52.87.218.201/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorFS").attr("href", "http://52.87.218.201/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

        break;
    case "bi-form":
$j("#anchorEE").attr("href", "http://52.87.218.201/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorCS").attr("href", "http://52.87.218.201/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorFS").attr("href", "http://52.87.218.201/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

        break;
    case "cs-form":
$j("#anchorEE").attr("href", "http://52.87.218.201/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorBI").attr("href", "http://52.87.218.201/capture-insights-business-insights/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorFS").attr("href", "http://52.87.218.201/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"]+ '&isCompleted=' + qs["isCompleted"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

        break;     
    default:
        break;
}
}
else{

switch(page) {
    case "ee":

$j("#anchorBI").attr("href",routeparams);// "http://52.87.218.201/capture-insights-business-insights/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorCS").attr("href",routeparams);// "http://52.87.218.201/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorFS").attr("href",routeparams);// "http://52.87.218.201/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

        break;
    case "bi":
        $j("#anchorEE").attr("href",routeparams);// "http://52.87.218.201/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorCS").attr("href",routeparams);// "http://52.87.218.201/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorFS").attr("href",routeparams);// "http://52.87.218.201/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

        break;
    case "cs":
        $j("#anchorEE").attr("href",routeparams);// "http://52.87.218.201/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorBI").attr("href",routeparams);// "http://52.87.218.201/capture-insights-business-insights/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorFS").attr("href",routeparams);// "http://52.87.218.201/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

        break;
    case "ee-form":
$j("#anchorBI").attr("href", routeparams);//"http://52.87.218.201/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorCS").attr("href", routeparams);//"http://52.87.218.201/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorFS").attr("href", routeparams);//"http://52.87.218.201/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

        break;
    case "bi-form":
$j("#anchorEE").attr("href", routeparams);//"http://52.87.218.201/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorCS").attr("href", routeparams);//"http://52.87.218.201/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorFS").attr("href", routeparams);//"http://52.87.218.201/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

        break;
    case "cs-form":
$j("#anchorEE").attr("href", routeparams);//"http://52.87.218.201/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorBI").attr("href", routeparams);//"http://52.87.218.201/capture-insights-business-insights/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

$j("#anchorFS").attr("href", routeparams);//"http://52.87.218.201/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

        break;     
    default:
        break;
}


}

}

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


///////////////////////////////////////////Update Profile///////////////////////////////////////////
function UpdateOrganization(entryid,companyname,country,city,countrycode,hq){
var qs = getQueryString();

//create signature and url for putting entries
stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var put_url = 'http://52.87.218.201/gravityformsapi/entries?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

//create signature and url for first entry
stringToSign = publicKey + ":GET:entries/" + entryid + ":" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var get_url4 = 'http://52.87.218.201/gravityformsapi/entries/' + entryid + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

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

if(errorOccured == "proceed"){
    entry3 = data.response;
    entry3['is_starred'] = 1;
    entry3['1'] = companyname;
    entry3['2'] = country;
    entry3['7'] = city;
    entry3['8'] = countrycode;
    entry3['4'] = hq;

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
		errorOccured = "prompt"
		var orgspan = document.getElementsByClassName("promptclose")[0];
		document.getElementById('myOrgPrompt').style.display = "block";
		orgspan.onclick = function() {
   			document.getElementById('myOrgPrompt').style.display = "none";
			}
		},
            error: function(result, textStatus, errorThrown){alert('error ' + errorThrown);}
        });
}

});
}

if(baseURLEntry.indexOf("http://52.87.218.201/organizational-profile/") > -1){
localStorage.removeItem("LoginStatus");
}

if(baseURLEntry.indexOf("http://52.87.218.201/organizational-profile-step2/") > -1){
localStorage.removeItem("MenuLink");

}

if(baseURLEntry.indexOf("http://52.87.218.201/map-value-chain/") > -1){
var qs = getQueryString();

var entry = qs["step1_entry_id"];
//var link = "http://52.87.218.201/create-form-step-3-view/entry/" + qs["step3_entry_id"];

//create signature and url for putting entries
stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var put_url = 'http://52.87.218.201/gravityformsapi/entries?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

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

//if(errorOccured == "proceed"){
    entry1 = data.response;
    entry1['is_starred'] = 1;
    //Sticky List creates a new entry id for some reason so I don't want to change the current value for entry 3 id or the route link value on update
if(qs["company_name"] != "undefined"){    
if(entry1['12'] == ""){      
      entry1['12'] = qs["step3_entry_id"];
      entry1['10'] = 'Complete';
      entry1['11'] = qs["step2_entry_id"];
	}   
  }
    

        var entries = Array();
        entries[0] = entry1;        
        entry_json = JSON.stringify(entries);

                //update the entries
        $j.ajax({
            url: put_url,
            type: 'PUT',
            data: entry_json,
            contentType:'application/json',
            success: function(result) {alert('success');},
            error: function(result, textStatus, errorThrown){alert('error ' + errorThrown);}
        });
//}
});

} 

if(baseURLEntry.indexOf("http://52.87.218.201/establish-empathy-form/") > -1){
$j(document).ready(function() {
SetCaptureInsightSubMenus("ee-form");
});
}

if(baseURLEntry.indexOf("http://52.87.218.201/business-insights-form/") > -1){
$j(document).ready(function() {
SetCaptureInsightSubMenus("bi-form");
});
}


if(baseURLEntry.indexOf("http://52.87.218.201/create-solutions-form/") > -1){
$j(document).ready(function() {
SetCaptureInsightSubMenus("cs-form");
});
}

if(baseURLEntry.indexOf("http://52.87.218.201/capture-insights-establish-empathy/") > -1){

//////////////////////////////////////Update for MapValueChain. Indicates Value Chain is complete////////////////
var qs = getQueryString();

$j(document).ready(function() {
SetCaptureInsightSubMenus("ee");
});

//create signature and url for putting entries
stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var put_url = 'http://52.87.218.201/gravityformsapi/entries?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

//create signature and url for first entry
stringToSign = publicKey + ":GET:entries/" + qs["step1_entry_id"] + ":" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var get_url3 = 'http://52.87.218.201/gravityformsapi/entries/' + qs["step1_entry_id"] + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
var MVCerror = "proceed";

$j.get(get_url3, function(data, textStatus)
{
    //get the data from the api for the first entry
    if ( data.status != 200 || ( typeof( data ) != 'object' ) ) {
        //http request failed
        var MVCerror = "Yes";
        console.log( 'There was an error attempting to access the API - ' + data.status + ': ' + data.response );
        return;
    }

//if(MVCerror == "proceed"){

    entry2 = data.response;
    entry2['is_starred'] = 1;
    //Sticky List creates a new entry id for some reason so I don't want to change the current value for entry 3 id or the route link value on update
    if(entry2['13'] == ""){

    entry2['13'] = qs["mvc_entry_id"];
}
   
        var entries = Array();
        entries[0] = entry2;        
        entry_json = JSON.stringify(entries);

                //update the entries
        $j.ajax({
            url: put_url,
            type: 'PUT',
            data: entry_json,
            contentType:'application/json',
            success: function(result) {alert('success');},
            error: function(result, textStatus, errorThrown){alert('error ' + errorThrown);}
        });
//}

});
}

if(baseURLEntry.indexOf("http://52.87.218.201/capture-insights-business-insights/") > -1){
//////////////////////////////////////Update for Establish Empathy Indicates Empathy is complete////////////////
var qs = getQueryString();

$j(document).ready(function() {
SetCaptureInsightSubMenus("bi");
});

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

//if(errorOccured == "proceed"){
    entry3 = data.response;
    entry3['is_starred'] = 1;
if(entry3['14'] == ""){
    entry3['14'] = qs["empathy_entry_id"];

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
            success: function(result) {alert('success');},
            error: function(result, textStatus, errorThrown){alert('error ' + errorThrown);}
        });
//}
});
}

if(baseURLEntry.indexOf("http://52.87.218.201/capture-insights-create-solutions/") > -1){
//////////////////////////////////////Update for Establish Empathy Indicates Empathy is complete////////////////
var qs = getQueryString();

$j(document).ready(function() {
SetCaptureInsightSubMenus("cs");
});

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

//if(errorOccured == "proceed"){
    entry3 = data.response;
    entry3['is_starred'] = 1;
if(entry3['18'] == ""){
    entry3['18'] = qs["bi_entry_id"];   
 
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
            success: function(result) {alert('success');},
            error: function(result, textStatus, errorThrown){alert('error ' + errorThrown);}
        });
//}
});
}

if(baseURLEntry.indexOf("http://52.87.218.201/organizational-profile_WILLBEREMOVED/") > -1){
//////////////////////////////////////Update for Step 1 with Step 3 ID////////////////
var qs = getQueryString();
//var link = "http://52.87.218.201/create-form-step-2-view/entry/" + qs["step2_entry_id"];

$j("#btnEditOrgProfile").click(function() {
    UpdateOrganization(qs["step1_entry_id"],$j("#input_3_50").val(),$j("#input_3_74").val(),$j("#input_3_76").val(),$j("#input_3_75").val(),$j("input[type='checkbox']").val());
});

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
    //entry3['2'] = link; //Using sticky list now so we don't need a route link because the form already has it. Gravity View need to know where to go next, that was the original reason for it.
    entry3['11'] = qs["step2_entry_id"];
    
   

        var entries = Array();
        entries[0] = entry3;        
        entry_json = JSON.stringify(entries);

        //update the entries
        $j.ajax({
            url: put_url,
            type: 'PUT',
            data: entry_json,
            contentType:'application/json',
            success: function(result) {alert('success');},
            error: function(result, textStatus, errorThrown){alert('error ' + errorThrown);}
        });
}
});
}


if(baseURLEntry.indexOf("http://52.87.218.201/complete/") > -1){
//////////////////////////////////////Update Step1 to include the empathy id////////////////

var qs = getQueryString();
var link = "http://52.87.218.201/create-form-step-2-view/entry/" + qs["step2_entry_id"];

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
 //Sticky List creates a new entry id for some reason so I don't want to change the current value for entry 3 id or the route link value on update
    if(entry3['14'] == ""){       
    entry3['14'] = qs["empathy_entry_id"];
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
            success: function(result) {alert('success');},
            error: function(result, textStatus, errorThrown){alert('error ' + errorThrown);}
        });
}
});
}


//////////////////////////////////TESTING STICKY LIST/////////////////////////////////
if(baseURLEntry.indexOf("http://52.87.218.201/sticky-list/") > -1){
//////////////////////////////////////Form should match layout of original////////////////
var qs = getQueryString();
$j(document).ready(function(){ 

var step3_entry_id = '132';
$j('<form action="http://52.87.218.201/organization-profile_step3/" method="post"><button class="sticky-list-edit submit">Edit</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+step3_entry_id+'"></form>').insertBefore('.sticky-list');


//$j(".sticky-list tr").each(function () {
//$j('td', this).each(function() {
//var value = $j(this).html();

//if(value != qs["company_name"]){
//$j(this).remove();

//}
//});
//});


});
}