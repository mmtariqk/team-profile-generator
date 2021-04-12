// We require jest to test for name id and email and office
const { TestResult } = require("@jest/types");

const Manager = require('../lib/Manager');
const { number } = require("yargs");


// Here we are going to test for name, email, id, role validity

//passed test


const testManager = new Manager("muhammad", "mmtariqk@gmail.com", 3 , "manager", 101)

//failed test is below for testing purpose only

//const testManager = new Manager("m", "mmtariqk@gmail.com", 3 , "employee", 'mmtariqk')

it('has a name', () => {
    expect(testManager.name).toEqual(expect.any(String))
    expect(testManager.name.length).toBeGreaterThan(2)
})

it('has an email a valid email', () =>{
    expect(testManager.email).toEqual(expect.stringContaining('@'))
})

it('has a role of manger', () => {
    expect(testManager.role).toBe('manager')
})

it('Id has value', () =>{
    expect(testManager.id).toEqual(expect.any(Number))
})

it('Entered an office', () =>{
    objectKeys= Object.keys(testManager)
    keyGH = objectKeys[4]

    expect(keyGH).toBe('office')

    expect(testManager.office).toEqual(expect.any(Number))

})

