## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  

#### add
Adding a file to Git make is be seen, or it's changes tracked, by it. You have to add the files you want to send to your repository later.

#### branch
Branching a file is basically making a independent copy of where you can work on separetely. This is commonly used when working on bigger teams, or if you want to get a open source code and you wanna make adaptations on it so it works for your needs.

#### checkout
This is a navigational command for you to see what is inside a certain directory, like *git checkout master*

#### clone
Is used to clone a repository to your computer so you can see and work on the files locally.

#### commit
Commit is one of the most important commands in git, it gets your files and changes made in them and commits them, or sends them, to your repository.

#### fetch
Fetching is updating the local files with the changes made in the remote repository.

#### log
Git logs are used to find specific commits in a project history.

#### merge
Merge is used to bring together the changes that you and the other team members have made to the files.

#### pull
To get the most updated version of your repository.

#### push
Pushing changes on your local files is committing them to the remote repository.

#### reset
I found this hard to understand, even though I've looked through different sources of information. Looks likr it has something to do with going back to previous versions of the code.

#### rm
It's used to remove files from git control. As I understand it it's the opposite to *git add*

#### status
Shows the status of the files added to git and if they are being followed or not and if they are on stage and ready to be committed.

## Release 4: Git Workflow

- Push files to a remote repository
- Fetch changes
- Commit locally

It's all in this link: http://igorgaelzer.github.io/unit1_projects/week2_git_workflow.html

## Release 5: Errors you encountered
1. Error 
2. Solution
3. Cause (explain the error)

I got the following error:

Auto-merging week_2/1_Chrome_Dev_Tools/dev_tools_quiz.md
CONFLICT (content): Merge conflict in week_2/1_Chrome_Dev_Tools/dev_tools_quiz.md
Automatic merge failed; fix conflicts and then commit the result.

I have yet to find the solution...

## Release 6: Reflection

This was a little hard for me as I was pretty intimidated by using git and github on the Terminal, specially because I was used to doing things with the GitHub's Mac app with a visual interface. So one part of me was saying "This is complicated, I bet it`s not working right! Why to learn this if the visual interface works just fine? I wanna get to programming and making fun apps quickly!". And the other part was saying "It's boring but this will be helpfull, even if you do not use this later, you shouldn't be afraid of the command line or any part of the computer if you want to become a good programmer".

I found fetching the changes from DBC`s remote repository to mine specially painfull. With a lot of dedication I got things to make sense, but I do wish I had better reason to use git from the Terminal instead of the GitHub visual interface.

These are extra references I used to solve this challenge.

- http://marklodato.github.io/visual-git-guide/index-en.html
- http://git-scm.com/blog/2011/07/11/reset.html
