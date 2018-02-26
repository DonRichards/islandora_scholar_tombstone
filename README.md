# Islandora Scholar Tombstone

CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Requirements
 * Recommended modules
 * Installation
 * Configuration
 * Troubleshooting
 * FAQ
 * Maintainers


INTRODUCTION
------------

This is a module to implement tombstoning within scholar
In case of a ETD/Dissertation withdrawal, retraction, removal, or embargo. In an extremely limited number of cases of removal or embargoes, it may be necessary to remove an article from the online database. This will only occur where the submission in in violation of the terms of service agreement. In these circumstances, while some metadata will be retained, the text will be replaced with a screen indicating the article has been removed or is embargoed.
 

__What is a tombstone?__
 
Simply, a place holder page with limited information to inform the user that they have found the content they are looking for but it isn't not currently available.

![Wild Wild West](https://c2.staticflickr.com/4/3854/14767540082_c9cbd87acf_m_d.jpg)


__This module looks for 1 of 2 conditions__
* Does the submission have a __datastream level embargoed__ with a __specific date__ selected?
* Does the submission have a __datastream level embargoed__ with a __infinite__ date?

__Some background__
Each collection has a "collection_manager" role with limited functionality. This utilizes menus already avaiable to the collection manager. And can automatically check specific datastreams. 

REQUIREMENTS
------------

RECOMMENDED MODULES
-------------------

INSTALLATION
------------

  * Install as you would normally install a contributed Drupal module.
    * Visit: https://drupal.org/documentation/install/modules-themes/modules-7 for further information.


CONFIGURATION
-------------
Coming soon

USE
---------------
Go to object > manage > Embargo

#### For an embargo message including the date it will be released
- Set a __datastream level embargoed__ with a __specific date__ selected

__OUTPUT SCREENSHOT__

![0](https://user-images.githubusercontent.com/2738244/36564880-ce4233d2-17ec-11e8-83bc-183f005e689e.png)


#### For a tombstone/withdrawn message
- Set a __datastream level embargoed__ with a __infinite__ date

__OUTPUT SCREENSHOT__

![0](https://user-images.githubusercontent.com/2738244/36565069-591e635e-17ed-11e8-9e04-fc59249d0031.png)


TROUBLESHOOTING
---------------
