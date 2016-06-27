#!/usr/bin/env python

"""
A command line script that updates the "Roles" section in the ``about.html`` file to
reflect the roles.txt file.

Usage::

  <Edit roles.txt appropriately>
  ./update_roles.py
"""
from __future__ import print_function

import os
import StringIO
import re

from astropy.io import ascii


def get_table_location(lines, table_id):
    lines = [line.strip() for line in lines]
    idx0 = lines.index('<table id="{}">'.format(table_id))
    idx1 = lines.index('</table>', idx0 + 1)
    return idx0, idx1


def get_indent(line):
    m = re.match('(\s*)', line)
    return len(m.group(1))


def update_html(filename, roles):
    """
    Replaces the Roles table in the HTML file with the new values in the
    ``roles`` table.
    """
    with open(filename) as fh:
        lines = fh.readlines()

    idx0, idx1 = get_table_location(lines, 'astropy-roles')
    orig_indent = get_indent(lines[idx0])

    outlines = lines[:idx0]

    # Plug in the roles table
    roles_out = StringIO.StringIO()
    clean_kwargs = {'tags': ['a', 'span'],
                    'attributes': {'a': ['href'],
                                   '*': ['style']},
                    'styles': ['color', 'font-style']}
    ascii.write(roles, roles_out, format='html',
                htmldict={'table_id': 'astropy-roles',
                          'raw_html_cols': ['Role', 'Lead'],
                          'raw_html_clean_kwargs': clean_kwargs})

    roles_lines = roles_out.getvalue().splitlines()

    ridx0, ridx1 = get_table_location(roles_lines, 'astropy-roles')
    roles_indent = get_indent(roles_lines[ridx0])
    indent = orig_indent - roles_indent
    newlines = [' ' * indent + str(line) + os.linesep for line in roles_lines[ridx0:ridx1 + 1]]
    outlines += newlines

    outlines += lines[idx1 + 1:]

    return outlines

if __name__ == '__main__':
    roles_table = ascii.read('roles.txt', fill_values=None)
    new_roles = []

    # Make links to role responsibilities document
    for role in roles_table['Role']:
        if role:
            role_ref = re.sub(r' ', '_', role)
            role_ref = re.sub(r'[-.]', '', role_ref)
            role = '<a href="role_responsibilities.html#{}">{}</a>'.format(role_ref, role)
        new_roles.append(role)
    roles_table.replace_column('Role', new_roles)

    # Make unfilled roles stand out
    leads = ['<span style="color:red; font-style:italic">Unfilled</span>'
             if lead == 'UNFILLED' else lead
             for lead in roles_table['Lead']]
    roles_table.replace_column('Lead', leads)

    outlines = update_html('about.html', roles_table)

    print('Replacing "about.html" with updated version.  Be sure to "git diff '
          'about.html" before committing to ensure no funny business happened.')
    with open('about.html', 'w') as fh:
        fh.writelines(outlines)
