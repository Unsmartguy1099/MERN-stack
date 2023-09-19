import { useState,useEffect } from 'react';

import './App.css';
import Axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Page1 from './components/page1';//must use capital letters
import { BasicTable } from './components/sample_table';
import { FilteringTable } from './components/FilteringTable';


function App() {

  const [foodName,setFoodName]=useState("")
  const [days,setDays]=useState(0);
  const [foodList,setFoodList]=useState([])//empty array
  const [newFoodName,setNewFoodName]=useState("")
  const [testVal,setTestVal]=useState("");


  useEffect(()=>{
    Axios.get("http://localhost:4000/food/read").then((response)=>{
      setFoodList(response.data)
    });
    
  },[])

  const addToList =()=>{
    console.log(foodName+"  "+days)
    Axios.post("http://localhost:4000/food/insert",{
      foodName:foodName,
      days:days,
    })
  }

  const updateFood =(id)=>{
   
    Axios.put("http://localhost:4000/food/update",{
      id:id,
      newFoodName:newFoodName,
    })
  }

  const deleteFood =(id)=>{
   
    Axios.delete(`http://localhost:4000/food/delete/${id}`)
  };

  return (
    <div className="App">
  

   <BrowserRouter>
   hello world
   <Routes> 
       <Route exact path="/page1" element={<Page1/>} />
  </Routes>
   </BrowserRouter>

   {//<Page1/>
   }
    {}
   <br/>
   <br/>
       <label>FOOD NAME:</label>
   <br/>
       <input type="text" onChange={(event)=>{setFoodName(event.target.value)}}></input>
   <br/>
      <label>DAYS SINCE YOU ATE:</label>
   <br/>
      <input type="number" onChange={(event)=>{setDays(event.target.value)}}></input>
   <br/>
      <button onClick={addToList}>ADD TO LIST</button>
    
    <hr/>
    {foodList.map((val,key)=>{
      return(
        <div key={key}>
          <h5>FoodName: {val.foodName} </h5>
          <h5>Days since ate: {val.daysSinceIAte} </h5>
          <input type="text" placeHolder="New Food Name...." onChange={(event)=>{setNewFoodName(event.target.value)}}></input>
          <button onClick={()=>updateFood(val._id)}>Update</button>
          <br/>
          <button onClick={()=>deleteFood(val._id)}>Delete</button>
          <hr/>
          
        </div>);
      
    })}
    <p>end</p>
   {
      //<BasicTable/>
   }
    
    
   
    <FilteringTable/>
   
    </div>
  );
}

export default App;
