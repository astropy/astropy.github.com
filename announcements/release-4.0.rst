:orphan:

Astropy v4.0 Released!
======================

Dear colleagues,

We are very happy to announce the v4.0 release of the Astropy package, a
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

- Support for Planck 2018 Cosmological Parameters
- Improved Consistency of Physical Constants and Units
- Scientific enhancements to the Galactocentric Frame
- New ymdhms Time Format
- New Context Manager for plotting time values
- Dynamic and improved handling of leap second
- Major Improvements in Compatibility of Quantity Objects with NumPy
  Functions
- Multiple interface improvements to WCSAxes
- Fitting of WCS to Pairs of Pixel/World Coordinates
- Support for WCS Transformations between Pixel and Time Values
- Improvements to Folding for Time Series
- New Table Methods and significant performance improvements for Tables
- Improved downloading and caching of remote files

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     https://docs.astropy.org/en/stable/whatsnew/4.0.html

The Astropy v4.0.x series now replaces v2.0.x as the long term support
release, and will be supported until the end of 2021. Also note that the
Astropy 4.x series only supports Python 3. Python 2 users can continue
to use the 2.x series but as of now it is no longer supported (as Python
2 itself is no longer supported). For assistance converting Python 2
code to Python 3, see the `Python 3 for scientists conversion
guide <https://python-3-for-scientists.readthedocs.io/>`__.

Instructions for installing Astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

If you make use of the `Anaconda Python
Distribution <https://www.continuum.io/downloads>`__, you can update to
Astropy v4.0 with:

::

   conda update astropy

Whereas if you usually use pip, you can do:

::

   pip install astropy --upgrade

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Over 350 developers have contributed code to Astropy so far, and you can
find out more about the team behind Astropy here:

     https://www.astropy.org/team.html

If you use Astropy directly for your work, or as a dependency to another
package, please remember to acknowledgment it by citing the appropriate
Astropy paper. For the most up-to-date suggestions, see :ref:`the
acknowledgment page <astropy-org-acknowledge>`, but as of this release
the recommendation is:

This research made use of Astropy, a community-developed core Python
package for Astronomy (`Astropy Collaboration,
2018 <https://doi.org/10.3847/1538-3881/aabc4f>`__).

Special thanks to the coordinator for this release: Brigitta Sipocz.

We hope that you enjoy using Astropy as much as we enjoyed developing
it!

| Erik Tollerud, Tom Robitaille, Kelle Cruz, and Tom Aldcroft
| on behalf of The Astropy Collaboration
