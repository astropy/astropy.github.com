:orphan:

Astropy v2.0 Released!
======================

Dear colleagues,

We are very happy to announce the v2.0 release of the Astropy package, a
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

- Most models now support parameters having units (i.e., being Quantity
  objects).
- A new CCDData class that is directly useful for typical astronomical
  images and implements the NDData interface.
- Coordinate frame objects can now carry proper motions and radial
  velocities, and will carry them through and transform them between
  frames. (This functionality is experimental and feedback is greatly
  desired.)
- Many of the typical mixin columns for astropy tables can now be saved
  into ECSV files and fully round-tripped.
- The fft and direct versions of the convolution algorithm in
  astropy.convolution are now more consistent and work better with
  typical use cases.
- A variety of additions to the astropy.stats subpackage

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     https://docs.astropy.org/en/stable/whatsnew/2.0.html

Note that the Astropy 2.x series will be the last versions of Astropy
that will support Python 2.x. Future versions of Astropy will only
support Python 3.x.

Instructions for installing Astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

If you make use of the `Anaconda Python
Distribution <https://www.continuum.io/downloads>`__, you can update to
Astropy v2.0 with:

::

   conda update astropy

Whereas if you usually use pip, you can do:

::

   pip install astropy --upgrade

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Over 232 developers have contributed code to Astropy so far, and you can
find out more about the team behind Astropy here:

     https://www.astropy.org/team.html

Astropy v2.0 now repaces v1.0 as the long term support release, and will
be supported until the end of 2019. The next major release of Astropy
(scheduled for January 2018) will only support Python 3.x. So if you
need to use Astropy in a very stable environment in Python 2.7, you
should continue to use the 2.0.x series after 3.0.x is released.

If you use Astropy directly for your work, or as a dependency to another
package, please remember to include the following acknowledgment at the
end of papers:

This research made use of Astropy, a community-developed core Python
package for Astronomy (Astropy Collaboration, 2013).

where (Astropy Collaboration, 2013) is a citation to the `Astropy
Paper <https://doi.org/10.1051/0004-6361/201322068>`__
(`ADS <https://adsabs.harvard.edu/abs/2013A%26A...558A..33A>`__ -
`BibTeX <https://adsabs.harvard.edu/cgi-bin/nph-bib_query?bibcode=2013A%26A...558A..33A&data_type=BIBTEX&db_key=AST&nocookieset=1>`__).

Special thanks to the coordinator for this release: Brigitta Sipocz.

We hope that you enjoy using Astropy as much as we enjoyed developing
it!

| Erik Tollerud, Tom Robitaille, Kelle Cruz, and Tom Aldcroft
| on behalf of The Astropy Collaboration
