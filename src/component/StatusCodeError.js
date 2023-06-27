import React from 'react'
import Onerror1 from "./Onerror1.gif"
export default function StatusCodeError(props) {
  return (
    <>
     <div className="container ">
     
      <div className="d-flex flex-column align-items-center" >
      <h3  style={{marginTop:"15px", color: `${props.textColor}`}}> We are sorry for inconvenience.... </h3> 
     <img className="my-2" src={Onerror1}  style={{width:"45vw"}} alt=""/>
      <p style={{fontSize :"15px", color: `${props.textColor}`}}><i> Fun Fact: Right click and open inspect, you can check error in console tab or Network tab</i></p>
      </div>
     </div>
      
    </>
  )
}

