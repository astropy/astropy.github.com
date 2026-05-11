:orphan:

Astropy v1.1 Released!
======================

Dear colleagues,

We are very happy to announce the v1.1 release of the Astropy package, a
core Python package for Astronomy:

.. rst-class:: announce-logo
.. container::

    .. image:: /_static/img/astropy_logo_notext.png
        :width: 100px

    https://www.astropy.org

Astropy is a community-driven Python package intended to contain much of
the core functionality and common tools needed for astronomy and
astrophysics.

New and improved major functionality in this release includes:

- New functions to automatically determine histogram bins, including the
  Bayesian blocks algorithm
- A new interface to transform between Table objects and pandas
  DataFrame objects
- Support for table indexing
- Support for supergalactic and ecliptic coordinates
- A new .info attribute to get summary information about tables and
  columns
- A new show_in_notebook() method to show a table in Jupyter/IPython
  notebooks with additional interactivity features
- Support for new units, including logarithmic units such as magnitudes,
  dex, and decibels
- Support for the Planck 2015 cosmology and significant performance
  improvements in the cosmology sub-package

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     https://docs.astropy.org/en/stable/whatsnew/1.1.html

Instructions for installing Astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

If you make use of the `Anaconda Python
Distribution <https://www.continuum.io/downloads>`__, you can update to
Astropy v1.1 with:

::

       conda update astropy

Whereas if you usually use pip, you can do:

::

       pip install astropy --upgrade

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Over 160 developers have contributed code to Astropy so far, and you can
find out more about the team behind Astropy here:

     https://www.astropy.org/team.html

As a reminder, Astropy v1.0 (our long term support release) will
continue to be supported with bug fixes until Feb 19th 2017, so if you
need to use Astropy in a very stable environment, you may want to
consider staying on the v1.0.x set of releases rather than upgrading to
v1.1.

If you use Astropy directly for your work, or as a dependency to another
package, please remember to include the following acknowledgment at the
end of papers:

This research made use of Astropy, a community-developed core Python
package for Astronomy (Astropy Collaboration, 2013).

where (Astropy Collaboration, 2013) is a citation to the `Astropy
Paper <https://doi.org/10.1051/0004-6361/201322068>`__
(`ADS <https://adsabs.harvard.edu/abs/2013A%26A...558A..33A>`__ -
`BibTeX <https://adsabs.harvard.edu/cgi-bin/nph-bib_query?bibcode=2013A%26A...558A..33A&data_type=BIBTEX&db_key=AST&nocookieset=1>`__).

Please feel free to forward this announcement to anyone you think might
be interested in this release.

We hope that you enjoy using Astropy as much as we enjoyed developing
it!

| Thomas Robitaille, Erik Tollerud, and Perry Greenfield
| on behalf of The Astropy Collaboration
