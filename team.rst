.. NOTE: This file has weird heading order deliberately to allow us to just include credits.rst from astropy core

.. _astropy-org-team:

************
Astropy Team
************

.. _astropy-org-team-roles:

Roles
=====

The Astropy project is made possible through the efforts of community members that perform numerous important roles. This encompasses a broad scope of responsibilities ranging from direct package development to communication, distribution, and managerial activities. In this section we list the identified project roles and responsible parties, to provide members with a point-of-contact for individual tasks and to give the project an overview of the current state of the team. Different roles on this page have very different scope and effort needed to perform them. Listing on this page is also not mean to be any particular assignment of credit beyond that implict in having the responsibilities of the role. See the `Astropy project role responsibilities <#role-responsibilities>`__ section below for a full description of each role.

We are always looking for interested community members to fill empty roles and to join existing teams. Community members may volunteer or nominate someone else for any role by emailing coordinators@astropy.org or by getting in touch with the current team.

.. list-table::
   :header-rows: 1
   :name: roles-table
   :class: package-table

   * - Role
     - Sub-role
     - Person/People (last name alphabetical)
   * - \-
     - \-
     - \-

Astropy Project Role Responsibilities
-------------------------------------

The Astropy project is made possible through the efforts of community members that perform numerous important roles. This encompasses a broad scope of responsibilities ranging from direct package development to communication, distribution, and managerial activities. In this section we list the responsibilities for each of the identified project roles. The list of people fulfilling these roles is found in the `Roles <#roles>`__ section. Committee/Team specific policies and communication methods are outlined in the `Astropy Policies <https://github.com/astropy/astropy-project/tree/main/policies#readme>`__ readme document.

.. container::
    :name: roles-description

    .. raw:: html

       <div></div>

Voting Members
==============

The Voting Members are the group of trusted individuals who operate the Astropy Project on behalf of the community. Their role and responsibilites are defined in `The Astropy Project Governance Charter (APE 0) <https://github.com/astropy/astropy-APEs/blob/main/APE0.rst#role-1>`__.

Active Voting Members
---------------------

- Tom Aldcroft
- Sam Bianco
- Larry Bradley
- Clara Brasseur
- Michael K. Brewer
- Mihai Cara
- Kyle Conroy
- Simon Conseil
- Lia Corrales
- Michael Coughlin
- Matt Craig
- Kelle Cruz
- Nadia Dencheva
- Nicholas Earl
- Tom Donaldson
- Wilfred Gee
- Adam Ginsburg
- Perry Greenfield
- Moritz Günther
- Derek Homeier
- William Jamieson
- Pey Lian Lim
- Stuart Littlefair
- Brett Morris
- Stuart Mumford
- Ricky O'Steen
- Hannu Parviainen
- Aarya Patil
- Tim Pickering
- Adrian Price-Whelan
- Clément Robert
- Thomas Robitaille
- Albert Y. Shih
- David Shupe
- Jonathan Sick
- Leo Singer
- Brigitta Sipőcz
- Nathaniel Starkman
- Ole Streicher
- John Swinbank
- Erik Tollerud
- James Turner
- Marten van Kerkwijk
- Eero Vaher
- Benjamin Alan Weaver
- Kyle Westfall


Emeritus Voting Members
-----------------------

- E. Madison Bray
- Juan Luis Cano Rodríguez
- Steve Crawford
- Michael Droettboom
- Lauren Glattly
- Michael Seifert
- Edward Slavich
- Zé Vinícius

***************
Astropy Credits
***************

The Astropy Project is made possible through the hard work of hundreds of people in the community.
Contributions take many forms, from participating in online forums, being an Astropy sub-committee member, giving talks, writing tutorials and documentation, writing code, making releases, organizing conferences, and much much more.

In this page we specially recognize the people and organizations that have made significant contributions to the Astropy project.
This comes in the form of :ref:`lifetime-credits` and :ref:`institutional-support` that provides both direct and indirect funding for Astropy.

.. _lifetime-credits:

Lifetime Contributors
=====================

Here we list individuals who estimate they have spent 2000 hours or more, equivalent to full time for a year, working on and contributing to the Astropy Project.
These individuals have demonstrated a long-term commitment to the project in many areas and exemplify the high standards we seek to achieve.

Adam Ginsburg
-------------

Together with others, Adam initiated development of the astroquery andregions packages, and continued maintaining or contributing to bothsince.
He developed the fft part of the convolution package andmaintained it since.
Adam played small roles in a number of other areas,but particularly recently in outreach to the radio community by creatingtools (spectral-cube, etc.) that link radio data to astropy.

