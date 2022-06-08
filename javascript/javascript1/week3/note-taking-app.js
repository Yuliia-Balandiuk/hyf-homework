//Save a note

const notes = [];

function saveNote(content, id) {
  let obj = {
    content: content,
    id: id,
  };
  notes.push(obj);
  return notes;
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//Get a note

function getNote(id) {
  if (typeof id !== 'number') {
    return console.log('Please enter a number');
  } else {
    for (let i = 0; i < notes.length; i++) {
      if (id === notes[i].id) {
        return console.log(notes[i]);
      }
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//Log out notes

function logOutNotesFormatted() {
  for (note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`
    );
  }
}

logOutNotesFormatted();
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

//TODO add Unique feature
