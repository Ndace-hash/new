
import React, { useState } from "react";





export const Review=()=>{


const [object,setObject]=useState([]);
const [words,setWords]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(words){
            const newObject={id:new Date().getTime().toString(), text:words}
            setObject([...object,newObject])
            setWords('')
        }
    }


    return(
        <>
        <h1>REVIEWS</h1>
       <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text"  value={words}  onChange={(e)=>setWords(e.target.value)}/>
           <button className="button" type="submit">submit</button>
        </form>
                   <button className="button-danger" onClick={()=>setObject([])}> clear</button>

        </div> 
        <article>
      {
        object.map((item)=>{
            const {id,text}=item
            return(
                <div>
                    <p>{text}</p>
                </div>
            )
        })
      }
        </article>
        </>
    )
}


