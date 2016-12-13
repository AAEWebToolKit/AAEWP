var $j = jQuery.noConflict();
var maxRows = 20;
//set variables
    var d = new Date;
    var expiration = 7200; // 1 hour,
    var unixtime = parseInt(d.getTime() / 1000);
    var future_unixtime = unixtime + expiration;
  var publicKey = "293dabb883";
var privateKey = "d6c574f9f4f6a70";
    var method = "GET";
    var route = "forms/2/entries"; //The number is the id of the gravity form
var baseURLEntry = location.protocol + '//' + location.host + location.pathname;

function CalculateSig(stringToSign, privateKey){
        //calculate the signature needed for authentication
        var hash = CryptoJS.HmacSHA1(stringToSign, privateKey);
        var base64 = hash.toString(CryptoJS.enc.Base64);
        return encodeURIComponent(base64);
    }

function UpdateStep1withEmpathyID(){
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
    entry3['8'] = qs["empathy_entry_id"];
    
   

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


if(baseURLEntry.indexOf("http://52.87.218.201/organization-list/") > -1){
$j(document).ready(function() {
localStorage.removeItem("OrgProfileForm");
//var orgspan = document.getElementsByClassName("promptclose")[0];
document.getElementById('myOrgPrompt').style.display = "block";
var qs = getQueryString();
    
    stringToSign = publicKey + ":" + method + ":" + route + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var url = 'http://52.87.218.201/gravityformsapi/' + route + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
    var companyname = qs["company_name"];//$j("#input_2_1").val();

    var WholeName = localStorage.getItem("WholeName");
    var search = {
        field_filters : [
            {
                key: '9', // this is the id of the hidden field on the gravity form (will be 9 on the real gravity that is already created)
                operator: 'contains',
                value: WholeName // This will be the WholeName variable created when the user logs in
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

// here is your success from AJAX
//alert(JSON.stringify(entries));
if(total_count > 0 ){
$j("#EmptyMessage").detach();
}

 var tbody = $j("<tbody class='list' />"),tr;

  $j.each(entries,function(_,obj) {
	tr = $j("<tr />");
   
var compname = obj["1"];
var completed = obj["10"];
var submitted = obj["19"];


if(submitted == "Submitted"){
submitted=  "Submitted"; 
} 
else{
submitted = "In-Progress";
}


var entry3_id = obj["12"];
var entry2_id = obj["11"];
var mvc_id = obj["13"];
var empathy_id = obj["14"];
var location = obj["7"];
var bi_id = obj["18"];
var cs_id = obj["16"];
var modified = obj["20"];
var sector = obj["21"];

var hq = obj["4.1"];

       tr.append("<td style='text-align:center;color:black'><a class='orgname' style='font-weight:bold' href='#'>"+compname+"</a></td>");
       tr.append("<td style='text-align:center;color:black'><a class='location'>"+location+"</a></td>");
       tr.append("<td style='text-align:center;color:black'><a class='hq'>"+hq+"</a></td>");
       tr.append("<td style='text-align:center;color:black'><a class='sector'>"+sector+"</a></td>");
       tr.append("<td style='text-align:center;color:black'><a class='modified'>"+modified+"</a></td>");
if(submitted == 'Submitted'){
	tr.append("<td  style='color:green;font-weight:bold;text-align:center' class='form_submitted'>"+submitted+"</td>");
}
else{
tr.append("<td  style='color:#F1472C;font-weight:bold;text-align:center' class='form_submitted'>"+submitted+"</td>");

}
       tr.append("<td  style='display:none' class='form_complete'>"+completed+"</td>");
       tr.append("<td style='display:none' class='id'>"+obj.id+"</td>");
	tr.append("<td style='display:none' class='entry2_id'>"+entry2_id+"</td>");
	tr.append("<td style='display:none' class='entry3_id'>"+entry3_id+"</td>");
	tr.append("<td style='display:none' class='mvc_id'>"+mvc_id+"</td>");
        tr.append("<td style='display:none' class='empathy_id'>"+empathy_id+"</td>");
	tr.append("<td style='display:none' class='form_id'>"+obj.form_id+"</td>");

	tr.append("<td style='display:none' class='bi_id'>"+bi_id+"</td>"); 
	tr.append("<td style='display:none' class='cs_id'>"+cs_id+"</td>");               
            
      	tr.appendTo(tbody);
        
  });
  tbody.appendTo("#table1"); // only DOM insertion
if(total_count > maxRows - 1 ){

	$j(".prev").css("visibility", "visible");
       $j(".next").css("visibility", "visible");

}


$j('.paginated').each(function() {
 var cTable = $j(this);
    var cRows = cTable.find('tr:gt(0)');
    var cRowCount = cRows.size();

if (cRowCount < maxRows) {       
       document.getElementById('myOrgPrompt').style.display = "none";
        return;
    }

    //cRows.each(function(i) {
      //  $j(this).find('td:first').text(function(j, val) {
        //   return (i + 1) + " - " + val;
        //}); 
    //});

    cRows.filter(':gt(' + (maxRows - 1) + ')').hide();


    var cPrev = $j(".prev");//cTable.siblings('.prev');
    var cNext = $j(".next");//cTable.siblings('.next');

    cPrev.addClass('disabled');

    cPrev.click(function() {
        var cFirstVisible = cRows.index(cRows.filter(':visible'));
        
        if (cPrev.hasClass('disabled')) {
            return false;
        }
        
        cRows.hide();
        if (cFirstVisible - maxRows - 1 > 0) {
            cRows.filter(':lt(' + cFirstVisible + '):gt(' + (cFirstVisible - maxRows - 1) + ')').show();
        } else {
            cRows.filter(':lt(' + cFirstVisible + ')').show();
        }

        if (cFirstVisible - maxRows <= 0) {
            cPrev.addClass('disabled');
        }
        
        cNext.removeClass('disabled');

        return false;
    });

    cNext.click(function() {
        var cFirstVisible = cRows.index(cRows.filter(':visible'));
        
        if (cNext.hasClass('disabled')) {
            return false;
        }
        
        cRows.hide();
        cRows.filter(':lt(' + (cFirstVisible +2 * maxRows) + '):gt(' + (cFirstVisible + maxRows - 1) + ')').show();

        if (cFirstVisible + 2 * maxRows >= cRows.size()) {
            cNext.addClass('disabled');
        }
        
        cPrev.removeClass('disabled');

        return false;
    });
document.getElementById('myOrgPrompt').style.display = "none";
//alert(cRowCount + ' Here');
});//Paginaton ends here

//alert(JSON.stringify(entries));
    });//ajax call ends here


//Click event of Organization Link
$j(".orgname").live('click', function(){
    var item = $j(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".orgname")     // Gets a descendent with class="orgname"
                       .text();         // Retrieves the text within <td>
    
     var entry = $j(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".id")     // Gets a descendent with class="id"
                       .text();         // Retrieves the text within <td>
     
     var isCompleted = $j(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".form_complete")     // Gets a descendent with class="form_complete"
                       .text();         // Retrieves the text within <td>

    var entry2 = $j(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".entry2_id")     // Gets a descendent with class="form_complete"
                       .text();         // Retrieves the text within <td>
    
    var entry3 = $j(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".entry3_id")     // Gets a descendent with class="form_complete"
                       .text();         // Retrieves the text within <td>

   var mvc = $j(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".mvc_id")     // Gets a descendent with class="form_complete"
                       .text();         // Retrieves the text within <td>

   var empathy = $j(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".empathy_id")     // Gets a descendent with class="form_complete"
                       .text();         // Retrieves the text within <td>

   var bi = $j(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".bi_id")     // Gets a descendent with class="form_complete"
                       .text();         // Retrieves the text within <td>

  var cs = $j(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".cs_id")     // Gets a descendent with class="form_complete"
                       .text();         // Retrieves the text within <td>

var location = $j(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".location")     // Gets a descendent with class="form_complete"
                       .text();         // Retrieves the text within <td>

var hq = $j(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".hq")     // Gets a descendent with class="form_complete"
                       .text();         // Retrieves the text within <td>

//if(isCompleted == "Submitted"){
//isCompleted =  "Complete"; 
//} 
//else{
//isCompleted = "";
//}
+ '&org_country=' + qs["org_country"] + '&org_city=' + qs["org_city"] + '&org_hq=' + qs["org_hq"] + '&co_code=' + qs["co_code"]
    //$j("#resultas").append($item);       // Outputs the answer
var menulinks = '?company_name=' + item + '&step1_entry_id=' + entry + '&isCompleted=' + isCompleted + '&step2_entry_id=' + entry2 + '&step3_entry_id=' + entry3 + '&mvc_entry_id=' + mvc + '&empathy_entry_id='+ empathy + '&bi_entry_id='+ bi + '&cs_entry_id='+ cs + '&org_city=' + location + '&org_hq=' + hq;
localStorage.setItem("MenuLink", menulinks);
window.location.href = '/finish-submit/?company_name=' + item + '&step1_entry_id=' + entry + '&isCompleted=' + isCompleted + '&step2_entry_id=' + entry2 + '&step3_entry_id=' + entry3 + '&mvc_entry_id=' + mvc + '&empathy_entry_id='+ empathy + '&bi_entry_id='+ bi + '&cs_entry_id='+ cs + '&org_city=' + location + '&org_hq=' + hq;

});


});
}


if(baseURLEntry.indexOf("http://52.87.218.201/finish-submit/") > -1){
$j(document).ready(function() {




});
}