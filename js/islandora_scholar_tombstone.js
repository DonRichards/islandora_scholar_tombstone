/**
 * @file islandora_scholar_tombstone.js
 * Custom Module main JavaScript file.
 *
 * You will need to get rid of the comments.
 * For how to add this file to your module, see https://drupal.org/node/304255
 */

(function($) {
  Drupal.behaviors.islandora_scholar_tombstone = {

    // The `context` and `settings` arguments are specific to when and where
    // this is being executed.
    attach: function(context, settings) {

      /**
       * [description]
       * @method
       * @return {[click]} Upon click this looks for value to set embargo warnings.
       */
      $(document).ready(function() {
        // Sets the default submit text for the default state
        $("#edit-submit").prop('value', 'Request Faculty/Staff Embargo');
        // Only show on embaro page.
        if (window.location.href.indexOf("/manage/embargo") >= 0) {
        // Onclick this evaluates the inputs to determine what to display.
        $('input[type=radio]').click(function() {
          $('#alert').remove();
          if (document.getElementById("edit-update-date-options-indefinite-embargo").checked) {
            if (document.getElementById("edit-dsid-datastream").checked) {
              $("#edit-submit").prop('value', 'Request Student Withdrawal');
              $( "<p id='alert' style='color:red;'>This is an datastream-Level Embargo with an indefinite embargo date. This action will remove owner and manager access to this. Ultimately, this submission will be archived and only System Administrators will have any further access once applied.</p>" ).insertAfter( "#edit-submit" );
            } else {
              $("#edit-submit").prop('value', 'Request Faculty/Staff Withdrawal');
            }
          } else if (document.getElementById("edit-update-date-options-change-embargo-date").checked) {
            if (document.getElementById("edit-dsid-object").checked) {
              $("#edit-submit").prop('value', 'Request Faculty/Staff Embargo');
            } else {
              $("#edit-submit").prop('value', 'Request Embargo');
            }
          }
          if (document.getElementById("edit-ds-options-full-text").checked != null && document.getElementById("edit-ds-options-full-text").checked == false) {
            // This sets the full text and pdf checkboxes.
            document.getElementById("edit-ds-options-full-text").click();
            document.getElementById("edit-ds-options-pdf").click();
            // This sets first 10 of the supplemental checkboxes.
            for (i = 0; i < 10; i++) {
              var str = "edit-ds-options-suppl-" + [i];
              document.getElementById(str).click();
            };
          }
        });
        }
      });
    }
  };
})(jQuery);
