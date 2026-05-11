:orphan:

Astropy v1.0 Released!
======================

Dear colleagues,

We are very happy to announce the fourth major public release (v1.0) of
the astropy package, a core Python package for Astronomy:

https://www.astropy.org

Astropy is a community-driven Python package intended to contain much of
the core functionality and common tools needed for astronomy and
astrophysics.

New and improved major functionality in this release includes:

- Support for Altitude/Azimuth and Galactocentric coordinates in
  astropy.coordinates
- A new astropy.visualization sub-package
- A new astropy.analytic_functions sub-package
- Compound models in astropy.modeling may now be created using
  arithmetic expressions, and the resulting models support fitting.
- Significantly faster C-based readers/writers for astropy.io.ascii
- Support for a new enhanced CSV ASCII table format
- A refactored Table class with improved performance when
  adding/removing columns
- Support for using Time, Quantity, or SkyCoord arrays as Table columns

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     https://docs.astropy.org/en/stable/whatsnew/1.0.html

Astropy v1.0 is a special release that we are denoting a *Long Term
Support* (LTS) release, which means that we will be supporting it with
bug fixes for the next two years, rather than the usual six months. More
information about this can be found at the link above.

Instructions for installing Astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

In particular, if you use the `Anaconda Python
Distribution <https://store.continuum.io/cshop/anaconda/>`__, you can
update to v1.0 with:

::

       conda update astropy

Whereas if you usually use pip, you can do:

::

       pip install astropy --upgrade

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Over 122 developers have contributed code to Astropy so far, and you can
find out more about the team behind Astropy here:

     https://www.astropy.org/team.html

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
