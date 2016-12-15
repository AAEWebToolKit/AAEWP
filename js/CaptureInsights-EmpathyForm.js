var $j = jQuery.noConflict();
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
         window["gf_submitting_13"]=false;
         $j( this ).dialog( "close" ); 
        }
      }
    });
 });


$j(document).ready(function(){
        $j("#gform_13").attr("onsubmit", "return validateForm()"); 
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
		clearInputFields();
	});

	$j(".deleteStakeHolder").live( "click", function(e) {
		deleteEvent = e;
		$j( "#dialog-confirm" ).dialog( "open" );
	});        
        
	buildTable();
});


//FUNCTIONS

var deleteRow = function(e){
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
	$j(e.target).closest("tr").remove();

	if(newArray.length == 0)
	{
		$j("#lblNoStakeHolders").css("visibility","visible");
	}
};

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
    var sOtherMotivation = $j("#input_13_39").val();

	jObj.sFirstName = sFirstName;
	jObj.sLastName = sLastName;
	jObj.sRole = sRole;
	jObj.sValueChainStage = sValueChainStage;
	jObj.sFeeling = sFeeling;
	jObj.sSaying = sSaying;
	jObj.sDoing = sDoing;
	jObj.sMotivations = sMotivations;
	jObj.sOtherMotivation = sOtherMotivation
	jObj.id = Math.floor(Math.random() * 26) + Date.now();

	return jObj;
}

var clearInputFields = function(){
	$j("#input_13_1").val('');
	$j("#input_13_2").val('');
	
	$j("#input_13_3 option:selected").removeAttr('selected','')
	$j("#input_13_3").parent().find('.chosen-container a span').text($j($j("#input_13_3 option")[0]).text());

	$j("#input_13_4 option:selected").removeAttr('selected','');
	$j("#input_13_4").parent().find('.chosen-container a span').text($j($j("#input_13_4 option")[0]).text());

	$j("#input_13_17 input:checked").removeAttr('checked');
	$j("#input_13_39").val('');
	$j("#input_13_9").val('');
	$j("#input_13_10").val('');
    $j.each($j("#input_13_11 input:checked"),function(idx,ele){$j(ele).removeAttr("checked")})
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
	var tdDelete = '<td><input type="button" class="gform_button button deleteStakeHolder secondary" value="Delete" id="'+ jObj.id	+'"></input</td>';
	$j('#tblStakeHolders tr:last').after('<tr>' + tdName + tdRole + tdValueChain + tdDelete +'</tr>');
	$j("td").css("text-align","center");
}

function validateForm(){
var insightscaptured = $j("#input_13_31").val();

//Check Insights Captured
if(insightscaptured == ""){   
        $j("#dialog-validate" ).dialog( "open" );
         return false;
    }
    else{
         return true;         
    }
}
//END FUNCTIONS