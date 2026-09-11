.. _astropy-org-affiliated:

Affiliated Packages
===================

Astropy Affiliated Packages
    A major part of the Astropy Project is the concept of “Astropy
    affiliated packages”. An affiliated package is an
    astronomy-related Python package that is not part of the astropy
    core package, and is not managed by the project but is a part of
    the Astropy Project community. These packages demonstrate a
    commitment to Astropy’s goals of improving reuse,
    interoperability, and interface standards for Python astronomy and
    astrophysics packages. In many (but not all) cases, affiliated
    packages also follow similar development processes and package
    templates as for the core package.

    If you are a developer interested in signing up as an affiliated package, details are in the `Becoming an Affiliated Package <#affiliated-instructions>`__ section.

Astropy Coordinated Packages
    A related concept is that of “Astropy coordinated packages”.
    Coordinated packages are similar to affiliated packages, but the
    Astropy Project as a whole maintains them. In practice this means
    the Astropy coordination committee has administrative control of a
    coordinated package repository (delegated to the maintainers), and
    that maintainers of these packages have :ref:`formal
    roles <astropy-org-team>` in the Astropy Project. The most prominent
    of these coordinated packages is the Astropy core package itself.
    In some cases these are packages identified by the core team as
    needing development separate from the core (either they are
    experimental or problem space-focused), while others started as
    affiliated packages but have become so important to the ecosystem
    that they grew to become coordinated.

Astropy Infrastructure Packages
    One final related category are the "Astropy infrastructure
    packages". These packages are those that are necessary
    infrastructure for Astropy packages - e.g. testing and
    documentation machinery. While occasionally these have
    astro-specific functionality, in general they are more generic
    packages that are useful to packages outside of astronomy, and as
    a result may have some maintainers outside the Astropy project.
    But some are also Astropy coordinated packages, with maintainers
    drawn from the infrastructure roles.

Installing Affiliated and Coordinated Packages
    All packages should be available on PyPI. Some are available via
    conda, particularly through the conda-forge channel. That said,
    affiliated packages are developed independently of the Astropy
    core library. You should refer to the package's documentation
    first if you encounter problems.

.. _astropy-org-affililated-coordinated-table:

Coordinated Packages
--------------------

The following table lists all current Astropy coordinated
packages.

.. raw:: html

  <p>Total number of coordinated packages: <span id="total-coordinated-pkgs"></span></p>

.. list-table::
   :header-rows: 0
   :stub-columns: 1
   :name: coordinated-package-table
   :class: package-table forth-row-sep

   * - Loading...
     - \-
     - \-
     - \-
   * - \-
     - \-
     - \-
     - \-


.. _astropy-org-affililated-registry-table:

Affiliated Packages Registry
----------------------------

The following table lists all currently registered affiliated
packages.

NOTE: The listing is currently minimal because Astropy has just
accepted `APE 22 <https://github.com/astropy/astropy-APEs/blob/main/APE22.rst>`__
in January 2024. We are in the midst of transitioning to the new
process in partnership with pyOpenSci, so we really appreciate
your patience.


.. raw:: html

  <p>Total number of post-APE 22 affiliated packages: <span id="total-pyos-pkgs"></span></p>


.. list-table::
   :header-rows: 0
   :stub-columns: 1
   :name: pyos-package-table
   :class: package-table third-row-sep

   * - Loading...
     - \-
     - \-
     - \-
   * - \-
     - \-
     - \-
     - \-

All accepted pyOpenSci packages available `here <https://www.pyopensci.org/communities/astropy.html>`__.

All currently under review packages via pyOpenSci available `here <https://github.com/pyOpenSci/software-submission/issues?q=is%3Aissue+is%3Aopen+label%3Aastropy>`__.

.. _astropy-org-affililated-registry-pre-ape-table:

Affiliated Packages Registry (Pre-APE 22)
-----------------------------------------

This section contains the listing of Astropy Affiliated Packages
that pre-dated `APE 22 <https://github.com/astropy/astropy-APEs/blob/main/APE22.rst>`__.
This section is frozen as of March 6, 2024.

.. raw:: html

  <p>Total number of pre-APE 22 affiliated packages: <span id="total-affiliated-pkgs"></span></p>


