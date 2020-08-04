
const functions = require('./funcionesCalculadora')

test('Add two numbers', () => {
    expect(functions.sum(1,2)).toBe(3)
})

test('Add two numbers with zero', () => {
    expect(functions.sum(1,0)).toBe(1)
})

test('Substract two numbers', () => {
    expect(functions.sub(2,1)).toBe(1)
})

test('Substract two numbers that result in a negative value', () => {
    expect(functions.sub(2,3)).toBe(-1)
})


test('Multiply two numbers', () => {
    expect(functions.mul(1,2)).toBe(2)
})

test('Divide by zero', () => {
    expect(functions.div(2,0)).toThrow('Division by zero.');
})

test('Divide two numbers', () => {
    expect(functions.div(2,1)).toBe(2)
})