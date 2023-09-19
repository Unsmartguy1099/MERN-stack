import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [description, setDescription] = useState("");
  const [recipeList, setRecipeList] = useState([]);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
};

  const searchByDescription = () => {
    console.log(description);

    axios.get("http://localhost:4000/recipe",{
      description:description,
    })
    .then((response) => {
      console.log(response.data);
      setRecipeList(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
   
   console.log("test")
};


  return (
    <div className="App">
        <textarea id="txtid" className="form-control" name="txtname" rows="4" cols="50" maxlength="200" placeholder="Give The Recipe Description"
                            value={description} // Bind the value to the state
                            onChange={handleDescriptionChange} // Handle textarea changes 
                            ></textarea>
        <button onClick={searchByDescription}>Button</button>
      
    </div>
  );
}

export default App;
