const form = document.getElementById('todo-form')
const ulF = document.querySelector('ul.first')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const li = document.createElement('li')
    li.textContent = e.target.todo.value
    li.addEventListener('click', function () {
        li.remove()
    })
    ulF.appendChild(li)
    e.target.todo.value = ''
    
})

// Advanced

const advancedFrom = document.getElementById('advanced-form')
const ulS = document.querySelector('.second')
advancedFrom.addEventListener('submit', function (e) {
    e.preventDefault()
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.textContent = e.target.aTodo.value
    const b = document.createElement('button')
    b.textContent = 'delete'
    b.addEventListener('click', function () {
        b.parentElement.remove()
    })
    div.appendChild(p)
    div.appendChild(b)
    ulS.appendChild(div)

    e.target.aTodo.value
})

