# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

import sys
from pathlib import Path

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'astropy.org'
copyright = '2026, Astropy Community'
author = 'Astropy Community'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

intersphinx_mapping = {
    "python": ("https://docs.python.org/3/",
               (None, "http://data.astropy.org/intersphinx/python3.inv")),
    "astropy": ("https://docs.astropy.org/en/stable", None),
    "astropy-dev": ("https://docs.astropy.org/en/latest", None),
}

sys.path.append(Path("exts").absolute().as_posix())
extensions = [
    "sphinx.ext.intersphinx",
    "myst_parser",
    "sphinx_design",
    "sphinx_copybutton",
    "rawfiles",
]

templates_path = ['_templates']
exclude_patterns = [
    '_build',
    'Thumbs.db',
    '.DS_Store',
    'LICENSE.rst',
    'README.md',
    'CONTRIBUTING.md',
    '.tox/**',
]

rawfiles = ["annoucement_banner.html", "roles.json", "affiliated/registry.json"]

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'astropy-unified'

html_static_path = ['_static']

html_theme_options = {
    "show_prev_next": False,
    "sst_is_root": True,
}

html_sidebars = {
    "**": [],
}

html_css_files = [
    "css/astropy-org.css"
]

html_js_files = [
    "js/functions.js",
    "https://code.jquery.com/jquery-3.7.1.min.js",
]

html_title = ""
html_favicon = "_static/img/favicon.ico"

################################################################################
# Other Trickery
################################################################################
# We want to get the credits.rst file from astropy core, but not keep it in the repo

from urllib.request import urlretrieve

urlretrieve(
    "https://raw.githubusercontent.com/astropy/astropy/refs/heads/main/docs/credits.rst",
    filename="credits.rst",
)

# Linkcheck
linkcheck_ignore = [
    # These sites blocked CI
    r"https://doi\.org/\d+",
    "http://joinslack.astropy.org",
    "https://www.astrobetter.com/",
    "https://numfocus.medium.com/",
    # This page has cloudflare captcha on it
    "https://aas.org/press/astropy-collaboration-receive-2025-berkeley-prize",
]
linkcheck_anchors = False
linkcheck_timeout = 20
linkcheck_workers = 10
