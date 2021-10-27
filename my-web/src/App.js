// import logo from './logo.svg';
import logo2 from './images/logo2.png';
import './App.css';
import Login from './Login';
import Upload from './Upload';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">

        <>

          <header className='header'>
            <img src={logo2} alt="logo" />
            {/* <h2>האתר שלי</h2> */}
          </header>

          <div>
            <h3 dir='rtl' className='aboutHeader'>קצת עליי</h3>
            <p className="aboutContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam expedita facilis voluptatem animi perspiciatis consequatur doloribus vitae porro, cum repellat distinctio aut ut architecto nostrum veritatis aliquam atque quis alias.</p>
          </div>


          <h3 dir='rtl' className='aboutHeader' >הפרויקטים שלי</h3>
          <div className="conteiner">
            <div className="projuct">
              <img src="https://www.linkpicture.com/q/מודעה-חדוי.png" alt="project" srcset="" />
            </div>
            <div className="projuct"></div>
            <div className="projuct"></div>
            <div className="projuct"></div>
            <div className="projuct"></div>
            <div className="projuct"></div>
            <div className="projuct"></div>
            <div className="projuct"></div>
            <div className="projuct"></div>
            <div className="projuct"></div>
            <div className="projuct"></div>
            <div className="projuct"></div>
            <div className="projuct"></div>
            <div className="projuct"></div>
            <div className="projuct"></div>




          </div>
        </>
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/upload'>
        <Upload />
      </Route>
    </Router>
  )
}

export default App;
