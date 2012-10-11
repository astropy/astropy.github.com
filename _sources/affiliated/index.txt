:orphan:


Astropy Affiliated Package Registry
----------------------------------

A major part of the Astropy project is the existence of "Affiliated
Packages". An affiliated package is an astronomy-related python package
that is not part of the `astropy` core source code, but has requested to
be included in the Astropy project. The projects are expressing an
interest in Astropy's goals of improving reuse, interoperability, and
interface standards for python astronomy and astrophysics packages.

This page houses the official registry for affiliated packages. The
table below lists these packages, as determined from the
http://affiliated.astropy.org/registry.json file that contains the actual
registry. The following information is included for each package:

* The name of the package.
* The name of the author/maintainer of the package.
* It's "stability" status. The exact meaning of this is not fully defined,
  but it should be used as a guide for whether or not the package maintainer
  wants you to consider the package as "working," and not under heavy
  development or similar.
* The web page of the package.
* The source code repository for the package.
* The package's `PyPI <http://pypi.python.org/>`_ entry (if it has one).

Registering Packages
^^^^^^^^^^^^^^^^^^^^

To include your python astronomy package in this registry, contact the
coordination committe by e-mailing `astropy.team@gmail.com
<mailto:astropy.team@gmail.com?subject=Affiliated%20package%20registration%20request%20for%20YOURPKGNAMEHERE>`_.


Currently Registered Packages
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. The javascript at the bottom does the actual table populating

+--------------+---------+-----------+----------+-----------------+------------+
| Package Name | Stable? | PyPI Name | Web Page | Code Repository | Maintainer |
+==============+=========+===========+==========+=================+============+
| Loading...   |         +           +          +                 |            |
+--------------+---------+-----------+----------+-----------------+------------+

.. raw:: html

    <script type="text/javascript">

    //Using jQuery is ok because it is needed by and bundled with sphinx

    //Quirk to note: the jQuery.getJSON function fails if you open this locally
    //with Chrome, because Chrome thinks local JSON files are unsafe for some
    //reason.  Use basically any other modern browser, or it works fine if its
    //actually on the web server even with chrome.

    function url_translator(urltext) {
        if (urltext == undefined) {
            return 'None';
        } else {
            return '<a href="' + urltext + '">' + urltext + '</a>';
        }
    }

    function pypi_translator(pypiname) {
        if (pypiname == undefined) {
            return 'None';
        } else {
            var urltext = 'http://pypi.python.org/pypi/' + pypiname;
            return '<a href="' + urltext + '">' + pypiname + '</a>';
        }
    }

    function stable_translator(stable) {
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

    function populateTable(data, tstat, xhr) {
        var tab = document.getElementsByTagName('table')[0];
        tab.deleteRow(1);
        var ncols = tab.rows[0].cells.length;

        var pkgi, row, nmcell, stablecell, pypicell, urlcell, rpocell, maintcell;
        if (data == null) {
            row = tab.insertRow(1);
            row.insertCell(0).innerHTML = 'Could not load registry file!';
            for (i=0;i<(ncols - 1);i++) {
                row.insertCell(i + 1).innerHTML = ' ';
            }
        } else {
            var pkgs = data.packages;
            for (i=0; i<pkgs.length; i++) {
                pkgi = pkgs[i];
                row = tab.insertRow(i + 1);

                nmcell = row.insertCell(0);
                stablecell = row.insertCell(1);
                pypicell = row.insertCell(2);
                urlcell = row.insertCell(3);
                repocell = row.insertCell(4);
                maintcell = row.insertCell(5);

                nmcell.innerHTML = pkgi.name;
                stablecell.innerHTML = stable_translator(pkgi.stable);
                pypicell.innerHTML = pypi_translator(pkgi.pypi_name);
                urlcell.innerHTML = url_translator(pkgi.home_url);
                repocell.innerHTML = url_translator(pkgi.repo_url);
                maintcell.innerHTML = maintainer_translator(pkgi.maintainer, pkgi.name);
            }
        }
    }

    // Make sure the doc is loaded before doing anything
    $(document).ready(function() {
        $.getJSON("registry.json", populateTable);
    });

    </script>
