/*
Name: Rohan Mallu
Date Created: November 13th 2024
File: form-validation.js
GUI Assignment: Using the jQuery Plugin/UI with Your Dynamic Table
Description: jQuery Validation JS file for HW4 Part 2. This is where the user will validate the inputs.
*/

/**
 * Resources:
 * How to stop Form submit if the validation fails [duplicate] (for submitting the form and validating the table):  
 * https://stackoverflow.com/questions/35487417/how-to-stop-form-submit-if-the-validation-fails
 * 
 * how to use jquery validator to determine value of one field is greater than another field? (for setting up greaterThan and lessThan methods): 
 * https://stackoverflow.com/questions/29451507/how-to-use-jquery-validator-to-determine-value-of-one-field-is-greater-than-anot 
 * 
 * jQuery Validation Plugin video (for learning the basics of jQuery validation):
 * https://jqueryvalidation.org/ 
 */

$(document).ready(function() {
    // greaterThan checks if the maximum row or column value is greater than 
    // the minimum row or column value
    $.validator.addMethod("greaterThan", function(value, element, param) {
        var $compareVal = parseInt($(param).val(), 10);
        // if one of the text fields is empty, avoid giving out the error
        if ($(param).val() == "") {
            return true;
        }
        // return error message if false
        return parseInt(value, 10) > $compareVal;
    }, "ERROR: This value must be greater than the minimum value.");
    
     // lessThan checks if the minimum row or column value is less than 
    // the minimum row or column value
    $.validator.addMethod("lessThan", function(value, element, param) {
        // if one of the text fields is empty, avoid giving out the error
        var $compareVal = parseInt($(param).val(), 10);
        if ($(param).val() == "") {
            return true;
        }
        // return error message if false
        return parseInt(value, 10) < $compareVal;
    }, "ERROR: This value must be less than the maximum value.");

    // validate all rules and return the corresponding error message
    $("#submission").validate({
        rules: {
            minCol: {
                required: true,
                number: true,
                range: [-50, 50],
                lessThan: "#maxCol"
            },
            maxCol: {
                required: true,
                number: true,
                range: [-50, 50],
                greaterThan: "#minCol"
            },
            minRow: {
                required: true,
                number: true,
                range: [-50, 50],
                lessThan: "#maxRow"
            },
            maxRow: {
                required: true,
                number: true,
                range: [-50, 50],
                greaterThan: "#minRow"
            },
            
        },
        
        messages: {
            minCol: {
                required: "ERROR: No input. Please enter the minimum number of columns.",
                number: "ERROR: Input is not a number. Please enter a number.",
                range: "ERROR: Input is out of range. Please enter a number between -50 and 50 inclusive."
            },
            maxCol: {
                required: "ERROR: No input. Please enter the maximum number of columns.",
                number: "ERROR: Input is not a number. Please enter a number.",
                range: "ERROR: Input is out of range. Please enter a number between -50 and 50 inclusive."
            },
            minRow: {
                required: "ERROR: No input. Please enter the minimum number of rows.",
                number: "ERROR: Input is not a number. Please enter a number.",
                range: "ERROR: Input is out of range. Please enter a number between -50 and 50 inclusive."
            },
            maxRow: {
                required: "ERROR: No input. Please enter the maximum number of rows.",
                number: "ERROR: Input is not a number. Please enter a number.",
                range: "ERROR: Input is out of range. Pleaser enter a number between -50 and 50 inclusive."
            }
        },

    });


});