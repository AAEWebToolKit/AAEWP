var $j = jQuery.noConflict();
var url = window.location.href; 
var strengths = {"name":"strengths", "jsonControlId": "#input_12_39", "tblId":"#tblStrengths", 
			 	 "dd1_Id":"#input_12_2", "dd2_Id":"#input_12_3", "comments":"#input_12_23", 
			  	 "noDataLblId":"#lblNoStrengths"};


var challenges = {"name":"challenges", "jsonControlId": "#input_12_42", "tblId":"#tblChallenges", 
			 	 "dd1_Id":"#input_12_5", "dd2_Id":"#input_12_6", "comments":"#input_12_40",
			  	 "noDataLblId":"#lblNoChallenges"};

var barriers = {"name":"barriers", "jsonControlId": "#input_12_44", "tblId":"#tblBarriers", 
			 	 "dd1_Id":"#input_12_12", "dd2_Id":"#input_12_13", "comments":"#input_12_28",
			  	 "noDataLblId":"#lblNoBarriers"};

var opportunities = {"name":"opportunities", "jsonControlId": "#input_12_46", "tblId":"#tblOpportunities", 
				"dd1_Id":"#input_12_17", "dd2_Id":"#input_12_18", "comments":"#input_12_27",
				"noDataLblId":"#lblNoOpportunities"};

$j(document).ready(function(){ 

	$j("#btnAddStrength").click(function(){
		addBtnClick(strengths);
	});

	$j("#btnAddChallenge").click(function(){
		addBtnClick(challenges);
	});

	$j("#btnAddBarrier").click(function(){
		addBtnClick(barriers);
	});

	$j("#btnAddOpportunity").click(function(){
		addBtnClick(opportunities);
	});

	$j(".deleteBtn").live( "click", function(e) {
		deleteRow(e);
	});

	buildTable(strengths);
	buildTable(challenges);
	buildTable(barriers);
	buildTable(opportunities);

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
	var bdd1 = $j(action.dd1_Id).val();
	var bdd2 = $j(action.dd2_Id).val();
	var comment = $j(action.comments).val();

	jObj.bdd1 = bdd1;
	jObj.bdd2 = bdd2;
	jObj.bComments = comment
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
	var td_dd1 = '<td>'+ jObj.bdd1 +'</td>';
	var td_dd2 = '<td>'+ jObj.bdd2 +'</td>';
	var tdDelete = '<td><input type="button" actionName="'+ action.name +'" class="gform_button button deleteBtn secondary" value="Delete" id="'+ jObj.id	+'"></input</td>';
	$j(action.tblId + ' tr:last').after('<tr>' + td_dd1 + td_dd2 + tdDelete +'</tr>');
	$j("td").css("text-align","center");
}
//END FUNCTIONS