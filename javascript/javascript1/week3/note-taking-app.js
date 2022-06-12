//Save a note

const notes = [];

function saveNote(content, id) {
  if (typeof content === 'string' && typeof id === 'number') {
    let obj = {
      content: content,
      id: id,
    };
    notes.push(obj);
    return notes;
  }
  return console.log('Please enter the correct data');
}

saveNote('Pick up groceries.', 1);
saveNote('Do laundy.', 2);

console.log(notes);

//Get a note

function getNote(id) {
  if (typeof id !== 'number') {
    return console.log('Please enter a number');
  } else {
    for (let i = 0; i < notes.length; i++) {
      if (id === notes[i].id) {
        return notes[i];
      }
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote);

//Log out notes

function logOutNotesFormatted() {
  for (note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`
    );
  }
}

logOutNotesFormatted();

// feature allows you to update an existing note

function updateNote(content, id) {
  if (typeof content === 'string' && typeof id === 'number') {
    for (let i in notes) {
      if (notes[i].id === id) {
        notes[i].content += ` ${content}`;
        break;
      } else if (notes[i].id !== id) {
        return console.log('You entered a non-existent word');
      }
    }
  } else {
    return console.log('Please enter the correct data');
  }
}

updateNote('It is important!', 2);
