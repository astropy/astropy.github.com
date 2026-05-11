:orphan:

Astropy v3.0 Released!
======================

Dear colleagues,

We are very happy to announce the v3.0 release of the Astropy package, a
core Python package for Astronomy:

.. rst-class:: announce-logo
.. container::

    .. image:: /_static/img/astropy_logo_notext.png
        :width: 100px

    https://www.astropy.org

Astropy is a community-driven Python package intended to contain much of
the core functionality and common tools needed for astronomy and
astrophysics. It is part of the Astropy Project, which aims to foster an
ecosystem of interoperable astronomy packages for Python.

New and improved major functionality in this release includes:

- Full support for velocities in the coordinates subpackage, including
  SkyCoord objects and proper motion corrections.
- Very large ASCII files can now be read in as chunks, allowing larger
  tables to be efficiently read in, along with other performance
  improvements reading tables.
- Time objects can now be read from or written to FITS files following
  the official FITS time standard.
- Table mixin columns (e.g., quantities) can now be losslessly saved to
  HDF5 or FITS tables.
- Constants can now be versioned using context managers.
- Support for quantities in scipy special functions
- A new command line script, "showtable", is available to display tables
  from any format Astropy can read.
- The pytest plugins for testing Astropy have been moved to external
  packages, enabling their use in a wider range of Python packages.
- False alarm probabilities are now available for the Lomb-Scargle
  periodogram implementation.

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     https://docs.astropy.org/en/stable/whatsnew/3.0.html

Note that the Astropy 3.x series is the first to only support Python 3.
Python 2 users can continue to use the 2.x series, which will receive
bug fixes and support until the Python developers permanently sunset
Python 2.7 (scheduled for 2019).

Instructions for installing Astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

If you make use of the `Anaconda Python
Distribution <https://www.continuum.io/downloads>`__, you can update to
Astropy v3.0 with:

::

   conda update astropy

Whereas if you usually use pip, you can do:

::

   pip install astropy --upgrade

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Over 253 developers have contributed code to Astropy so far, and you can
find out more about the team behind Astropy here:

     https://www.astropy.org/team.html

As a reminder, Astropy v2.0 (our long term support release) will
continue to be supported with bug fixes until the end 2019, so if you
need to use Astropy in a very stable environment, you may want to
consider staying on the v2.0.x set of releases (for which we have
recently released v2.0.4).

If you use Astropy directly for your work, or as a dependency to another
package, please remember to include the following acknowledgment at the
end of papers:

This research made use of Astropy, a community-developed core Python
package for Astronomy (Astropy Collaboration, 2018).

where (Astropy Collaboration, 2018) is a citation to the `Astropy Paper
II <https://arxiv.org/abs/1801.02634>`__
(`ADS <https://adsabs.harvard.edu/abs/2018arXiv180102634T>`__ -
`BibTeX <https://adsabs.harvard.edu/cgi-bin/nph-bib_query?bibcode=2018arXiv180102634T&data_type=BIBTEX&db_key=PRE&nocookieset=1>`__).

This paper is still under review, however, and an earlier paper is
available describing the status of the package at the time of v0.2. If
your work has used Astropy since then, you are encouraged to acknowledge
both papers:

This research made use of Astropy, a community-developed core Python
package for Astronomy (Astropy Collaboration, 2013, 2018).

where (Astropy Collaboration, 2013) is a citation to the `first Astropy
Paper <https://doi.org/10.1051/0004-6361/201322068>`__
(`ADS <https://adsabs.harvard.edu/abs/2013A%26A...558A..33A>`__ -
`BibTeX <https://adsabs.harvard.edu/cgi-bin/nph-bib_query?bibcode=2013A%26A...558A..33A&data_type=BIBTEX&db_key=AST&nocookieset=1>`__).

Special thanks to the coordinator for this release: Brigitta Sipocz.

We hope that you enjoy using Astropy as much as we enjoyed developing
it!

| Erik Tollerud, Tom Robitaille, Kelle Cruz, and Tom Aldcroft
| on behalf of The Astropy Collaboration
