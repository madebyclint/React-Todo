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

    describe('filterTodos', () => {
        let todos = [
            {
                id: 1,
                text: 'some text',
                completed: true
            },
            {
                id: 2,
                text: 'other text',
                completed: false
            },
            {
                id: 3,
                text: 'some more text',
                completed: true
            }
        ]

        it('should return all items if showCompleted is true', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '')
            expect(filteredTodos.length).toBe(3)
        })

        it('should return only non-completed items if showCompleted is false', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, false, '')
            expect(filteredTodos.length).toBe(1)
        })

        it('should sort by completed status', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '')
            expect(filteredTodos[0].completed).toBe(false)
            expect(filteredTodos[1].completed).toBe(true)
        })

        it('should return all items if searchText is empty', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '')
            expect(filteredTodos.length).toBe(3)
        })

        it('should return only items that match searchText', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, 'some')
            expect(filteredTodos.length).toBe(2)
        })
    })
})
