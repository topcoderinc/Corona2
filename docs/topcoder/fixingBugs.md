
    Current Development Branch:  dev
    mtwomey edited this page on Dec 24, 2014 · 12 revisions


##Rules for Fixing Bugs (Issues)

IE11 is the primary browser used for the application. Please make sure to test all fixes against this browser.


1. All eligible tasks / issues will be labeled “Up For Grabs”  You can assign any unassigned issues with this label to yourself (first come first serve)
  * You can only assign yourself ONE issue at a time. We will monitor this and take away tasks if you do not comply
  * If you cannot complete the task within 24 hours, add a comment to it as to why, or it will go back to unassigned
2. Each task / issue will have points allocated to it which will translate to prizes

##Process for Resolving Bugs (Issues)

1. Remove the "Up For Grabs" label from the Issue and assign it to yourself
1. Create a branch off the Current Development Branch (see the top of this page)
 * *git checkout -b [YOUR-USERNAME]-issue-[ISSUE#] [CURRENT DEVELOPMENT BRANCH]*
 * for example *git checkout -b mtwomey-issue-22 dev*
1. Please make **sure** you are branching off the correct development branch and not master!
2. Do your work on this branch
3. Do frequent pulls of the Current Development Branch if you're working the issue for more than a few hours
 * *git pull --rebase origin [CURRENT DEVELOPMENT BRANCH]*
4. Once you finish the task
 * Commit your changes
 * Do a final *git pull --rebase origin [CURRENT DEVELOPMENT BRANCH]* to make sure nothing has changed that affects your fixes
 * Push your branch to GitHub
   * *git push origin [BRANCH NAME]*
 * Add the "Ready for Review" label to the Issue
 * Create a pull request for your branch to the Current Development Branch
5. Start your next issue!

##Tips

* If you have questions, post a comment on the github issue
* If you have questions on this process contact mtwomey@appirio.com

##Point System
1 point = $25 and will be paid weekly

The tasks are geared to be small in scope and completed quickly.  Some may take longer than others but in general should be less than a day.
