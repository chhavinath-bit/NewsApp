import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import loading from "./loading.gif";
export default function News(props){
  
  const [article,setArticle]=useState([])
  const [ld,setLd]=useState(false)
  const [page,setPage]=useState(1)
  const [totalresult,setTotalresult]=useState(0)
  const [pageSize, setPageSize]= useState(localStorage.getItem("pageSize")? localStorage.getItem("pageSize"): 25)
  const [totalresultTillNow,setTotalresultTillNow]=useState(localStorage.getItem("pageSize"))
 
  useEffect(() => {
    document.title =
    props.category === "general"
      ? "Home-News 24/7"
      : "News-" + props.category;
  
    return async () => {
      props.setProgress(0);
      setLd(true)
      
      
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api_key}&page=${page}&pageSize=${pageSize}`;
      props.setProgress(10);
      let data = await fetch(url);
      props.setProgress(30);
      let parseData = await data.json();
      props.setProgress(50);
      setArticle(parseData.articles)
      setTotalresult(parseData.totalResults)
      setLd(false)
      props.setProgress(100);
    }
  }, [])
  
 
  const previousPage = async () => {
    window.scrollTo(0, 0);
    props.setProgress(0);
    setLd(true)
    setTotalresultTillNow(parseInt(totalresultTillNow)-parseInt(pageSize))
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=${props.api_key}&page=${page - 1}&pageSize=${
      pageSize
    }`;
    props.setProgress(10);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    setArticle(parseData.articles)
    setPage(page-1)
    setLd(false)
    props.setProgress(100);
  };
  const changePageSize = async (event) => {
    window.scrollTo(0, 0);
    localStorage.setItem("pageSize", event.target.value);
    setTotalresultTillNow((event.target.value)*totalresultTillNow/pageSize);
    setPageSize((event.target.value))
   
    
    setLd(true)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=${props.api_key}&page=${page}&pageSize=${
      event.target.value
    }`;
    props.setProgress(10);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    setArticle(parseData.articles)
    setLd(false)

    props.setProgress(100);
  };
  const nextsPage = async () => {
    window.scrollTo(0, 0);
    
    setTotalresultTillNow(parseInt(totalresultTillNow)+parseInt(pageSize))
  
   
    setLd(true)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=${props.api_key}&page=${page + 1}&pageSize=${
      pageSize
    }`;
    props.setProgress(10);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    setArticle(parseData.articles)
    setPage(page+1)
    setLd(false)
    props.setProgress(100);
  };
  
    return (
      <>
        <div
          className="d-flex justify-content-end"
          style={{ paddingRight: "20px", marginTop: "80px" }}
        >
      
          <span className="mx-2">Number of articles per page:</span>
          <select value={pageSize} onChange={changePageSize}>
            <option >10</option>
            <option >15</option>
            <option >25</option>
           
          </select>
        </div>
        <div className="container my-5">
          {ld && (
            <div className="text-center">
              <img style={{ width: "460px" }} src={loading} alt="" />
              <p>Please wait while fetching news...</p>
            </div>
          )}
          <h2 className="my-4">Chhavi NEWS - Top Headlines of {props.category.slice(0,1).toUpperCase()+props.category.slice(1)}</h2>
          <div className="row">
            {article.map((ele) => {
              return (
                <div className="col-md-6 col-lg-4 my-2" key={ele.url}>
                  <NewsItem
                    title={ele.title}
                    description={ele.description ? ele.description : ""}
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

            {/* <div className='col-md-4 my-2'>
        <NewsItem title="news" description="ourDesc"/>
        </div>
        <div className='col-md-4 my-2'>
        <NewsItem title="news" description="ourDesc"/>
        </div>
        <div className='col-md-4 my-2'>
        <NewsItem title="news" description="ourDesc"/>
        </div>
        <div className='col-md-4 my-2'>
        <NewsItem title="news" description="ourDesc"/>
        </div>   */}
          </div>
          <div className="d-flex justify-content-between my-5">
            <button
              disabled={page === 1}
              className="btn btn-custom"
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              disabled={
                totalresultTillNow >= totalresult
              }
              className="btn btn-custom"
              onClick={nextsPage}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  
}


