const table = document.getElementById('table-body');
const modal = document.getElementById('modal');
const form = document.getElementById('form');
const inputDescription = document.getElementById('Description');
const inputDate = document.getElementById('date');
const loadingMessage = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');
const btnCreateTask = document.getElementById('btn-create-task');


//MODAL ===================================
btnCreateTask.addEventListener('click', CreateTask);

function CreateTask(e) {
    e.preventDefault();

    if (!inputDescription.value || !inputDate.value) {
        alert('Preencha todos os campos!');
        return;
    }


      const newTask = {
          description: inputDescription.value,
          Date: new Date(inputDate.value).toLocaleDateString(),
          id: Math.floor(Math.random() * 10000)
     }

    localStorage.setItem('@GoTasks', JSON.stringify([ newTask ]));

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