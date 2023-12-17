import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function App(){
//   return (
//     <div>
//       <h1>Hello World!</h1>
//     </div>
//     )
// }


// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: "Click me to visit google"
// }

// const anotherElement = (
//   <a href="https://google.com" target="_blank">Visit google page</a>
// )

const anotherusername = "Aasif khan";
const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'click me to visit google.com',
  anotherusername
)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  // anotherElement
  // <App/>
)
