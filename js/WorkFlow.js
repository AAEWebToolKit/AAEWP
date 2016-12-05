var $j = jQuery.noConflict();
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


var baseURLEntry = location.protocol + '//' + location.host + location.pathname;
//Accessing Edit from View List generated by shortcode manually placed on a manually created page  
 if(baseURLEntry.indexOf("http://52.87.218.201/create-form-step-1-view/entry") > -1){
  $j(document).ready(function() {
  $j("#gform_1").submit(function() { 
if($j("#input_1_2").val()){
var routelink = $j("#input_1_2").val();
     localStorage.setItem("Form1_Update", routelink);
}
else{   
$j("#input_1_2").val("http://52.87.218.201/create-form-step-2/");//Create form page for step 2
var routelink = $j("#input_1_2").val();
     localStorage.setItem("Form1_Update", routelink);
}
  });
});
      
   //Updating gform 1
    var routelink = localStorage.getItem("Form1_Update");    
    if(routelink != ""){
    if(routelink != null){    
      if(routelink != "null"){
        localStorage.removeItem("Form1_Update");       
        window.location.href = routelink;      
    }
    }
    }
}


var baseURLEntry = location.protocol + '//' + location.host + location.pathname;
//Accessing Edit from View List generated by shortcode manually placed on a manually created page  
 if(baseURLEntry.indexOf("http://52.87.218.201/create-form-step-2-view/entry") > -1){
  $j(document).ready(function() {
  $j("#gform_6").submit(function() { 
if($j("#input_6_3").val()){
var routelink = $j("#input_6_3").val();
     localStorage.setItem("Form6_Update", routelink);
}
else{   
$j("#input_1_2").val("http://52.87.218.201/create-form-step-2/");//Create form page for step 2
var routelink = $j("#input_6_3").val();
     localStorage.setItem("Form1_Update", routelink);
}
  });
});
      
   //Updating gform 1
    var routelink = localStorage.getItem("Form6_Update");    
    if(routelink != ""){
    if(routelink != null){    
      if(routelink != "null"){
        localStorage.removeItem("Form6_Update");       
        window.location.href = routelink;      
    }
    }
    }
}

//Accessing Edit from View List generated by gravity views 
if(baseURLEntry.indexOf("http://52.87.218.201/view/dummyorgliststep1/entry") > -1){
$j(document).ready(function() {
$j("#gform_1").submit(function() { 
if($j("#input_1_2").val()){
var routelink = $j("#input_1_2").val();
     localStorage.setItem("Form1_Update", routelink);
}
else{   
$j("#input_1_2").val("http://52.87.218.201/create-form-step-2/");//Create form page for step 2
var routelink = $j("#input_1_2").val();
     localStorage.setItem("Form1_Update", routelink);
}
  });
});
      
       //Updating gform 1
    var routelink = localStorage.getItem("Form1_Update");
    alert(routelink);
    if(routelink != ""){
    if(routelink != null){    
      if(routelink != "null"){
        localStorage.removeItem("Form1_Update");        
        window.location.href = routelink; 
     
    }
    }
    }
}

if(baseURLEntry.indexOf("http://52.87.218.201/organization-list/") > -1){
$j(document).ready(function() {
var qs = getQueryString();
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
    var method = "GET";
    var route = "forms/1/entries"; //The number is the id of the gravity form

    stringToSign = publicKey + ":" + method + ":" + route + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var url = 'http://52.87.218.201/gravityformsapi/' + route + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
    var companyname = qs["company_name"];//$j("#input_2_1").val();

    var WholeName = localStorage.getItem("WholeName");
    var search = {
        field_filters : [
            {
                key: '3', // this is the id of the hidden field on the gravity form (will be 9 on the real gravity that is already created)
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
 var tbody = $j("<tbody />"),tr;
//var i = "1";
//var cname = ""
  $j.each(entries,function(_,obj) {
	tr = $j("<tr />");
    //$j.each(obj,function(_,text) {
        
      //if(i=="1"){
      	//cname = text;        
	//i = "2"
       //}
     //});

var compname = obj["1"];
var completed = obj["4"];
var entry3_id = obj["6"];
var entry2_id = obj["5"];

       tr.append("<td><a class='orgname' href='#'>"+compname+"</a></td>");
       tr.append("<td class='id'>"+obj.id+"</td>");
	tr.append("<td class='entry2_id'>"+entry2_id+"</td>");
	tr.append("<td class='entry3_id'>"+entry3_id+"</td>");
	tr.append("<td class='form_id'>"+obj.form_id+"</td>");         
        tr.append("<td class='form_complete'>"+completed+"</td>");    
      	tr.appendTo(tbody);
        i = "1"
  });
  tbody.appendTo("#table1"); // only DOM insertion


//alert(JSON.stringify(entries));
    });

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


    //$j("#resultas").append($item);       // Outputs the answer

window.location.href = '/finish-submit/?company_name=' + item + '&entry_id=' + entry + '&isCompleted=' + isCompleted + '&entry2_id=' + entry2 + '&entry3_id=' + entry3;
});

});

}


if(baseURLEntry.indexOf("http://52.87.218.201/finish-submit/") > -1){
$j(document).ready(function() {




});
}