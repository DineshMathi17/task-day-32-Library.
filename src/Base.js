import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({title, styles, children}){
   const history = useHistory();
    return (
        <div>
            <div>
            <div className="nav-styles">
            <span>
                    <button 
                    className="nav-buttons"
                   onClick={()=>history.push("/")}
                    >List of Books</button>
                </span>
                
                <span>
                    <button 
                    className="nav-buttons"
                   onClick={()=>history.push("/add")}
                    >Add Books</button>
                </span>

                <span>
                    <button 
                    className="nav-buttons"
                    onClick={()=>history.push("/issued")}
                    >Issued books</button>
                </span>
                <span>
                    <button 
                    className="nav-buttons"
                   onClick={()=>history.push("/issued/add")}
                    >Add IssuedBooks</button>
                </span>

            </div>
            <div className="title">{title}</div>
            </div>

             <div className="childred">
                {children}
        <footer>
            contact us
             <div>MDBS Library</div>
             <div>phone :8870****52</div>
         </footer>
             
             </div>

        </div>
    )
}