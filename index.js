//We require file system Module for writing file
const fs = require('fs')

// We need Inquirer to get input from user
const inquirer = require('inquirer');
const {
    inflateRawSync
} = require('zlib');

//Paths to our constructor functions
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager')

// Paths to our pages to generate html file content

const generatePage = require('./src/page-template')

const writeHTML = require('./generate-site')

//Our team array here

    const team = []

// The inquirer collect generic data here from user
function getInfo() {
    inquirer.prompt([{
                type: 'input',
                name: "name",
                message: "Employees Name",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter employee name!')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: "email",
                message: "what is their email address?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter employee email!')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "enter employee ID",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter employee valid ID!')
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'role',
                message: "Employee's role",
                choices: ["Manager", "Employee", "Engineer", "Intern"]
            }
        ])
        .then(answers => {
            
            // Customized questions based on their role
            
            if (answers.role === 'Engineer') {
                inquirer.prompt([{
                    type: 'input',
                    name: 'gitHub',
                    message: "Enter Engineer's GitHub",
                    validate: gitInput => {
                        if (gitInput) {
                            return true;
                        } else {
                            console.log('Please enter engineer github username!')
                            return false;
                        }
                    }
                }])
                .then(ans => {
                    console.log(ans.gitHub)
                
                    const someEngineer = new Engineer(answers.name, answers.email, answers.id, answers.role, ans.gitHub )
                    team.push(someEngineer);
                    addMore()
                })
            }else if(answers.role === 'Manager') {
                    inquirer.prompt([{
                        type: 'input',
                        name: 'office',
                        message: "Please enter Manager office number",
                        validate: officeInput => {
                            if (officeInput) {
                                return true;
                            } else {
                                console.log('Please enter manager office number!')
                                return false;
                            }
                        }
                    }])
                    .then(ans => {
                        console.log(ans.office)
                    const someManager = new Manager(answers.name, answers.email, answers.id, answers.role, ans.office )
                        team.push(someManager);
                        addMore()
                    })
                }else if(answers.role === 'Intern') {
                        inquirer.prompt([{
                            type: 'input',
                            name: 'school',
                            message: "Enter Interns school",
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log('Please enter Interns school!')
                                    return false;
                                }
                            }
                        }])
                        .then(ans => {
                                                    
                            const someIntern = new Intern(answers.name, answers.email, answers.id, answers.role, ans.school )
                            team.push(someIntern);
                            addMore()
                        })
            }else{
                const someEmployee = new Employee(answers.name, answers.email, answers.id, answers.role)
                team.push(someEmployee)
                addMore()
            }
            //Add more or another employee.  Inquirer will start prompt over to make the page
            function addMore() {
                inquirer.prompt([{
                    type: 'confirm',
                    name: 'addNew',
                    message: 'Would you Like to add another employee?'
                }])
                .then(res =>{
                    if (res.addNew === true){
                        getInfo(team)
                    }else{
                        console.log('team', team)
                        let theCardsHTML = generatePage(team)
                        writeHTML(theCardsHTML)
                        
                    }
                    
                })
                
            }
                
        })
}


getInfo();

