import os
import json
from datetime import datetime

import requests

REQUIRED_KEYS = {'name', 'maintainer', 'stable', 'home_url', 'repo_url'}

OPTIONAL_KEYS = {'provisional', 'stable', 'pypi_name', 'image', 'review', 'description'}

REVIEW_KEYS = {'functionality', 'ecointegration', 'documentation', 'testing',
               'devstatus', 'python3', 'last-updated'}

REVIEW_FUNCTIONALITY = {'Specialized package', 'General package'}
REVIEW_DEVSTATUS = {'Unmaintained', 'Functional but low activity',
                    'Functional but unmaintained', 'Heavy development', 'Good'}
REVIEW_GENERIC = {'Needs work', 'Partial', 'Good'}

registry = json.load(open(os.path.join(os.path.dirname(__file__), "registry.json")))

for package in registry['packages']:

    if 'name' in package:
        name = package['name']
    else:
        raise ValueError("Missing package name: {0}".format(package))

    print("Checking {0}".format(name))

    print(" - verifying keys")

    difference = set(package.keys()) - (REQUIRED_KEYS | OPTIONAL_KEYS)
    if difference:
        raise ValueError("Unrecognized key(s) for {0}: {1}".format(name, difference))

    difference = REQUIRED_KEYS - set(package.keys())
    if difference:
        raise ValueError("Missing key(s) for {0}: {1}".format(name, difference))

    # Check that URLs work

    print(" - verifying URLs")

    try:
        r = requests.get(package['home_url'])
        assert r.ok
    except Exception:
        raise ValueError(f"Home URL for {name} - {package['home_url']} - did not work")

    try:
        r = requests.get(package['repo_url'])
        assert r.ok
    except Exception:
        raise ValueError(f"Repository URL for {name} - {package['repo_url']} - did not work")

    if package.get('pypi_name'):

        print(" - verifying PyPI name")

        r = requests.get(f"https://pypi.python.org/pypi/{package['pypi_name']}/json")
        assert r.ok

    if package.get('review'):

        print(" - verifying review")

        review = package['review']

        difference = set(review.keys()) - REVIEW_KEYS
        if difference:
            raise ValueError(f"Unrecognized review key(s) for {name}: {difference}")

        difference = REVIEW_KEYS - set(review.keys())
        if difference:
            raise ValueError(f"Missing review key(s) for {name}: {difference}")

        for key, value in review.items():

            if key == 'functionality':
                if value not in REVIEW_FUNCTIONALITY:
                    raise ValueError(f"Invalid functionality in review for {name}: {value}")
            elif key == 'last-updated':
                dt = datetime.strptime(value, "%Y-%m-%d")
            elif key == 'devstatus':
                if value not in REVIEW_DEVSTATUS:
                    raise ValueError(f"Invalid devstatus in review for {name}: {value}")
            else:
                if value not in REVIEW_GENERIC:
                    raise ValueError(f"Invalid {key} in review for {name}: {value}")
