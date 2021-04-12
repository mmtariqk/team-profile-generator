const { TestResult } = require("@jest/types");


const Employee = require('../lib/Employee');


// We want to test for name, email, id, role validity


const testEmp = new Employee("muhammad", "mmtariqk@gmail.com", 3, "employee")

it('has a name', () => {
    expect(testEmp.name).toEqual(expect.any(String))
    expect(testEmp.name.length).toBeGreaterThan(2)
    
    
})
it('has an email a valid email', () =>{
    expect(testEmp.email).toEqual(expect.stringContaining('@'))
})

it('has a role of employee', () => {
    expect(testEmp.role).toBe('employee')
})

it('Id is a number', () =>{
    expect(testEmp.id).toEqual(expect.any(Number))
})
