import React from 'react';
import { useState } from 'react';

const Notes=()=>{
     // all notes
     let[allnotes,setAllnotes]=useState([
         {title:"buy pen"},
         {title:"buy book"},
         {title:"buy notes"},
         {title:"buy fruits"}
     ]);
     // add text
     let[text1,setText1]=useState('')
     function addText(){
        let arr=[...allnotes,{title:text1}]
        console.log(arr)
        setAllnotes(arr)
     }
     // delete 
     function deleteHandle(index){
         let ind=index;
         console.log(ind)
     }

    return(
        <div>
            <p>notes components</p>
            <div>
                <input type="text" value={text1} onChange={(event)=>{
                    setText1(event.target.value)
                }}/> <button onClick={()=>{
                    addText()
                }}>ADD</button>
            </div>
            
            {
                allnotes.map((note,index)=>{
                    return(
                        <div key={index}>{note.title} <button onClick={()=>{
                            deleteHandle(index)
                        }}>DELETE</button> </div>

                    )
                })
            }
        </div>
    )
}
export default Notes;