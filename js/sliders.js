/*
Name: Rohan Mallu
Date Created: November 26th 2024
File: sliders.js
GUI Assignment: Using the jQuery Plugin/UI with Your Dynamic Table
Description: jQuery Sliders JS file for HW4 Part 2. This is where the jQuery UI sliders are implemented.
*/

/**
 * Resources:
 * Chapter 6: The Slider Widget (for general reference and setting up the slider options):
 * https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/jQueryUI1.8_Ch06_SliderWidget.pdf 
 * jQuery UI slider and textbox value 2-way update (for setting up two-way binding between slider and input field):
 * https://stackoverflow.com/questions/22258183/jquery-ui-slider-and-textbox-value-2-way-update 
 */

$(document).ready(function() {
    // Minimum Column options
    var minColOpts = {
        min: -50,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            $("#minCol").val(ui.value);
            createTable(); // update table while sliding
        },
        create: function(event, ui) {
            $("#minCol").val(0); // default value
        }

    };

    // Maximum Column options
    var maxColOpts = {
        min: -50,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            $("#maxCol").val(ui.value);
            createTable(); // update table while sliding
            
        },
        create: function(event, ui) {
            $("#maxCol").val(0); // default value
        }
    };

    // Minimum Row options
    var minRowOpts = {
        min: -50,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            $("#minRow").val(ui.value);
            createTable(); // update table while sliding
        },
        create: function(event, ui) {
            $("#minRow").val(0); // default value
        }
    };

    // Maximum Row options
    var maxRowOpts = {
        min: -50,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            $("#maxRow").val(ui.value);
            createTable(); // update table while sliding
        },
        create: function(event, ui) {
            $("#maxRow").val(0); // default value
        }
    };

    // pass the slider options to the respective slider
    $("#minColSlider").slider(minColOpts);
    $("#maxColSlider").slider(maxColOpts);
    $("#minRowSlider").slider(minRowOpts);
    $("#maxRowSlider").slider(maxRowOpts);

    // if inputting a text value, adjust the slider to the inputted value
    // make sure the table is valid before dynamically changing it
    $("#minCol").on('change', function() {
        $("#minColSlider").slider('value', this.value);
        if($(this).valid()) {
            createTable();
        }
    });

    $("#maxCol").on('change', function() {
        $("#maxColSlider").slider('value', this.value);
        if($(this).valid()) {
            createTable();
        }
    });

    $("#minRow").on('change', function() {
        $("#minRowSlider").slider('value', this.value);
        if($(this).valid()) {
            createTable();
        }
    });

    $("#maxRow").on('change', function() {
        $("#maxRowSlider").slider('value', this.value);
        if($(this).valid()) {
            createTable();
        }
    });

    // if inputs are valid, create the table
    if($(this).valid()) {
        createTable();
    }
});