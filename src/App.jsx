import React from "react";
import Header from "./components/Header";

import "./styles/App.css";
import "./styles/Header.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
};

export default App;

// // import MyHeading from "./components/MyHeading";
// // import { MyLittle } from "./components/MyHeading";

// // const a = 200;

// // const MyHeading = () => {
// //   return <h1>MyHeading</h1>;
// // };

// function App() {
//   return (
//     <>
//       {/* <div>
//         <MyLittle />
//         <MyHeading name="DONT" price={100} />
//         <h1>Welcome Page 1 {a}</h1>
//         <p>Hey there</p>
//       </div>
//       <div>
//         <MyHeading />
//       </div> */}

//     </>
//   );
// }

// export default App;
