import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import MatchCard from './components/MatchCard/MatchCard';
import Navbar from './components/Navbar/Navbar';
import Teams from './components/Teams/Teams';
import { useEffect, useState } from 'react';
const App = () => {
  const [data,setData] = useState({})

//  const data = JSON.parse(localStorage.getItem('data2'))
//  console.log(data.data)
//  let img1;
//  let img2;
  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch('https://production-rest-microservice.thesportstak.com//api/v2/cricket/getScoreCard/56622')
    const ndata = await res.json()
     console.log(ndata)
    //  img1 = ndata.data.innings[0].team.logo_url
    //  img2 = ndata.data.innings[1].team.logo_url
      setData(ndata)
       
    }
    fetchData()
  },[])

 
  return (
    <div>
     {
        data.hasOwnProperty('data') && <>
        <MatchCard img={data.data.innings} />
        <Navbar />
        <Teams data={data.data}/></>
      }
    </div>
     
      
    
  );
}

export default App;