.. list-table::
   :header-rows: 0
   :stub-columns: 1
   :name: affiliated-package-table
   :class: package-table forth-row-sep

   * - Loading...
     - \-
     - \-
     - \-
   * - \-
     - \-
     - \-
     - \-

.. _astropy-org-affiliated-instructions:

Becoming an Affiliated Package
------------------------------

Astropy `uses the pyOpenSci peer review process <https://www.pyopensci.org/partners.html>`__ to vet affiliated packages. If you are a developer of an astronomy package and would like your package to become affiliated with the Astropy Project, you submit your package directly to pyOpenSci.
Astropy will be involved in the review, which will allow your package to become an affiliated package through that review process. You can also opt to be fast tracked through `JOSS <https://joss.theoj.org/>`__ if desired.
Read the pyOpenSci author guide to learn `how to get started with submitting a package to pyOpenSci through their affiliated partner program Guidebook <https://www.pyopensci.org/software-peer-review/how-to/author-guide.html>`__.

In addition to pyOpenSci criteria, we also apply `Astropy-specific guidelines for reviewing affiliated packages <https://github.com/astropy/astropy-project/blob/main/affiliated/affiliated_package_review_guidelines.md>`__.
This will give you a sense of whether your package is ready for review.
Broadly speaking, your package should:

- Comply with general pyOpenSci review standards. Please see `Peer Review Guide for Python Open Source Authors <https://www.pyopensci.org/software-peer-review/how-to/author-guide.html>`__ for more details.
- Be potentially useful to astronomers. This can mean useful to a specific sub-domain of astronomy, or more broadly useful to a large fraction of astronomy (or beyond, as long as it is also useful for astronomy).
- Specifically use, interface with, or provide complementary capabilities to other Astropy packages.
- Use `classes and functions from the astropy core package <https://docs.astropy.org/>`__ wherever possible and appropriate, and (as much as possible) avoid duplication with other packages in the Astropy ecosystem. This facilitates re-use of code and sharing of resources.
- Be open to contributions from others. While this most straightforwardly means it follows a Github-based open development model (like the Astropy core package), alternative approaches are perfectly valid as long as they are consistent with basic principles of open source; e.g., `an OSI-approved license <https://choosealicense.com/>`__.
- Include instructions to users on how to cite your package. This is commonly done with a CITATION file. This file could include a Zenodo record (highly recommended), acknowledgement text, and/or journal article(s). Where possible, full BibTeX entries of these citations are recommended.
- Include citations to other relevant papers and software following `leading practices for citing astronomy software <https://www.astrobetter.com/blog/2019/07/01/citing-astronomy-software-inline-text-examples/>`__.

In addition, you should make an effort to connect with the Astropy developer community, including developers from the core astropy package or any related affiliated packages.
If your package is determined to meet the above standards, it will be accepted and added to the affiliated package registry.
Note however that if packages become unmaintained or do not meet the standards anymore, they may be removed from the list of affiliated packages, `as per pyOpenSci policy. <https://www.pyopensci.org/software-peer-review/our-process/policies.html#after-acceptance-package-ownership-and-maintenance>`__

Package Template
################

If you are considering creating a new astronomy package and would like it to be an Astropy affiliated package, you can use `the OpenAstronomy packaging guide <https://github.com/OpenAstronomy/packaging-guide>`__ to make it much easier to meet these standards.
It reflects up-to-date Python packaging techniques to generate documentation like that used in the astropy package, a ready-to-use testing framework, and a variety of tools that streamline tasks like user configuration, caching downloaded files, or linking C-compiled extensions. More details on this template are available in the `usage instructions for the template <https://packaging-guide.openastronomy.org/en/latest/#using-the-template>`__.

Additionally, it is also acceptable to use `pyOpenSci Python Package Guide <https://www.pyopensci.org/python-package-guide/index.html>`__ if you think that better suits your package needs.

We recommend that you join the `astropy-affiliated-maintainers <https://groups.google.com/forum/#!forum/astropy-affiliated-maintainers>`__ mailing list to be kept informed of any dicussions related to affiliated packages.


Affiliated Package: FAQs
------------------------

I want my package to be Astropy Affiliated
##########################################

Thank you for your interest! Please see `Becoming an Affiliated Package <#becoming-an-affiliated-package>`__ above.
When in doubt, feel free to contact Astropy Affiliated Editors for advice.

