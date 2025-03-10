const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

button.addEventListener('click', () => {
    const chapter = input.value.trim();

    if (chapter !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = chapter;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${chapter}`);
        deleteButton.classList.add('delete');

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = '';
        input.focus();

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });
    }
})
