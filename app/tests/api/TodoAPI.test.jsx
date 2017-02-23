import expect from 'expect'
import TodoAPI from 'TodoAPI'

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos')
    })

    it('should exist', () => {
        expect(TodoAPI).toExist()
    })

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            let todos = [
                {
                    id: 23,
                    text: 'Test all files',
                    completed: false
                }
            ]
            TodoAPI.setTodos(todos)
            let actualTodos = JSON.parse(localStorage.getItem('todos'))
            expect(actualTodos).toEqual(todos)
        })

        it('should not set invalid todos array', () => {
            let badTodos = { a: 'b' }
            TodoAPI.setTodos(badTodos)
            expect(localStorage.getItem('todos')).toBe(null)
        })
    })

    describe('getTodos', () => {
        it('should return empty array for bad localstorage data', () => {
            // first attempt should be empty
            expect(TodoAPI.getTodos()).toEqual([])

            // second attempt after bad data tries to get written
            // a little redundant from setTodos test
            let badTodos = { a: 'b' }
            TodoAPI.setTodos(badTodos)
            expect(TodoAPI.getTodos()).toEqual([])
        })

        it('should return array for valid localstorage data', () => {
            let todos = [
                {
                    id: 23,
                    text: 'Test all files',
                    completed: false
                }
            ]
            TodoAPI.setTodos(todos)
            let actualTodos = JSON.parse(localStorage.getItem('todos'))
            expect(actualTodos).toEqual(todos)
        })
    })
})
