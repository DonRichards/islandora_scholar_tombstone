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
       * @return {[type]} [description]
       */
      $(document).ready(function() {
        $('input[type=radio]').click(function() {
          if (document.getElementById("edit-update-date-options-indefinite-embargo").checked && document.getElementById("edit-dsid-object").checked) {
            alert('This is an "Object-Level Embargo" with an "indefinite embargo date". This action will remove owner and manager access to this. Ultimately, this submission will be archived and only System Administrators will have any further access once applied.');
          }
          if (document.getElementById("edit-ds-options-full-text").checked != null && document.getElementById("edit-ds-options-full-text").checked == false ) {
            document.getElementById("edit-ds-options-full-text").click();
            document.getElementById("edit-ds-options-pdf").click();

            for (i = 0; i < 10; i++) {
              var str = "edit-ds-options-suppl-" + [i];
              document.getElementById(str).click();
            };
          }
        });
      });
    }
  };
})(jQuery);
