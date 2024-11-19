"""
A command line script that updates "The team" in the ``about.html`` file to
reflect the  current ``credits.rst`` file from the astropy repository.

Note that this first looks for the ``ASTROPY_REPO_PATH`` environment
variable to try to find a local copy of the astropy repo.
"""


def get_astropy_credits(warner=print):
    """
    Looks for the ``credits.rst`` file in the astropy repo and returns it, or
    returns False if the repo can't be found.
    """
    import os
    import requests

    creditspath = os.environ.get('ASTROPY_REPO_PATH', 'https://raw.githubusercontent.com/astropy/astropy/main/docs/credits.rst')

    if creditspath.startswith('http'):
        #url - download page from web
        u = None
        try:
            return requests.get(creditspath).content
        except Exception as e:
            warner('Could not download credits.rst from requested path: "{0}" Using placeholder for "The Team" page.'.format(e))
            return False
        finally:
            if u is not None:
                u.close()
    else:
        if not os.path.isfile(creditspath):
            warner('Credits.rst file at "{0}" is not a file! Using placeholder for "The Team" page.'.format(creditspath))
            return False

        with open(creditspath) as f:
            return f.read()


def extract_names_list(docs, sectionname, warner=print):
    from docutils import nodes
    from docutils.core import publish_doctree

    if not isinstance(docs, nodes.document):
        docs = publish_doctree(docs)

    assert isinstance(docs, nodes.document)

    foundsections = []
    for c in docs.children:
        titleidx = c.first_child_matching_class(nodes.title)
        if titleidx is not None:
            title = str(c.children[titleidx].children[0])
            if title == sectionname:
                section = c
                break
            else:
                foundsections.append(title)
    else:
        warner("No section found with name {0}. Sections are:{1!s}".format(sectionname, foundsections))
        return None

    listidx = section.first_child_matching_class(nodes.bullet_list)
    litems = section.children[listidx].children

    names = []
    for litem in litems:
        names.append(''.join(litem.traverse(lambda n: isinstance(n, nodes.Text))))

    return names


def process_html(fn, newcontributors, indent='\t\t\t'):
    """
    Returns a string of html mean to look like the input, but with content from
    the credits file.
    """
    lines = []
    incoord = incontrib = False
    with open(fn) as fr:
        for l in fr:
            if l.endswith('\n'):
                l = l[:-1]  # strip newline

            if incontrib:
                if '</ul>' in l:
                    lines.extend([(indent + '<li>' + c + '</li>') for c in newcontributors])
                    lines.append(l)
                    incontrib = False
                else:
                    if '<ul class="team">' in l:
                        lines.append(l)
                #skip otherwise
            else:
                # if '<ul class="coordinators">' in l:
                #     incoord = True
                if '<h3 id="core-package-contributors">' in l:
                    incontrib = True
                lines.append(l)

    return '\n'.join(lines)


if __name__ == '__main__':
    from docutils.core import publish_doctree

    dt = publish_doctree(get_astropy_credits())

    contributors = extract_names_list(dt, 'Core Package Contributors')

    newhtml = process_html('team.html', contributors)
    print('Replacing "team.html" with updated version.  Be sure to "git diff '
          'team.html" before committing to ensure no funny business happened.')
    with open('team.html', 'wb') as f:
        f.write(newhtml.encode('UTF-8'))
