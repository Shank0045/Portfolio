import React, { createContext } from 'react'

export let Authcontext=createContext()

const AuthData = ({children}) => {

let data=[

  {
    "title": "Spotify",
    "skills": "HTML, CSS, JS, React, Tailwind CSS",
    "github": "https://github.com/Shank0045/spotifyyyy",
    "demo": "https://shank0045.github.io/spotifyyyy/",
    "image": "spot.png"
  },
  {
    "title": "UFC Store",
    "skills": "HTML, CSS, JS, React,GSAP",
    "github": "https://github.com/Shank0045/ufcstore",
    "demo": "https://shank0045.github.io/ufcstore/",
    "image": "ufc.png"
  },
  {
    "title": "EMS",
    "skills": "HTML, CSS, JS",
    "github": "https://github.com/Shank0045/EMS",
    "demo": "https://shank0045.github.io/EMS/",
    "image": "ems.png"
  },

  {
    "title": "Lazarev Agency",
    "skills": "HTML, CSS, JS, GSAP",
    "github": "https://github.com/Shank0045/lazarev",
    "demo": "https://shank0045.github.io/lazarev/",
    "image": "laz.png"
  },
  {
    "title": "To-Do List",
    "skills": "HTML, CSS, JS, React, Tailwind CSS",
    "github": "https://github.com/Shank0045/TO-DO-LIST",
    "demo": "https://shank0045.github.io/TO-DO-LIST/",
    "image": "todo.png"
  },
  {
    "title": "Weather App",
    "skills": "HTML, CSS, JS",
    "github": "https://github.com/Shank0045/Weather-App",
    "demo": "https://shank0045.github.io/Weather-App/",
    "image": "we.png"
  },
  {
    "title": "React Docs",
    "skills": " React,Frame Motion , Tailwind CSS",
    "github": "https://github.com/Shank0045/React-Docs",
    "demo": "https://shank0045.github.io/React-Docs/",
    "image": "doc.png"
  },
  {
    "title": "Twitter-X",
    "skills": "HTML, CSS, Tailwind CSS",
    "github": "https://github.com/Shank0045/Twitter-X",
    "demo": "https://shank0045.github.io/Twitter-X/",
    "image": "x.png"
  }
]





  return (
    <div>
      <Authcontext.Provider  value={data}>
      {children}
      </Authcontext.Provider>
    </div>
  )
}

export default AuthData