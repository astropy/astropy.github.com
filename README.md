This repository contains the Astropy web site (primary URL http://www.astropy.org).

In a previous version of this web site (on the [old_site branch](https://github.com/astropy/astropy.github.com/tree/old_site)), this repository held the build for the site, but the content was generated from the [astropy-website repository](https://github.com/astropy/astropy-website).  That repo is no longer active, and issues with the astropy web site should now be reported in *this* repository.


## If you locally cloned this repo before 12 Apr 2021

The primary branch for this repo has been transitioned from ``master`` to ``main``.  If you have a local clone of this repository and want to keep your local branch in sync with this repo, you'll need to do the following in your local clone from your terminal:
```
git fetch --all --prune
# you can stop here if you don't use your local "master"/"main" branch
git branch -m master main
git branch -u origin/main main
```
If you are using a GUI to manage your repos you'll have to find the equivalent commands as it's different for different programs. Alternatively, you can just delete your local clone and re-clone!