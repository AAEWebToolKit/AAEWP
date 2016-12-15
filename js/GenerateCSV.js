

//set variables
    var d = new Date;
    var expiration = 7200; // 1 hour,
    var unixtime = parseInt(d.getTime() / 1000);
    var future_unixtime = unixtime + expiration;
    var publicKey = "293dabb883";
    var privateKey = "d6c574f9f4f6a70";
    var method = "GET";
    
function CreateTableFromJSON(objArray, tableName) {

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < objArray.length; i++) {
            for (var key in objArray[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.setAttribute("id", tableName);
        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < objArray.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = objArray[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("ApiData");
        //divContainer.innerHTML = "";
        divContainer.appendChild(table);

if(tableName == 'table5'){

document.getElementById('myStatusPrompt').style.display = "none";
}
    }

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
////////////////////////////////////////////////////////////////////////////////// Functon for Exporting////////////////////////////////////////////////////////
var tablesToExcel = (function() {

    var uri = 'data:application/vnd.ms-excel;base64,'
    , tmplWorkbookXML = '<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">'
      + '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"><Author>Axel Richter</Author><Created>{created}</Created></DocumentProperties>'
      + '<Styles>'
      + '<Style ss:ID="Currency"><NumberFormat ss:Format="Currency"></NumberFormat></Style>'
      + '<Style ss:ID="Date"><NumberFormat ss:Format="Medium Date"></NumberFormat></Style>'
      + '</Styles>' 
      + '{worksheets}</Workbook>'
    , tmplWorksheetXML = '<Worksheet ss:Name="{nameWS}"><Table>{rows}</Table></Worksheet>'
    , tmplCellXML = '<Cell{attributeStyleID}{attributeFormula}><Data ss:Type="{nameType}">{data}</Data></Cell>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
    return function(tables, wsnames, wbname, appname) {
      var ctx = "";
      var workbookXML = "";
      var worksheetsXML = "";
      var rowsXML = "";

      for (var i = 0; i < tables.length; i++) {
        if (!tables[i].nodeType) tables[i] = document.getElementById(tables[i]);
        for (var j = 0; j < tables[i].rows.length; j++) {
          rowsXML += '<Row>'
          for (var k = 0; k < tables[i].rows[j].cells.length; k++) {
            var dataType = tables[i].rows[j].cells[k].getAttribute("data-type");
            var dataStyle = tables[i].rows[j].cells[k].getAttribute("data-style");
            var dataValue = tables[i].rows[j].cells[k].getAttribute("data-value");
            dataValue = (dataValue)?dataValue:tables[i].rows[j].cells[k].innerHTML;
            var dataFormula = tables[i].rows[j].cells[k].getAttribute("data-formula");
            dataFormula = (dataFormula)?dataFormula:(appname=='Calc' && dataType=='DateTime')?dataValue:null;
            ctx = {  attributeStyleID: (dataStyle=='Currency' || dataStyle=='Date')?' ss:StyleID="'+dataStyle+'"':''
                   , nameType: (dataType=='Number' || dataType=='DateTime' || dataType=='Boolean' || dataType=='Error')?dataType:'String'
                   , data: (dataFormula)?'':dataValue
                   , attributeFormula: (dataFormula)?' ss:Formula="'+dataFormula+'"':''
                  };
            rowsXML += format(tmplCellXML, ctx);
          }
          rowsXML += '</Row>'
        }
        ctx = {rows: rowsXML, nameWS: wsnames[i] || 'Sheet' + i};
        worksheetsXML += format(tmplWorksheetXML, ctx);
        rowsXML = "";
      }

      ctx = {created: (new Date()).getTime(), worksheets: worksheetsXML};
      workbookXML = format(tmplWorkbookXML, ctx);

console.log(workbookXML);

      var link = document.createElement("A");
      link.href = uri + base64(workbookXML);
      link.download = wbname || 'Workbook.xls';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  })();

/////////////////////////////////////////////////////////////////////////////////// End Export///////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////START BUIDING TABLES TO EXPORT//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////TABLE PROFILE///////////////////////////////////////////////////////////////////////////////////////
 $j(document).ready(function() { 
 var isSubmitted = localStorage.getItem("Submit");
if(isSubmitted == "Yes"){
document.getElementById('myStatusPrompt').style.display = "block";
}
    var route = "forms/3/entries"; //The number is the id of the gravity form
    stringToSign = publicKey + ":" + method + ":" + route + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var url = 'http://52.87.218.201/gravityformsapi/' + route + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
    var companyname = qs["company_name"];//$j("#input_2_1").val();

    var WholeName = localStorage.getItem("WholeName");
    var search = {
        field_filters : [
            {
                key: '50',
                operator: 'contains',
                value: qs["company_name"] 
            },
         	{
                key: '69',
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
        response  = data.response;
        entries   = response.entries; //entries is a collection of Entry objects
        total_count = response.total_count;
        CreateTableFromJSON(entries, 'table1');

// here is your success from AJAX
//alert(JSON.stringify(entries));
 var tbody = $j("<tbody />"),tr;
/*
  $j.each(entries,function(_,obj) {
	tr = $j("<tr />");
   
var compname = obj["50"];
var location = obj["76"];
var hq = obj["77.1"];

       tr.append("<td><a class='orgname' style='font-weight:bold' href='#'>"+compname+"</a></td>");
       tr.append("<td><a class='location'>"+location+"</a></td>");
       tr.append("<td><a class='hq'>"+hq+"</a></td>");      
            
      	tr.appendTo(tbody);
        
  });
tbody.appendTo("#table11"); // only DOM insertion
*/
//alert(JSON.stringify(entries));
});//ajax call ends here
////////////////////////////////////////////////////////////////////////////////////////////////////END TABLE PROFILE///////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////BEGIN VALUE CHAIN//////////////////////////////////////////////////////////////////////////////////
    var VCroute = "forms/11/entries"; //The number is the id of the gravity form
    stringToSign = publicKey + ":" + method + ":" + VCroute + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var VCurl = 'http://52.87.218.201/gravityformsapi/' + VCroute + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
    
    var VCsearch = {
        field_filters : [
            {
                key: '8',
                operator: 'contains',
                value: qs["company_name"] 
            },
         	{
                key: '9',
                value: qs["step1_entry_id"],//This is OrgProfile Step 1 entry id
                operator: 'is'
            }
        ]
    };

//convert to a JSON string and url encode it so the JSON formatting persists
VCsearch = encodeURI(JSON.stringify(VCsearch));

//add search to url
VCurl += '&search=' + VCsearch;

    $j.get(VCurl, function(VCdata, textStatus)
    {
        //get the data from the api
        if ( VCdata.status != 200 || ( typeof( VCdata ) != 'object' ) ) {
            //http request failed
            document.write( 'There was an error attempting to access the API - ' + VCdata.status + ': ' + VCdata.response );

            return;
        }
        VCresponse  = VCdata.response;
        VCentries  = VCresponse.entries; //entries is a collection of Entry objects
        total_count = VCresponse.total_count;
        CreateTableFromJSON(VCentries, 'table2');

// here is your success from AJAX
//alert(JSON.stringify(VCentries));
 var VCtbody = $j("<tbody />"),tr;
/*
  $j.each(VCentries,function(_,VCobj) {
	VCtr = $j("<tr />");
   
var compname = VCobj["8"];
var completedby = VCobj["15"];
var completed = VCobj["12"];

       VCtr.append("<td><a style='font-weight:bold' href='#'>"+compname+"</a></td>");
       VCtr.append("<td><a>"+completedby+"</a></td>");
       VCtr.append("<td><a>"+completed+"</a></td>");            
       VCtr.appendTo(VCtbody);
        
  });
VCtbody.appendTo("#table12"); // only DOM insertion
*/
//alert(JSON.stringify(VCentries));
});//ajax call ends here

////////////////////////////////////////////////////////////////////////////////////////////////////END VALUE CHAIN//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////BEGIN EMPATHY//////////////////////////////////////////////////////////////////////////////////
    var EEroute = "forms/13/entries"; //The number is the id of the gravity form
    stringToSign = publicKey + ":" + method + ":" + EEroute + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var EEurl = 'http://52.87.218.201/gravityformsapi/' + EEroute + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
    
    var EEsearch = {
        field_filters : [
            {
                key: '25',
                operator: 'contains',
                value: qs["company_name"] 
            },
         	{
                key: '23',
                value: qs["step1_entry_id"],//This is OrgProfile Step 1 entry id
                operator: 'is'
            }
        ]
    };

//convert to a JSON string and url encode it so the JSON formatting persists
EEsearch = encodeURI(JSON.stringify(EEsearch));

//add search to url
EEurl += '&search=' + EEsearch;

    $j.get(EEurl, function(EEdata, textStatus)
    {
        //get the data from the api
        if ( EEdata.status != 200 || ( typeof( EEdata ) != 'object' ) ) {
            //http request failed
            document.write( 'There was an error attempting to access the API - ' + EEdata.status + ': ' + EEdata.response );

            return;
        }
        EEresponse  = EEdata.response;
        EEentries  = EEresponse.entries; //entries is a collection of Entry objects
        total_count = EEresponse.total_count;
        CreateTableFromJSON(EEentries, 'table3');

// here is your success from AJAX
//alert(JSON.stringify(EEentries));
 var EEtbody = $j("<tbody />"),tr;
/*
  $j.each(EEentries,function(_,EEobj) {
	EEtr = $j("<tr />");
   
var compname = EEobj["25"];
var completedby = EEobj["26"];
var completed = EEobj["27"];

       EEtr.append("<td><a style='font-weight:bold' href='#'>"+compname+"</a></td>");
       EEtr.append("<td><a>"+completedby+"</a></td>");
       EEtr.append("<td><a>"+completed+"</a></td>");            
      EEtr.appendTo(EEtbody);
        
  });
EEtbody.appendTo("#table13"); // only DOM insertion
*/
//alert(JSON.stringify(EEentries));
});//ajax call ends here
////////////////////////////////////////////////////////////////////////////////////////////////////END EMPATHY////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////BEGIN Business Insights//////////////////////////////////////////////////////////////////////////////////
    var BIroute = "forms/12/entries"; //The number is the id of the gravity form
    stringToSign = publicKey + ":" + method + ":" + BIroute + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var BIurl = 'http://52.87.218.201/gravityformsapi/' + BIroute + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
    
    var BIsearch = {
        field_filters : [
            {
                key: '32',
                operator: 'contains',
                value: qs["company_name"] 
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
BIurl += '&search=' + BIsearch;

    $j.get(BIurl, function(BIdata, textStatus)
    {
        //get the data from the api
        if ( BIdata.status != 200 || ( typeof( BIdata ) != 'object' ) ) {
            //http request failed
            document.write( 'There was an error attempting to access the API - ' + BIdata.status + ': ' + BIdata.response );

            return;
        }
        BIresponse  = BIdata.response;
        BIentries  = BIresponse.entries; //entries is a collection of Entry objects
        total_count = BIresponse.total_count;
        CreateTableFromJSON(BIentries, 'table4');
// here is your success from AJAX
//alert(JSON.stringify(BIentries));
 var BItbody = $j("<tbody />"),tr;
/*
  $j.each(BIentries,function(_,BIobj) {
	BItr = $j("<tr />");
   
var compname = BIobj["32"];
var completedby = BIobj["33"];
var completed = BIobj["34"];

       BItr.append("<td><a style='font-weight:bold' href='#'>"+compname+"</a></td>");
       BItr.append("<td><a>"+completedby+"</a></td>");
       BItr.append("<td><a>"+completed+"</a></td>");            
      BItr.appendTo(BItbody);
        
  });
BItbody.appendTo("#table14"); // only DOM insertion
*/
//alert(JSON.stringify(BIentries));
});//ajax call ends here


////////////////////////////////////////////////////////////////////////////////////////////////////END Business Insights////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////BEGIN Create Solutions//////////////////////////////////////////////////////////////////////////////////
    var CSroute = "forms/14/entries"; //The number is the id of the gravity form
    stringToSign = publicKey + ":" + method + ":" + CSroute + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var CSurl = 'http://52.87.218.201/gravityformsapi/' + CSroute + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
    
    var CSsearch = {
        field_filters : [
            {
                key: '11',
                operator: 'contains',
                value: qs["company_name"] 
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
CSurl += '&search=' + CSsearch;

    $j.get(CSurl, function(CSdata, textStatus)
    {
        //get the data from the api
        if ( CSdata.status != 200 || ( typeof( CSdata ) != 'object' ) ) {
            //http request failed
            document.write( 'There was an error attempting to access the API - ' + CSdata.status + ': ' + CSdata.response );

            return;
        }
        CSresponse  = CSdata.response;
        CSentries  = CSresponse.entries; //entries is a collection of Entry objects
        total_count = CSresponse.total_count;
        CreateTableFromJSON(CSentries, 'table5');
// here is your success from AJAX
//alert(JSON.stringify(CSentries));
 var CStbody = $j("<tbody />"),tr;
/*
  $j.each(CSentries,function(_,CSobj) {
	CStr = $j("<tr />");
   
var compname = CSobj["11"];
var completedby = CSobj["12"];
var completed = CSobj["13"];

       CStr.append("<td><a style='font-weight:bold' href='#'>"+compname+"</a></td>");
       CStr.append("<td><a>"+completedby+"</a></td>");
       CStr.append("<td><a>"+completed+"</a></td>");            
      CStr.appendTo(BItbody);
        
  });
CStbody.appendTo("#table15"); // only DOM insertion
*/
//alert(JSON.stringify(CSentries));
});//ajax call ends here

////////////////////////////////////////////////////////////////////////////////////////////////////END Create Solutions////////////////////////////////////////////////////////////////////////////////////
});//document ready
//////////////////////////////////////////////////////////////////////////////////////////////////////END BUILDING TABLES////////////////////////////////////////////////////////////////////////