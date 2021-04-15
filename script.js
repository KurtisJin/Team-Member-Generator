const inquirer = require('inquirer')
const fs = require('fs');
const markDown = require('./src/page-template');
// TODO: Create an array of questions for user input
//ask manager details
inquirer.prompt([ 
    {
        type: 'input', 
        name: 'manager-name',
        message: 'Team Managers Name?'
    },
    {
        type: 'input', 
        name: 'id',
        message: 'What is your ID number?'
    },
    {
        type: 'input', 
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input', 
        name: 'number',
        message: 'What is your Office Number?'
    }

]).then(function addMembers() {
    //ask what type of team member you want to add
    inquirer.prompt([

        {
            type: 'list',
            choices: [Yes, No],
            name: 'yesorno',
            message: 'Do you want to add a new member?'
        }

    ]).then(() => {
    
        if(yes) {
            inquirer.prompt([
                {
                    type: 'list',
                    choices: [Engineer, Intern],
                    name: 'members',
                    message: 'Please pick one.'
                }, 
            ]);
        } else {
            geneterateHTML();
        }
    })
    .then(() => {
        if(engineer) {
            inquirer.prompt([
//engineer’s name, ID, email, and GitHub username
                {
                    type: 'input', 
                    name: 'eng-name',
                    message: 'Please type in your name'
                },
                {
                    type: 'input', 
                    name: 'eng-id',
                    message: 'What is your ID?'
                },
                {
                    type: 'input', 
                    name: 'eng-email',
                    message: 'What is your email?'
                },
                {
                    type: 'input', 
                    name: 'github',
                    message: 'What is your Git-Hub ID?'
                }

            ]).then(() => {
                engineerHTML();
            });
        } else if (intern) {
            // name, ID, email, and school
            inquirer.prompt([
                {
                    type: 'input', 
                    name: 'in-name',
                    message: 'Please type in your name'
                },
                {
                    type: 'input', 
                    name: 'in-id',
                    message: 'What is your ID?'
                },
                {
                    type: 'input', 
                    name: 'in-email',
                    message: 'What is your email?'
                },
                {
                    type: 'input', 
                    name: 'school',
                    message: 'Where did you go to school?'
                },
            ])
        }
    }).then({
        addMember();
    });    
}


