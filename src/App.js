import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import './App.css';
import News from './component/News';
import Navigation from './component/Navigation';
import LoadingBar from 'react-top-loading-bar';
import Query from "./component/querypage";
import ColorPicker from "./component/ColorPicker";

// function App() {
//   return (
//     <div className="App">
  
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react'

export default function App(){
 
  let api_key=process.env.REACT_APP_OUR_SECRET_API
  let [showWheel,setShowWheel]=useState(localStorage.getItem("chooseVibe")?!(localStorage.getItem("chooseVibe")==="Choose Your Vibe:"):false);
  
  const [inputValue, setInputValue]=useState(localStorage.getItem("query")?localStorage.getItem("query"):"");
  const [progress,setProgress]=useState(0)
  const[headingOfQuery, setHeadingOfQuery]= useState(inputValue)
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 50, a: 1 });
  const [slider,setSlider]= useState(50);
  let textColor= slider>=50?"black":"white"
  let [color,setColor]= useState({h:hsva.h, s:hsva.s, l:hsva.v});
  const Changetext= async (event)=>{
    await setInputValue(
    event.target.value
    
   )


  }
  
    return (
      <div >
         <Router>
        <Navigation />
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        onLoaderFinished={() =>setProgress(0)}
      />
     
             
        <Routes>
          <Route exact path="/"  element={<News setShowWheel={setShowWheel} color={color} textColor={textColor}  Changetext={Changetext} setHeadingOfQuery={setHeadingOfQuery} query={inputValue}  setProgress={setProgress} api_key={api_key} key={1} category="general" />}>
            
          </Route>
          <Route exact path="/query"  element={<Query setShowWheel={setShowWheel} color={color} textColor={textColor} headingOfQuery={headingOfQuery} setHeadingOfQuery={setHeadingOfQuery} Changetext={Changetext}  setProgress={setProgress} api_key={api_key} key={1} query={inputValue} />}>
            
          </Route>
          <Route exact path="/Business" element={<News setShowWheel={setShowWheel} color={color} textColor={textColor} Changetext={Changetext} setHeadingOfQuery={setHeadingOfQuery } query={inputValue} setProgress={setProgress} api_key={api_key} key={2} category="business"/>}>
            
          </Route>
          <Route exact path="/Entertainment" element={<News setShowWheel={setShowWheel} color={color} textColor={textColor} Changetext={Changetext} setHeadingOfQuery={setHeadingOfQuery} query={inputValue} setProgress={setProgress} api_key={api_key} key={3} category="entertainment" />}>
            
          </Route>
          <Route exact path="/Health" element={<News setShowWheel={setShowWheel} color={color} textColor={textColor} Changetext={Changetext} setHeadingOfQuery={setHeadingOfQuery} query={inputValue}  setProgress={setProgress} api_key={api_key} key={4} category="health" /> }>
            
          </Route>
          <Route exact path="/Science" element={<News setShowWheel={setShowWheel} color={color} textColor={textColor} Changetext={Changetext} setHeadingOfQuery={setHeadingOfQuery} query={inputValue}  setProgress={setProgress} api_key={api_key} key={5} category="science" />}>
            
          </Route>
          <Route exact path="/Sports" element={<News setShowWheel={setShowWheel} color={color} textColor={textColor} Changetext={Changetext} setHeadingOfQuery={setHeadingOfQuery} query={inputValue} setProgress={setProgress} api_key={api_key} key={6} category="sports" />}>
            
          </Route>
          <Route exact path="/Technology" element={<News setShowWheel={setShowWheel} color={color} textColor={textColor} Changetext={Changetext} setHeadingOfQuery={setHeadingOfQuery} query={inputValue} setProgress={setProgress} api_key={api_key} key={7} category="technology"/>}>
            
          </Route>

         
        </Routes>
        
        </Router>
       {showWheel &&<ColorPicker setColor={setColor} slider={slider} setSlider={setSlider} hsva={hsva} setHsva={setHsva} />  }
      </div>
    )
  
}
