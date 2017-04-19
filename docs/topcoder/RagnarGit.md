
*Title:* Ragnar: Git Process for Challenges<br/>
*Author:* Chris DeLaurentis<br/>
*Date:* 20141112<br/>
*Abstract:* This document outlines how best to utilize Gitflow for challenge management and suggestions for integration into the Topcoder platform.


###Definitions:
 **Member:** a community participant competing on a competition <br/>
 **Manager:** a Copilot or Project Manager overseeing the project <br/>
 **Repo:** a code repository with the purpose of managing one functional piece of software or designs for a project. ie: SFDC services, mobile app framework, assembled application, storyboard designs, etc. <br/>
 **Team/Group:** an organizational unit of members and/or managers applied to a set of repos. <br/>

##Process:
### **Account/Access Structure:**
1. unless required, repositories should be private by default
1. team/group based access to repositories
    1. Member group access includes:
        1. receive read/write access to repository
        1. ability to create tickets
        1. ability to self-assign tickets
        1. ability to add and remove tags from tickets
        1. repo user should equate/tie to platform user
    1. Manager group access includes:
        1. receive read/write access to repository
        1. ability to create tickets
        1. ability to self-assign tickets
        1. ability to create wiki pages
        1. administrative control over repo
        1. repo user should equate/tie to platform user
    1. requisite teams applied to groups of repos for visibility over other components of a project.
### **Branching Model Setup (gitlow style):**
1. create ```master``` branch. Used for releases only.
1. branch ```master``` to create a “develop” branch. Used for active development line and release candidates (via tags).
1. branch ```develop``` for each feature being developed (“Admin Widget 1”, “Blog components”). Prefix name of branch with challenge Id.
1. “Official” branches (master, develop, & features) should be marked “protected”. Note: This is a concept from Gitlab that does not exist in Github currently.
### **Challenge Setup:**
1. In your challenge, ask the community to email you/co-pilot and request access to the project group (“Goliath National Bank Team”) by sending their username. This should ideally be automated at sign up of challenge.
1. Add community member to the group  (example name “Goliath National Bank Team”) with “Developer” access only. This allows them to create tickets, fork the repo, and create branches but will not allow them to touch protected branches. Note: this level of access is a concept from Gitlab that does not exist in Github currently. See https://gitlab.com/help/permissions/permissions.md
1. Have member add challenge managers to their private branch as a master and reviews as reporter. Note: this level of access is a concept from Gitlab that does not exist in Github currently.
### **Submission Process:**
1. Require community members to fork the project at the feature branch to acquire the current code base. This will allow for concurrent challenge running as each branch is a separate challenge.
1. Two options for gaining access to code are available. Note: private forks are unique to Gitlab only and thus protect member code.
    1. Require submissions of code by through a merge request.  The only issue with this method is that the code can be viewed in a “diff” of the merge request.
    1. Require that the managers & reviewers be added to the private fork as a member. This is not exactly the ideal automation but it does get around the visibility of the code in the merge request diff.
### **Review Process:**
1. Test pull/merge request submissions locally before accepting.
1. If submission passes, accept merging into feature branch.
1. If submission fails, reviewer can make comments directly against code or merge request ticket.
### **Merging:**
1. After accepting the winning submission merge request into feature branch merge the feature branch into the “develop” branch after performing integration testing.
1. Proper gitflow usage dictates using the --no-ff option to prevent “fast-forwarding” of commits.
### **Releases:**
1. Release candidates should come from the “develop” branch and be tagged as such.
1. Merge “develop” into the “master” in preparation for release (--no-ff)
1. Releases should be pulled from the “master” branch only
1. Tag the “master” at each major release (with version number/name)
### **Wikis:**
1. Wikis should be utilized extensively as a central repository for project information.
1. Types of information include:
    1. Project description
    1. Setup guides
    1. Reference materials
    1. “Bug Bash” instructions
    1. Challenge detail listings
### **Issues List**
1. Issues lists can be utilized for general bug tracking as well as “Bug Bashing”
1. Members can be alerted to issue tickets by utilizing the @all/@organization/team-name mention
1. Bug Bashing Process
1. Create the following tags on the repo:
    1. ```_OPEN FOR PICKUP``` denoting ticket is available to members to self-assign
    1. ```_READY FOR REVIEW``` denoting that a member has completed the requested work
    1. ```_ACCEPTED``` denoting managers have accepted ticket solution
    1. ```_PAID``` denoting ticket has been processed for payment
    1. ```Priority X``` where X is a value from 1 through 5 denoting Appirio triage priorities (1-Blocker through 5-Enhancement)
1. Assign a priority label to tickets.
1. Assign a “point” value to all tickets in the ticket title as a prefix.
    1. Points represent some fixed dollar amount designated by the managers
    1. As a general rubric, point values are a multiple or priority. ie: Priority 1 issues should be addressed first and thus should hold a higher points value than lower priorities. P1s == 4P, P2 == 3P, etc.
    1. The purpose of points is to create an arbitrary value for tickets that can be driven up and down on demand. For example, a weekend “double points blitz” can incent members to scramble and burn down tickets faster.
1. Mention @all members that a ticket is available for pickup.
1. Members self-assign tickets
    1. Only one ticket is allowed per member at a time.
    1. If a member has not submitted within 24hrs, the member forfeits the ticket and the ticket is unassigned.
    1. Member labels ticket as “_READY FOR REVIEW” once their submission is ready.
1. After reviewing submission the manager/reviewer marks the ticket as “_ACCEPTED”
1. After the manager has accepted the submission and process payment, the ticket is labelled “_PAID” and payment reference placed as a comment on the ticket

**Notes:**

  *  This process  includes:
  *  code version control
  *  project flow control
  *  submission control
  *  review control
  *  issues triage/burndown
  *  release management
  *  information centralization
  *  member-manager communication

As highlighted in the above process nearly the entire challenge life-cycle could essentially be encapsulated inside a git management service such as GitLab. Essentially, branches equate to individual challenges and “bug bashes” as a collection of F2Fs.

Some things that are missing or could be integrated:

*  Game-planning: could be tied in or auto created from an API based tool like Smart Sheet.
*  Payments: could be tied in through something like tracking of manager comments and @mentions as well as git/web hooks.
*  Marketing/Advertising: could be tied back to the platform through something like @mentions as well as git/web hooks.
*  SSO: members should have a unified “world-view” that ties their TC handle direct to their git system handle.
*  Derived/Big Data Intelligence:
*  Repos could be crawled for their technologies and member associations to automagically correlated.
*  Costing per line of code could be established based upon commits and tied back to challenge payments and “bug bash” values.
*  Project health metrics based upon commits, code comments, issue comments and other interactions.
*  Scanning for security leaks of IP

References:

  * GitFlow: http://nvie.com/posts/a-successful-git-branching-model/
  * GitFlow extension project: https://github.com/nvie/gitflow
  * GitLab Flow: https://gitlab.com/help/workflow/gitlab_flow.md
  * Zenhub.io https://www.zenhub.io/  cardwall on top of github issues.
