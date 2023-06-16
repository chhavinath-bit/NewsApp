import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import './App.css';
import News from './component/News';
import Navigation from './component/Navigation';
import LoadingBar from 'react-top-loading-bar';

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
  const [progress,setProgress]=useState(0)
    return (
      <div>
         <Router>
        <Navigation />
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        onLoaderFinished={() =>setProgress(0)}
      />
     
             
        <Routes>
          <Route exact path="/"  element={<News  setProgress={setProgress} api_key={api_key} key={1} category="general" />}>
            
          </Route>
          <Route exact path="/Business" element={<News setProgress={setProgress} api_key={api_key} key={2} category="business"/>}>
            
          </Route>
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} api_key={api_key} key={3} category="entertainment" />}>
            
          </Route>
          <Route exact path="/Health" element={<News  setProgress={setProgress} api_key={api_key} key={4} category="health" /> }>
            
          </Route>
          <Route exact path="/Science" element={<News  setProgress={setProgress} api_key={api_key} key={5} category="science" />}>
            
          </Route>
          <Route exact path="/Sports" element={<News  setProgress={setProgress} api_key={api_key} key={6} category="sports" />}>
            
          </Route>
          <Route exact path="/Technology" element={<News setProgress={setProgress} api_key={api_key} key={7} category="technology"/>}>
            
          </Route>

         
        </Routes>
        
        </Router>
      </div>
    )
  
}
