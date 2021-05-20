//save a note
const notes = [];

function saveNote(content, id){
  // write some code here
  notes.push({content: content, id: id});
  return notes;
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Do cleaning", 3);
saveNote("Cook food", 4);
saveNote("Buy groceries", 5);
saveNote("Buy medicine", 6);

console.log(notes); 

//Get a note
function getNote(id){
   
    for(let i = 0;i < notes.length; i++)
    {
        if(notes[i].id === id)
        {
            return notes[i];
        }
    }
  }
  
const firstNote = getNote(5);
console.log(firstNote); 

//Log out notes
function logOutNotesFormatted(){
    for(let i = 0; i < notes.length; i++)
    {
        console.log(`The note with ${notes[i].id}, has the following note text: ${notes[i].content}`);
    }
  }
  
logOutNotesFormatted(); // should log out the text below

  
  