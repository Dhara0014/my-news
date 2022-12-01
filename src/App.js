import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { useState } from "react";
import LoadingBar from 'react-top-loading-bar';

import MyNav from "./components/MyNav";
import MyNews from "./components/MyNews";

function App() {
  const pageSize = 100;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState('dark'); 
  
  const toggleHandler = () => {
    if(mode === 'dark'){
      setMode('light');
    }else{
      setMode('dark');
    }
  }
  

  return(
    <div className={`bg-${mode === 'dark'?'black':'light'}`}>
    <Router>
    <MyNav mode={mode} toggle={toggleHandler}/>

    <div className="d-flex justify-content-around">
    <LoadingBar height={3} color='red' progress={progress}/>
  <Switch>
  <Route path='/' exact><MyNews mode={mode} setProgress={setProgress} apiKey={apiKey}  key='general' pageSize={pageSize} country='in' category='general'/></Route>
  <Route path='/business' exact><MyNews mode={mode} setProgress={setProgress} apiKey={apiKey}  key='business' pageSize={pageSize} country='in' category='business'/></Route>
  <Route path='/entertainment' exact><MyNews mode={mode} setProgress={setProgress}  apiKey={apiKey} key='entertainment'        pageSize={pageSize} country='in' category='entertainment'/></Route>
  <Route path='/health' exact><MyNews mode={mode} setProgress={setProgress} apiKey={apiKey}  key='health' pageSize={pageSize} country='in' category='health'/></Route>
  <Route path='/science' exact><MyNews mode={mode} setProgress={setProgress}  apiKey={apiKey}  key='science' pageSize={pageSize} country='in' category='science'/></Route>
  <Route path='/sports' exact><MyNews mode={mode} setProgress={setProgress} apiKey={apiKey}  key='sports' pageSize={pageSize} country='in' category='sports'/></Route>
  <Route path='/technology' exact><MyNews mode={mode} setProgress={setProgress} apiKey={apiKey}  key='technology' pageSize={pageSize} country='in' category='technology'/></Route>
  </Switch>
    </div>

   
    </Router>
    </div>
    );
}

export default App;
