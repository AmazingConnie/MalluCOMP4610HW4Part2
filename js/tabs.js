/*
Name: Rohan Mallu
Date Created: November 27th 2024
File: tabs.js
GUI Assignment: Using the jQuery Plugin/UI with Your Dynamic Table
Description: jQuery Tabs JS file for HW4 Part 2. This is where the jQuery UI tabs are implemented.
*/

/**
 * Resources:
 * Chapter 3: Using the Tabs Widget (for general reference and setting up the tabs options):
 * https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/jQueryUI1.8_Ch03_TabsWidget.pdf 
 * In jquery-ui 1.9, how do you create new tabs dynamically? (for adding new tabs): https://stackoverflow.com/questions/14702631/in-jquery-ui-1-9-how-do-you-create-new-tabs-dynamically 
 * Simple manipulation (for adding and removing new tabs): https://jqueryui.com/tabs/#manipulation 
 * Collapse content (for hiding tab content): https://jqueryui.com/tabs/#collapsible 
 */

$(document).ready(function() {
    // create tabs from div class with id #tabs and an unordered list 
    var tabs = $("#tabs").tabs();
    $("#submission").on("submit", function(event) {
        event.preventDefault();

        // if the inputs are valid, do the following
        if($(this).valid()) {
            // count number of tabs in the list and increment for each tab added
            var numTabs = $("#tabs ul li").length + 1;

            // append new tab to the list with inputs from the form
            $("#tabs ul").append(
                "<li><a href='#tab-" + numTabs + "'>" + $("#minCol").val() + " to " + $("#maxCol").val() + " by " + $("#minRow").val() + " to " + $("#maxRow").val()  + "</a>" + "<span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span>" + "</li>"
                
            );
            
            // append the table from the table container
            tabs.append(
                "<div id='tab-" + numTabs + "'>" + $("#table-container").html() + "</div>"
            );
            
            // refresh
           tabs.tabs("refresh");

        }   
       
    });

    // make the tabs collapsible
    $("#tabs").tabs({
        collapsible: true
    });

    // code to remove tabs when clicking on the close icon
    tabs.on("click", "span.ui-icon-close", function(){
        var panelId = $(this).closest("li").remove().attr("aria-controls");
        $("#" + panelId).remove();
        tabs.tabs("refresh");
    });

});