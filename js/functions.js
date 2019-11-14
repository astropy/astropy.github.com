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

    //creating Astropy roles table & roles lists using roles.json
    var request = new XMLHttpRequest();
    var dataURL = "roles.json";
    request.open('GET', dataURL);
    request.responseType = 'json';
    request.send();

    //log error when request gets failed
    request.onerror = function () {
        console.log("XHR error");
    };

    request.onload = function () {
        //received json data via XHR
        var data = request.response;
        //creating roles table from json data
        createRolesTable(data);
        //creating roles lists from json data
        createRolesDescription(data);
    };

    function createRolesTable(roles) {
        //roles is an array of objects called "role"
        var rows = '';
        roles.forEach(function (role) {
            //role is an object containing information about each team role
            //index marks current lead
            var index = 0;
            //regular expression used in searching for 1 in a string
            var preferDeputyRegexp = /^1/i;
            //creating each row by iterating over each lead in a role
            role["lead"].forEach(function (lead) {
                //rowRole is displayed once for each role
                rowRole = index == 0 ? '<a href="#' + role["url"] + '">' + role["role"] + '</a>' : "";

                var rowSubRole = "";
                //checking if a value exists at an index in role["sub-role"] array
                if (typeof role["sub-role"][index] !== 'undefined' && role["sub-role"][index] !== null) {
                    rowSubRole = role["sub-role"][index];
                }

                //checking if lead is unfilled or prefer deputy role
                if (lead == "Unfilled") {
                    lead = '<a href="mailto:coordinators@astropy.org"><span style="font-style: italic;">Unfilled</span></a>';
                }
                if (preferDeputyRegexp.test(lead)) {
                    //replacing 1 from string
                    lead = lead.replace(preferDeputyRegexp, '');
                    lead = '<span style="color: blue;">' + lead + '<sup>1</sup></span>';
                }

                //checking if a value exists at an index in role["deputy"] array
                var rowDeputy = "";
                if (typeof role["deputy"][index] !== 'undefined' && role["deputy"][index] !== null) {
                    rowDeputy = role["deputy"][index];
                    if (rowDeputy == "Unfilled") {
                        rowDeputy = '<a href="mailto:coordinators@astropy.org"><span style="font-style: italic;">Unfilled</span></a>';
                    }
                    if (preferDeputyRegexp.test(rowDeputy)) {
                        //replacing 1 from string
                        rowDeputy = rowDeputy.replace(preferDeputyRegexp, '');
                        rowDeputy = '<span style="color: blue;">' + rowDeputy + '<sup>1</sup></span>';
                    }
                }

                //generating rows
                if (index == 0) {
                    rows += '<tr class="border-top">';
                } else {
                    rows += '<tr>';
                }

                rows +=   '<td>' + rowRole + '</td>' +
                          '<td>' + rowSubRole + '</td>' +
                          '<td>' + lead + '</td>' +
                          '<td>' + rowDeputy + '</td>' +
                        '</tr>';
                index++;
            });
        });

        $("#roles-table").append(rows);
    }

    function createRolesDescription(roles) {
        //roles is an array of objects called "role"
        var blocks = "";
        roles.forEach(function (role) {
            //role is an object containing information about each team role
            var list = "";
            //checking if role["description"] array isn't empty
            if (role["description"].length != 0) {
                //generate list by iterating over each description in the role
                if (role["sub-description"].length == 2 && role["sub-description"][0] instanceof Array) {
                    //separate case for sections where
                    //both role["sub-description"] & role["description"] contain two sub-arrays
                    role["sub-description"][0].forEach(function (description) {
                        list += '<li>' + description + '</li>';
                    });
                    blocks += '<br/>' +
                              '<h3 id="' + role["url"] + '">' + role["role-head"] + '</h3>' +
                              '<strong>' + role["role-subhead"][0] + '</strong>' +
                              '<p>' + role["description"][0] + '</p>' +
                              '<ul>' + list + '</ul>';

                    list = '';
                    role["sub-description"][1].forEach(function (description) {
                        list += '<li>' + description + '</li>';
                    });
                    blocks += '<br/>' +
                              '<strong>' + role["role-subhead"][1] + '</strong>' +
                              '<p>' + role["description"][1] + '</p>' +
                              '<ul>' + list + '</ul>';
                } else {
                    role["sub-description"].forEach(function (description) {
                        list += '<li>' + description + '</li>';
                    });
                    blocks += '<br/>' +
                              '<h3 id="' + role["url"] + '">' + role["role-head"] + '</h3>' +
                              '<p>' + role["description"] + '</p>' +
                              '<ul>' + list + '</ul>';
                }
            }
        });
        $("#roles-description").append(blocks);
    }

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

    // makes permalink visible only when user moves cursor on headline, otherwise hidden
    $("h1").hover(function() {
        $(this).children("a").css("visibility", "visible");
    }, function() {
        $(this).children("a").css("visibility", "hidden");
    });
    $("h2").hover(function() {
        $(this).children("a").css("visibility", "visible");
    }, function() {
        $(this).children("a").css("visibility", "hidden");
    });
    $("h3").hover(function() {
        $(this).children("a").css("visibility", "visible");
    }, function() {
        $(this).children("a").css("visibility", "hidden");
    });

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
        return '<a href="' + urltext + '">' + 'Website' + '</a>';
    }
}


