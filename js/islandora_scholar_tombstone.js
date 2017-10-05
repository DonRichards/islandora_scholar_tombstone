/**
 * @file islandora_scholar_tombstone.js
 * Custom Module main JavaScript file.
 *
 * You will need to get rid of the comments.
 * For how to add this file to your module, see https://drupal.org/node/304255
 */

(function ($) {
  Drupal.behaviors.customModule = {

    // The `context` and `settings` arguments are specific to when and where
    // this is being executed.
    attach: function (context, settings) {

      /**
       * Check the PDF and full_text boxes as a template.
       * @type {Bool}
       */
      document.getElementById("edit-ds-options-pdf").checked = true;
      document.getElementById("edit-ds-options-full-text").checked = true;

/**
 * This loops through the Suppl_ files and automatically checks them.
 * @method for
 * @param  {[type]} [i=0; i < 1000; i++] from 0 to 999.
 * @return {[type]}Checks the DOM elements.
 */
      for (i = 0; i < 1000; i++) {
        var str = "edit-ds-options-suppl-"+[i];
        str = str.replace(/^\s+|\s+$/g,"");
        document.getElementById(str).checked = true;
      }



// THIS NEEDS TO LOOK AT THE CLICK EVENT FOR IT TO WORK....
// Look for the Object-level embargo & Embargo indefinitely click event!!
  // console.log(document.getElementById("input#edit-dsid-datastream.form-radio"));

	$(document).ready(function(){
	    $('input[type=radio]').click(function(){
	        // console.log(this.value);
					if (document.getElementById("edit-update-date-options-indefinite-embargo").checked &&
document.getElementById("edit-dsid-object").checked){
	// alert('This is an "Object-Level Embargo" with an "indefinite embargo date". You are about to flag this to be withdrawn and purged during the next maintainence cycle.');
	showAlert("Warning message", "danger", 5000);
}

	    });
	});


    }
  };
})(jQuery);
