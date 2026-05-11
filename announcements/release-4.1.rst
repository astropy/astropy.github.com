:orphan:

Astropy v4.1 Released!
======================

Dear colleagues,

We are very happy to announce the v4.1 release of the Astropy package, a
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

- A new SpectralCoord class for representing and transforming spectral
  quantities
- Support for writing Dask arrays to FITS files
- Added True Equator Mean Equinox (TEME) frame for satellite two-line
  ephemeris data
- Support for in-place setting of array-valued SkyCoord and frame
  objects
- Change in the definition of equality comparison for coordinate classes
- Support use of SkyCoord in table vstack, dstack, and insert_row
- Support for table cross-match join with SkyCoord or N-d columns
- Support for custom attributes in Table subclasses
- Added a new Time subformat unix_tai
- Added support for the -TAB convention in FITS WCS
- Support for replacing submodels in CompoundModel
- Support for units on otherwise unitless models via the
  Model.coerce_units method.
- Support for ASDF serialization of models

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     https://docs.astropy.org/en/stable/whatsnew/4.1.html

Instructions for installing Astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

If you usually use pip/vanilla Python, you can do:

::

   pip install astropy --upgrade

If you make use of the `Anaconda Python
Distribution <https://www.continuum.io/downloads>`__, soon you will be
able update to Astropy v4.1 with:

::

   conda update astropy

Or if you cannot wait for Anaconda to update their default version, you
can use the astropy channel:

::

   conda update -c astropy astropy

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Nearly 400 developers have contributed code to Astropy so far, and you
can find out more about the team behind Astropy here:

     https://www.astropy.org/team.html

The LTS (Long Term Support) version of Astropy at the time of v4.1's
release is v4.0 - this version will be maintained until next LTS release
(v5.0, scheduled for Fall 2021). Additionally, note that the Astropy 4.x
series only supports Python 3. Python 2 users can continue to use the
2.x series but it is no longer supported (as Python 2 itself is no
longer supported). For assistance converting Python 2 code to Python 3,
see the `Python 3 for scientists conversion
guide <https://python-3-for-scientists.readthedocs.io/>`__.

If you use Astropy directly for your work, or as a dependency to another
package, please remember to acknowledge it by citing the appropriate
Astropy paper. For the most up-to-date suggestions, see
:ref:`the acknowledgment page <astropy-org-acknowledge>`, but as of this
release the recommendation is:

This research made use of Astropy, a community-developed core Python
package for Astronomy (`Astropy Collaboration,
2018 <https://doi.org/10.3847/1538-3881/aabc4f>`__).

We hope that you enjoy using Astropy as much as we enjoyed developing
it!

| Erik Tollerud
| v4.1 Release Coordinator
| on behalf of The Astropy Project
