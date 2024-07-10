import React, {useRef} from 'react';
import Cards from './Cards'


function Foreground() { 
    
    const ref= useRef(null)

    const data = [
        {desc: "this is data and informaton of the card entered by user." , filesize: ".9mb", close: false, tag: {isopen: true, tagtitle: "download now", tagcolor: "green"},},
    
    
        {desc: "this is data and informaton of the card entered by user." , filesize: ".9mb", close: false, tag: {isopen: true, tagtitle: "download now", tagcolor: "blue"},},
    
    
        {desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa!" , filesize: ".9mb", close: false, tag: {isopen: true, tagtitle: "upload", tagcolor: "green"},},
    ];

    
    

  return (
    <div ref={ref} className=' fixed top-0 left-0 w-full h-screen z-[3] flex flex-wrap p-5 gap-8'>
       {data.map((item, index)=>(
        <Cards data = {item} reference={ref}/>
       ))}
        
        
    </div>
  )
}

export default Foreground