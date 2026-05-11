:orphan:

Astropy v5.3 Released!
======================

Dear colleagues,

We are very happy to announce the v5.3 release of astropy, a core Python
package for Astronomy:

.. rst-class:: announce-logo
.. container::

    .. image:: /_static/img/astropy_logo_notext.png
        :width: 100px

    https://www.astropy.org

The astropy core package is a community-driven Python package intended
to contain much of the core functionality and common tools needed for
astronomy and astrophysics. It is part of the Astropy Project, which
aims to foster an ecosystem of interoperable astronomy packages for
Python.

New and improved major functionality in this release includes:

- New flat astropy.cosmology classes
- New union operators for Table
- Efficient data access for compressed FITS files
- Added support for NOCOMPRESS for compressed FITS files
- New fraction option for representing units as strings
- Change in order in unit string representations
- Support for collapse operations on arbitrary axes in nddata
- Refresh cached observatory site registry for EarthLocation methods
- New LombScargleMultiband class for multiband datasets

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     https://docs.astropy.org/en/stable/whatsnew/5.3.html

Instructions for installing astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

If you usually use pip/vanilla Python, you can do:

::

   pip install astropy --upgrade

If you make use of the `Anaconda Python
Distribution <https://www.continuum.io/downloads>`__, soon you will be
able update to Astropy v5.3 with:

::

   conda update astropy

Or if you cannot wait for Anaconda to update their default version, you
can use the conda-forge channel:

::

   conda update -c conda-forge astropy

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Over 490 people have contributed code to the core astropy package so
far, and you can find out more about the team here:

     https://www.astropy.org/team.html

If you use astropy directly for your work, or as a dependency to
another package, please remember to acknowledge it by citing the
appropriate Astropy paper. For the most up-to-date suggestions, see
:ref:`the acknowledgment page <astropy-org-acknowledge>`.

We hope that you enjoy using astropy as much as we enjoyed developing
it!

| Simon Conseil
| v5.3 Release Coordinator
| on behalf of The Astropy Project
