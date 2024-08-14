import React, {useState, useRef} from "react";
import alt from "../alt.jpg";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
export default function NewsItem(props) {
  const [loadImg, setLoadImg]= useState();
  const Upvote= useRef("");
  let date = new Date(props.time);
  // console.log("image:", props);
  // console.log(props.imageUrl)
  let onLoadImg=(event)=>{
    console.log(props.imageUrl);
      setLoadImg(props.imageUrl);
      document.getElementById(`img${props.key}`).src=props.imageUrl;
  }
  let onError=(event)=>{
    setLoadImg(alt);
    document.getElementById(`img${props.key}`).src=alt;
  }
  return (
    <div>
      <div className="card shadow">
        <img
          src={props.imageUrl}
          // onLoad={onLoadImg}
          onError={onError}
          // src={alt}
          id={`img${props.key}`}
          className="styleImg card-img-top"
          alt="sorry for inconvenience"
        />
        <div className="card-body">
          <h4 className="card-title">
            <b>{props.title}</b>
          </h4>
          <p className="card-text">{props.description}</p>
          <p style={{ color: "blue" }}>{props.source}</p>
          <p>
            <b>On</b>: {date.toGMTString()}{" "}
          </p>
          <p>
            <b>Author</b>: {props.author}
          </p>
          <a
            href={props.urlLink}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More...
          </a>
         <div ref={Upvote}  onClick={()=>{Upvote.current.style.color="green"}}><BiSolidUpvote color="transparent" /></div> 
          <BiSolidDownvote color="transparent"/>
        </div>
      </div>
    </div>
  );
}
