:orphan:

Astropy v0.4 Released!
======================

Dear colleagues,

We are very happy to announce the third major public release (v0.4) of
the astropy package, a core Python package for Astronomy:

https://www.astropy.org

Astropy is a community-driven package intended to contain much of the
core functionality and common tools needed for performing astronomy and
astrophysics with Python.

New and improved major functionality in this release includes:

- A new astropy.vo.samp sub-package adapted from the previously
  standalone SAMPy package
- A re-designed astropy.coordinates sub-package for celestial
  coordinates
- A new ‘fitsheader’ command-line tool that can be used to quickly
  inspect FITS headers
- A new HTML table reader/writer
- Improved performance for Quantity objects
- A re-designed configuration framework

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     https://docs.astropy.org/en/stable/whatsnew/0.4.html

Instructions for installing Astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

In particular, if you use Anaconda, you can update to v0.4 with:

::

       conda update astropy

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Over 80 developers have contributed code to Astropy so far, and you can
find out more about the team behind Astropy here:

     https://www.astropy.org/team.html

If you use Astropy directly - or as a dependency to another package -
for your work, please remember to include the following acknowledgment
at the end of papers:

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
