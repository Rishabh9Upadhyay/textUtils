// import React, {useState} from 'react'
import React from 'react'



// <div className="container my-3">
//         <button onClick={toggleStyle} className='btn btn-primary my-3'>{btntext}</button>
//      </div>

// const [btntext, setBtntext] = useState("Enable dark mode");
//   const toggleStyle = ()=>{
//     if(myStyle.color === "black"){
//         setmyStyle({
//             color: 'white',
//             backgroundColor: 'black'
//         })
//         setBtntext("Enable light mode");
//     }
//     else{
//         setmyStyle({
//             color: 'black',
//             backgroundColor: 'white'
//         })
//         setBtntext("Enable dark mode")
//     }
//   }

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })
  let myStyle = {
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#213c4b':'white'
  }

  return (
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
       <h1 className='my-2'>About Us</h1>
       <div className="accordion" id="accordionExample">
       <div className="accordion-item">
         <h2 className="accordion-header" id="headingOne">
           <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <b>Analyze your text</b>
           </button>
         </h2>
         <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
           <div className="accordion-body">
             TextUtils gives you A way to analyze your text quickly and efficiently. Be it word count character count.
           </div>
         </div>
       </div>
       <div className="accordion-item">
         <h2 className="accordion-header" id="headingTwo">
           <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             <b>Free to use</b>
           </button>
         </h2>
         <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
           <div className="accordion-body" style={myStyle}>
             TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports that number of words and characters fully stop thus it is suitable for writing text with word counters limit
           </div>
         </div>
       </div>
       <div className="accordion-item">
         <h2 className="accordion-header" id="headingThree">
           <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             <b>Browser Compatible</b>
           </button>
         </h2>
         <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
           <div className="accordion-body" style={myStyle}>
             This word counter software works in any web browser such as chrome firefox Internet Explorer Safari Opera. it suits to count character in Facebook, blog, books, Excel documents, pdf documents essay Etc.
           </div>
         </div>
       </div>
     </div>
     
    </div>
  )
}

