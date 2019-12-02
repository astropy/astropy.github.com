import os
import sys
import json
from termcolor import cprint

REQUIRED_KEYS = {"role", "url", "role-head", "responsibilities"}


def assert_is_list(i, key, value):
    if isinstance(value, list):
        return 0
    else:
        cprint(f"   ERROR: Key \"{key}\" for role #{i} should be a list but instead is a {type(value)}", file=sys.stderr, color='red')
        return 1


def assert_is_string(i, key, value):
    if isinstance(value, str):
        return 0
    else:
        cprint(f"   ERROR: Key \"{key}\" for role #{i} should be a string but instead is a {type(value)}", file=sys.stderr, color='red')
        return 1


jsonfn = "roles.json"
try:
    roles = json.load(open(jsonfn))
except json.decoder.JSONDecodeError as e:
    cprint(jsonfn + ' : ' + e.args[0], color='red')
    cprint("*** JSON file appears to be malformed - see above ***", color='red')
    sys.exit(2)

error = 0

for i, role in enumerate(roles):
    if not isinstance(role, dict):
        cprint(f"   ERROR: Role #{i} is not a key/value set", file=sys.stderr, color='red')
        error += 1
    else:
        key_difference = REQUIRED_KEYS - set(role.keys())
        if key_difference:
            cprint(f"   ERROR: Missing key(s) for role #{i}: {key_difference}", file=sys.stderr, color='red')
            error += 1

        error += assert_is_string(i, 'role', role['role'])
        error += assert_is_string(i, 'url', role['url'])
        error += assert_is_string(i, 'role-head', role['role-head'])

        if 'sub-roles' in role:
            if 'lead' in role or 'deputy' in role:
                cprintf(f"   ERROR: lead and deputy should not be defined at top level for role #{i} since sub-roles are defined")
                error += 1
            for sub_role in role['sub-roles']:
                error += assert_is_string(i, 'sub-roles[role]', sub_role['role'])
                error += assert_is_list(i, 'sub-roles[lead]', sub_role['lead'])
                error += assert_is_list(i, 'sub-roles[deputy]', sub_role['deputy'])
        else:
            error += assert_is_list(i, 'lead', role['lead'])
            error += assert_is_list(i, 'deputy', role['deputy'])

        if isinstance(role['responsibilities'], list):
            for resp in role['responsibilities']:
                error += assert_is_string(i, 'responsibilities[description]', resp['description'])
                for detail in resp['details']:
                    error += assert_is_string(i, 'responsibilities[detail]', detail)
        else:
            resp = role['responsibilities']
            error += assert_is_string(i, 'responsibilities[description]', resp['description'])
            for detail in resp['details']:
                error += assert_is_string(i, 'responsibilities[detail]', detail)

if error > 0:
    sornot = 's' if error > 1 else ''
    cprint(f"** {error} error{sornot} occurred - see above for details **", file=sys.stderr, color='red')
    sys.exit(1)