I no longer have time to maintain my Astropy Affiliated package
###############################################################

Please contact pyOpenSci, as per `Peer Review Guidelines & Policies <https://www.pyopensci.org/software-peer-review/our-process/policies.html#peer-review-guidelines-policies>`__.

I want to delist my package as Astropy Affiliated
#################################################

Please see `Requesting package removal from the pyOpenSci ecosystem <https://www.pyopensci.org/software-peer-review/our-process/policies.html#requesting-package-removal-from-the-pyopensci-ecosystem>`__.

I am a new Editor
#################

Welcome and thank you! We usually do not switch out all our Editors at the same time, so the incumbent co-Editor could help you contact pyOpenSci to add you to `pyOpenSci editorial board <https://www.pyopensci.org/about-peer-review/#meet-our-editorial-board>`__ with the understanding that we are taking the person you are replacing off that board and that your role is Astropy- and astronomy-focused.

Your name would also be added to :ref:`Astropy Team <astropy-org-team>` under the same role.

I am a new reviewer
###################

Welcome and thank you! Please submit the sign-up form that can be found under `Become a pyOpenSci reviewer <https://www.pyopensci.org/about-peer-review/#get-involved-with-peer-review>`__.
Do not forget to check "Astropy"/"astronomy"/"astrophysics" when you see them as options.

It is important that you understand your reviews will be done in public. There is no option to remain anonymous.

.. raw:: html

    <script src="/_static/js/jquery.sidr.min.js"></script>
    <script src="/_static/js/yaml_parse_bundle.js"></script>

    <script type="text/javascript">
        $(document).ready(function() {
            $.getJSON("registry.json", populateTables);
        });
    </script>

    <script>
        fetch('https://raw.githubusercontent.com/pyOpenSci/pyopensci.github.io/refs/heads/main/data/packages.yml')
        .then(response => response.text())
        .then(yamlString => {
            var parsed = yaml.parse(yamlString);
            var i = 0;

        var tab = document.getElementById("pyos-package-table");
        tab.deleteRow(1);

        // Sort alphabetically by package name (case-insensitive)
        parsed.sort((a, b) => a.package_name.toLowerCase().localeCompare(b.package_name.toLowerCase()));

            var info = "";
            for (var p=0; p<parsed.length; p++) {
                var package = parsed[p];
            var partners = package["labels"];
            if (partners == null) {
                continue;
            }
            let found_astropy = partners.some(e => e.includes("astropy"));
            if (!found_astropy) {
                continue;
            }

            namerow = tab.insertRow(-1);

            nmcell = namerow.insertCell(0);
            urlcell = namerow.insertCell(1);
            repocell = namerow.insertCell(2);
            pypicell = namerow.insertCell(3);

            nmcell.innerHTML = package["package_name"];
            nmcell.className = 'first-package-row'
            nmcell.setAttribute('width', 100)
            urlcell.innerHTML = url_translator(package["gh_meta"]["documentation"]);
            repocell.innerHTML = repo_translator(package["repository_link"]);
            //pypicell.innerHTML = pypi_translator(package["package_name"]);  // FIXME: https://github.com/pyOpenSci/pyopensci.github.io/issues/390

            descrow = tab.insertRow(-1);
            descrow.insertCell(0).innerHTML = "";
            desccell = descrow.insertCell(1);
            desccell.colSpan = "3";
            desccell.innerHTML = package["package_description"];

            var maintainers = package["all_current_maintainers"];
            var maintainers_str = "";
                for (var m=0; m<maintainers.length; m++) {
                    maintainers_str += ghuser_translator(maintainers[m]["name"], maintainers[m]["github_username"]);
                if (m < (maintainers.length - 1)) {
                    maintainers_str += ", ";
                    }
                }

            maintrow = tab.insertRow(-1);
            maintrow.insertCell(0).innerHTML = "";
            maintcell = maintrow.insertCell(1);
            maintcell.colSpan = "3";
            maintcell.innerHTML = "Maintainer(s): " + maintainers_str;

                i += 1;
            }
            document.getElementById("total-pyos-pkgs").innerHTML = i;
            tab.deleteRow(0);
        ;
        });
    </script>
