<?php

/*
 *
 */
function islandora_scholar_tombstone($form, &$form_state) {
  $form['islandora_scholar_tombstone_settings'] = array(
    '#type' => 'textfield',
    '#title' => t('What are your settings'),
    '#default_value' => variable_get('islandora_scholar_tombstone_ETD_message'),
    '#description' => t('Enter something NOW'),
  );
  return(system_settings_form($form));

}
