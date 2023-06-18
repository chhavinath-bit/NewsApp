import React from 'react'
import Wheel from '@uiw/react-color-wheel';


export default function ColorPicker(props) {
  
  


return (
 <div className='color-picker d-flex flex-column' > 

  <Wheel
    color={props.hsva}
    
    onChange={(color) => {
      props.setSlider(document.getElementById("myRange").value)
      props.setColor({h:color.hsl.h,s:color.hsl.s,l:color.hsl.l})
      props.setHsva({ ...props.hsva, ...color.hsva });
      document.body.style.background=`hsl(${color.hsl.h},${color.hsl.s}%,${color.hsl.l}%)`;
      
    }}
    
  /> 
  <input style={{marginTop:"8px"}} type="range" min="1" max="100" onChange={(event)=> {props.setHsva({ h:0,s:0,v:event.target.value,a:1})}} defaultValue={props.slider} className="slider" id="myRange" />
  
  </div>
);
}
