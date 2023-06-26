import React from 'react'
import Onerror from "./Onerror.gif"
export default function OnerrorWhileOffline() {
  return (
    <>
     <div className="container ">
     
      <div className="d-flex flex-column align-items-center" >
      <h3  style={{marginTop:"15px"}}> We are sorry for inconvenience.... </h3> 
     <img className="my-2" src={Onerror}  style={{width:"45vw"}} alt=""/>
      <p style={{fontSize :"15px"}}><i> Fun Fact: Right click and open inspect, you can check error in console tab or Network tab</i></p>
      </div>
     </div>
      
    </>
  )
}

