import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
export default function SearchBar(props) {
  return (
    <div className="d-flex align-items-center">
    <form>
      {" "}
      <input
        type="search"
        id="site-search"
        name="q"
        // onChange={props.Changetext}
        placeholder="Search Your News:"
        style={{
          borderTopLeftRadius: "30px",
          width: "100px",
          height: "35px",
          borderBottomLeftRadius: "30px",
          paddingLeft: "15px",
          border: `1px solid black`,
        //   borderColor: props.textColor,
        //   color: props.textColor,
          fontSize: "18px",
          transition: "width 1s",
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            // props.changeQuery();
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
        // background: `hsl(${props.color.h},${props.color.s}%, ${props.color.l}% )`,

        // borderColor: props.textColor,
        // color: props.textColor,
      }}
    //   onClick={props.changeQuery}
    >
      <SearchIcon />
    </button>
  </div>
  )
}
