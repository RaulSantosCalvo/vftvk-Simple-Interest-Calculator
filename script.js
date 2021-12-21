/**
 * Triggered by "Comput Interest" button
 * Computes the interest and shows the result in the "result" span
 */
function compute()
{
    var principal = document.getElementById("principal").value;

    // validates principal value (must be greater than 0)
    if (principal > 0) {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear() + parseInt(years);

        // writes the result in the result span
        document.getElementById("result").innerHTML="If you deposit \<span class='highlight'\>" + principal + "\<\/span\>,\<br\>"
        + "at an interest rate of \<span class='highlight'\>" + rate + "%\<\/span\>.\<br\>"
        + "You will receive an amount of \<span class='highlight'\>" + interest + "\<\/span\>,\<br\>"
        + "in the year \<span class='highlight'\>" + year + "\<\/span\>."
    } else {
        window.alert('Enter a positive number');
    }
    // returns focus to principal input
    document.getElementById("principal").focus();
}

/**
 * updates the value in the range span
 */
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

/**
 * DOM triggers
 */
// wait until the document is loaded to avoid DOM assignation failures
onload = function() {
    // trigger updateRate function on rate input value change
    document.getElementById("rate").onchange = updateRate;
}


        