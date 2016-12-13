var $j = jQuery.noConflict();
var url = window.location.href; 

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



var clickedEntity = localStorage.getItem("clicked");
                if(clickedEntity != location.pathname.slice(1,location.pathname.length)){               
               
                localStorage.removeItem("LoginStatus");
 }
