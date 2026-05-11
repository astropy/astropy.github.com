:orphan:

Astropy v1.3 Released!
======================

Dear colleagues,

We are very happy to announce the v1.3 release of the Astropy package, a
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

- The WCSAxes framework for plotting points or images on celestial
  coordinates in matplotlib.
- A new function in astropy.visualization to generate 3-color images
  from astronomy images in different bands.
- Astropy coordinate representations now combine like vectors, with
  useful mathematical operations that can be performed on them.
- Astropy coordinates and time objects now behave much more consistently
  like arrays when they are reshaped.
- Earth locations can now be created from a postal address.
- JPL Ephemerides can now be used in the coordinates sub-package to
  improve the accuracy of coordinate transformations and barycentric
  time corrections.
- FORTRAN-style extended floating precision files like 1.495D+238 can
  now be read using astropy.io.ascii or Table.read.
- Astropy objects can now be serialized to (or re-loaded from) a
  standard YAML representation.
- FITS HDUs can now be lazy loaded, improving performance in files with
  many HDUs.
- The default cosmology is now Planck 2015.

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     https://docs.astropy.org/en/stable/whatsnew/1.3.html

Instructions for installing Astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

If you make use of the `Anaconda Python
Distribution <https://www.continuum.io/downloads>`__, you can update to
Astropy v1.3 with:

::

       conda update astropy

Whereas if you usually use pip, you can do:

::

       pip install astropy --upgrade

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Over 210 developers have contributed code to Astropy so far, and you can
find out more about the team behind Astropy here:

     https://www.astropy.org/team.html

Astropy v1.0 (our long term support release) will continue to be
supported with bug fixes until the v2.0 release in June 2017, so if you
need to use Astropy in a very stable environment, you may want to
consider staying on the v1.0.x set of releases (for which we are
simultaneously releasing v1.0.11).

While we typically do not support non-LTS releases, we are also
simultaneously releasing an Astropy v1.2.2, the last in that series.
This update is primarily to include a leap second at the end of 2016
(but also contains other bug fixes).

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

| Erik Tollerud, Tom Robitaille, Kelle Cruz, and Tom Aldcroft
| on behalf of The Astropy Collaboration
