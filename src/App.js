import React from "react";
import './App.css';
import { Helmet } from 'react-helmet';
import logoico from './assets/favicon.ico';


import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Technology from "./components/technology/technology";
import Contact from "./components/contact/contact";
import Message from "./components/message/message";
import Project from "./components/project/project";


function App(){
  const apiLink = process.env.REACT_APP_BACKEND_API;
  return (<>

<Helmet>
  <title>Shivam-Ai</title>
  <link rel="icon" type="image/png" href={logoico} />
</Helmet>
<Header apiLink={apiLink}/>
<main>
  <Banner/>
  <Project apiLink={apiLink}/>
  <Technology/>
  <Contact/>  
  <Message apiLink={apiLink}/>
</main>
</>)
}

export default App