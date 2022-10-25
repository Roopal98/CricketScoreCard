import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import MatchCard from './components/MatchCard/MatchCard';
import Navbar from './components/Navbar/Navbar';
import Teams from './components/Teams/Teams';
import { useEffect, useState } from 'react';
const App = () => {
  // const [data,setData] = useState([])

 const data = JSON.parse(localStorage.getItem('data2'))
//  console.log(data.data)
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const res = await fetch('https://production-rest-microservice.thesportstak.com//api/v2/cricket/getScoreCard/56622')
  //   const data = await res.json()
  //    console.log('data')
  //     setData(data)

  //   }
  //   fetchData()
  // },[])
  return (
    <div>
      <MatchCard />
      <Navbar />
      <Teams data={data.data}/>
    </div>
  );
}

export default App;
