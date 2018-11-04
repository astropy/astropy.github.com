import os
import sys
import json
from termcolor import cprint

REQUIRED_KEYS = {"role", "url", "sub-role", "lead", "deputy", "role-head",
                 "role-subhead", "description", "sub-description"}

LIST_KEYS = {"sub-role", "lead", "deputy", "role-head", "role-subhead",
             "description", "sub-description"}

STRING_KEYS = {"role", "url"}

LENGTH_MATCH_KEYSETS = [{"sub-role", "lead", "deputy"}]


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

        for key, value in role.items():
            tval = type(value)

            if key in LIST_KEYS:
                if not isinstance(value, list):
                    cprint(f"   ERROR: Key \"{key}\" for role #{i} should be a list but instead is a {tval}", file=sys.stderr, color='red')
                    error += 1

            if key in STRING_KEYS:
                if not isinstance(value, str):
                    cprint(f"   ERROR: Key \"{key}\" for role #{i} should be a string but instead is a {tval}", file=sys.stderr, color='red')
                    error += 1

        for keyset in LENGTH_MATCH_KEYSETS:
            # this prevents exceptions if some of the keys are missing
            lastlen = lastkey = None
            for key in keyset & set(role.keys()):
                thislen = len(role[key])
                if thislen is 0:
                    continue
                if lastlen is not None and thislen != lastlen:
                    cprint(f"   ERROR: Key \"{key}\" for role #{i} is length {thislen} which does not match \"{lastkey}\" (length {lastlen})", file=sys.stderr, color='red')
                    error += 1
                lastlen = thislen
                lastkey = key




if error > 0:
    sornot = 's' if error > 1 else ''
    cprint(f"** {error} error{sornot} occurred - see above for details **", file=sys.stderr, color='red')
    sys.exit(1)
