# javascript_challenge
This repo contains JavaScript Homework 14 - JavaScript and DOM Manipulation.  Both the UFO-level-1 and UFO-level-2 challenges have been completed and submitted.

UFO-level-1 is located in https://github.com/jhurley684/javascript_challenge/edit/main/ufo-level-1/  directory.  This directory contains the app.js with my javascript code, the index.html and data.js files.  The html code is essentially the same as the starter code provided.  The app.js file contains the new code that runs the search.  When the page is loaded, the UFO table is populated with the entire data set.  The user may then use the search box to filter the data by date.  The code "listens" for the button-click and then loads the filtered data.

My strategy with Level-1 was to set up a handler that listened for a button click for the filter(search) button which then passed the search date to the runEnter function.  runtEnter then filters the data and calls the buildTable function which writes the filtered data to the table.  Of coarse when the page loads, all the data is written to the table wihout filter - I just call the buildTable function first.

UFO-level-2 is located in https://github.com/jhurley684/javascript_challenge/edit/main/ufo-level-2/  directory.  This directory contains the app.js with my javascript code, the index.html was adjusted so that there is a input form for each search criteria: date, city, state, country, shape.  To make the search area cleaner and more compact I eliminated the "filter" buttons and just made the search run on "change".  Like in UFO-level-1, when the page is loaded all the data is populated in the table.  At that point, the user can search on any criteria.

My strategy for Level-2 was pretty much more of the same of Level-1.  I still used runEnter to filter data and buildTable to create the table with filtered data.  But with Level-2, I created 5 search boxes in html, 5 versions of runEnter to match, and 5 handlers to listen for a change in the search box.  Whatever search criteria was then passed through the appropriate filter and writen to the table.



