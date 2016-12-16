var $j = jQuery.noConflict();
var baseURLEntry = location.protocol + '//' + location.host + location.pathname;

function fnExcelReport() {
    var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange;
    var j = 0;
    tab = document.getElementById('table1'); // id of table

    for (j = 0; j < tab.rows.length; j++) {
        tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text = tab_text + "</table>";
    tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
    tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
    tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer
    {
        txtArea1.document.open("txt/html", "replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus();
        sa = txtArea1.document.execCommand("SaveAs", true, "AAEWebToolkit.xls");
    } else //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));

    return (sa);
}


function getQueryString() {
    var assoc = {};
    var decode = function(s) {
        return decodeURIComponent(s.replace(/\+/g, " "));
    };
    var queryString = location.search.substring(1);
    var keyValues = queryString.split('&');

    for (var i in keyValues) {
        var key = keyValues[i].split('=');
        if (key.length > 1) {
            assoc[decode(key[0])] = decode(key[1]);
        }
    }

    return assoc;
}

function GetStep3EntryID(section) {
    switch (section) {
        case "mvc":
            var qs = getQueryString();

            //create signature and url for putting entries
            stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
            sig = CalculateSig(stringToSign, privateKey);

            //create signature and url for first entry
            stringToSign = publicKey + ":GET:entries/" + $j("#input_11_9").val() + ":" + future_unixtime;
            sig = CalculateSig(stringToSign, privateKey);
            var get_url6 = 'http://34.195.47.189/gravityformsapi/entries/' + $j("#input_11_9").val() + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

            $j.get(get_url6, function(data, textStatus) {
                //get the data from the api for the first entry
                if (data.status != 200 || (typeof(data) != 'object')) {
                    //http request failed
                    errorOccured = "Yes";
                    console.log('There was an error attempting to access the API - ' + data.status + ': ' + data.response);
                    return;
                }
                entry9 = data.response;
                $j("#edit_id").val(entry9['12']);

                return entry9['12'];


            });
            break;

    }
}


function SetMenuLinks(page) {
    var entry = qs["step1_entry_id"];
    //var link = "http://34.195.47.189/create-form-step-3-view/entry/" + qs["step3_entry_id"];


    //create signature and url for putting entries
    stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    //var put_url = 'http://34.195.47.189/gravityformsapi/entries?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

    //create signature and url for first entry
    stringToSign = publicKey + ":GET:entries/" + entry + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);

    var get_url1 = 'http://34.195.47.189/gravityformsapi/entries/' + entry + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
    var errorOccured = "proceed";
    $j.get(get_url1, function(data, textStatus) {
        //get the data from the api for the first entry
        if (data.status != 200 || (typeof(data) != 'object')) {
            //http request failed
            errorOccured = "Yes";
            console.log('There was an error attempting to access the API - ' + data.status + ': ' + data.response);
            return;
        }


        entry1 = data.response;
        switch (page) {
            case "ee":
                //console.log('Setting Empathy Menu');

                $j("#anchorBI").attr("href", "http://34.195.47.189/capture-insights-business-insights/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                $j("#anchorCS").attr("href", "http://34.195.47.189/capture-insights-create-solutions/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                break;
            case "bi":

                $j("#anchorEE").attr("href", "http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                $j("#anchorCS").attr("href", "http://34.195.47.189/capture-insights-create-solutions/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                break;
            case "cs":


                $j("#anchorEE").attr("href", "http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                $j("#anchorBI").attr("href", "http://34.195.47.189/capture-insights-business-insights/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                break;
            case "ee-form":

                $j("#anchorBI").attr("href", "http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                $j("#anchorCS").attr("href", "http://34.195.47.189/capture-insights-create-solutions/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                break;
            case "bi-form":

                $j("#anchorEE").attr("href", "http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                $j("#anchorCS").attr("href", "http://34.195.47.189/capture-insights-create-solutions/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                break;
            case "cs-form":

                $j("#anchorEE").attr("href", "http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);
                $j("#anchorBI").attr("href", "http://34.195.47.189/capture-insights-business-insights/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);
                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1["10"]);

                break;
            default:
                break;
        }

    });
}

function SetCaptureInsightSubMenus(page) {
    var routeparams = localStorage.getItem("MenuLink");
    if (routeparams == null || routeparams == 'null') {
        switch (page) {
            case "ee":
                $j('<h3 id="EmpathyNav" style="background-color:#f3f3f4;margin-top:0;margin-bottom:0;"><a id="anchorEE" style="color: #f1472c; text-decoration: underline; margin-left:10%;"><img id="empathy_sel" src="/wp-content/uploads/AAEWP/images/but_empathy_sel.png" style="max-width:100%"></img></a><a id="anchorBI" style="color: black; "><img src="/wp-content/uploads/AAEWP/images/but_insights.png" style="max-width:100%"></img></a><a id="anchorCS" style="color: black; "><img src="/wp-content/uploads/AAEWP/images/but_solutions.png" style="max-width:100%"></img></a><a id="anchorFS" style="color: black; visibility:hidden"><img src="/wp-content/uploads/AAEWP/images/but_finish.png" style="max-width:100%"></img></a></h3>').insertAfter(".page_head.has_header_img.hide_mob_headerimg");
                var navbar = $j("#EmpathyNav").find("a");

                $j("#anchorBI").attr("href", "http://34.195.47.189/capture-insights-business-insights/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);

                $j("#anchorCS").attr("href", "http://34.195.47.189/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);
                if ($j(".display-name")[0]) {
                    if (qs["company_name"] != null) {
                        if (qs["company_name"] != 'null') {
                            if (qs["company_name"] != 'undefined') {
                                $j("#anchorFS").css("visibility", "visible");
                                SetMenuLinks('ee');
                            }
                        }
                    }
                }


                break;
            case "bi":
                $j('<h3 id="BINav" style="background-color:#f3f3f4;margin-top:0;margin-bottom:0;"><a id="anchorEE" style="color: #f1472c; text-decoration: underline; margin-left:10%"><img id="empathy_sel" src="/wp-content/uploads/AAEWP/images/but_empathy.png" style="max-width:100%"></img></a><a id="anchorBI" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_insights_sel.png" style="max-width:100%"></img></a><a id="anchorCS" style="color: black; "><img src="/wp-content/uploads/AAEWP/images/but_solutions.png" style="max-width:100%"></img></a><a id="anchorFS" style="color: black; visibility:hidden"><img src="/wp-content/uploads/AAEWP/images/but_finish.png" style="max-width:100%"></img></a></h3>').insertAfter(".page_head.has_header_img.hide_mob_headerimg");
                var navbar = $j("#BINav").find("a");

                $j("#anchorEE").attr("href", "http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);

                $j("#anchorCS").attr("href", "http://34.195.47.189/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);
                if ($j(".display-name")[0]) {
                    if (qs["company_name"] != null) {
                        if (qs["company_name"] != 'null') {
                            if (qs["company_name"] != 'undefined') {
                                $j("#anchorFS").css("visibility", "visible");
                                SetMenuLinks('bi');
                            }
                        }
                    }
                }



                break;
            case "cs":
                $j('<h3 id="CSNav" style="background-color:#f3f3f4;margin-top:0;margin-bottom:0;"><a id="anchorEE" style="color: #f1472c; text-decoration: underline; margin-left:10%"><img id="empathy_sel" src="/wp-content/uploads/AAEWP/images/but_empathy.png" style="max-width:100%"></img></a><a id="anchorBI" style="color: black; "><img src="/wp-content/uploads/AAEWP/images/but_insights.png" style="max-width:100%"></img></a><a id="anchorCS" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_solutions_sel.png" style="max-width:100%"></img></a><a id="anchorFS" style="color: black; visibility:hidden"><img src="/wp-content/uploads/AAEWP/images/but_finish.png" style="max-width:100%"></img></a></h3>').insertAfter(".page_head.has_header_img.hide_mob_headerimg");
                var navbar = $j("#CSNav").find("a");

                $j("#anchorEE").attr("href", "http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);

                $j("#anchorBI").attr("href", "http://34.195.47.189/capture-insights-business-insights/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);

                if ($j(".display-name")[0]) {
                    if (qs["company_name"] != null) {
                        if (qs["company_name"] != 'null') {
                            if (qs["company_name"] != 'undefined') {
                                $j("#anchorFS").css("visibility", "visible");
                                SetMenuLinks('cs');
                            }
                        }
                    }
                }


                break;
            case "ee-form":
                $j(".single_post_content").prepend('<h3 id="EmpathyNav" style="background-color:#f3f3f4;margin-top:0;margin-bottom:0;"><a id="anchorEE" style="color: #f1472c; text-decoration: underline;"><img id="empathy_sel" src="/wp-content/uploads/AAEWP/images/but_empathy_sel.png" style="max-width:100%"></img></a><a id="anchorBI" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_insights.png" style="max-width:100%"></img></a><a id="anchorCS" style="color: black;><img src="/wp-content/uploads/AAEWP/images/but_solutions.png" style="max-width:100%"></img></a><a id="anchorFS" style="color: black; visibility:hidden"><img src="/wp-content/uploads/AAEWP/images/but_finish.png" style="max-width:100%"></img></a></h3>');
                var navbar = $j("#EmpathyNav").find("a");

                $j("#anchorBI").attr("href", "http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);

                $j("#anchorCS").attr("href", "http://34.195.47.189/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);
                if ($j(".display-name")[0]) {
                    if (qs["company_name"] != null) {
                        if (qs["company_name"] != 'null') {
                            if (qs["company_name"] != 'undefined') {
                                $j("#anchorFS").css("visibility", "visible");
                                SetMenuLinks('ee-form');
                            }
                        }
                    }
                }


                break;
            case "bi-form":
                $j(".single_post_content").prepend('<h3 id="BINav" style="background-color:#f3f3f4;margin-top:0;margin-bottom:0;"><a id="anchorEE" style="color: #f1472c; text-decoration: underline;"><img id="empathy_sel" src="/wp-content/uploads/AAEWP/images/but_empathy.png" style="max-width:100%"></img></a><a id="anchorBI" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_insights_sel.png" style="max-width:100%"></img></a><a id="anchorCS" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_solutions.png" style="max-width:100%"></img></a><a id="anchorFS" style="color: black; visibility:hidden"><img src="/wp-content/uploads/AAEWP/images/but_finish.png" style="max-width:100%"></img></a></h3>');

                var navbar = $j("#BINav").find("a");


                $j("#anchorEE").attr("href", "http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);

                $j("#anchorCS").attr("href", "http://34.195.47.189/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);

                if ($j(".display-name")[0]) {
                    if (qs["company_name"] != null) {
                        if (qs["company_name"] != 'null') {
                            if (qs["company_name"] != 'undefined') {
                                $j("#anchorFS").css("visibility", "visible");
                                SetMenuLinks('bi-form');
                            }
                        }
                    }
                }


                break;
            case "cs-form":
                $j(".single_post_content").prepend('<h3 id="CSNav" style="background-color:#f3f3f4;margin-top:0;margin-bottom:0;"><a id="anchorEE" style="color: #f1472c; text-decoration: underline;"><img id="empathy_sel" src="/wp-content/uploads/AAEWP/images/but_empathy.png" style="max-width:100%"></img></a><a id="anchorBI" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_insights.png" style="max-width:100%"></img></a><a id="anchorCS" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_solutions_sel.png" style="max-width:100%"</img></a><a id="anchorFS" style="color: black; visibility:hidden"><img src="/wp-content/uploads/AAEWP/images/but_finish.png" style="max-width:100%"></img></a></h3>');
                var navbar = $j("#CSNav").find("a");

                //////////DEFAULTS////////
                $j("#anchorEE").attr("href", "http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);

                $j("#anchorBI").attr("href", "http://34.195.47.189/capture-insights-business-insights/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"]);


                if ($j(".display-name")[0]) {
                    if (qs["company_name"] != null) {
                        if (qs["company_name"] != 'null') {
                            if (qs["company_name"] != 'undefined') {
                                $j("#anchorFS").css("visibility", "visible");
                                SetMenuLinks('cs-form');
                            }
                        }
                    }
                }


                break;
            default:
                break;
        }
    } else {

        switch (page) {
            case "ee":
                $j('<h3 id="EmpathyNav" style="background-color:#f3f3f4;margin-top:0;margin-bottom:0;"><a id="anchorEE" style="color: #f1472c; text-decoration: underline; margin-left:10%"><img id="empathy_sel" src="/wp-content/uploads/AAEWP/images/but_empathy_sel.png" style="max-width:100%"></img></a><a id="anchorBI" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_insights.png" style="max-width:100%"></img></a><a id="anchorCS" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_solutions.png" style="max-width:100%"></img></a><a id="anchorFS" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_finish.png" style="max-width:100%"></img></a></h3>').insertAfter(".page_head.has_header_img.hide_mob_headerimg");
                var navbar = $j("#EmpathyNav").find("a");

                $j("#anchorBI").attr("href", "http://34.195.47.189/capture-insights-business-insights/" + routeparams); // "http://34.195.47.189/capture-insights-business-insights/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                $j("#anchorCS").attr("href", "http://34.195.47.189/capture-insights-create-solutions/" + routeparams); // "http://34.195.47.189/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/" + routeparams); // "http://34.195.47.189/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                break;
            case "bi":

                $j('<h3 id="BINav" style="background-color:#f3f3f4;margin-top:0;margin-bottom:0;"><a id="anchorEE" style="color: #f1472c; text-decoration: underline; margin-left:10%"><img id="empathy_sel" src="/wp-content/uploads/AAEWP/images/but_empathy.png" style="max-width:100%"></img></a><a id="anchorBI" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_insights_sel.png" style="max-width:100%"></img></a><a id="anchorCS" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_solutions.png" style="max-width:100%"></img></a><a id="anchorFS" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_finish.png" style="max-width:100%"></img></a></h3>').insertAfter(".page_head.has_header_img.hide_mob_headerimg");
                var navbar = $j("#BINav").find("a");

                $j("#anchorEE").attr("href", "http://34.195.47.189/capture-insights-establish-empathy/" + routeparams); // "http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                $j("#anchorCS").attr("href", "http://34.195.47.189/capture-insights-create-solutions/" + routeparams); // "http://34.195.47.189/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/" + routeparams); // "http://34.195.47.189/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                break;
            case "cs":
                $j('<h3 id="CSNav" style="background-color:#f3f3f4;margin-top:0;margin-bottom:0;"><a id="anchorEE" style="color: #f1472c; text-decoration: underline; margin-left:10%"><img id="empathy_sel" src="/wp-content/uploads/AAEWP/images/but_empathy.png" style="max-width:100%"></img></a><a id="anchorBI" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_insights.png" style="max-width:100%"></img></a><a id="anchorCS" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_solutions_sel.png" style="max-width:100%"></img></a><a id="anchorFS" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_finish.png" style="max-width:100%"></img></a></h3>').insertAfter(".page_head.has_header_img.hide_mob_headerimg");
                var navbar = $j("#CSNav").find("a");

                $j("#anchorEE").attr("href", "http://34.195.47.189/capture-insights-establish-empathy/" + routeparams); // "http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                $j("#anchorBI").attr("href", "http://34.195.47.189/capture-insights-business-insights/" + routeparams); // "http://34.195.47.189/capture-insights-business-insights/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/" + routeparams); // "http://34.195.47.189/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                break;
            case "ee-form":
                $j(".single_post_content").prepend('<h3 id="EmpathyNav" style="background-color:#f3f3f4;margin-top:0;margin-bottom:0;"><a id="anchorEE" style="color: #f1472c; text-decoration: underline;"><img id="empathy_sel" src="/wp-content/uploads/AAEWP/images/but_empathy_sel.png" style="max-width:100%"></img></a><a id="anchorBI" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_insights.png" style="max-width:100%"></img></a><a id="anchorCS" style="color: black; "><img src="/wp-content/uploads/AAEWP/images/but_solutions.png" style="max-width:100%"></img></a><a id="anchorFS" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_finish.png" style="max-width:100%"></img></a></h3>');
                var navbar = $j("#EmpathyNav").find("a");

                $j("#anchorBI").attr("href", "http://34.195.47.189/capture-insights-business-insights/" + routeparams); //"http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                $j("#anchorCS").attr("href", "http://34.195.47.189/capture-insights-create-solutions/" + routeparams); //"http://34.195.47.189/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/" + routeparams); //"http://34.195.47.189/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                break;
            case "bi-form":
                $j(".single_post_content").prepend('<h3 id="BINav" style="background-color:#f3f3f4;margin-top:0;margin-bottom:0;height:100px"><a id="anchorEE" style="color: #f1472c; text-decoration: underline;"><img id="empathy_sel" src="/wp-content/uploads/AAEWP/images/but_empathy.png" style="max-width:100%"></img></a><a id="anchorBI" style="color: black; "><img src="/wp-content/uploads/AAEWP/images/but_insights_sel.png" style="max-width:100%"></img></a><a id="anchorCS" style="color: black; "><img src="/wp-content/uploads/AAEWP/images/but_solutions.png"></img></a><a id="anchorFS" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_finish.png" style="max-width:100%"></img></a></h3>');

                var navbar = $j("#BINav").find("a");

                $j("#anchorEE").attr("href", "http://34.195.47.189/capture-insights-establish-empathy/" + routeparams); //"http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                $j("#anchorCS").attr("href", "http://34.195.47.189/capture-insights-create-solutions/" + routeparams); //"http://34.195.47.189/capture-insights-create-solutions/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/" + routeparams); //"http://34.195.47.189/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                break;
            case "cs-form":
                $j(".single_post_content").prepend('<h3 id="CSNav" style="background-color:#f3f3f4;margin-top:0;margin-bottom:0;"><a id="anchorEE" style="color: #f1472c; text-decoration: underline;"><img id="empathy_sel" src="/wp-content/uploads/AAEWP/images/but_empathy.png" style="max-width:100%"></img></a><a id="anchorBI" style="color: black; "><img src="/wp-content/uploads/AAEWP/images/but_insights.png" style="max-width:100%"></img></a><a id="anchorCS" style="color: black; "><img src="/wp-content/uploads/AAEWP/images/but_solutions_sel.png" style="max-width:100%"></img></a><a id="anchorFS" style="color: black;"><img src="/wp-content/uploads/AAEWP/images/but_finish.png" style="max-width:100%"></img></a></h3>');
                //$j(".single_post_content").prepend('<h3 id="CSNav" style="margin-left: 5%;visibility:visible;background-color:#f3f3f4;margin-top:0;margin-bottom:0"><a id="anchorEE" style="color:black;margin-left: 10%" href=""><strong style="color:#F1472C;margin-right:1%">1</strong>Establish Empathy</a><a id="anchorBI"  href="" style="color:black;margin-left: 10%"><strong style="color:#F1472C;margin-right:1%">2</strong>Business Insights</a><a id="anchorCS" href="" style="color:#F1472C;text-decoration:underline;margin-left: 10%"><strong style="color:#F1472C;margin-right:1%">3</strong>Create Solutions</a><a  id="anchorFS" href="" style="color:black;margin-left: 10%;visibility:hidden"><strong style="color:#F1472C;margin-right:1%">4</strong>Finish & Submit</a></h3>');
                var navbar = $j("#CSNav").find("a");

                $j("#anchorEE").attr("href", "http://34.195.47.189/capture-insights-establish-empathy/" + routeparams); //"http://34.195.47.189/capture-insights-establish-empathy/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                $j("#anchorBI").attr("href", "http://34.195.47.189/capture-insights-business-insights/" + routeparams); //"http://34.195.47.189/capture-insights-business-insights/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                $j("#anchorFS").attr("href", "http://34.195.47.189/finish-submit/" + routeparams); //"http://34.195.47.189/finish-submit/?company_name=" + qs["company_name"] + '&step1_entry_id=' + qs["step1_entry_id"] + '&step3_entry_id=' + qs["step3_entry_id"] + '&mvc_entry_id=' + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"]  + '&bi_entry_id='+ qs["bi_entry_id"] + '&cs_entry_id='+ qs["cs_entry_id"]);

                break;
            default:
                break;
        }


    }

}

function CalculateSig(stringToSign, privateKey) {
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

var deletemethod = "DELETE";



///////////////////////////////////////////Update Profile///////////////////////////////////////////
function UpdateOrganization(entryid, companyname, country, city, countrycode, hq) {
    var qs = getQueryString();

    //create signature and url for putting entries
    stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var put_url = 'http://34.195.47.189/gravityformsapi/entries?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

    //create signature and url for first entry
    stringToSign = publicKey + ":GET:entries/" + entryid + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var get_url4 = 'http://34.195.47.189/gravityformsapi/entries/' + entryid + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

    var errorOccured = "proceed";
    $j.get(get_url4, function(data, textStatus) {
        //get the data from the api for the first entry
        if (data.status != 200 || (typeof(data) != 'object')) {
            //http request failed
            errorOccured = true;
            console.log('There was an error attempting to access the API - ' + data.status + ': ' + data.response);
            return;
        }

        if (errorOccured == "proceed") {
            entry3 = data.response;
            entry3['is_starred'] = 1;
            entry3['1'] = companyname;
            entry3['2'] = country;
            entry3['7'] = city;
            entry3['8'] = countrycode;
            entry3['4'] = hq;

            var entries = Array();
            entries[0] = entry3;
            entry_json = JSON.stringify(entries);

            //update the entries
            $j.ajax({
                url: put_url,
                type: 'PUT',
                data: entry_json,
                contentType: 'application/json',
                success: function(result) {
                    errorOccured = "prompt"
                    var orgspan = document.getElementsByClassName("promptclose")[0];
                    document.getElementById('myOrgPrompt').style.display = "block";
                    orgspan.onclick = function() {
                        document.getElementById('myOrgPrompt').style.display = "none";
                    }
                },
                error: function(result, textStatus, errorThrown) {
                    console.log('error ' + errorThrown + ' Step 2 Update Org');
                }
            });
        }

    });
}

if (baseURLEntry.indexOf("http://34.195.47.189/organizational-profile/") > -1) {
    localStorage.removeItem("LoginStatus");
}

if (baseURLEntry.indexOf("http://34.195.47.189/organizational-profile-step2/") > -1) {
    localStorage.removeItem("MenuLink");
    //var step1_entry_id = qs["step1_entry_id"];
    //$j('<form action="http://34.195.47.189/organizational-profile/" method="post"><button style="width:200px" class="sticky-list-edit submit prevnextbtn">< Back</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+step1_entry_id+'"></form>').insertBefore('#anchorNextStep');

}

if (baseURLEntry.indexOf("http://34.195.47.189/map-value-chain/") > -1) {
    var qs = getQueryString();

    var entry = qs["step1_entry_id"];
    //var link = "http://34.195.47.189/create-form-step-3-view/entry/" + qs["step3_entry_id"];


    //create signature and url for putting entries
    stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var put_url = 'http://34.195.47.189/gravityformsapi/entries?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

    //create signature and url for first entry
    stringToSign = publicKey + ":GET:entries/" + entry + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);

    var get_url1 = 'http://34.195.47.189/gravityformsapi/entries/' + entry + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
    var errorOccured = "proceed";
    $j.get(get_url1, function(data, textStatus) {
        //get the data from the api for the first entry
        if (data.status != 200 || (typeof(data) != 'object')) {
            //http request failed
            errorOccured = "Yes";
            console.log('There was an error attempting to access the API - updating step 1 with step 3 entry ID');
            return;
        }


        entry1 = data.response;
        entry1['is_starred'] = 1;
        //Sticky List creates a new entry id for some reason so I don't want to change the current value for entry 3 id or the route link value on update
        if (qs["company_name"] != "undefined") {
            if (entry1['12'] == "") {
                entry1['12'] = qs["step3_entry_id"];
                entry1['10'] = 'Complete';
                entry1['11'] = qs["step2_entry_id"];
                entry1['21'] = qs["sector"];
            }
            var d = new Date();
            entry1['20'] == d.toDateString();
        }


        if (entry1['13'] == "") {
            $j("#btnValueChain").css("visibility", "visible");
            $j("#btnValueChain").click(function(e) {
                window.location.href = "/create-map-value-chain/?company_name=" + entry1['1'] + "&step1_entry_id=" + entry1['id'] + "&step3_entry_id=" + entry1['12'] + "&mvc_entry_id=" + entry1['13'] + '&empathy_entry_id=' + entry1['14'] + '&bi_entry_id=' + entry1['18'] + '&cs_entry_id=' + entry1['16'] + '&isCompleted=' + entry1['10'];

            });
        } else {
            $j("#btnValueChain").detach();
            var mvc_entry_id = entry1['13'];
            $j('<form action="http://34.195.47.189/create-map-value-chain/" method="post"><button style="margin-left:50%" class="sticky-list-edit submit main">EDIT VALUE CHAIN MAPPING DATA</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="' + mvc_entry_id + '"></form>').insertBefore('#footer'); //.insertBefore('#myLoginModal');

        }


        var entries = Array();
        entries[0] = entry1;
        entry_json = JSON.stringify(entries);

        //update the entries
        $j.ajax({
            url: put_url,
            type: 'PUT',
            data: entry_json,
            contentType: 'application/json',
            success: function(result) {
                console.log('success - updating step 1 with step 3 entry ID and setting profile COMPLETE');
            },
            error: function(result, textStatus, errorThrown) {
                console.log('error ' + errorThrown + ' Map Value Chain: tryin to update step 1 with step 3 entry ID');
            }
        });

    });

}

if (baseURLEntry.indexOf("http://34.195.47.189/create-map-value-chain/") > -1) {
    var step3_entry_id = qs["step3_entry_id"];
    //Using the GetStep3EntryID method to populate the value of this input to edit the Form 3
    //style="width:300px;margin-left:80px"
    var subButton = $j("#gform_submit_button_11").detach();
    //$j('.gform_footer.top_label').prepend('<form action="http://34.195.47.189/organization-profile_step3/" style="width:300px;margin-left:80%" method="post" id="prevForm"><button class="sticky-list-edit submit prevnextbtn"> < BACK</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" id="edit_id" value="'+GetStep3EntryID('mvc')+'"></form>');
    $j('.gform_footer.top_label').prepend('<div style="display:inline-block;vertical-align:bottom;margin-left:60%"><form action="http://34.195.47.189/organization-profile_step3/" style="width:300px;margin-left:80%" method="post" id="prevForm"><button class="sticky-list-edit submit prevnextbtn"> < BACK</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" id="edit_id" value="' + GetStep3EntryID('mvc') + '"></form></div><div id="SubmitButton" style="display:inline-block;vertical-align:bottom"></div>');
    $j(subButton).appendTo("#SubmitButton");
}

if (baseURLEntry.indexOf("http://34.195.47.189/establish-empathy-form/") > -1) {
    $j(document).ready(function() {
        SetCaptureInsightSubMenus("ee-form");

    });
}

if (baseURLEntry.indexOf("http://34.195.47.189/business-insights-form/") > -1) {
    $j(document).ready(function() {
        SetCaptureInsightSubMenus("bi-form");
    });
}


if (baseURLEntry.indexOf("http://34.195.47.189/create-solutions-form/") > -1) {
    $j(document).ready(function() {
        SetCaptureInsightSubMenus("cs-form");
    });
}

if (baseURLEntry.indexOf("http://34.195.47.189/capture-insights-establish-empathy/") > -1) {

    //////////////////////////////////////Update for MapValueChain. Indicates Value Chain is complete////////////////
    var qs = getQueryString();
    var mvcupdate = false;

    $j(document).ready(function() {
        SetCaptureInsightSubMenus("ee");

        ///////////////////SET PREVIOUS AND NEXT BUTTON ROUTES//////////////////////////////
        $j("#anchorPrevious").attr("href", "/map-value-chain/?company_name=" + qs["company_name"] + "&step1_entry_id=" + qs["step1_entry_id"] + "&step3_entry_id=" + qs["step3_entry_id"] + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"] + '&isCompleted=' + qs["isComplete"]);

        $j("#anchorNext").attr("href", "/capture-insights-business-insights/?company_name=" + qs["company_name"] + "&step1_entry_id=" + qs["step1_entry_id"] + "&step3_entry_id=" + qs["step3_entry_id"] + "&mvc_entry_id=" + qs["mvc_entry_id"] + '&empathy_entry_id=' + qs["empathy_entry_id"] + '&bi_entry_id=' + qs["bi_entry_id"] + '&cs_entry_id=' + qs["cs_entry_id"] + '&isCompleted=' + qs["isCompleted"]);
        ////////////////////////////////////////////////////////////////////////////////////

    });

    //create signature and url for putting entries
    stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var put_url = 'http://34.195.47.189/gravityformsapi/entries?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

    //create signature and url for first entry
    stringToSign = publicKey + ":GET:entries/" + qs["step1_entry_id"] + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var get_url3 = 'http://34.195.47.189/gravityformsapi/entries/' + qs["step1_entry_id"] + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
    var MVCerror = "proceed";
    var newmvcid = "";
    $j.get(get_url3, function(data, textStatus) {
        //get the data from the api for the first entry
        if (data.status != 200 || (typeof(data) != 'object')) {
            //http request failed
            var MVCerror = "Yes";
            console.log('There was an error attempting to access the API - trying to get step 1 entry on for VALUE CHAIN entry update');
            return;
        }

        //if(MVCerror == "proceed"){

        entry2 = data.response;
        entry2['is_starred'] = 1;
        //Sticky List creates a new entry id for some reason so I don't want to change the current value for entry 3 id or the route link value on update
        if (entry2['13'] == "") {

            entry2['13'] = qs["mvc_entry_id"];
            newmvcid = qs["mvc_entry_id"];
        } else if (entry2['13'] == "undefined") {
            entry2['13'] = qs["mvc_entry_id"];

            newmvcid = qs["mvc_entry_id"];

        } else {
            newmvcid = entry2['13'];
            mvcupdate = true;
        }

        if (qs["mvc_enty_id"] != entry2['13']) {
            if (mvcupdate) {
                var route = newmvcid

                stringToSign = publicKey + ":" + deletemethod + ":" + route + ":" + future_unixtime;
                sig = CalculateSig(stringToSign, privateKey);
                var url = 'http://34.195.47.189/gravityformsapi/' + route + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

                $j.ajax({
                    url: url,
                    type: 'DELETE',
                    contentType: 'application/json',
                    success: function(result) {
                        console.log('value chain dup sticky list entry deleted');
                    },
                    error: function(result, textStatus, errorThrown) {
                        console.log('error ' + errorThrown + ' sticky list delete for VALUE CHAIN entry');
                    }
                });

            }
        }

        if (entry2['14'] == "") {
            $j("#btnEmpathyContainer").css("visibility", "visible");
            $j("#btnEmpathy").click(function(e) {
                window.location.href = "/establish-empathy-form/?company_name=" + entry2['1'] + "&step1_entry_id=" + entry2['id'] + "&step3_entry_id=" + entry2['12'] + "&mvc_entry_id=" + entry2['13'] + '&empathy_entry_id=' + entry2['14'] + '&bi_entry_id=' + entry2['18'] + '&cs_entry_id=' + entry2['16'] + '&isCompleted=' + entry2['10'];
            });
        } else if (entry2['14'] == "undefined") {
            $j("#btnEmpathyContainer").css("visibility", "visible");
            $j("#btnEmpathy").click(function(e) {
                window.location.href = "/establish-empathy-form/?company_name=" + entry2['1'] + "&step1_entry_id=" + entry2['id'] + "&step3_entry_id=" + entry2['12'] + "&mvc_entry_id=" + entry2['13'] + '&empathy_entry_id=' + entry2['14'] + '&bi_entry_id=' + entry2['18'] + '&cs_entry_id=' + entry2['16'] + '&isCompleted=' + entry2['10'];
            });
        } else {

            $j("#btnEmpathyContainer").detach();
            var empathy_entry_id = entry2['14'];
            //$j('<form action="http://34.195.47.189/establish-empathy-form/" method="post"><button style="width:200px" class="sticky-list-edit submit main">EDIT EMPATHY DATA</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+empathy_entry_id+'"></form>').insertBefore('#placeholder');
            $j('<table id="btnEmpathyContainer" style="margin-left:25%;visibility:visible;width:700px"><tr style="background-color:white"><td style="width:10px;padding:10px"><a id="anchorPrevious" href="">PREVIOUS ACTIVITY</a></td><td style="width:5px;padding:5px"><form action="http://34.195.47.189/establish-empathy-form/" method="post"><button style="float:none" class="sticky-list-edit submit main">EDIT EMPATHY DATA</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="' + empathy_entry_id + '"></form></td><td style="width:5px;padding:5px"><a id="anchorNext" href="" >NEXT ACTIVITY</a></td></tr></table>').insertBefore('#placeholder');

        }

        ///////////////////SET PREVIOUS AND NEXT BUTTON ROUTES//////////////////////////////
        $j("#anchorPrevious").attr("href", "/map-value-chain/?company_name=" + entry2['1'] + "&step1_entry_id=" + entry2['id'] + "&step3_entry_id=" + entry2['12'] + "&mvc_entry_id=" + entry2['13'] + '&empathy_entry_id=' + entry2['14'] + '&bi_entry_id=' + entry2['18'] + '&cs_entry_id=' + entry2['16'] + '&isCompleted=' + entry2['10']);

        $j("#anchorNext").attr("href", "/capture-insights-business-insights/?company_name=" + entry2['1'] + "&step1_entry_id=" + entry2['id'] + "&step3_entry_id=" + entry2['12'] + "&mvc_entry_id=" + entry2['13'] + '&empathy_entry_id=' + entry2['14'] + '&bi_entry_id=' + entry2['18'] + '&cs_entry_id=' + entry2['16'] + '&isCompleted=' + entry2["10"]);
        ////////////////////////////////////////////////////////////////////////////////////


        var d = new Date();
        entry2['20'] = d.toDateString();

        var entries = Array();
        entries[0] = entry2;
        entry_json = JSON.stringify(entries);

        //update the entries
        $j.ajax({
            url: put_url,
            type: 'PUT',
            data: entry_json,
            contentType: 'application/json',
            success: function(result) {
                console.log('success - update step 1 form with VALUE CHAIN entry ID');
            },
            error: function(result, textStatus, errorThrown) {
                console.log('error ' + errorThrown + ' Establish Empathy: trying to update step 1 with VALUE CHAIN entry ID');
            }
        });
        //}

    });

}

if (baseURLEntry.indexOf("http://34.195.47.189/capture-insights-business-insights/") > -1) {
    //////////////////////////////////////Update for Establish Empathy Indicates Empathy is complete////////////////
    var qs = getQueryString();
    empathyupdate = false;

    var orgmvcid = "";
    $j(document).ready(function() {
        SetCaptureInsightSubMenus("bi");
    });

    //create signature and url for putting entries
    stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var put_url = 'http://34.195.47.189/gravityformsapi/entries?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

    //create signature and url for first entry
    stringToSign = publicKey + ":GET:entries/" + qs["step1_entry_id"] + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var get_url4 = 'http://34.195.47.189/gravityformsapi/entries/' + qs["step1_entry_id"] + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
    var errorOccured = "proceed";
    var newempathyid = "";
    $j.get(get_url4, function(data, textStatus) {
        //get the data from the api for the first entry
        if (data.status != 200 || (typeof(data) != 'object')) {
            //http request failed
            errorOccured = "Yes";
            console.log('There was an error attempting to access the API - updating step 1 with EMPATHY entry ID');
            return;
        }

        //if(errorOccured == "proceed"){
        entry3 = data.response;
        entry3['is_starred'] = 1;
        if (entry3['14'] == "") {
            entry3['14'] = qs["empathy_entry_id"];
            newempathyid = qs["empathy_entry_id"];

        } else if (entry3['14'] == "undefined") {
            entry3['14'] = qs["empathy_entry_id"];
            newempathyid = qs["empathy_entry_id"];
        } else {
            newempathyid = entry3['14'];
            empathyupdate = true;
        }

        if (qs["empathy_enty_id"] != entry3['14']) {
            if (empathyupdate) {
                var route = newempathyid

                stringToSign = publicKey + ":" + deletemethod + ":" + route + ":" + future_unixtime;
                sig = CalculateSig(stringToSign, privateKey);
                var url = 'http://34.195.47.189/gravityformsapi/' + route + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

                $j.ajax({
                    url: url,
                    type: 'DELETE',
                    contentType: 'application/json',
                    success: function(result) {
                        console.log('dup sticky list empathy entry deleted');
                    },
                    error: function(result, textStatus, errorThrown) {
                        console.log('error ' + errorThrown + ' empathy entry sticky list delete');
                    }
                });

            }
        }

        if (entry3['18'] == "") {
            $j("#btnBIContainer").css("visibility", "visible");
            $j("#btnBI").click(function(e) {
                window.location.href = "/business-insights-form/?company_name=" + entry3['1'] + "&step1_entry_id=" + entry3['id'] + "&step3_entry_id=" + entry3['12'] + "&mvc_entry_id=" + entry3['13'] + '&empathy_entry_id=' + entry3['14'] + '&bi_entry_id=' + entry3['18'] + '&cs_entry_id=' + entry3['16'] + '&isCompleted=' + entry3['10'];
            });
        } else if (entry3['18'] == "undefined") {
            $j("#btnBIContainer").css("visibility", "visible");
            $j("#btnBI").click(function(e) {
                window.location.href = "/business-insights-form/?company_name=" + entry3['1'] + "&step1_entry_id=" + entry3['id'] + "&step3_entry_id=" + entry3['12'] + "&mvc_entry_id=" + entry3['13'] + '&empathy_entry_id=' + entry3['14'] + '&bi_entry_id=' + entry3['18'] + '&cs_entry_id=' + entry3['16'] + '&isCompleted=' + entry3['10'];
            });
        } else {

            $j("#btnBIContainer").detach();
            var bi_entry_id = entry3['18'];
            //$j('<form action="http://34.195.47.189/business-insights-form/" method="post"><button style="width:200px" class="sticky-list-edit submit main">EDIT BUSINESS INSIGHT DATA</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+bi_entry_id+'"></form>').insertBefore('#placeholder');
            $j('<table id="btnBIContainer" style="margin-left:25%;visibility:visible;width:700px"><tr style="background-color:white"><td style="width:10px;padding:10px"><a id="anchorPrevious" href="">PREVIOUS ACTIVITY</a></td><td style="width:5px;padding:5px"><form action="http://34.195.47.189/business-insights-form/" method="post"><button style="float:none" class="sticky-list-edit submit main">EDIT BUSINESS INSIGHTS DATA</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="' + bi_entry_id + '"></form></td><td style="width:5px;padding:5px"><a id="anchorNext" href="" >NEXT ACTIVITY</a></td></tr></table>').insertBefore('#placeholder');

        }

        ///////////////////SET PREVIOUS AND NEXT BUTTON ROUTES//////////////////////////////
        $j("#anchorPrevious").attr("href", "/capture-insights-establish-empathy/?company_name=" + entry3['1'] + "&step1_entry_id=" + entry3['id'] + "&step3_entry_id=" + entry3['12'] + "&mvc_entry_id=" + entry3['13'] + '&empathy_entry_id=' + entry3['14'] + '&bi_entry_id=' + entry3['18'] + '&cs_entry_id=' + entry3['16'] + '&isCompleted=' + entry3['10']);

        $j("#anchorNext").attr("href", "/capture-insights-create-solutions/?company_name=" + entry3['1'] + "&step1_entry_id=" + entry3['id'] + "&step3_entry_id=" + entry3['12'] + "&mvc_entry_id=" + entry3['13'] + '&empathy_entry_id=' + entry3['14'] + '&bi_entry_id=' + entry3['18'] + '&cs_entry_id=' + entry3['16'] + '&isCompleted=' + entry3["10"]);
        ////////////////////////////////////////////////////////////////////////////////////

        var d = new Date();
        entry3['20'] = d.toDateString();

        var entries = Array();
        entries[0] = entry3;
        entry_json = JSON.stringify(entries);

        //update the entries
        $j.ajax({
            url: put_url,
            type: 'PUT',
            data: entry_json,
            contentType: 'application/json',
            success: function(result) {
                console.log('success - adding empathy entry id to step 1');
            },
            error: function(result, textStatus, errorThrown) {
                console.log('error ' + errorThrown + ' Business Insights - updating step 1 with empathy entry ID');
            }
        });
        //}
    });


}


if (baseURLEntry.indexOf("http://34.195.47.189/capture-insights-create-solutions/") > -1) {
    //////////////////////////////////////Update for Establish Empathy Indicates Empathy is complete////////////////
    var qs = getQueryString();
    var biupdate = false;

    $j(document).ready(function() {
        SetCaptureInsightSubMenus("cs");
    });

    //create signature and url for putting entries
    stringToSign = publicKey + ":PUT:entries:" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var put_url = 'http://34.195.47.189/gravityformsapi/entries?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

    //create signature and url for first entry
    stringToSign = publicKey + ":GET:entries/" + qs["step1_entry_id"] + ":" + future_unixtime;
    sig = CalculateSig(stringToSign, privateKey);
    var get_url4 = 'http://34.195.47.189/gravityformsapi/entries/' + qs["step1_entry_id"] + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;
    var errorOccured = "proceed";
    var newbusinessinsightsid = ""; //need this just in case the user is updating business insights. Sticky List causes every update to generate a new ID
    $j.get(get_url4, function(data, textStatus) {
        //get the data from the api for the first entry
        if (data.status != 200 || (typeof(data) != 'object')) {
            //http request failed
            errorOccured = "Yes";
            console.log('There was an error attempting to access the API - create solutions; updating step 1 with Business Insights entry ID');
            return;
        }

        //if(errorOccured == "proceed"){
        entry3 = data.response;
        entry3['is_starred'] = 1;
        if (entry3['18'] == "") {
            entry3['18'] = qs["bi_entry_id"];
            newbusinessinsightsid = qs["bi_entry_id"];
        } else if (entry3['18'] == "undefined") {
            entry3['18'] = qs["bi_entry_id"];
            newbusinessinsightsid = qs["bi_entry_id"];
        } else {
            newbusinessinsightsid = entry3['18'];
            biupdate = true;
        }

        if (qs["bi_enty_id"] != entry3['18']) {
            if (biupdate) {
                var route = newbusinessinsightsid

                stringToSign = publicKey + ":" + deletemethod + ":" + route + ":" + future_unixtime;
                sig = CalculateSig(stringToSign, privateKey);
                var url = 'http://34.195.47.189/gravityformsapi/' + route + '?api_key=' + publicKey + '&signature=' + sig + '&expires=' + future_unixtime;

                $j.ajax({
                    url: url,
                    type: 'DELETE',
                    contentType: 'application/json',
                    success: function(result) {
                        console.log('dup sticky list  business insights entry deleted');
                    },
                    error: function(result, textStatus, errorThrown) {
                        console.log('error ' + errorThrown + ' business insights sticky list delete');
                    }
                });

            }
        }

        if (entry3['16'] == "") {
            $j("#btnCSContainer").css("visibility", "visible");
            $j("#btnCS").click(function(e) {
                window.location.href = "/create-solutions-form/?company_name=" + entry3['1'] + "&step1_entry_id=" + entry3['id'] + "&step3_entry_id=" + entry3['12'] + "&mvc_entry_id=" + entry3['13'] + '&empathy_entry_id=' + entry3['14'] + '&bi_entry_id=' + entry3['18'] + '&cs_entry_id=' + entry3['16'] + '&isCompleted=' + entry3['10'];
            });
        } else if (entry3['16'] == "undefined") {
            $j("#btnCSContainer").css("visibility", "visible");
            $j("#btnCS").click(function(e) {
                window.location.href = "/create-solutions-form/?company_name=" + entry3['1'] + "&step1_entry_id=" + entry3['id'] + "&step3_entry_id=" + entry3['12'] + "&mvc_entry_id=" + entry3['13'] + '&empathy_entry_id=' + entry3['14'] + '&bi_entry_id=' + entry3['18'] + '&cs_entry_id=' + entry3['16'] + '&isCompleted=' + entry3['10'];
            });
        } else {

            $j("#btnCSContainer").detach();
            var cs_entry_id = entry3['16'];
            //$j('<form action="http://34.195.47.189/business-insights-form/" method="post"><button style="width:200px" class="sticky-list-edit submit main">EDIT BUSINESS INSIGHT DATA</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="'+bi_entry_id+'"></form>').insertBefore('#placeholder');
            $j('<table id="btnCSContainer" style="margin-left:25%;visibility:visible;width:700px"><tr style="background-color:white"><td style="width:10px;padding:10px"><a id="anchorPrevious" href="">PREVIOUS ACTIVITY</a></td><td style="width:5px;padding:5px"><form action="http://34.195.47.189/create-solutions-form/" method="post"><button style="float:none" class="sticky-list-edit submit main">EDIT SOLUTIONS DATA</button><input type="hidden" name="mode" value="edit"><input type="hidden" name="edit_id" value="' + cs_entry_id + '"></form></td><td style="width:5px;padding:5px"><a id="anchorNext" href="" >NEXT ACTIVITY</a></td></tr></table>').insertBefore('#placeholder');

        }

        ///////////////////SET PREVIOUS AND NEXT BUTTON ROUTES//////////////////////////////
        $j("#anchorPrevious").attr("href", "/capture-insights-business-insights/?company_name=" + entry3['1'] + "&step1_entry_id=" + entry3['id'] + "&step3_entry_id=" + entry3['12'] + "&mvc_entry_id=" + entry3['13'] + '&empathy_entry_id=' + entry3['14'] + '&bi_entry_id=' + entry3['18'] + '&cs_entry_id=' + entry3['16'] + '&isCompleted=' + entry3['10']);

        $j("#anchorNext").attr("href", "/finish-submit/?company_name=" + entry3['1'] + "&step1_entry_id=" + entry3['id'] + "&step3_entry_id=" + entry3['12'] + "&mvc_entry_id=" + entry3['13'] + '&empathy_entry_id=' + entry3['14'] + '&bi_entry_id=' + entry3['18'] + '&cs_entry_id=' + entry3['16'] + '&isCompleted=' + entry3["10"]);
        ////////////////////////////////////////////////////////////////////////////////////

        var d = new Date();
        entry3['20'] = d.toDateString();

        var entries = Array();
        entries[0] = entry3;
        entry_json = JSON.stringify(entries);

        //update the entries
        $j.ajax({
            url: put_url,
            type: 'PUT',
            data: entry_json,
            contentType: 'application/json',
            success: function(result) {
                console.log('success - updated step 1 with business insights entry id');
            },
            error: function(result, textStatus, errorThrown) {
                console.log('error ' + errorThrown + ' Create Solutions - updating step 1 with business insights entry id');
            }
        });
        //}
    });

}