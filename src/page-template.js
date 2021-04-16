const MemberInfo = require("../index");
//self note 1: called the index by accident and worked. But, you can call the construtors and "should" work. Test out 
//when you get the chance. Note: theory is that since index called all the js in lib folder, so it piggy backed off of it.

//self note 1 answer: index was called because we need to get employees array where the questions answered are stored. But, technically you can still call the constructor as well.

//Self note 2: probably didn't need to put them all in a varabile and just called the function in the switch statement. 
//when you get the time, check the theory. 

const generateManager = function manager(manager) {
  return `
        
        <div class="col s4">
            <div class="card">
                <h2 class="card-title card-panel blue lighten-2 first-name">${manager.getName()}
                    <br>
                    <span class = "icon">☕</span>
                    <span class = "job-title">Manager</span>
                </h2>
            <div class="card-content">
                <ul class="collapsible">
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>ID:&nbsp; <span class="id">${manager.getId()}</span></div>
                    </li>
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>E-Mail:&nbsp; <span class="Email">${manager.getEmail()}</span></div>
                    </li>
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>Office Number:&nbsp; <span class="office-number">${manager.getOfficeNumber()}</span></div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        `;
};

const generateEngineer = function engineer(engineer) {
  return `
        <div class="col s4">
            <div class="card">
                <h2 class="card-title card-panel blue lighten-2 first-name">${engineer.getName()}
                    <br>
                    <span class = "icon">👓</span>
                    <span class = "job-title">Engineer</span>
                </h2>
            <div class="card-content">
                <ul class="collapsible">
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>ID:&nbsp; <span class="id">${engineer.getId()}</span></div>
                    </li>
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>E-Mail:&nbsp; <span class="email">${engineer.getEmail()}</span></div>
                    </li>
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>Office Number:&nbsp; <span class="github">${engineer.getGitHub()}</span></div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        `;
};

const generateIntern = function intern(intern) {
  return `
        <div class="col s4">
            <div class="card">
                <h2 class="card-title card-panel blue lighten-2 first-name">${intern.getName()}
                    <br>
                    <span class = "icon">🎓</span>
                    <span class = "job-title">Intern</span>
                </h2>
            <div class="card-content">
                <ul class="collapsible">
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>ID:&nbsp; <span class="id">${intern.getId()}</span></div>
                    </li>
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>E-Mail:&nbsp; <span class="Email">${intern.getEmail()}</span></div>
                    </li>
                    <li>
                    <div class="collapsible-header"><i class="material-icons"></i>Office Number:&nbsp; <span class="school">${intern.getSchool()}</span></div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        `;
};

//function for forloop to generate cards.

//self note 1: this needs to be created because we do not know how many members will be added.
//without this loop, it will probably only print the manager. When you have time, check this theory. 

//self note 2: employees arugment was pulled from index.js with require with variable MemberInfo.
const generateTeam = (employees) => {
  let cards = ``;
  for (let i = 0; i < employees.length; i++) {
    switch (employees[i].getRole()) {
      case "Manager":
        cards+= generateManager(employees[i]);
        break;
      case "Intern":
        cards+= generateIntern(employees[i]);
        break;
      case "Engineer":
        cards+=generateEngineer(employees[i]);
        break;
    }
  }
  return cards; //self note: Remember that card is returning how many cards were created and stored into variable cards passed into 
  //vaiable "generateTeam" which will be used in the body of index.thml
};

//main page creation layout.
//self note 1: the forloop was placed into the div class row with employees as an argument. The arugment employees was first pulled from
//index.js and then was used in forloop to see how many cards it nees to create by counting how many are in the employees array from index.js.

//self note 2: Remember that gereateTeam(employees) was used from the forloop and employees information is stored within the array in index.js
const generateHTML = function mainPage(employees) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <title>Office Employees</title>
    </head>
    <body>
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo center">My Team</a>
            </div>
        </nav>
        <div class="row">
        ${generateTeam(employees)}
        </div>     
    </div>     
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </html>
        `;
};
module.exports = generateHTML; 
//Self note: we are passing generateHTML because generate team was created and only the main page needs to be passed.
