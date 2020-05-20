# Employee Template Generator

## About

This project creates a command line prompt that allows the user to build up a list of their team members. The user answers questions in the terminal, then it delivers them an html file with all of the entered info. 

For the project, I decided to use a list of choices for the user to select the role of the employee from as opposed to just entering employee info. This way, they could be presented with the proper questions to answer based on the role they chose. Despite already knowing which role they've picked, the user still has to enter the title of the employee to meet all the parameters set by the manager or engineer or intern.js files. I initially had it just assign the title based on which you picked, but then the info that was entered wouldn't line up with what was expected from the employee FS files. In addition, by having the user select which type of employee they're picking initially, it gave me the ability to customize the info cards with different colors and icons.

link to GitHub repo for project:
* <https://github.com/tironam/employeeSummary>

## Installation

Once you've cloned the repo, make sure to do an 'npm init -y' to initiate npm, and then 'npm i' to download the packages. Inquirer and Jest were the npm packages used for this project.

## Usage

Anyone is free to use this code to build out their team

## Resources

Bootstrap was used for the styling 
* <https://getbootstrap.com/docs/4.5/getting-started/introduction/>

Jest was used to test the employee files
* <https://www.npmjs.com/package/jest>

Inquirer was used to prompt the user with questions in the terminal
* <https://www.npmjs.com/package/inquirer>

## Tests

I initially had the intern, engineer, and manager tests run perfectly, with only the employee test giving me issues. However I went back in to change the parameters to change the properties so the cards could present more info, and the tests haven't worked since. Haven't had a chance to fix them yet.