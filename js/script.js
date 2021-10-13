class Note{
    constructor(title, description, dateadded){
        this.title = title
        this.description = description
        this.dateadded = dateadded
    }
}

class UI{
    static displayNotes(){
        const notes = StoreData.getNotes()
        notes.forEach((note) => UI.addNoteToList(note))
    }

    static addNoteToList(note){
        const list = document.querySelector('#notes-lists')

        const noteItem = document.createElement('div')
        noteItem.classList.add('notes-item')

        noteItem.innerHTML = `
            <header>${note.title}</header>
            <div class="notes-item-inner">
                <div class="notes-content">${note.description}</div>
            </div>
            <footer class="notes-footer">
                <div class="notes-footer-inner">
                    <div class="notes-footer-item"><i class="far fa-edit"></i></div>
                    <div class="notes-footer-item"><i class="far fa-trash-alt"></i></div>
                    <div class="notes-footer-item"><i class="far fa-clock"></i></div>
                </div>
            </footer>`

        list.appendChild(noteItem)
    
    }

    static deleteNote(){}

    static showAlert(){}

    static clearFields(){}
}

class StoreData{
    static getNotes(){
        let notes
        if(localStorage.getItem('notes') === null){
            notes = []
        }else{
            notes = JSON.parse(localStorage.getItem('notes'))
        }

        return notes
    }

    static addNote(note){
        const notes = StoreData.getNotes()

        notes.push(note)

        localStorage.setItem('notes', JSON.stringify(notes))
        
    }

    static removeNote(){}
}

const addNoteForm = document.querySelector('#add-note-form')

addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const titleVal = document.querySelector('#title').value
    const descriptionVal = document.querySelector('#desc').value

    const date = new Date()
    const dateAdded = date.getDate()

    if(titleVal === '' || descriptionVal === ''){
        console.log('empty')
    }else{
        const note = new Note(titleVal, descriptionVal, dateAdded)

        UI.addNoteToList(note)

        StoreData.addNote(note)

    }
})