var $j = jQuery.noConflict();
//set variables
var d = new Date;
var expiration = 7200; // 1 hour,
var unixtime = parseInt(d.getTime() / 1000);
var future_unixtime = unixtime + expiration;
var publicKey = "293dabb883";
var privateKey = "d6c574f9f4f6a70";

var baseURLEntry = location.protocol + '//' + location.host + location.pathname;

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

var qx = getQueryString();
localStorage.setItem("step1_entry_id", qx["step1_entry_id"]);
localStorage.setItem("company_name", qx["company_id"]);

function CalculateSig(stringToSign, privateKey){
        //calculate the signature needed for authentication
        var hash = CryptoJS.HmacSHA1(stringToSign, privateKey);
        var base64 = hash.toString(CryptoJS.enc.Base64);
        return encodeURIComponent(base64);
}

function DeleteOrganization(entryid){
//set variables
var this_method = "DELETE";
var route = "entries/" + entryid;

stringToSign = publicKey + ":" + this_method + ":" + route + ":" + future_unixtime;
sig = CalculateSig(stringToSign, privateKey);
var url = 'http://52.87.218.201/gravityformsapi/' + route + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

$j.ajax({
    url: url,
    type: 'DELETE',
    contentType:'application/json',
    success: function(result) {errorOccured = "prompt"
		var orgspan = document.getElementsByClassName("promptclose")[0];
		document.getElementById('myOrgPrompt').style.display = "block";
		orgspan.onclick = function() {
   			document.getElementById('myOrgPrompt').style.display = "none";
			}
	},
    error: function(result, textStatus, errorThrown){console.log('error ' + errorThrown);}
});
}
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

if(baseURLEntry.indexOf("http://52.87.218.201/organizational-profile-step2/") > -1){
$j(document).ready(function() {
var qs = getQueryString();
document.getElementById('myExistingOrgPrompt').style.display = "block";

//var step1_entry_id = qs["step1_entry_id"];
//$j('<form action="http://52.87.218.201/create-form-step-1/" method="post"><button style="width:200px" class="sticky-list-edit submit">Edit</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+step1_entry_id+'"></form>').appendTo('.btnEditOrgProfile');

$j("#btnEditOrgProfile").click(function() {
UpdateOrganization(qs["step1_entry_id"],$j("#input_2_1").val(),$j("#input_2_2").val(),$j("#input_2_7").val(),$j("#input_2_8").val(),$j("input[type='checkbox']").val())
    //window.location.href = '/create-form-step-1-view/entry/' + qs["step1_entry_id"] + '/';
});

function CalculateSig(stringToSign, privateKey){
        //calculate the signature needed for authentication
        var hash = CryptoJS.HmacSHA1(stringToSign, privateKey);
        var base64 = hash.toString(CryptoJS.enc.Base64);
        return encodeURIComponent(base64);
    }

    //set variables
    var d = new Date;
    var expiration = 7200; // 2 hour,
    var unixtime = parseInt(d.getTime() / 1000);
    var future_unixtime = unixtime + expiration;
    var publicKey = "293dabb883";
    var privateKey = "d6c574f9f4f6a70";
    var method = "GET";
    var route = "forms/2/entries"; //The number is the id of the gravity form

    stringToSign = publicKey + ":" + method + ":" + route + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var url = 'http://52.87.218.201/gravityformsapi/' + route + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
    var companyname = qs["company_name"];//$j("#input_2_1").val();
    //var countryname = qs["country_name"];
    //var cityname = qs["city_name"];

    
    var search = {
        field_filters : [
            {
                key: '1', //OrgName Field
                operator: 'contains',
                value: companyname 
            },
         	{
                key: 'id',
                value: qs["step1_entry_id"],//This is OrgProfile Step 1 entry id
                operator: 'isnot'
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

//here is your success from AJAX
//alert(JSON.stringify(entries));

if(total_count > 0){
 var tbody = $j("<tbody />"),tr;

  $j.each(entries,function(_,obj) {
	tr = $j("<tr />");
    
       var compname = obj["1"];
       var isCompleted = obj["4"];


       tr.append("<td class='orgname' style='text-align:center'>"+compname+"</td>");
       tr.append("<td class='completed' style='text-align:center'>"+isCompleted+"</td>");
       tr.append("<td class='id' style='text-align:center'>"+obj.id+"</td>");
       tr.append("<td class='select'><button id='btnUpdateOrg' style='width:200px;margin-left:25%'>Select</button></td>");	   
       tr.appendTo(tbody);
        
  });
  tbody.appendTo("#table1"); // only DOM insertion
$j("#table1").css("visibility","visible");
$j("label[for='table1']").html("It appears that your organization name is similar to others in our database. If your organization is affiliated with any listed below, then please select the organization below. If not, then please click the Save & Continue button to proceed.");
//('There are ' + total_count + ' Organizations that match your current entry');
$j("label[for='table1']").css("visibility", "visible");

}
//alert(JSON.stringify(entries));
    });
document.getElementById('myExistingOrgPrompt').style.display = "none";
//Click event of Select Organization button
$j("#btnUpdateOrg").live('click', function(){
    
    
     var entry = $j(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".id")     // Gets a descendent with class="id"
                       .text();         // Retrieves the text within <td>

     var orgname = $j(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".orgname")     // Gets a descendent with class="id"
                       .text();         // Retrieves the text within <td>

    var completed = $j(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".completed")     // Gets a descendent with class="id"
                       .text();         // Retrieves the text within <td>     
       
  
 //UpdateOrganization(qs["step1_entry_id"],orgname);
DeleteOrganization(qs["step1_entry_id"]);//Might have to delete the current entry and replace its querystring value with the selected one?????
localStorage.setItem("step1_entry_id", entry);
localStorage.setItem("company_name", orgname);
window.location.href = '/finish-submit/?company_name=' + orgname + '&step1_entry_id=' + entry + '&isCompleted=' + completed;
});

//$j("#anchorNextStep").css("visibility", "visible");
var randomNumStep2 = Math.floor((Math.random() * 10) + 1)
$j("#anchorNextStep").click(function(e){
//var entryid = localStorage.getItem("step1_entry_id");//This is done so if the requirement is that the new org should be deleted when the select button is clicked the querystring wont break
//var companyname = localStorage.getItem("company_name");//This is done so if the requirement is that the new org should be deleted when the select button is clicked the querystring wont break
//$j("#anchorNextStep").attr("href", window.location.href = '/create-form-step-3/?company_name=' + companyname + '&step1_entry_id=' + entryid + '&step2_entry_id=' + randomNumStep2 + '&mvc_entry_id=' +qs["mvc_entry_id"]);
$j("#anchorNextStep").attr("href", window.location.href = '/organization-profile_step3/?company_name=' + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step2_entry_id=' + randomNumStep2 + '&mvc_entry_id=' +qs["mvc_entry_id"] + '&org_country=' + qs["org_country"] + '&org_city=' + qs["org_city"] + '&org_hq=' + qs["org_hq"] + '&co_code=' + qs["co_code"]);
	
});


	
//$j("label[for='OrgName']").html(qs["company_name"]);
//$j("label[for='Location']").html('Tysons, VA');//HardCoded so remove when Form 1 is created
//$j("label[for='HQ']").html('Yes');//HardCoded so remove when Form 1 is created

});

}