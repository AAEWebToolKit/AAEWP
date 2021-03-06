var $j = jQuery.noConflict();

var solutions = {"name":"solutions", "jsonControlId": "#input_14_19", "tblId":"#tblSolution", 
			 	 "dd1_Id":"#input_14_2", "comments":"#input_14_3", 
			  	 "noDataLblId":"#lblNoSolution"};

var deleteEvent = null;

$j( function() {
    $j( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      autoOpen: false,
      buttons: {
        "Delete Item": function() {
          deleteRow(deleteEvent);
          $j( this ).dialog( "close" );
        },
        Cancel: function() {
          $j( this ).dialog( "close" );
        }
      }
    });
 });

$j( function() {
    $j( "#dialog-validate" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      autoOpen: false,
      buttons: {
        "OK": function() {
         window["gf_submitting_14"]=false;
         $j( this ).dialog( "close" ); 
        }
      }
    });
 });

$j(document).ready(function(){ 
    $j("#gform_14").attr("onsubmit", "return validateForm()");

	$j("#btnAddSolution").click(function(){
		addBtnClick(solutions);
	});


	$j(".deleteBtn").live( "click", function(e) {
		deleteEvent = e;
		$j( "#dialog-confirm" ).dialog( "open" );
	});

	buildTable(solutions);
});

//FUNCTIONS

var addBtnClick = function(action){
	var jsonVal = $j(action.jsonControlId).val();
	var jObj = getjObj(action);
	var jArray = [];

	if(jsonVal == "")
	{
		jArray.push(jObj);
	}
	else
	{
		jArray = $j.parseJSON(jsonVal);
		jArray.push(jObj);

	}
	appendToTable(jObj,action);
	$j(action.jsonControlId).val(JSON.stringify(jArray));
	$j(action.noDataLblId).css("visibility","hidden");
	clearInputFields(action);
}

var deleteRow = function(event){
	var action = eval($j(event.target).attr("actionname"));
	var objId = event.target.id;
	var jsonVal = $j(action.jsonControlId).val();
	var jArray = $j.parseJSON(jsonVal);
	var newArray = jQuery.grep(jArray, function(value) {
					  return value.id != objId;
				   });
	if(newArray.length > 0)
	{
		$j(action.jsonControlId).val(JSON.stringify(newArray));
	}	
	else
	{
		$j(action.jsonControlId).val("");
	}
	$j(event.target).closest("tr").remove();

	if(newArray.length == 0)
	{
		$j(action.noDataLblId).css("visibility","visible");
	}
}

var getjObj = function(action){

	var jObj = {};
	var sdd1 = $j(action.dd1_Id).val();
	var scomment = $j(action.comments).val();

	jObj.sdd1 = sdd1;
	jObj.sComments = scomment
	jObj.id = Math.floor(Math.random() * 26) + Date.now();

	return jObj;
}

var buildTable = function(action){
	var jsonVal = $j(action.jsonControlId).val();
	var jArray = $j.parseJSON(jsonVal);
	$j(jArray).map(function(){ appendToTable(this,action); });
	if(jArray && jArray.length > 0)
	{
		$j(action.noDataLblId).css("visibility","hidden")
	}
}


var appendToTable = function(jObj, action){
	var td_dd1 = '<td>'+ jObj.sdd1 +'</td>';
	var td_comment = '';

	if(jObj.sComments.length > 50)
	{
		td_comment = '<td>'+ jObj.sComments.substr(0,50) + '...' +'</td>';
	}
	else
	{
		td_comment = '<td>'+ jObj.sComments +'</td>';	
	}
	var tdDelete = '<td><input type="button" actionName="'+ action.name +'" class="gform_button button deleteBtn secondary" value="Delete" id="'+ jObj.id	+'"></input</td>';
	$j(action.tblId + ' tr:last').after('<tr>' + td_dd1 + td_comment + tdDelete +'</tr>');
	$j("td").css("text-align","center");
}

var clearInputFields = function(action){
	$j(action.dd1_Id +" option:selected").removeAttr('selected','')
	$j(action.dd1_Id).parent().find('.chosen-container a span').text($j($j(action.dd1_Id + " option")[0]).text());

	$j(action.comments).val('');
}

function validateForm(){
	var solutionscaptured = $j("#input_14_19").val();

	//Check Insights Captured
	if(soutionscaptured == ""){   
	    $j("#dialog-validate" ).dialog( "open" );
	     return false;
	}
	else{
	     return true;         
	}
}
//END FUNCTIONS