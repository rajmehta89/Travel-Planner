import React , {useState} from 'react'
import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/password.png'
import passward_icon from '../Assets/email.png'


export default function Login() {

  const [action,setAction]=useState("sign Up");
  
//   const left_side=( <div className="side">
//   </div>);

// const right_side=( <div className="container">
// <img src="" alt="" />
//   <div className="header">
//     <div className="text">{action}{}</div>
//     <div className="underline"></div>
//   </div>

//  <div className="inputs">
//   {action==="Login"? <div></div> :  <div className="input">
//         <img src={user_icon} alt="" />
//         <input type="text" placeholder="Name" />
//     </div>}
//     <div className="input">
//         <img src={email_icon} alt="" />
//         <input type="email" placeholder="Email Id" />
//     </div>
//     <div className="input">
//         <img src={passward_icon} alt="" />
//         <input type="password" placeholder="Password" />
//     </div>
    
//     {action==="sign Up" ? <div></div> : <div className="forgot-passward">Lost Password? <span>Click Here!</span></div>
//      }

   
//      <div className="submit-container">
//         <div className={action==="Login" ? "submit gray" : "submit" } onClick={()=>{setAction("sign Up");
//     //  setShowAlternateContent_l(left_side);
//     //  setShowAlternateContent_r(right_side);
//   }}>Sign Up</div>
//         <div className={action==="sign Up"? "submit gray" : "submit"} onClick={()=>{setAction("Login");
//       // setShowAlternateContent_l(right_side);
//       // setShowAlternateContent_r(left_side);
//       }}></div>
//      </div>
//  </div>
// </div>
// );
  
// const [showAlternateContent_l,setShowAlternateContent_l]=useState(left_side);
// const [showAlternateContent_r,setShowAlternateContent_r]=useState(right_side);

  return (
    <>
    
    <div className="main_back">
    <div className="main" > 
      {/* {showAlternateContent_l}
      {showAlternateContent_r} */}

<div className="side">
  </div>




<div className="container">
<img src="" alt="" />
  <div className="header">
    <div className="text">{action}{}</div>
    <div className="underline"></div>
  </div>

 <div className="inputs">
  {action==="Login"? <div></div> :  <div className="input">
        <img src={user_icon} alt="" />
        <input type="text" placeholder="Name" />
    </div>}
    <div className="input">
        <img src={email_icon} alt="" />
        <input type="email" placeholder="Email Id" />
    </div>
    <div className="input">
        <img src={passward_icon} alt="" />
        <input type="password" placeholder="Password" />
    </div>
    
    {action==="sign Up" ? <div></div> : <div className="forgot-passward">Lost Password? <span>Click Here!</span></div>
     }

   
     <div className="submit-container">
        <div className={action==="Login" ? "submit gray" : "submit" } onClick={()=>{setAction("sign Up");
    //  setShowAlternateContent_l(left_side);
    //  setShowAlternateContent_r(right_side);
  }}>Sign Up</div>
        <div className={action==="sign Up"? "submit gray" : "submit"} onClick={()=>{setAction("Login");
      // setShowAlternateContent_l(right_side);
      // setShowAlternateContent_r(left_side);
      }}>Login</div>
     </div>
 </div>
</div>



    </div>
    </div>  
</>
  
  )
}
