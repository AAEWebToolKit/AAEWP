var $j = jQuery.noConflict();

$j(document).ready(function(){ 
	$j("#btnAddStakeholder").click(function(){
		var jsonVal = $j("#input_13_31").val();
		var jObj = getjObj();
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
		appendToTable(jObj);
		$j("#input_13_31").val(JSON.stringify(jArray));
		$j("#lblNoStakeHolders").css("visibility","hidden");
	});

	$j(".deleteStakeHolder").live( "click", function(e) {
		var objId = e.target.id;
		var jsonVal = $j("#input_13_31").val();
		var jArray = $j.parseJSON(jsonVal);
		var newArray = jQuery.grep(jArray, function(value) {
						  return value.id != objId;
					   });
        if(newArray.length > 0)
        {
        	$j("#input_13_31").val(JSON.stringify(newArray));
        }	
        else
        {
        	$j("#input_13_31").val("");
        }
		$j(this).closest("tr").remove();

		if(newArray.length == 0)
		{
			$j("#lblNoStakeHolders").css("visibility","visible");
		}
	});

	buildTable();
});


//FUNCTIONS

var getjObj = function(){

	var jObj = {};
	var sFirstName = $j("#input_13_1").val();
	var sLastName = $j("#input_13_2").val();
	var sRole = $j("#input_13_3").val();
	var sValueChainStage = $j("#input_13_4").val();
	var sFeeling = $j("#input_13_17 input:checked").val()
	var sSaying = $j("#input_13_9").val();
	var sDoing = $j("#input_13_10").val();
    var sMotivations = $j("#input_13_11 input:checked").map(function() {
						    return this.value;
						}).get().join(",");

	jObj.sFirstName = sFirstName;
	jObj.sLastName = sLastName;
	jObj.sRole = sRole;
	jObj.sValueChainStage = sValueChainStage;
	jObj.sFeeling = sFeeling;
	jObj.sSaying = sSaying;
	jObj.sDoing = sDoing;
	jObj.sMotivations = sMotivations;
	jObj.id = Math.floor(Math.random() * 26) + Date.now();

	return jObj;
}


var buildTable = function(){
	var jsonVal = $j("#input_13_31").val();
	var jArray = $j.parseJSON(jsonVal);
	$j(jArray).map(function(){ appendToTable(this); });
	if(jArray && jArray.length > 0)
	{
		$j("#lblNoStakeHolders").css("visibility","hidden")
	}
}

var appendToTable = function(jObj){
	var tdName = '<td>'+ jObj.sFirstName + ' '+jObj.sLastName+'</td>';
	var tdRole = '<td>'+ jObj.sRole +'</td>';
	var tdValueChain = '<td>'+ jObj.sValueChainStage +'</td>';
	var tdDelete = '<td><input type="button" class="gform_button button deleteStakeHolder" value="Delete" id="'+ jObj.id	+'"></input</td>';
	$j('#tblStakeHolders tr:last').after('<tr>' + tdName + tdRole + tdValueChain + tdDelete +'</tr>');
	$j("td").css("text-align","center");
}

//END FUNCTIONS