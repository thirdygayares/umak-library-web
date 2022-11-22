import { useParams } from "react-router-dom"


export function Book (){
    const {id} = useParams(); 
    return (

      
        <div>
            <h1>Book {id} </h1>
        </div>
    )
   

}

