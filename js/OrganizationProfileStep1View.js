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

var WholeName = localStorage.getItem("WholeName");
var qs = getQueryString();

if(qs["filter_9"] != null){
   if(WholeName != qs["filter_9"]){
	$j(".gv-table-view").detach();
        $j(".restricted").css("visibility", "visible");
    //window.location.href = "http://52.87.218.201/";
    }
}