Adrian Price-Whelan
-------------------

Adrian is the lead coordinator and developer behind the Learn Astropy and Astropy tutorials initiatives.
He was an initial contributor of theconcept and code for the Quantity class in ``astropy.units`` and serves aslead developer of ``astropy.coordinates``.
In the latter role he was a keyplayer in adding support for velocity data such as proper motions in ``astropy.coordinates``.

.. _brigitta-sipocz:

Brigitta Sipőcz
---------------

Since coming to the project in 2014, Brigitta has been an active and valued member of the Astropy community in many key roles.
Most notably, she has been the lead developer and maintains responsibility for critical parts of the Astropy infrastructure which keep the core package and affiliated packages running smoothly for both testing and release distribution.
She is an astropy core release manager and the GSoC coordinator for Astropy.

Erik Tollerud
-------------

Erik has played a key leadership and technical role in the Astropy project since it began in 2011.
His contributions include writing large parts of the core coordinates and uncertainties packages, serving in the Coordination Committee since 2011, serving as a release manager and a number of infrastructure roles, providing leadership on writing the Astropy papers and proposals, and Finance committee work.

Kelle Cruz
----------

Kelle has been on the Coordination Committee since 2016 with a focus on community management, user discussion forums, workshops, and expanding educational materials.
Her role as the Learn Coordinator has been especially impacting.
She has played a crucial lead role in the areas of governance, fundraising, and grant writing as Astropy has grown into a large and widely recognized project.

Larry Bradley
-------------

Larry has been involved in the project since the fall of 2013.
Since 2014, he has served as the lead developer and maintainer of the Photutils package, an Astropy coordinated package for source detection, photometry, and related tools.
He is also a developer and maintainer of the Astropy visualization, stats, and convolution packages and the Regions coordinated package.
Larry has also served as an instructor at Astropy workshops since 2016.

Madison Bray
------------

Madison was a founding member of the Astropy project and was the main developer of the io.fits core subpackage which forms the basis of much of the I/O for astropy.
After taking a hiatus from Astropy in 2016 for another opportunity, Madison rejoined in the role of DevOps and Operations Support in 2020.

Marten van Kerkwijk
-------------------

Marten has been actively involved in astropy core development since 2013.
He has made many key contributions, most notably leading the effort to make Quantities truly useful throughout astropy by working with and contributing to numpy to ensure interaction with numpy functions became seemless, and optimizing their use inside coordinates.
He led the development of algorithm improvements in the Time class to ensure accuracy at the level needed for pulsar timing, and he played an important role in making the Table class versatile.

Matt Craig
----------

Since becoming involved in the project in fall 2013, Matt co-led the development of ccdproc, the coordinated package for optical/IR image data reduction and served as lead for the NDData subpackage.
He also served on multiple Python in Astronomy organizing committees, helped with a couple of coordination meetings, and worked hard to make sure the astropy ecosystem of packages is available on major platforms to improve accessibility.

Michael Droettboom
------------------

Michael was a prolific contributor to Astropy from 2011 through 2015, contributing over 400 pull requests in many areas of the core, with a focus on the wcs, votable, and table subpackages.
His deep understanding of best coding practices provided important inspiration for other members of the initial core development team.

.. _moritz-gunther:

Moritz Günther
--------------

Moritz has been involved in the Project since 2011, with contributions to the io.ascii package and a continuing role as a package maintainer.
He has also contributed to the stats core subpackage and the photutils and saba packages.
Since 2020, Moritz has been serving as an Affiliated Package review editor and has been an active member of the interim Finance Committee.

Nadia Dencheva
--------------

Nadia has been an active member of the project since it started, where she has been the lead developer and maintainer for the modeling and wcs packages.
She has also been involved with the serialization of astropy objects to the ASDF format.

Perry Greenfield
----------------

More than any other single person, Perry has been responsible for the adoption of Python in astronomy.
He recognized the promise of Python as a language for astronomical data analysis and processing far before the rest of the community and was responsible for an institutional commitment of substantial resources in this direction.
Perry was a key player in the initial formation of the Astropy project and served as a Coordination Committee member from 2011 to 2016.
In 2020, Perry took on the role of Ombudsperson.

Pey Lian Lim
------------

Pey Lian has been an important team member since 2012, providing key infrastructure and operational support focused on the core package.
In her maintainer roles for testing and documentation infrastructure and DevOps and Operations Support, she keeps Astropy running.
Special commendation is due for leading the extremely rapid and unexpected migration from Travis CI to GitHub Actions in 2020.
Pey Lian's tireless attention in triaging core issues is well-recognized.

