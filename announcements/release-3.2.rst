:orphan:

Astropy v3.2 Released!
======================

Dear colleagues,

We are very happy to announce the v3.2 release of the Astropy package, a
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

- New Sub-package for Time Series
- New SI/CODATA 2018 Constants
- Additions and changes to Ecliptic Transformations
- Table performance improvements and change in metadata handling
- Table I/O integration of pandas I/O functions for ASCII tables
- Improved help on Table read() and write() methods

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     https://docs.astropy.org/en/stable/whatsnew/3.2.html

Note that the Astropy 3.x series only supports Python 3. Python 2 users
can continue to use the 2.x (LTS) series (but without new features).

Instructions for installing Astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

If you make use of the `Anaconda Python
Distribution <https://www.continuum.io/downloads>`__, you can update to
Astropy v3.2 with:

::

   conda update astropy

Whereas if you usually use pip, you can do:

::

   pip install astropy --upgrade

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Over 300 developers have contributed code to Astropy so far, and you can
find out more about the team behind Astropy here:

     https://www.astropy.org/team.html

As a reminder, Astropy v2.0 (our long term support release) will
continue to be supported with bug fixes (but no new features) until the
end of 2019, so if you need to use Astropy in a very stable environment,
you may want to consider staying on the v2.0.x set of releases (for
which we have recently released v2.0.13).

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
