var $j = jQuery.noConflict();

var strengths = {"name":"strengths", "jsonControlId": "#input_12_39", "tblId":"#tblStrengths", 
			 	 "dd1_Id":"#input_12_2", "dd2_Id":"#input_12_3", "comments":"#input_12_23", 
			  	 "noDataLblId":"#lblNoStrengths","addBtnID":"#btnAddStrength"};


var challenges = {"name":"challenges", "jsonControlId": "#input_12_42", "tblId":"#tblChallenges", 
			 	 "dd1_Id":"#input_12_5", "dd2_Id":"#input_12_6", "comments":"#input_12_40",
			  	 "noDataLblId":"#lblNoChallenges","addBtnID":"#btnAddChallenge"};

var barriers = {"name":"barriers", "jsonControlId": "#input_12_44", "tblId":"#tblBarriers", 
			 	 "dd1_Id":"#input_12_12", "dd2_Id":"#input_12_13", "comments":"#input_12_28",
			  	 "noDataLblId":"#lblNoBarriers","addBtnID":"#btnAddBarrier"};

var opportunities = {"name":"opportunities", "jsonControlId": "#input_12_46", "tblId":"#tblOpportunities", 
				"dd1_Id":"#input_12_17", "dd2_Id":"#input_12_18", "comments":"#input_12_27",
				"noDataLblId":"#lblNoOpportunities","addBtnID":"#btnAddOpportunity"};

var actionArray = [strengths,challenges,barriers,opportunities];

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
         window["gf_submitting_12"]=false;
         $j( this ).dialog( "close" ); 
        }
      }
    });
 });


$j(document).ready(function(){ 
    $j("#gform_12").attr("onsubmit", "return validateForm()");

	$j.each(actionArray, function(idx,ele){

		$j(ele.addBtnID).click(function(){
			addBtnClick(eval(ele.name));
		});

		buildTable(eval(ele.name));
	})

	$j(".deleteBtn").live( "click", function(e) {
		deleteEvent = e;
		$j( "#dialog-confirm" ).dialog( "open" );
	});

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

var clearInputFields = function(action){
	$j(action.dd1_Id +" option:selected").removeAttr('selected','')
	$j(action.dd1_Id).parent().find('.chosen-container a span').text($j($j(action.dd1_Id + " option")[0]).text());

	$j(action.dd2_Id +" option:selected").removeAttr('selected','')
	$j(action.dd2_Id).parent().find('.chosen-container a span').text($j($j(action.dd2_Id + " option")[0]).text());

	$j(action.comments).val('');
}

function validateForm(){
	var strenghtscatured = $j("#input_12_39").val();
	var challengescaptured = $j("#input_12_42").val();
	var barriercaptured = $j("#input_12_44").val();
	var opportunitycaptured = $j("#input_12_46").val();
	var needData = false;
	//Check Insights Captured
	 if(strenghtscatured == ""){
		if (challengescaptured == ""){
		
			if (barriercaptured == ""){
		
				if (opportunitycaptured == ""){
					needData = true;
				}

			}
		}
	        
	    }
	 
	 
	 
	    
	if (needData){
		$j("#dialog-validate" ).dialog( "open" );
	         return false;         
	    }
	else{
	   return true;
	}

}
//END FUNCTIONS