function repo_translator(urltext) {
    if (urltext === undefined) {
        return 'None';
    } else {
        return '<a href="' + urltext + '">' + 'Repository' + '</a>';
    }
}


function pypi_translator(pypiname) {
    if (pypiname === undefined) {
        return 'None';
    } else {
        var urltext = 'http://pypi.python.org/pypi/' + pypiname;
        return '<a href="' + urltext + '">' + 'PyPI' + '</a>';
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
    populatePackageTable('coordinated', filter_pkg_data(data, "coordinated", true));
    populatePackageTable('affiliated', filter_pkg_data(data, "coordinated", false));
}

function filter_pkg_data(data, field, value) {
    if (data === null) {
      return null;
    }
    var pkgs = data.packages;
    var filtered_data = [];

    for (i=0; i<pkgs.length; i++) {
        if (pkgs[i][field] == value) {
            filtered_data.push(pkgs[i]);
        }
    }
    return {'packages': filtered_data};
}


function populatePackageTable(tableid, data) {
    // Now we get the table and prepare it
    var tab = document.getElementById(tableid + "-package-table");
    var ncols = tab.rows[0].cells.length;

    //we have to delete the "Loading..." row
    tab.deleteRow(1);

    if (data === null) {
        var row = tab.insertRow(1);
        row.insertCell(0).innerHTML = 'Could not load registry file!';
        for (i=0;i<(ncols - 1);i++) { row.insertCell(i + 1).innerHTML = ' '; }
    } else {
        var pkgs = data.packages;
        //inserting total number of affiliated packages at top of table
        $("#total-" + tableid + "-pkgs").text(pkgs.length);
        //First figure out the correct order if we sort on the name
        var nmarr = new Array(pkgs.length);
        var sortorder = new Array(pkgs.length);
        for (i=0; i<pkgs.length; i++) {
            pkgi = pkgs[i];
            nmarr[i] = pkgi.name.toLowerCase();
            sortorder[i] = i;
        }
        // This "sorts" the indicies using a compare function that actually sorts nmarr
        sortorder.sort(function (a, b) { return nmarr[a] < nmarr[b] ? -1 : nmarr[a] > nmarr[b] ? 1 : 0; });

        var pkgi;
        var namerow, descrow, shieldrow, maintrow;
        var nmcell, pypicell, urlcell, repocell;
        var desccell, maintcell, shieldcell;

        for (i=0; i<sortorder.length; i++) {
            pkgi = pkgs[sortorder[i]];
            namerow = tab.insertRow(i*4 + 1);

            nmcell = namerow.insertCell(0);
            urlcell = namerow.insertCell(1);
            repocell = namerow.insertCell(2);
            pypicell = namerow.insertCell(3);

            nmcell.innerHTML = pkgi.name;
            nmcell.className = 'first-package-row'
            nmcell.setAttribute('width', 100)
            urlcell.innerHTML = url_translator(pkgi.home_url);
            repocell.innerHTML = repo_translator(pkgi.repo_url);
            pypicell.innerHTML = pypi_translator(pkgi.pypi_name);


            descrow = tab.insertRow(i*4 + 2);
            descrow.insertCell(0).innerHTML = "";
            desccell = descrow.insertCell(1);
            desccell.colSpan = "3";
            desccell.innerHTML = pkgi.description;

            maintrow = tab.insertRow(i*4 + 3);
            maintrow.insertCell(0).innerHTML = "";
            maintcell = maintrow.insertCell(1);
            maintcell.colSpan = "3";
            maintcell.innerHTML = "Maintainer(s): " + maintainer_translator(pkgi.maintainer, pkgi.name);

            shieldrow = tab.insertRow(i*4 + 4);
            shieldrow.insertCell(0).innerHTML = "";
            shieldcell = shieldrow.insertCell(1);
            shieldcell.colSpan = "3";
            shieldcell.innerHTML = makeShields(pkgi)

        }
    }
}

var review_name_map = {"functionality": "Functionality",
    "ecointegration": "Astropy%20integration",
    "documentation": "Docs",
    "testing": "Tests",
    "devstatus": "Development",
    "python3": "Python 3"
};

var review_default_color = "brightgreen";
var review_color_map = {'Unmaintained': "red",
    "Functional but low activity": "orange",
    "Good": "brightgreen",
    "Partial": "orange",
    "No": "orange",
    "Needs work": "red"
};

function makeShields(pkg) {
  var shield_string = "";

  var key, shield_name, pkgvalue, color, url;

  for (key in review_name_map) {
    console.log("K"+key);
    if (review_name_map.hasOwnProperty(key)) {
      shield_name = review_name_map[key];
      if ("review" in pkg && key in pkg.review ) {
        pkgvalue = pkg.review[key];

        color = review_color_map[pkgvalue];
        if (typeof color == 'undefined') {
          color = review_default_color;
        }

        url = "https://img.shields.io/badge/" + shield_name + "-" + pkgvalue + "-" + color + ".svg";
        shield_string += "<img src=\"" + url + "\">" + " "
      }
    }
  }
  return shield_string
}

function guess_os() {
    var OSName="source";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="osx";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="linux";
    return OSName;
}
