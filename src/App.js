
import './App.css';
import Header from "./components/Header/Header";
 import Footer from "./components/Footer/Footer";
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Invest from "./pages/Invest/Invest";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


const  App =() =>{
    const {pathname} = useLocation ( ) ;
    console.log(pathname)
    const [show,setShow] = useState (true ) ;
    useEffect(() => {
     if(pathname === '/login') setShow(false);
     
    }, [pathname])
  return (
    <div className="App">
    {show &&  <Header /> }
       <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/invest" exact component={Invest} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </main> 
     { show && <Footer /> } 
    </div>
  );
}

export default App;
