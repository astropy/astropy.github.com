$( document ).ready(function(){

    $('#responsive-menu-button').sidr({
      name: 'sidr-main',
      source: '#navigation'
    });

	$("div#documentation span").click(function() { //When trigger is clicked...

		$("div#documentation ul").slideDown('fast').show(); //Drop down the subnav on click

		$(this).parent().hover(function() {
		}, function(){
			$(this).parent().find("ul").slideUp('fast'); //When the mouse hovers out of the subnav, move it back up
		});


		//Following events are applied to the trigger (Hover events for the trigger)
		}).hover(function() {
			$(this).addClass("subhover"); //On hover over, add class "subhover"
		}, function(){	//On Hover Out
			$(this).removeClass("subhover"); //On hover out, remove class "subhover"

	});


    $('#os-selector ul').each(function(){
      // For each set of tabs, we want to keep track of
      // which tab is active and it's associated content
      var hash, $active, $content, $links = $(this).find('a');

      // If the location.hash matches one of the links, use that as the active tab.
      // If no location.hash is given, use a tab determined by guess_os()
      // If no match is found, use the first link as the initial active tab.
      hash = (location.hash === "") ? '#' + guess_os() : location.hash;
      $active = $($links.filter('[href="'+hash+'"]')[0] || $links[0]);
      $active.addClass('active');
      $content = $($active.attr('href'));

      // Hide the remaining content
      $links.not($active).each(function () {
        $($(this).attr('href')).hide();
      });

      // Bind the click event handler
      $(this).on('click', 'a', function(e){
        // Make the old tab inactive.
        $active.removeClass('active');
        $content.hide();

        // Update the variables with the new link and content
        $active = $(this);
        $content = $($(this).attr('href'));

        // Make the tab active.
        $active.addClass('active');
        $content.show();

        // Prevent the anchor's default click action
        e.preventDefault();
      });

      // Now go through and find any links that are *not* in the above list
      // but should point to a tab.
        $('a').each(function(){
            //For every link check if it matches one of the tabs.
            //If so, replace with "clicking" on the tab.
            var $curra = $(this);
            var currhref = $curra.attr('href');
            $links.each(function() {
                var $currlia = $(this);

                if ((currhref == $currlia.attr('href'))) {
                    //Don't press the tab itself, that's above
                    if (! $curra.is($currlia)) {
                        $curra.on('click', function(e){
                            //act like we clicked on the tab itself instead of this link
                            $currlia.click();
                            // We let the default through here, because
                            // you probably want to jump to the revealed tab
                            e.preventDefault();
                        });
                    }
                }
            });
        });
    });

    /* getting core package contributors list directly by
       requesting astropy/docs/credits.rst file via AJAX
    */
    var request = new XMLHttpRequest();
    var dataURL = "https://raw.githubusercontent.com/astropy/astropy/master/docs/credits.rst";
    request.open('GET', dataURL);
    request.send();

    //log error when request gets failed
    request.onerror = function () {
        console.log("XHR error");
    };

    request.onload = function () {
        //received raw credits.rst file as a string
        var dataString = request.response;
        //creating required list
        createList(dataString);
    };

    function createList(dataString) {
        /* creating an array/list of strings from received string
           after being formatted or split at all instances of newline character
        */
        var formattedStringList = dataString.split("\n");
        /* getting indexes of first & last contributor in array
           (+3) & (-3) take into account the spaces after "Core Package Contributors"
           and before "Other Credits" in raw file
        */
        var firstIndex = (formattedStringList.indexOf("Core Package Contributors")) + 3;
        var lastIndex = (formattedStringList.indexOf("Other Credits")) - 3;

        //putting string data into HTML
        var list = '';
        for (var i=firstIndex; i<=lastIndex; i++) {
            //using regular expression to replace asterisk from string
            var listItem = formattedStringList[i].replace(/^\* /i, '');
            list += '<li>' + listItem + '</li>';
        }
        $("#list").append(list);
    }
}); // Document Ready


//Using jQuery is ok because it is needed by and bundled with sphinx

//Quirk to note: the jQuery.getJSON function fails if you open this locally
//with Chrome, because Chrome thinks local JSON files are unsafe for some
//reason.  Use basically any other modern browser, or it works fine if its
//actually on the web server even with chrome.

