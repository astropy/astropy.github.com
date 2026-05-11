:orphan:

Astropy v7.0 Released!
======================

Dear colleagues,

We are very happy to announce the v7.0 release of astropy, a core Python
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

Notable changes in this release include:

- Full MaskedQuantity Support in QTable
- Coordinate frames can now be stored in tables
- Table show_in_notebook is back with ipydatagrid
- Ordering of table columns constructed from rows
- Table.pformat is now independent of terminal dimensions
- Quantity.to_string supports formatter for formatting
- NumPy constructor functions with a like argument are now supported
  with Quantity
- Change default type for meta attribute to dict and update ECSV writer
- Improve the Contributor Documentation
- Typing in astropy.stats
- Converting units on dask and other array-like objects
- Performance improvements in astropy.modeling
- Fitting models in parallel with N-dimensional data
- RGB image visualization enhancements
- New Lorentz2D model
- Faster guessing of formats in astropy.io.ascii
- Support VOTable version 1.5
- New \`parquet.votable\` format is available to read/write a Table from
  Parquet files with VOTable metadata included
- New SimpleNorm class
- New SigmaClippedStats class
- Automatic placement of axis and tick labels for WCSAxes
- Support for masks in coordinates
- Minimum supported version of Python updated to 3.11
- The astropy conda-forge package now has all the optional dependencies,
  a new astropy-base package is provided with only required
  dependencies.

In addition, hundreds of smaller improvements and fixes have been made.
An overview of the changes is provided at:

     https://docs.astropy.org/en/stable/whatsnew/7.0.html

Instructions for installing astropy are provided on our
`website <https://www.astropy.org>`__, and extensive documentation can be
found at:

     https://docs.astropy.org

If you usually use pip to install packages, you can do:

::

   pip install astropy --upgrade

If you make use of conda (such as through the `Anaconda Python
Distribution <https://www.continuum.io/downloads>`__), you should soon
be able update to Astropy v7.0 with:

::

   conda update astropy

Or if you cannot wait for Anaconda to update their default version, you
can use the conda-forge channel:

::

   conda update -c conda-forge astropy

Please report any issues, or request new features via our GitHub
repository:

     https://github.com/astropy/astropy/issues

Over 540 people have contributed code to the core astropy package so
far, and you can find out more about the team here:

     https://www.astropy.org/team.html

If you use astropy directly for your work, or as a dependency to
another package, please remember to acknowledge it by citing the
appropriate Astropy paper. For the most up-to-date suggestions, see
:ref:`the acknowledgment page <astropy-org-acknowledge>`.

We hope that you enjoy using astropy as much as we enjoyed developing
it!

| Simon Conseil
| v7.0 Release Coordinator
| on behalf of The Astropy Project
