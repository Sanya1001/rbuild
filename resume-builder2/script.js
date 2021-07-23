const theme = document.getElementById('theme');
const nav = document.getElementById('navbar');

const addSkill = document.getElementById('add-skill');
const addExp = document.getElementById('add-exp');

theme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    nav.classList.toggle('dark');
    theme.classList.toggle('dark');
})

addSkill.addEventListener('click', () => {
    const skill = document.getElementById('skill-input')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'skills')
    var select = document.createElement('select')
    select.setAttribute('name', 'skill-type')
    select.setAttribute('id', 'skill-type')
    var option1 = document.createElement('option')
    var option2 = document.createElement('option')
    var option3 = document.createElement('option')
    var option4 = document.createElement('option')
    var option5 = document.createElement('option')
    option1.setAttribute('value', 'technical')
    option1.innerText = 'Technical'
    option2.setAttribute('value', 'interpersonal')
    option2.innerText = 'Interpersonal'
    option3.setAttribute('value', 'artistic')
    option3.innerText = 'Artistic'
    option4.setAttribute('value', 'learning')
    option4.innerText = 'Learning/ ability based'
    option5.setAttribute('value', 'other')
    option5.innerText = 'Other'
    var space = document.createElement('span')
    space.innerHTML = '&nbsp;'
    select.appendChild(option1)
    select.appendChild(option2)
    select.appendChild(option3)
    select.appendChild(option4)
    select.appendChild(option5)
    skill.appendChild(input)
    skill.appendChild(space)
    skill.appendChild(select)
    skill.appendChild(document.createElement('br'))

})

addExp.addEventListener('click', () => {
    const exp = document.getElementById('exp-input')
    var label = document.createElement('label')
    label.setAttribute('for', 'experience')
    label.innerText = 'Experience'
    // var addBtn = document.createElement('button')
    // addBtn.setAttribute('id', 'add-exp')
    // addBtn.setAttribute('type', 'button')
    // addBtn.innerText = '+'
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'experience')
    var label1 = document.createElement('label')
    label1.setAttribute('for', 'exp-desc')
    label1.innerText = 'Description'
    var textarea = document.createElement('textarea')
    textarea.setAttribute('name', 'exp-desc')
    textarea.setAttribute('cols', '30')
    textarea.setAttribute('rows', '10')
    var label2 = document.createElement('label')
    label2.setAttribute('for', 'org')
    label2.innerText = 'Organization'
    var input2 = document.createElement('input')
    input2.setAttribute('type', 'text')
    input2.setAttribute('name', 'org')
    input2.setAttribute('required', 'true')
    exp.appendChild(label)
    // exp.appendChild(addBtn)
    exp.appendChild(document.createElement('br'))
    exp.appendChild(input)
    exp.appendChild(document.createElement('br'))
    exp.appendChild(label1)
    exp.appendChild(document.createElement('br'))
    exp.appendChild(textarea)
    exp.appendChild(document.createElement('br'))
    exp.appendChild(label2)
    exp.appendChild(document.createElement('br'))
    exp.appendChild(input2)
    exp.appendChild(document.createElement('br'))
    label.scrollIntoView()
})