function url_translator(urltext) {
    if (urltext === undefined) {
        return 'None';
    } else {
        return '<a href="' + urltext + '">' + urltext + '</a>';
    }
}

function pypi_translator(pypiname) {
    if (pypiname === undefined) {
        return 'None';
    } else {
        var urltext = 'http://pypi.python.org/pypi/' + pypiname;
        return '<a href="' + urltext + '">' + pypiname + '</a>';
    }
}

function bool_translator(stable) {
    if (stable) {
        return 'Yes';
    } else {
        return 'No';
    }
}

var _email_regex_str = '[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}';
var _email_regex  = new RegExp(_email_regex_str, 'i');
var _email_with_name_regex  = new RegExp('(.+)<(' + _email_regex_str + ')>', 'i');

function maintainer_translator(maint, pkgnm) {
    var url, match;
    if (_email_with_name_regex.test(maint)) {
        match = _email_with_name_regex.exec(maint);
        url = 'mailto:' + match[2] + '?subject=Astropy%20affiliated%20package%20' + pkgnm;
        return '<a href="' + url + '">' + match[1] + '</a>';
    } else if (_email_regex.test(maint)) {
        url = 'mailto:' + maint + '?subject=Astropy%20affiliated%20package%20' + pkgnm;
        return '<a href="' + url + '">' + maint + '</a>';
    } else {
        return maint;
    }
}

function populateTables(data, tstat, xhr) {
    populateTable('accepted-package-table', data, false);
    populateTable('provisional-package-table', data, 'only')
}

function populateTable(tableid, data, allowprovisional) {
    // First we use allowprovisional io decide what the checkProvisional function (used below) does
    var checkProvisional;
    if (allowprovisional === false) {
        checkProvisional = function(provisional_status) { return provisional_status === false; }
    } else if (allowprovisional == 'only') {
        checkProvisional = function(provisional_status) { return provisional_status; }
    } else if (allowprovisional === true) {
        checkProvisional = function(provisional_status) { return true; }
    } else {
        throw "Invalid allowprovisional value " + allowprovisional;
    }

    // Now we get the table and prepare it
    var tab = document.getElementById(tableid);
    var ncols = tab.rows[0].cells.length;

    //we have to delete the "Loading..." row
    tab.deleteRow(1);

    var pkgi, row, nmcell, stablecell, pypicell, urlcell, rpocell, maintcell;
    if (data === null) {
        row = tab.insertRow(1);
        row.insertCell(0).innerHTML = 'Could not load registry file!';
        for (i=0;i<(ncols - 1);i++) { row.insertCell(i + 1).innerHTML = ' '; }
    } else {
        var pkgs = data.packages;

        //First figure out the correct order if we sort on the name
        var nmarr = new Array(pkgs.length);
        var sortorder = new Array(pkgs.length);
        for (i=0; i<pkgs.length; i++) {
            pkgi = pkgs[i];
            nmarr[i] = pkgi.name.toLowerCase();
            sortorder[i] = i;
        }
        // This "sorts" the indecies using a compare function that actually sorts nmarr
        sortorder.sort(function (a, b) { return nmarr[a] < nmarr[b] ? -1 : nmarr[a] > nmarr[b] ? 1 : 0; });

        for (i=0; i<sortorder.length; i++) {
            pkgi = pkgs[sortorder[i]];
            row = tab.insertRow(i + 1);

            if (checkProvisional(pkgi.provisional)) {
                nmcell = row.insertCell(0);
                stablecell = row.insertCell(1);
                pypicell = row.insertCell(2);
                urlcell = row.insertCell(3);
                repocell = row.insertCell(4);
                maintcell = row.insertCell(5);

                nmcell.innerHTML = pkgi.name;
                stablecell.innerHTML = bool_translator(pkgi.stable);
                pypicell.innerHTML = pypi_translator(pkgi.pypi_name);
                urlcell.innerHTML = url_translator(pkgi.home_url);
                repocell.innerHTML = url_translator(pkgi.repo_url);
                maintcell.innerHTML = maintainer_translator(pkgi.maintainer, pkgi.name);
            }
        }
    }
}

function guess_os() {
    var OSName="source";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="osx";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="linux";
    return OSName;
}
