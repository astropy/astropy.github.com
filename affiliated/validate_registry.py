import os
import sys
import json
from termcolor import cprint
from datetime import datetime

import requests

REQUIRED_KEYS = {'name', 'maintainer', 'stable', 'home_url', 'repo_url', 'coordinated'}

OPTIONAL_KEYS = {'provisional', 'stable', 'pypi_name', 'image', 'review', 'description'}

ALL_KEYS = REQUIRED_KEYS | OPTIONAL_KEYS

REVIEW_KEYS = {'functionality', 'ecointegration', 'documentation', 'testing',
               'devstatus', 'python3', 'last-updated'}

REVIEW_FUNCTIONALITY = {'Specialized package', 'General package'}
REVIEW_DEVSTATUS = {'Unmaintained', 'Functional but low activity',
                    'Functional but unmaintained', 'Heavy development', 'Good'}
REVIEW_PYTHON3 = {'No', 'Yes'}
REVIEW_GENERIC = {'Needs work', 'Partial', 'Good'}


jsonfn = os.path.join(os.path.dirname(__file__), "registry.json")
try:
    registry = json.load(open(jsonfn))
except json.decoder.JSONDecodeError as e:
    cprint(jsonfn + ' : ' + e.args[0], color='red')
    cprint("*** JSON file appears to be malformed - see above ***", color='red')
    sys.exit(2)

error = 0

for package in registry['packages']:

    if 'name' in package:
        name = package['name']
    else:
        cprint("ERROR: Missing package name: {0}".format(package), file=sys.stderr, color='red')
        error += 1
        continue

    cprint("Checking {0}".format(name), color='blue')

    print(" - verifying keys")

    difference = set(package.keys()) - (REQUIRED_KEYS | OPTIONAL_KEYS)
    if difference:
        cprint(f"   ERROR: Unrecognized key(s) for {name}: {difference}. "
              f"Valid options are {', '.join(ALL_KEYS)}", file=sys.stderr, color='red')
        error += 1

    difference = REQUIRED_KEYS - set(package.keys())
    if difference:
        cprint(f"   ERROR: Missing key(s) for {name}: {difference}", file=sys.stderr, color='red')
        error += 1

    # Check that URLs work

    print(" - verifying URLs")

    try:
        r = requests.get(package['home_url'])
        assert r.ok
    except Exception:
        cprint(f"   ERROR: Home URL for {name} - {package['home_url']} - did not work", file=sys.stderr, color='red')
        error += 1

    try:
        r = requests.get(package['repo_url'])
        assert r.ok
    except Exception:
        cprint(f"   ERROR: Repository URL for {name} - {package['repo_url']} - did not work", file=sys.stderr, color='red')
        error += 1

    if package.get('pypi_name'):

        print(" - verifying PyPI name")

        r = requests.get(f"https://pypi.python.org/pypi/{package['pypi_name']}/json")
        if not r.ok:
            cprint(f"   ERROR: PyPI package {package['pypi_name']} doesn't appear to exist", file=sys.stderr, color='red')
            error += 1

    if package.get('review'):

        print(" - verifying review")

        review = package['review']

        difference = set(review.keys()) - REVIEW_KEYS
        if difference:
            cprint(f"   ERROR: Unrecognized review key(s) for {name}: {difference}. "
                   f"Valid options are {', '.join(REVIEW_KEYS)}", file=sys.stderr, color='red')
            error += 1

        difference = REVIEW_KEYS - set(review.keys())
        if difference:
            cprint(f"   ERROR: Missing review key(s) for {name}: {difference}", file=sys.stderr, color='red')
            error += 1

        for key, value in review.items():

            if key == 'functionality':
                if value not in REVIEW_FUNCTIONALITY:
                    cprint(f"   ERROR: Invalid functionality in review for {name}: '{value}'. "
                           f"Valid options are {', '.join(REVIEW_FUNCTIONALITY)}", file=sys.stderr, color='red')
                    error += 1
            elif key == 'last-updated':
                try:
                    dt = datetime.strptime(value, "%Y-%m-%d")
                except Exception:
                    cprint(f"   ERROR: Could not parse date: '{value}'", file=sys.stderr, color='red')
                    error += 1
            elif key == 'devstatus':
                if value not in REVIEW_DEVSTATUS:
                    cprint(f"   ERROR: Invalid devstatus in review for {name}: '{value}'. "
                           f"Valid options are {', '.join(REVIEW_DEVSTATUS)}", file=sys.stderr, color='red')
                    error += 1
            elif key == 'python3':
                if value not in REVIEW_PYTHON3:
                    cprint(f"   ERROR: Invalid python3 in review for {name}: '{value}'. "
                           f"Valid options are {', '.join(REVIEW_PYTHON3)}", file=sys.stderr, color='red')
                    error += 1
            else:
                if value not in REVIEW_GENERIC:
                    cprint(f"   ERROR: Invalid {key} in review for {name}: '{value}'. "
                           f"Valid options are {', '.join(REVIEW_GENERIC)}", file=sys.stderr, color='red')
                    error += 1

if error > 0:
    sornot = 's' if error > 1 else ''
    cprint(f"** {error} error{sornot} occurred - see above for details **", file=sys.stderr, color='red')
    sys.exit(1)
