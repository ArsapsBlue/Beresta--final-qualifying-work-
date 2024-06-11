



const taskCheckBoxes = document.querySelectorAll('.task__checkbox');

taskCheckBoxes.forEach(actionCheckBox => {

    actionCheckBox.addEventListener('click', event => {
        if (actionCheckBox.classList.contains('task__checkbox--active')) {
            actionCheckBox.classList.remove('task__checkbox--active');
        }
        else {
            actionCheckBox.classList.add('task__checkbox--active');
        }
        
   });

});