Simon Conseil
-------------

After a first pull request in 2012, Simon became a regular contributor to Astropy around 2015.
Since 2017 he has been the main maintainer of io.fits, taking on the daunting role of managing this complex and critical subpackage.
He also contributes other parts of Astropy including infrastructure, modeling, io.ascii, stats, table, and visualization.

Tom Aldcroft
------------

In 2011, Tom was part of an initial core group that recognized the need for a common Astropy package for the community, and he helped organize the first official Astropy coordination meeting.
Since that time he has been an active contributor to the project, taking a lead role in the development and maintenance of three core subpackages: table, time, and io.ascii.
In 2016 he was appointed as one of the Astropy Project Coordination Committee members.

Tom Robitaille
--------------

Tom has been a recognized leader in the Astropy project since it began, being part of the core group that started the project and organized the first Astropy coordination meeting.
His individual contributions are too numerous to name, but they include contributing large parts of the core package covering many areas, developing the astropy-healpix and regions coordinated packages, serving as a release manager, GSoC coordinator, and member of the Coordination Committee.

.. _institutional-support:

Institutional Support
=====================

Here we recognize the institutions who have made major contributions to the Astropy project by either direct funding to the project or by indirect funding of employees who have contributed.

.. _stsci:

Space Telescope Science Institute (STScI)
-----------------------------------------

STScI has played a foundational role in the development and advancement of the Astropy Project since its inception.
STScI has provided continued and substantial support to the project via staff contributions since 2011, including six lifetime contributors to astropy.
Additionally, STScI has provided on-going support and leadership to both Astropy and the broader scientific Python computing ecosystem.

Moore Foundation
----------------

In late 2019 the Astropy project was awarded a major grant from the Gordon and Betty Moore Foundation.
This grant was targeted at supporting Astropy’s transition to a fully sustainable project, where success no longer hinges on a limited set of contributors.
This grant was transformative for the Project.

NASA
----

NASA has awarded funding for the Astropy Project through the "ROSES E.7 (Support for Open Source Tools, Frameworks, and Libraries)" program (2021) and the `Open-Source Tools, Frameworks, and Libraries" foundation award (2024) <https://www.nasa.gov/news-release/nasa-funds-open-source-software-underpinning-scientific-innovation/>`__.
This funding is used to support ongoing infrastructure work, help with maintaining the core package, and to support the ecosystem of affiliated packages.
This grant helps to ensure that Astropy remains a sustainable project.

.. _cxc:

Chandra X-ray Center (CXC)
--------------------------

The CXC has supported multiple staff members to work on the Astropy project, equivalent to more than 5 person-years since the start of the project.

.. _CaltecIPAC:

IPAC at Caltech
---------------

The NASA/IPAC Infrared Science Archive (IRSA) at Caltech curates and serves the science products and documentation for many space- and ground-based observatories.
In our work, we have benefitted from the Astropy project, and have been committed to sharing our solutions back to the project to benefit the broader community.
Most of our effort has gone into the astroquery, pyvo, and the core libraries.

NumFOCUS
--------

We wish to express gratitude to the NumFocus Organization for providing the organizational support to grow Astropy into the role of a community-leading project with a substantial budget.

Gemini
------

The Science User Support Department at the Gemini Observatory has supported work on both the Astropy and DRAGONS projects.
This support has happened by funding staff members who can contribute to Astropy development, and by providing funding for developers on the Astropy project.

.. _cca-flatiron-simons-foundation:

Center for Computational Astrophysics (CCA), Flatiron Institute, Simons Foundation
----------------------------------------------------------------------------------

The CCA has provided logistical and travel support for the Python in Astronomy conference, the coordination meeting, and the spectroscopy working group.

Dunlap
------

Dunlap has provided Financial support/seed funding for the Astropy Learn project since 2020.

Europlanet Society
------------------

The Europlanet society has awarded funding for the Astropy Project through the Europlanet 2024 RI, European Union's Horizon 2020 research and innovation programme, under grant agreement No 871149.
This funding is used in particular to support the ongoing work on planetary reference frames and world coordinate system.

Contributors
============

Astropy project packages are under continuous development by professional astronomers and software developers from around the world. The Project is community-driven, with decisions generally made by consensus, but with oversight and organization provided by the coordinating committee.

.. include:: core-credits.rst
   :start-line: 4

.. raw:: html

      <script type="text/javascript">
          $(document).ready(function() {
              $.getJSON("roles.json", populateRoles);
          });
      </script>
