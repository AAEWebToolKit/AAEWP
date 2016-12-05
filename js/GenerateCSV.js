

//set variables
    var d = new Date;
    var expiration = 7200; // 1 hour,
    var unixtime = parseInt(d.getTime() / 1000);
    var future_unixtime = unixtime + expiration;
    var publicKey = "293dabb883";
    var privateKey = "d6c574f9f4f6a70";
    var method = "GET";
    

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

// here is your success from AJAX
//alert(JSON.stringify(entries));
 var tbody = $j("<tbody />"),tr;

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
tbody.appendTo("#table1"); // only DOM insertion

//alert(JSON.stringify(entries));
});//ajax call ends here
////////////////////////////////////////////////////////////////////////////////////////////////////END TABLE PROFILE///////////////////////////////////////////////////////////////////////////////
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

// here is your success from AJAX
//alert(JSON.stringify(EEentries));
 var EEtbody = $j("<tbody />"),tr;

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
EEtbody.appendTo("#table2"); // only DOM insertion

//alert(JSON.stringify(EEentries));
});//ajax call ends here


////////////////////////////////////////////////////////////////////////////////////////////////////END EMPATHY////////////////////////////////////////////////////////////////////////////////////

});//document ready
//////////////////////////////////////////////////////////////////////////////////////////////////////END BUILDING TABLES////////////////////////////////////////////////////////////////////////