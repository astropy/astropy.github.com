.. _astropy-org-history:

A brief history of the Astropy Project
======================================

Some of the earliest use of Python in astronomy was at the Space
Telescope Science Institute (STScI) with their release of PyRAF
around 2000. That release helped raise awareness of Python as a
scripting language, leading to its use at more institutions. STScI
was also active in the development of Python tools for science,
including a pre-cursor to numpy and early versions of matplotlib.
By the early 2010s there were multiple independent efforts by
institutions and individuals to use Python for data analysis.

The initial trigger for Astropy was a `conversation in 2011 on the
astropy mailing list (which pre-dated The Astropy Project by over
a
decade) <https://mail.python.org/pipermail/astropy/2011-June/001075.html>`__
on the topic of how many “general astronomy” packages were being
written in Python. This discussion thread led to the creation of a
`short-lived
wiki <https://web.archive.org/web/20140811231510/http://astropy.wikispaces.com/>`__
where over 100 participants voted in favor of a shared package to
combine the efforts of these different developers into a single
space. This demonstrated broad interest in such an effort. With
that motivation and charge in place, this same wiki was used to
organize a planning meeting for this effort.

That planning meeting, in Fall 2011, was the formal beginning of
the Astropy Project and was held at the `Harvard Center for
Astrophysics <https://github.com/astropy/astropy/wiki/CfAMeeting2011%20“CfA%20Astropy%20meeting”>`__.
The `list of
attendees <https://github.com/astropy/astropy/wiki/CfAMeeting2011#participants%20“CfA%20meeting%20participants”>`__
at that meeting underscores what has been essential to the launch,
growth, and continued development of Astropy: it was a mix of
graduate students, postdocs, scientists, and professional software
developers. The attendees with permanent positions were willing to
contribute both code and their time to the project; Space
Telescope Science Institute (STScI) additionally contributed
substantial staff time to the project. The early-career attendees
had either already devoted substantial time to code development,
would do so over the ensuing years, or both.

The foundation of Astropy’s subsequent success was the combination
of institutional resources, a deliberate effort to include and
foster the growth of a broad community of contributors, the rapid
growth of GitHub and the surrounding ecosystem of open source
development tools, and a willingness of early-career professionals
to contribute code to an open community project. The initial
release for users of the core astropy package, version 0.2 on
February 19, 2013, was less than 18 months after the CfA meeting
and already contained many of the core subpackages that are part
of the package today. That was possible only because some of the
code already existed in a form that could be adapted to Astropy.
Major pieces had been written by staff at STScI that were
contributed by the Institute to the project. There were also large
contributions from early participants who were graduate students
and postdocs.

By the time of the first stable release in 2013, the number of
contributors to the code base was over 20, including several
people who were not involved in the initial meeting. Though most
of the lines of code at that point had been written by a handful
of people, the effort they put into welcoming and supporting new
contributors was just as important and is not easily captured in a
single number. The project made an effort early on to provide
prompt, constructive, and welcoming feedback to new contributors.
The promptness was a key factor in encouraging early contributors
and was possible in part because STScI devoted substantial staff
time to the project with the explicit intent of growing the
community of contributors.

One of the Project’s first efforts to formally recruit early
career scientists was participation in `Google’s Summer of Code
(GSoC)
program <https://github.com/astropy/astropy/wiki#google-summer-of-code>`__.
That program provides participants with a stipend in exchange for
doing extensive work on open source projects during the northern
hemisphere summer. It was the first of several efforts to grow the
community of contributors. These efforts yielded a handful of very
active long-term contributors to the project whose cumulative work
goes well beyond the initial code contributions made by
participants.

Another critical element in the growth of the Astropy Project was
the Python in Astronomy conference series. The first Python in
Astronomy conference was held in 2015. The hope was that the
conference would encourage the development of Python packages in
astronomy outside of the astropy core, foster the adoption of
Astropy in the broader community, and serve as an introduction to
contributing to open source software. Though it was not an Astropy
conference, many of the astropy core developers were attending.
For example, the initial Code of Conduct for the Astropy Project
was written at the conference and the “Python in Astronomy”
Facebook group was started, among `other
activities <https://openastronomy.org/pyastro/2015/>`__.

The intent from the first coordination meeting in 2011 was to put
some functionality into more specialized packages, called
affiliated packages, that were developed independent of the core
project but followed the same coding, testing and documentation
conventions and often used the same continuous integration (CI)
infrastructure. The first affiliated packages were created in
2011. That model has been quite successful: as of early 2022 there
are almost 50 affiliated packages (pre-APE 22). The use of common
conventions across the packages has eased the burden of
maintaining those packages as the project ecosystem grows.

Deliberate community development has been essential to the success
of the Project and has included several aspects. Astropy was an
early and enthusiastic adopter of an explicit Code of Conduct.
This served to formalize the welcoming atmosphere established
early in the project. Community presence has included setting up
social media spaces for Python in Astronomy, workshops at AAS
meetings, work on learning materials for Astropy and development
of the project’s web presence. The Facebook group “Python in
Astronomy’’ has been wildly successful with over 6400 members and
nearly daily postings. This success is in part because of careful
moderation by members of the project early in the list's history
to keep conversations on topic, though community moderators have
taken on more of those responsibilities as time has gone on.
Workshops at AAS meetings have helped several hundred astronomers
adopt Python and astropy as part of their workflow.

The day-to-day effort of managing the Astropy codebase is
unglamorous but critical. Tasks include promptly labeling and
triaging new issues, responding to new pull requests, and watching
for and fixing changes that break part of the infrastructure.
There have been times when that infrastructure has shifted very
rapidly, such as when `Travis-CI stopped hosting open source
packages <https://blog.travis-ci.com/2020-11-02-travis-ci-new-billing/>`__.
Transitioning the entire ecosystem to a new infrastructure
required substantial effort by a number of people, though it was
facilitated primarily by a single individual. Indeed, much of this
day-to-day work has been done by a handful of people, many of whom
are in permanent positions at STScI and a few other institutions.

The patterns at the beginning of the project have persisted
throughout: it is the combined effort of individuals and
institutions that includes scientists and software developers. It
includes early-career individuals and those in permanent
positions.

There are a few important changes to the project since its
inception. One is external funding from the Moore Foundation in
2019 and from NASA in 2022, which provides monetary support for
contributors at all career stages in addition to funding for
Project needs. Another is the establishment of a formal governance
structure (`APE 0 adopted in
2021 <https://github.com/astropy/astropy-APEs/blob/main/APE0.rst>`__)
that is open and responsive to community needs.

Another development that was perhaps not envisioned at the start
of the project is some contributors choosing to make Astropy an
essential part of their career. Their involvement since the
beginning of the project has provided continuity to the project
and represents taking a risk that potential future employers may
not scientifically value this software work, regardless of its
impact on astronomy as a whole.

As of summer 2022, the success of the Project hinged on a number
of factors, including the willingness of institutions and
individuals to contribute extensive prior work to a community
project, a deliberate effort to foster new contributors, and an
effort to create a welcoming community. It is difficult to see how
the project could have come so far absent any of these factors or
absent any one of the groups of contributors. Institutional
support and individual contributions has been inextricably linked.
