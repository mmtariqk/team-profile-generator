// test for name id and email and school
// test for name id and email and github
const { TestResult } = require("@jest/types");


const Intern = require('../lib/Intern');


// test for name, email, id, role validity



const testIntern = new Intern("muhammad", "mmtariqk@gmail.com", 3 , "intern", "FSU")

it('has a name', () => {
    expect(testIntern.name).toEqual(expect.any(String))
    expect(testIntern.name.length).toBeGreaterThan(2)
})

it('has an email a valid email', () =>{
    expect(testIntern.email).toEqual(expect.stringContaining('@'))
})

it('has a role ofintern', () => {
    expect(testIntern.role).toBe('intern')
})

it('Id has value', () =>{
    expect(testIntern.id).toEqual(expect.any(Number))
})

it('Entered a school', () =>{
    objectKeys= Object.keys(testIntern)
    keyGH = objectKeys[4]

    expect(keyGH).toBe('school')

    expect(testIntern.school).toEqual(expect.any(String))

})
