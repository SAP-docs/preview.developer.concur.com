# Pull Merging - getting latest changes from preview repository 

## Introduction

Concur maintains two public websites for customers providing API documentation:
* developer.concur.com
* preview.developer.concur.com

Each site is maintained in its own github repository with the static content served up using GitHub pages.

The main site most customers will use is developer.concur.com.  Edits and new content are made initially in the preview repository and, periodically, the documentation team will need to transfer that content to the main site when a new release is needed.

This page documents **one possible,** reliable workflow on how to pull and merge the latest changes.

## Tooling

This workflow requires a local `clone` of a `git repository`.  The only required tooling is command line `git`.  The examples given below assume a `mac` laptop, but the same commands should work on Windows too.

### Mac

Installing `git` on `mac` is easy, choose any of the following:

* Install GitHub desktop.  Installing GitHub desktop also installs the `git` command line tool on your mac.  https://desktop.github.com/
* If you have `Homebrew` installed on your mac you can simply run `brew install git`
* Download and install git from https://git-scm.com/download/mac

### Windows

There are various ways to install `git` on `Windows`, but the recommended way would be to install `git bash`, which provides the `git` command line tool inside a `bash` terminal on Windows.  https://gitforwindows.org/

## Workflow

This workflow uses a local clone of the `developer.concur.com` repository where changes can be pulled from the `preview.developer.concur.com` repository and merged into a branch, before pushing that branch to github to generate a `pull request`.

The `main` branch on both `developer.concur.com` and `preview.developer.concur.com` are protected against direct merges.  Only pull requests from another branch are allowed, and those pull requests must be reviewed by a contributor other than the `author`.
> Administrators can merge PRs without reviews if needed, but this is recommended only under exceptional circumstances.

## Initial setup (do this once)

Clone the repository.  You can have multiple clones of the same repository on your local laptop, and it's recommended that you keep one *clean* clone purely for performing these `pullmerges` - i.e. don't use a repository that you're making other edits/generating PRs from.

1. Choose a location and create a directory for a *clean* repository for `pullmerges`

        mkdir pullmerges
        cd pullmerges

2. Clone the `developer.concur.com` repository into this directory

        git clone https://github.com/SAP-docs/developer.concur.com.git

3. Change directory into the newly cloned repository

        cd developer.concur.com

4. Add the `preview` repository as another `remote`

        git remote add preview https://github.com/SAP-docs/preview.developer.concur.com.git

## Usual workflow (performing the pullmerge periodically as required)

1. Go to your `pullmerge` copy of the `developer.concur.com` repository

        cd pullmerges/developer.concur.com

2. Ensure you're on `main` branch, and it's up to date

        git checkout main
        git pull

3. Fetch the latest changes from the `preview` remote you've previously added

        git fetch preview

4. Create a branch on your `developer.concur.com` repository that will be used to generate the PR for the pullmerge.  A recommended branch name might include the date of the pull merge, but can be any name (that's not currently a valid branch)

        git checkout -b pullmerge_0710

5. Merge the latest updates from preview into your branch. 

        git merge --no-edit preview/main

6. Push the changes into `developer.concur.com` on Github.  **Note:** update the name of your branch in this command:

        git push -u origin pullmerge_0710

7. Navigate to https://github.com/SAP-docs/developer.concur.com.  Github should be showing a message indicating that `<your branch name>` had recent edits, along with a button to `Compare & pull request`.  Click the button to generate a PR and get it approved.

8. Merge the PR (once approved) and delete the branch using the GitHub web UI

9. Delete the local branch on your laptop

        git checkout main
        git branch -d pullmerge_0710

10. Done!

## Selective pullmerges (optional)

The workflow above is for keeping `developer.concur.com` completely in sync with `preview.concur.com`.  This is the recommended workflow, however it's possible that some commits made into `preview` may not need to go to `live`.  In those cases a slight variant of the workflow above can be used to selectively choose the commits to pull across.

Everything about the workflow above is the same except for step 5.

Instead of running:

        git merge preview/main

You would instead choose *which* commits to pull from `preview`.

This command lists the commits which have been made to `preview`, but are not yet in the live site `main` branch:

        git log --no-merges preview/main ^main

The list would look something like:

        commit d6e3d78b671b7f81fdc1418f45ef4001af483be8
        Author: John Doe <jd@sap.com>
        Date:   Wed Oct 6 13:06:12 2021 -0700

        Some change

        commit 73b705b0d9737a7bd407eba18aba92cdce80c2a1
        Author: John Doe <jd@sap.com>
        Date:   Wed Oct 6 11:01:48 2021 -0700

        Some other change

You can then choose *which* of those commits you want to pull across by using the `SHA-1 hash` (the long hexadecimal number) and the command:

        git cherry-pick <hash>

e.g.

        git cherry-pick 73b705b0d9737a7bd407eba18aba92cdce80c2a1

And then continue from step 6, above, once all the required commits have been picked.
