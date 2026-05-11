:orphan:

Astropy v4.3 Released!
======================

Dear colleagues,

We are very happy to announce the v4.3 release of the Astropy package, a
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

- Transformations to AltAz are now much more precise (and faster)
- Improvements in making Astropy thread-safe
- Performance improvements to sigma clipping
- Changes in the Time and IERS leap second handling
- Support for multidimensional and object columns in ECSV
- Support for reading and writing tables to QDP format
- Append table to existing FITS file
- General masked class for Quantity and other ndarray subclasses
- Configuration file improvements
- Support for different solvers and bracket option in z_at_value

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     `https://docs.astropy.org/en/stable/whatsnew/4.3.html <https://docs.astropy.org/en/stable/whatsnew/4.3.html>`__

Instructions for installing Astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

If you usually use pip/vanilla Python, you can do:

::

   pip install astropy --upgrade

Note that this will yield astropy v4.3.1 instead of 4.3, which is
expected - a significant bug reported between the 4.3 release and this
announcement means that the correct version is indeed 4.3.1.

If you make use of the `Anaconda Python
Distribution <https://www.continuum.io/downloads>`__, soon you will be
able update to Astropy v4.3.1 with:

::

   conda update astropy

Or if you cannot wait for Anaconda to update their default version, you
can use the conda-forge channel:

::

   conda update -c conda-forge astropy

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Over 400 people have contributed code to Astropy so far, and you can
find out more about the team behind Astropy here:

     https://www.astropy.org/team.html

The LTS (Long Term Support) version of Astropy at the time of v4.3's
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
:ref:`the acknowledgment page <astropy-org-acknowledge>`, but as of this release
the recommendation is:

This research made use of Astropy, a community-developed core Python
package for Astronomy (`Astropy Collaboration,
2018 <https://doi.org/10.3847/1538-3881/aabc4f>`__).

We hope that you enjoy using Astropy as much as we enjoyed developing
it!

| Erik Tollerud
| v4.3 Release Coordinator
| on behalf of The Astropy Project
