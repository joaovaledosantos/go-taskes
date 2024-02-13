const modal = document.getElementById('modal');
const inputDescription = document.getElementById('Description');
const inputDate = document.getElementById('date');
const btnCreateTask = document.getElementById('btn-create-task');

function CreateTask(e) {
    e.preventDefault();

    if (!inputDescription.value || !inputDate.value) {
        alert('Preencha todos os campos!');
        return;
    }


    const newTask = {
        description: inputDescription.value,
        Date: new Date(inputDate.value).toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
        id: Math.floor(Math.random() * 10000)
    }

    const allTasks = loadTasks();

    console.log('ALL TASKS: ', allTasks);


    localStorage.setItem('@GoTasks', JSON.stringify([ ...allTasks, newTask ]));

    toggleModal();
    clearFields();
}

function toggleModal() {
    modal.classList.toggle('modal-visible');
}

function clearFields() {
    inputDate.value = '';
    inputDescription.value = '';
}

btnCreateTask.addEventListener('click', CreateTask);