:orphan:

Astropy v5.1 Released!
======================

Dear colleagues,

We are very happy to announce the v5.1 release of astropy, a core Python
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

- Updates to cosmology
- doppler_redshift() equivalency
- Specifying data types when reading ASCII tables
- Structured Columns
- New model fitters have been added
- Allow time conversions without predictive Earth rotation data (IERS-A)
- Uncertainty classes can be transformed into each other
- Schechter1D Model

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     `https://docs.astropy.org/en/stable/whatsnew/5.1.html <https://docs.astropy.org/en/v5.1/whatsnew/5.1.html>`__

Instructions for installing astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

If you usually use pip/vanilla Python, you can do:

::

   pip install astropy --upgrade

If you make use of the `Anaconda Python
Distribution <https://www.continuum.io/downloads>`__, soon you will be
able update to Astropy v5.1 with:

::

   conda update astropy

Or if you cannot wait for Anaconda to update their default version, you
can use the conda-forge channel:

::

   conda update -c conda-forge astropy

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Over 400 people have contributed code to the core astropy package so
far, and you can find out more about the team here:

     https://www.astropy.org/team.html

If you use Astropy directly for your work, or as a dependency to another
package, please remember to acknowledge it by citing the appropriate
Astropy paper. For the most up-to-date suggestions, see
:ref:`the acknowledgment page <astropy-org-acknowledge>`, but as of this release
the recommendation is:

This research made use of Astropy, a community-developed core Python
package for Astronomy (`Astropy Collaboration,
2018 <https://doi.org/10.3847/1538-3881/aabc4f>`__).

We hope that you enjoy using astropy as much as we enjoyed developing
it!

| Simon Conseil
| v5.1 Release Coordinator
| on behalf of The Astropy Project
