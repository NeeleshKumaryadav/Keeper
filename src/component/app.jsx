import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './footer.jsx';
import Note from './Note.jsx';
import notes from '../notes.js';
import CreateArea from './createArea.jsx';



function App() {

    const [notes,setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNotes =>{
            return [...prevNotes,newNote];
        });
     }


    function deleteNote(id){ 
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem, index) =>{
                return index!==id;
            });
        });
    }

    return (<div>
        <Header />
        <CreateArea onAdd= {addNote}/>
        {notes.map((noteItems,index) => 
        <Note 
            key={index}
            id={index}
            title= {noteItems.title} 
            content={noteItems.content} 
            onDelete= {deleteNote}
            />
        )};
        <Footer />
    </div>
    );
}

export default App;