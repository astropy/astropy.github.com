:orphan:

Astropy v1.2 Released!
======================

Dear colleagues,

We are very happy to announce the v1.2 release of the Astropy package, a
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

- A new class to compute Lomb-Scargle periodograms efficiently using
  different methods.
- A number of new statistics functions including those for Jackknife
  resampling, circular statistics, and the Akaike and Bayesian
  information criteria.
- Support for getting the positions of solar system bodies in the
  coordinates sub-package.
- The ability to compute Barycentric and Heliocentric light-travel time
  corrections.
- Support for offset coordinate frames, which can be used to define a
  coordinate system relative to a known position and rotation.
- An implementation of the zscale algorithm to determine image limits
  automatically.
- Support for bolometric magnitudes in the units package.
- Improvements to the NDData class and subclasses.
- Auto-downloading of IERS tables as needed, which gives information
  about Earth orientation parameters necessary for high precision
  coordinate calculations and conversions to/from the UT1 scale.

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     https://docs.astropy.org/en/stable/whatsnew/1.2.html

Instructions for installing Astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

If you make use of the `Anaconda Python
Distribution <https://www.continuum.io/downloads>`__, you can update to
Astropy v1.2 with:

::

       conda update astropy

Whereas if you usually use pip, you can do:

::

       pip install astropy --upgrade

Note that if you install now you should get Astropy v1.2.1, as some
last-minute bug fixes were found and fixed after the v1.2 release was
created but before this announcement.

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Over 190 developers have contributed code to Astropy so far, and you can
find out more about the team behind Astropy here:

     https://www.astropy.org/team.html

As a reminder, Astropy v1.0 (our long term support release) will
continue to be supported with bug fixes until Feb 19th 2017, so if you
need to use Astropy in a very stable environment, you may want to
consider staying on the v1.0.x set of releases (for which we have
recently released v1.0.10).

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
