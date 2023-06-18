

 import React from 'react'
 
 export default function NewsItem(props) {
  let date= new Date(props.time);
  return (
    <div>
      <div className="card">
  <img src={props.imageUrl} className="styleImg card-img-top" alt="wowowo" />
  <div className="card-body">
  <h4 className="card-title"><b>{props.title}</b></h4>
  <p className="card-text">{props.description}</p>
  <p style={{color:"blue"}}>{props.source}</p>
  <p><b>On</b>: {date.toGMTString()} By <b>Author</b>: {props.author}</p>
  <a href={props.urlLink} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More...</a>
  </div>
  </div>
    </div>
  )
 }
 
   




