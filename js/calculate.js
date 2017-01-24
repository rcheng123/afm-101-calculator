// javascript for calculator


// ????????????????????/

//-------------




function form_onfocus (val){
    var theval = document.getElementById(val).value;
    var defaultval = document.getElementById(val).defaultValue;
    if (theval === defaultval){
        document.getElementById(val).value = "";
    }
}

function form_onblur (val){
    var theval = document.getElementById(val).value;
    var defaultval = document.getElementById(val).defaultValue;
    if (theval === ''){
        document.getElementById(val).value = defaultval;
    }
}

// Calculation Functions


function presentValueSingleSum (fv, numofperiod, interestperperiod, compounding){

    var fv_val = Number(document.getElementById(fv).value);
    var numofperiod_val = Number (document.getElementById(numofperiod).value);
    var interest_val = (Number(document.getElementById(interestperperiod).value))/100;
    var compounding_val = Number(document.getElementById(compounding).value);

    document.getElementById("pvss_answer").innerHTML = "$ " + fv_val/Math.pow((1 + interest_val/compounding_val), (numofperiod_val * compounding_val));

}

function presentValueOrdinaryAnnuity (fv, numofperiod, interestperperiod, compounding){

    var fv_val = Number(document.getElementById(fv).value);
    var numofperiod_val = Number (document.getElementById(numofperiod).value);
    var interest_val = (Number(document.getElementById(interestperperiod).value))/100;
    var compounding_val = Number(document.getElementById(compounding).value);

    document.getElementById("pvoa_answer").innerHTML = "$ " + fv_val*((1 - 1 / (Math.pow (1 + interest_val/compounding_val, numofperiod_val * compounding_val)))/(interest_val/compounding_val));

}




// GENERIC 2 NUMBER DIVISION!!!
// answer_id is a string
function twoDivide (input1, input2, answer_id){
    var input1_val = Number(document.getElementById(input1).value);
    var input2_val = Number(document.getElementById(input2).value);

    document.getElementById(answer_id).innerHTML = input1_val / input2_val;
}


function cash (c1, c2, c3){
    var c1_val = Number(document.getElementById(c1).value);
    var c2_val = Number(document.getElementById(c2).value);
    var c3_val = Number(document.getElementById(c3).value);

    document.getElementById("cash_answer").innerHTML = (c1_val + c2_val)/c3_val;
}



function quick (q1, q2, q3, q4, q5){
    var q1_val = Number(document.getElementById(q1).value);
    var q2_val = Number(document.getElementById(q2).value);
    var q3_val = Number(document.getElementById(q3).value);
    var q4_val = Number(document.getElementById(q4).value);
    var q5_val = Number(document.getElementById(q5).value);

    document.getElementById("quick_answer").innerHTML = (q1_val + q2_val + q3_val + q4_val)/q5_val;
}





function roa (roa1, roa2, roa3){
    var roa1_val = Number(document.getElementById(roa1).value);
    var roa2_val = Number(document.getElementById(roa2).value);
    var roa3_val = Number(document.getElementById(roa3).value);

    document.getElementById("roa_answer").innerHTML = (roa1_val + roa2_val)/roa3_val;
}



function flp (flp1, flp2){
    var flp1_val = Number(document.getElementById(flp1).value);
    var flp2_val = Number(document.getElementById(flp2).value);

    document.getElementById("flp_answer").innerHTML = flp1_val - flp2_val;
}




function aaor (aaor1){
    var aaor1_val = Number(document.getElementById(aaor1).value);
    var NUMER = 365;

    document.getElementById("aaor_answer").innerHTML = NUMER/aaor1_val;   


}

function adsoi (adsoi1){
    var adsoi1_val = Number(document.getElementById(adsoi1).value);
    var NUMER = 365;

    document.getElementById("adsoi_answer").innerHTML = NUMER/adsoi1_val;   


}

function aaop (aaop1){
    var aaop1_val = Number(document.getElementById(aaop1).value);
    var NUMER = 365;

    document.getElementById("aaop_answer").innerHTML = NUMER/aaop1_val;
}
