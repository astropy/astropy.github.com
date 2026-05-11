:orphan:

Astropy v5.2 Released!
======================

Dear colleagues,

We are very happy to announce the v5.2 release of astropy, a core Python
package for Astronomy (and a v5.2.1 release which fixes compatibility
with Numpy 1.24):

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

- Quantity data types
- Updates to astropy.cosmology
- Topocentric ITRS Frame
- Enhanced Fixed Width ASCII Tables
- Accessing cloud-hosted FITS files
- Drawing the instrument beam and a physical scale bar on celestial
  images
- Interior ticks and tick labels
- Support for tilde-prefixed paths
- CCDData PSF Image representation

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     https://docs.astropy.org/en/stable/whatsnew/5.2.html

Instructions for installing astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

If you usually use pip/vanilla Python, you can do:

::

   pip install astropy --upgrade

If you make use of the `Anaconda Python
Distribution <https://www.continuum.io/downloads>`__, soon you will be
able update to Astropy v5.2 with:

::

   conda update astropy

Or if you cannot wait for Anaconda to update their default version, you
can use the conda-forge channel:

::

   conda update -c conda-forge astropy

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Over 430 people have contributed code to the core astropy package so
far, and you can find out more about the team here:

     https://www.astropy.org/team.html

If you use astropy directly for your work, or as a dependency to
another package, please remember to acknowledge it by citing the
appropriate Astropy paper. For the most up-to-date suggestions, see
:ref:`the acknowledgment page <astropy-org-acknowledge>`.

We hope that you enjoy using astropy as much as we enjoyed developing
it!

| Thomas Robitaille
| v5.2 Release Coordinator
| on behalf of The Astropy Project
