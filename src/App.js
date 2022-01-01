import React from "react"

export default function App(){
  return(
    <body className="body--container">
      <img className="image--container" src={require("C:/Users/nitis/my-app/src/Images/twitter.jpg")} alt="profile dp"/>
      <div className="para-container"></div>
      <h2 className="h2-title">Nitish Joshi</h2>
      <h3 className="h3-subtitle">Frontend Developer</h3>
      <h4 className="h4-country">India</h4>
      <button className="b1" ><img className="image-email-container" src={require("C:/Users/nitis/my-app/src/Images/Picture5.jpg")} alt="email"/>Email</button>
      <button className="b2"><img className="image-linkedin-container" src={require("C:/Users/nitis/my-app/src/Images/Picture7.jpg")} alt="profile dp"/>LinkedIn</button>
      <h2 className="h2-about">About</h2>
      <p className="Para-about">Learning React through Scrimba course. Want to become a fullstack developer. Will learn Next.js, Tailwind, Express and MongoDB. Looking for a job.</p>
      <h2 className="h2-interests">Interests</h2>
      <p className="Para-interests">Movies, Music and sometimes I mint NFT on Rarible.</p>
      
      <div className="footer-container"></div>
      <img className="b3" src={require("C:/Users/nitis/my-app/src/Images/twitter.png")} alt="twitter dp"/>
      <img className="b4" src={require("C:/Users/nitis/my-app/src/Images/facebook.png")} alt="twitter dp"/>
      <img className="b5" src={require("C:/Users/nitis/my-app/src/Images/insta.png")} alt="twitter dp"/>
      <img className="b6" src={require("C:/Users/nitis/my-app/src/Images/github.png")} alt="twitter dp"/>
      
    </body>
  )
}