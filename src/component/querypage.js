import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import loading from "./loading.gif";
import SearchIcon from "@mui/icons-material/Search";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import OnerrorWhileOffline from "./OnerrorWhileOffline";
import StatusCodeError from "./StatusCodeError";
export default function Query(props) {
  const date = new Date();
  let [status,setStatus]= useState("ok");
  const [article, setArticle] = useState([]);
  const [ld, setLd] = useState(false);
  const [page, setPage] = useState(1);
  const [totalresult, setTotalresult] = useState(0);
  const [pageSize, setPageSize] = useState(
    localStorage.getItem("pageSize") ? localStorage.getItem("pageSize") : 25
  );
  const [totalresultTillNow, setTotalresultTillNow] = useState(
    localStorage.getItem("pageSize")
  );
  //   const [props.query, setInputValue]= useState(" ")

  const changeQuery = async () => {
    props.setHeadingOfQuery(props.query);
    props.setProgress(0);
    document.getElementById("site-search").value = "";
    setLd(true);
    document.title =
      "News of " + props.query.slice(0, 1).toUpperCase() + props.query.slice(1);
   
    props.setHeadingOfQuery(props.query);
    try{
      props.setIsfetch(true)
    let url = `https://newsapi.org/v2/everything?q=${props.query}&apiKey=${
      props.api_key
    }&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&sortBy=popularity&page=${1}&pageSize=${pageSize}`;

    props.setProgress(10);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    setPage(1);
   
    
    setArticle(parseData.articles);
    setTotalresult(parseData.totalResults);
    setLd(false);
    setStatus(parseData.status);
    props.setProgress(100);}
    catch(err){
      props.setIsfetch(false);
      setLd(false);
      props.setProgress(10);
      props.setProgress(50);
      console.log(err);
      props.setProgress(100);
    }
  };
  useEffect(() => {
    document.title =
      "News of " + props.query.slice(0, 1).toUpperCase() + props.query.slice(1);
      window.scroll(0,0);
    localStorage.setItem("query", props.query);
    return async () => {
      props.setProgress(0);
      setLd(true);
     try{
      props.setIsfetch(true)
      let url = `https://newsapi.org/v2/everything?q=${props.query}&apiKey=${
        props.api_key
      }&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&sortBy=popularity&page=${page}&pageSize=${pageSize}`;
      props.setProgress(10);
      let data = await fetch(url);
      props.setProgress(30);
      let parseData = await data.json();
      setStatus(parseData.status);
      props.setProgress(50);
      setArticle(parseData.articles);
      setTotalresult(parseData.totalResults);
      setLd(false);
      props.setProgress(100); 
     }
      catch(err){
        props.setIsfetch(false);
        setLd(false);
        props.setProgress(10);
        props.setProgress(50);
        console.log(err);
        props.setProgress(100);
      }
  
    };
  }, []);

  const previousPage = async () => {
    window.scrollTo(0, 0);
    props.setProgress(0);
    setLd(true);
    try{
      props.setIsfetch(true)
    setTotalresultTillNow(parseInt(totalresultTillNow) - parseInt(pageSize));
    let url = `https://newsapi.org/v2/everything?q=${props.query}&apiKey=${
      props.api_key
    }&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&sortBy=popularity&page=${page-1}&pageSize=${pageSize}`;
    props.setProgress(10);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    setArticle(parseData.articles);
    setPage(page - 1);
    setLd(false);
    setStatus(parseData.status);
    props.setProgress(100);
  } catch(err){
    props.setIsfetch(false);
    setLd(false);
    props.setProgress(10);
    props.setProgress(50);
    console.log(err);
    props.setProgress(100);
  }

  };
  const changePageSize = async (event) => {

    
    window.scrollTo(0, 0);
  

    setLd(true);
    try{
      props.setIsfetch(true)
      localStorage.setItem("pageSize", event.target.value);
      setTotalresultTillNow((event.target.value * totalresultTillNow) / pageSize);
      setPageSize(event.target.value);
    let url = `https://newsapi.org/v2/everything?q=${props.query}&apiKey=${
      props.api_key
    }&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&sortBy=popularity&page=${page}&pageSize=${
      event.target.value
    }`;
    props.setProgress(10);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    setArticle(parseData.articles);
    setLd(false);
    setStatus(parseData.status)
    props.setProgress(100);
  } catch(err){
    props.setIsfetch(false);
    setLd(false);
    props.setProgress(10);
    props.setProgress(50);
    console.log(err);
    props.setProgress(100);
  }
  };

  const nextsPage = async () => {
    window.scrollTo(0, 0);

    

    setLd(true);
   try{
    props.setIsfetch(true)
    setTotalresultTillNow(parseInt(totalresultTillNow) + parseInt(pageSize));
    let url = `https://newsapi.org/v2/everything?q=${props.query}&apiKey=${
      props.api_key
    }&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&sortBy=popularity&page=${page+1}&pageSize=${pageSize}`;
    props.setProgress(10);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    setArticle(parseData.articles);
    setPage(page + 1);
    setLd(false);
   
    setStatus(parseData.status);
    props.setProgress(100);
  }catch(err){

      props.setIsfetch(false);
      setLd(false);
      props.setProgress(10);
      props.setProgress(50);
      console.log(err);
      props.setProgress(100);
    }
  };

  return (
    <>
      <div className="container my-1">
        <div className="row" >
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <form>
                {" "}
                <input
                  type="search"
                  id="site-search"
                  name="q"
                  onChange={props.Changetext}
                  placeholder="Search Your News:"
                  style={{
                    borderTopLeftRadius: "30px",
                    width: "100px",
                    height: "35px",
                    borderBottomLeftRadius: "30px",
                    paddingLeft: "15px",
                    border: `1px solid black`,
                    borderColor: props.textColor,
                    color: props.textColor,
                    fontSize: "18px",
                    transition: "width 1s",
                  }}
                  onKeyUp={(event) => {
                    if (event.key === "Enter") {
                      changeQuery();
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                    }
                  }}
                  onFocus={() => {
                    document.getElementById("site-search").style.width =
                      "400px";
                  }}
                  onBlur={() => {
                    document.getElementById("site-search").style.width =
                      "100px";
                  }}
                ></input>
              </form>

              <button
                style={{
                  borderTopRightRadius: "30px",
                  height: "35px",
                  borderBottomRightRadius: "30px",
                  border: "1px solid black",
                  background: `hsl(${props.color.h},${props.color.s}%, ${props.color.l}% )`,

                  borderColor: props.textColor,
                  color: props.textColor,
                }}
                onClick={changeQuery}
              >
                <SearchIcon />
              </button>
            </div>

            <div className="d-none d-lg-block" style={{ marginLeft: "120px" }}>
              <span className="mx-2" style={{ color: `${props.textColor}` }}>
                Number of articles per page:
              </span>
              <select value={pageSize} onChange={changePageSize}>
                <option>10</option>

                <option>15</option>

                <option>25</option>
              </select>
            </div>
            <p
            className="d-none d-md-block"
              style={{
                marginLeft: "25px",
                paddingTop: "12px",
                color: `${props.textColor}`,
              }}
              id="chooseVibeLg"
              onClick={() => {
                if (
                  document.getElementById("chooseVibeLg").textContent ===
                  "Choose Your Vibe:"
                ) {
                  props.setShowWheel(true);
                  document.getElementById("chooseVibeLg").textContent =
                    "Click here to Close:";
                  localStorage.setItem("chooseVibe", "Click here to Close:");
                } else {
                  props.setShowWheel(false);
                  document.getElementById("chooseVibeLg").textContent =
                    "Choose Your Vibe:";
                  localStorage.setItem("chooseVibe", "Choose Your Vibe:");
                }
              }}
            >
              {localStorage.getItem("chooseVibe") != null
                ? localStorage.getItem("chooseVibe")
                : "Choose Your Vibe:"}
            </p>
            <ColorLensIcon
              style={{ color: `${props.textColor}` }}
               className="d-none d-md-inline d-lg-none mx-3"
              onClick={() => {
                if (
                  document.getElementById("chooseVibeLg").textContent ===
                  "Choose Your Vibe:"
                ) {
                  props.setShowWheel(true);
                  document.getElementById("chooseVibeLg").textContent =
                    "Click here to Close:";
                  localStorage.setItem("chooseVibe", "Click here to Close:");
                } else {
                  props.setShowWheel(false);
                  document.getElementById("chooseVibeLg").textContent =
                    "Choose Your Vibe:";
                  localStorage.setItem("chooseVibe", "Choose Your Vibe:");
                }
              }}
            />

            <ColorLensIcon
              style={{ color: `${props.textColor}` }}
              className="d-none d-lg-inline mx-3"
              onMouseEnter={() => {
                props.setShowWheel(true);
                document.getElementById("chooseVibeLg").textContent =
                  "Click here to Close:";
              }}
              onClick={() => {
                props.setShowWheel(false);
                document.getElementById("chooseVibeLg").textContent =
                  "Choose Your Vibe:";
              }}
            />
          </div>
        </div>
        <div className="d-lg-none my-3">
          <span style={{ color: `${props.textColor}` }}>
            Number of articles per page:
          </span>
          <select value={pageSize} onChange={changePageSize}>
            <option>10</option>
            <option>15</option>
            <option>25</option>
          </select>
        </div>
               <div className="d-flex flex-row align-items-center"> <p
              style={{
              
                paddingTop: "12px",
                color: `${props.textColor}`,
              }}
              className="d-md-none"
              id="chooseVibesm"
              onClick={() => {
                if (
                  document.getElementById("chooseVibesm").textContent ===
                  "Choose Your Vibe:"
                ) {
                  props.setShowWheel(true);
                  document.getElementById("chooseVibesm").textContent =
                    "Click here to Close:";
                  localStorage.setItem("chooseVibe", "Click here to Close:");
                } else {
                  props.setShowWheel(false);
                  document.getElementById("chooseVibesm").textContent =
                    "Choose Your Vibe:";
                  localStorage.setItem("chooseVibe", "Choose Your Vibe:");
                }
              }}
            >
              {localStorage.getItem("chooseVibe") != null
                ? localStorage.getItem("chooseVibe")
                : "Choose Your Vibe:"}
            </p>
            <ColorLensIcon
              style={{ color: `${props.textColor}` }}
              className="d-md-none mx-3"
              onClick={() => {
                if (
                  document.getElementById("chooseVibesm").textContent ===
                  "Choose Your Vibe:"
                ) {
                  props.setShowWheel(true);
                  document.getElementById("chooseVibesm").textContent =
                    "Click here to Close:";
                  localStorage.setItem("chooseVibe", "Click here to Close:");
                } else {
                  props.setShowWheel(false);
                  document.getElementById("chooseVibesm").textContent =
                    "Choose Your Vibe:";
                  localStorage.setItem("chooseVibe", "Choose Your Vibe:");
                }
              }}
            />
            </div>
        <h2 style={{ color: `${props.textColor}` }} className="my-5">
          Chhavi NEWS - All News regarding{" "}
          {props.headingOfQuery.slice(0, 1).toUpperCase() +
            props.headingOfQuery.slice(1)}
            <hr/>
        </h2>
        {ld && (
          <div className="text-center">
            <img style={{ width: "460px" }} src={loading} alt="" />
            <p style={{ color: `${props.textColor}` }}>
              Please wait while fetching news...
            </p>
          </div>
        )}
      
        {(props.isfetch===true && status!=="error") && <div className="row">
          {article.map((ele) => {
            return (
              <div className="col-md-6 col-lg-4 my-2" key={ele.url}>
                <NewsItem
                  title={ele.title}
                  description={ele.description ? ele.description.slice(0,75)+"..." : ""}
                  imageUrl={
                    ele.urlToImage
                      ? ele.urlToImage
                      : "https://as2.ftcdn.net/v2/jpg/02/55/73/91/1000_F_255739172_533jjNvdeTQFm1gtkDcPyd3RSKTMe5Ta.jpg"
                  }
                  urlLink={ele.url}
                  author={ele.author ? ele.author : "Unknown"}
                  time={ele.publishedAt}
                  source={ele.source.name}
                />
              </div>
            );
          })}
        </div>}
      {(props.isfetch===false ) &&   <OnerrorWhileOffline/>  }
      {(status==="error") &&   <StatusCodeError/>  }
        <div className="d-flex justify-content-between my-5">
         
                {" "}
                <button
                  disabled={page === 1}
                  className="btn btn-custom"
                  style={{
                    background: `hsl(${props.color.h},${props.color.s}%, ${props.color.l}% )`,
                    color: props.textColor,
                    borderColor: props.textColor,
                  }}
                  onClick={previousPage}
                >
                  Previous
                </button>
             
                <button
                  disabled={totalresultTillNow >= totalresult}
                  className="btn btn-custom"
                  onClick={nextsPage}
                  style={{
                    background: `hsl(${props.color.h},${props.color.s}%, ${props.color.l}% )`,

                    borderColor: props.textColor,
                    color: props.textColor,
                  }}
                >
                  Next
                </button>
            
        </div>
      </div>
    </>
  );

}
