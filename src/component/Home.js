import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Home(props) {
  let posi=0;
   function selectCountry(event){
       
        props.setCountry(event.target.value);
        console.log(event.target.value);
        localStorage.setItem("country", event.target.value);
    }
   
    function ShowNews(){
        console.log(document.getElementById("selectCountry").value);
        if(document.getElementById("selectCountry").value==="-"){
            alert("please select a country")
        }
        else{
            document.getElementById("linkForshow").click();
        }
        
    }
    // setInterval(()=>{
    //   document.getElementById("heading").style.left=posi+1 +"vw";
    //   posi=(posi+1)%74;
    // }, 80)
    useEffect(()=>{
         
        props.setCountry("-");
         localStorage.setItem("country", "-");

},[])
  return (
    <div className='App' style={{height:"88vh"}}>
     <p style={{ color: "white", height:"50px", fontWeight:"bold", fontSize:"30px" ,backgroundColor:"black",textAlign:"center"}}>
             <span id='heading' style={{position:"relative", left:"0vw"}}> Welcome to Chhavi News</span>
            </p>
              
            
    <div className='d-flex  flex-row justify-content-center' style={{height:"72vh"}}>
    <div className='d-flex flex-column justify-content-center text-center'>
          
      <select style={{ borderTopLeftRadius: "10px" , borderTopRightRadius: "10px"}} className='text-center' id="selectCountry" onChange={selectCountry}>
          <option value="-">Select Country</option>
          <option value="ae">United Arab Emirates</option>
          <option value="ar">Argentina</option>
          <option value="at">Austria</option>
          <option value="au">Australia</option>
          <option value="be">Belgium</option>
          <option value="bg">Bulgaria</option>
          <option value="br">Brazil</option>
          <option value="ca">Canada</option>
          <option value="ch">Switzerland</option>
          <option value="cn">China</option>
          <option value="co">Colombia</option>
          <option value="cu">Cuba</option>
          <option value="cz">Czechia</option>
          <option value="de">Germany</option>
          <option value="eg">Egypt</option>
          <option value="fr">France</option>
          <option value="gb">United Kingdom</option>
          <option value="gr">Greece</option>
          <option value="hk">Hong Kong</option>
          <option value="hu">Hungary</option>
          <option value="id">Indonesia</option>
          <option value="ie">Ireland</option>
          <option value="il">Israel</option>
          <option value="in">India</option>
          <option value="it">Italy</option>
          <option value="jp">Japan</option>
          <option value="kr">the Republic of Korea</option>
          <option value="lt">Lithuania</option>
          <option value="lv">Latvia</option>
          <option value="ma">Morocco</option>
          <option value="mx">Mexico</option>
          <option value="my">Malaysia</option>
          <option value="ng">Nigeria</option>
          <option value="nl">Netherlands</option>
          <option value="no">Norway</option>
          <option value="nz">New Zealand</option>
          <option value="ph">Philippines</option>
          <option value="pl">Poland</option>
          <option value="pt">Portugal</option>
          <option value="ro">Romania</option>
          <option value="rs">Serbia</option>
          <option value="ru">Russian Federation</option>
          <option value="sa">Saudi Arabia</option>
          <option value="se">Sweden</option>
          <option value="sg">Singapore</option>
          <option value="si">Slovenia</option>
          <option value="sk">Slovakia</option>
          <option value="th">Thailand</option>
          <option value="tr">Türkiye</option>
          <option value="tw">Taiwan</option>
          <option value="ua">Ukraine</option>
          <option value="us">United States of America</option>
          <option value="ve">Venezuela</option>
          <option value="za">South Africa</option>
      </select>
      <button onClick={ShowNews}className='btn-custom-home'>
    
                 Select
                
      </button>
      <Link
             
             id="linkForshow"
               className="nav-link"
               to="/Home"
             >
             </Link>
             </div>      
    </div>
    </div>
  )
}
