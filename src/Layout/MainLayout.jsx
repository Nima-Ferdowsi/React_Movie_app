import  React,{ useState } from 'react';
import { withRouter } from 'react-router';
import {Switch,Route} from 'react-router-dom'
import Detailes from '../Components/Containers/Detailes';
import Context from '../context/Context';
import Home from './../Components/Containers/Home';
import Movie from './../Components/Containers/Movies';

const Layout = (props) => {

  const [getId,setId]=useState(JSON.parse(localStorage.getItem('detail')))
  const setMovie=(id,type)=>{
    setId({id,type})
    localStorage.setItem('detail',JSON.stringify({id,type}))
    props.history.push(`/Detaile/${type}/${id}`)
    }
    
  return (
    <Context.Provider value={{getId:getId ,setid:setId ,handleid:setMovie}}>
    <Switch>
     <Route path='/' exact render={()=>(<Home></Home>)}></Route>
      <Route path='/Movie-Tv' render={()=>(<Movie></Movie>)} ></Route>
      <Route path='/Detaile/:type/:id' render={()=>(<Detailes></Detailes>)} ></Route>
    </Switch>
    </Context.Provider>

  )
};

export default withRouter(Layout);
 