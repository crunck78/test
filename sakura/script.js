let titles = [];
let notes = [];

let trashTitles = [];
let trashNotes = [];

// let titlesAsText = [''];
// let notesAsText = [''];

function render() {
    let list = document.getElementById('list');
    list.innerHTML = '';

    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const note = notes[i];
        list.innerHTML += `
            <div class="card">
                <b> Titel: ${title} <br>
                <b> Notiz: ${note} <br>
                <button onclick="deleteNote(${i})">Löschen</button>
            </div>
        `;
    }
    
}

function addNote() {
    console.log('Läuft!');
    let title = document.getElementById('title');
    let note = document.getElementById('note');

    titles.push(title.value);
    notes.push(note.value);

    render();
    save();
    title.value = "";
    note.value = "";
}

function deleteNote(i) {

    trashNotes.push(notes[i]);
    trashTitles.push(titles[i]);
    
    titles.splice(i,1);
    notes.splice(i,1);

    render();
    save();
}

function save() {
    let titlesAsText = JSON.stringify(titles);
    saveArray('titles', titlesAsText);

    let notesAsText = JSON.stringify(notes);
    saveArray('notes', notesAsText);
}

function saveArray(key, text) {
    localStorage.setItem(key, JSON.stringify(text));
}