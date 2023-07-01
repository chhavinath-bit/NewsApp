import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import loading from "./loading.gif";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import OnerrorWhileOffline from "./OnerrorWhileOffline";
import StatusCodeError from "./StatusCodeError";

export default function News(props) {
  let pagination = [];

  const [pageArr, setPageArr] = useState([]);
  const [article, setArticle] = useState([]);
  let [status, setStatus] = useState("ok");
  const [ld, setLd] = useState(false);
  const [page, setPage] = useState(1);
  const [totalresult, setTotalresult] = useState(0);
  const [pageSize, setPageSize] = useState(
    localStorage.getItem("pageSize") ? localStorage.getItem("pageSize") : 25
  );
  const [totalresultTillNow, setTotalresultTillNow] = useState(
    localStorage.getItem("pageSize")
  );

  useEffect(() => {
    document.title =
      props.category === "general"
        ? "Home-News 24/7"
        : "News-" + props.category;
    window.scroll(0, 0);
    return async () => {
      props.setProgress(0);
      setLd(true);

      try {
        props.setIsfetch(true);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page}&pageSize=${pageSize}`;
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
        for (
          let i = 1;
          i <= Math.ceil(parseData.totalResults / pageSize);
          i++
        ) {
          pagination.push(i);
        }
        setPageArr([...pagination]);
      } catch (err) {
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
    for (let items of pageArr) {
      if (items === parseInt(page - 1)) {
        document.getElementById(`pagination${items}`).style.background =
          "white";
        document.getElementById(`pagination${items}`).style.color = "black";
      } else {
        document.getElementById(
          `pagination${items}`
        ).style.background = `hsl(${props.color.h},${props.color.s}%, ${props.color.l}% )`;
        document.getElementById(`pagination${items}`).style.color =
          props.textColor;
      }
    }
    window.scrollTo(0, 0);
    if (page !== 1) {
      props.setProgress(0);
      setLd(true);

      try {
        props.setIsfetch(true);
        setTotalresultTillNow(
          parseInt(totalresultTillNow) - parseInt(pageSize)
        );
        let url = `https://newsapi.org/v2/top-headlines?country=${
          props.country
        }&category=${props.category}&apiKey=${props.api_key}&page=${
          page - 1
        }&pageSize=${pageSize}`;
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
      } catch (err) {
        props.setIsfetch(false);
        setLd(false);
        props.setProgress(10);
        props.setProgress(50);
        console.log(err);
        props.setProgress(100);
      }
    } else {
      props.setCountry("-");
      document.getElementById("selectCountryPage").click();
    }
  };

  const changePageSize = async (event) => {
    window.scrollTo(0, 0);

    let pagVar = page;
    let atlastPage = false;
    setLd(true);
    try {
      pagination = [...pageArr];
      if (event.target.value < pageSize) {
        for (
          let i = pagination.length;
          i <= totalresult / event.target.value;
          i++
        ) {
          pagination.push(i + 1);
        }
      } else if (event.target.value > pageSize) {
        if (page === pagination.length) {
          atlastPage = true;
        }
        for (
          let i = pagination.length;
          i > Math.ceil(totalresult / event.target.value);
          i--
        ) {
          pagination.pop();
        }
        if (atlastPage === true) {
          pagVar = pagination.length;
        }
      }
      setPage(pagVar);
      document.getElementById(`pagination${pagVar}`).style.background = "white";
      document.getElementById(`pagination${pagVar}`).style.color = "black";
      setPageArr(pagination);
      localStorage.setItem("pageSize", event.target.value);
      setTotalresultTillNow(
        (event.target.value * totalresultTillNow) / pageSize
      );
      setPageSize(event.target.value);
      props.setIsfetch(true);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${pagVar}&pageSize=${event.target.value}`;
      props.setProgress(10);
      let data = await fetch(url);
      props.setProgress(30);
      let parseData = await data.json();
      props.setProgress(50);
      setArticle(parseData.articles);
      setLd(false);
      setStatus(parseData.status);
      props.setProgress(100);
    } catch (err) {
      props.setIsfetch(false);
      setLd(false);
      props.setProgress(10);
      props.setProgress(50);
      console.log(err);
      props.setProgress(100);
    }
  };
  const toThatPage = async (event) => {
    window.scrollTo(0, 0);
    setTotalresultTillNow(event.target.value * parseInt(pageSize));
    for (let items of pageArr) {
      if (items === parseInt(event.target.value)) {
        document.getElementById(`pagination${items}`).style.background =
          "white";
        document.getElementById(`pagination${items}`).style.color = "black";
      } else {
        document.getElementById(
          `pagination${items}`
        ).style.background = `hsl(${props.color.h},${props.color.s}%, ${props.color.l}% )`;
        document.getElementById(`pagination${items}`).style.color =
          props.textColor;
      }
    }
    setLd(true);
    try {
      props.setIsfetch(true);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${event.target.value}&pageSize=${pageSize}`;
      props.setProgress(10);
      let data = await fetch(url);
      props.setProgress(30);
      let parseData = await data.json();
      props.setProgress(50);
      setArticle(parseData.articles);
      setPage(parseInt(event.target.value));
      setLd(false);
      props.setProgress(100);
    } catch (err) {
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

    for (let items of pageArr) {
      if (items === parseInt(page + 1)) {
        document.getElementById(`pagination${items}`).style.background =
          "white";
        document.getElementById(`pagination${items}`).style.color = "black";
      } else {
        document.getElementById(
          `pagination${items}`
        ).style.background = `hsl(${props.color.h},${props.color.s}%, ${props.color.l}% )`;
        document.getElementById(`pagination${items}`).style.color =
          props.textColor;
      }
    }

    setLd(true);

    try {
      props.setIsfetch(true);
      setTotalresultTillNow(parseInt(totalresultTillNow) + parseInt(pageSize));
      let url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${props.category}&apiKey=${props.api_key}&page=${
        page + 1
      }&pageSize=${pageSize}`;
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
    } catch (err) {
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
        <div className="row">
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
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      document.getElementById("linkForQuery").click();
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
                />
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
              >
                <Link
                  id="linkForQuery"
                  onClick={() => {
                    props.setHeadingOfQuery(props.query);
                  }}
                  className="nav-link"
                  to="/query"
                >
                  <SearchIcon />
                </Link>
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
        <div className="d-flex flex-row align-items-center">
          {" "}
          <p
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
          Chhavi NEWS - Top Headlines of{" "}
          {props.category.slice(0, 1).toUpperCase() + props.category.slice(1)}
          <hr />
        </h2>
        {ld && (
          <div className="text-center">
            <img style={{ width: "460px" }} src={loading} alt="" />
            <p style={{ color: `${props.textColor}` }}>
              Please wait while fetching news...
            </p>
          </div>
        )}
        {props.isfetch === true && status !== "error" && (
          <div className="row">
            {article.map((ele) => {
              return (
                <div className="col-md-6 col-lg-4 my-2" key={ele.url}>
                  <NewsItem
                    title={ele.title}
                    description={
                      ele.description
                        ? ele.description.slice(0, 75) + "..."
                        : ""
                    }
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
          </div>
        )}
        {props.isfetch === false && <OnerrorWhileOffline />}
        {status === "error" && <StatusCodeError />}
        <div className="d-flex justify-content-center my-5">
          <nav>
            <ul className="pagination">
              <li className="page-item">
                {" "}
                <button
                  className="btn btn-custom mx-1"
                  style={{
                    background: `hsl(${props.color.h},${props.color.s}%, ${props.color.l}% )`,
                    color: props.textColor,
                    borderColor: props.textColor,
                  }}
                  onClick={previousPage}
                >
                  Previous
                </button>
                <Link id="selectCountryPage" to="/"></Link>
              </li>

              {pageArr.map((ele) => {
                return (
                  <li key={ele} className="page-item">
                    <button
                      id={`pagination${ele}`}
                      value={ele}
                      onClick={toThatPage}
                      className="btn btn-customPagination mx-1"
                      style={{
                        background: `hsl(${props.color.h},${props.color.s}%, ${props.color.l}% )`,

                        borderColor: props.textColor,
                        color: props.textColor,
                      }}
                    >
                      {ele}
                    </button>
                  </li>
                );
              })}

              <li className="page-item">
                {" "}
                <button
                  disabled={totalresultTillNow >= totalresult}
                  className="btn btn-custom mx-1"
                  onClick={nextsPage}
                  style={{
                    background: `hsl(${props.color.h},${props.color.s}%, ${props.color.l}% )`,

                    borderColor: props.textColor,
                    color: props.textColor,
                  }}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
