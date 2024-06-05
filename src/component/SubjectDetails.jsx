import React from "react";
import '../App.css'

export default function SubjectDetails({subject, hour , increase, decrease, index}){
    return(

        <div style={{display:"flex", gap:"10px", alignItems:"center", justifyContent:"center"}}>

            <p className="para">{subject} - </p>
            <p className="para">{hour} Hours</p>
            <button onClick={()=> increase(index)} id="btn1">+</button>
            <button onClick={()=> decrease(index)} id="btn2">-</button>

        </div>

    )
}