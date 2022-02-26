# javascript_challenge
This repo contains JavaScript Homework 14 - JavaScript and DOM Manipulation.  Both the UFO-level-1 and UFO-level-2 challenges have been completed and submitted.

UFO-level-1 is located in https://github.com/jhurley684/javascript_challenge/edit/main/ufo-level-1/  directory.  This directory contains the app.js with my javascript code, the index.html and data.js files.  The html code is essentially the same as the starter code provided.  The app.js file contains the new code that runs the search.  When the page is loaded, the UFO table is populated with the entire data set.  The user may then use the search box to filter the data by date.  The code "listens" for the button-click and then loads the filtered data.

My strategy with Level-1 was to set up a handler that listened for a button click for the filter(search) button which then passed the search date to the runEnter function.  runtEnter then filters the data and calls the buildTable function which writes the filtered data to the table.  Of coarse when the page loads, all the data is written to the table wihout filter - I just call the buildTable function first.

UFO-level-2 is located in https://github.com/jhurley684/javascript_challenge/edit/main/ufo-level-2/  directory.  This directory contains the app.js with my javascript code, the index.html was adjusted so that there is a input form for each search criteria: date, city, state, country, shape.  To make the search area cleaner and more compact I eliminated the "filter" buttons and just made the search run on "change".  Like in UFO-level-1, when the page is loaded all the data is populated in the table.  At that point, the user can search on any criteria.

My strategy for Level-2 was pretty much more of the same of Level-1.  I still used runEnter to filter data and buildTable to create the table with filtered data.  But with Level-2, I created 5 search boxes in html, 5 versions of runEnter to match, and 5 handlers to listen for a change in the search box.  Whatever search criteria was then passed through the appropriate filter and writen to the table.

# JavaScript Challenge - JavaScript and DOM Manipulation

## Background

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though ... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

That's why we are hiring you. We need you to write code that will create a table dynamically based upon a [dataset we provide](StarterCode/static/js/data.js). We also need to allow our users to filter the table data for specific values. There's a catch though ... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.

You can handle this, right? The planet Earth needs to know what we have found!

## Your Task

### Before You Begin

1. Create a new repository for this project called `javascript-challenge`. **Do not add this homework to an existing repository**.
2. Clone the new repository to your computer.
3. Inside your local git repository, create a directory for the Javascript challenge. Use the folder names to correspond to the challenges: **UFO-level-1** and **UFO-level-2**.
4. Add your **html** files to this folder as well as your static folder containing your javascript. This will be the main script to run for analysis.
5. Push the above changes to GitHub.
6. Ensure your repository has regular commits and a thorough README.md file

### Level 1: Automatic Table and Date Search (Required)

* 
* Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page).
* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
   * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search Categories (Optional)

* Complete all of Level 1 criteria.

* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](StarterCode/static/js/data.js)

