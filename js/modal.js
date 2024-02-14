const inputDescription = document.getElementById('Description');
const inputDate = document.getElementById('date');
const btnCreateTask = document.getElementById('btn-create-task');
const modal = document.getElementById('modal');
const alertElement = document.getElementById('alert');

function CreateTask(e) {
    e.preventDefault();

    if (!inputDescription.value || !inputDate.value) {
        alertElement.style.display = 'block';
        closeAlert();
        return;
    }


    const newTask = {
        description: inputDescription.value,
        Date: new Date(inputDate.value).toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
        id: Math.floor(Math.random() * 10000)
    }

    const allTasks = getTasks();

    console.log('ALL TASKS: ', allTasks);


    setTasks([ ...allTasks, newTask]);

    reload();
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

function closeAlert(){
    setTimeout(() => {
        alertElement.style.display = 'none';
    }, 3000);
}

btnCreateTask.addEventListener('click', CreateTask);