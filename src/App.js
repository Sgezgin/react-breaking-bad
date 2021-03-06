
import { useState, useEffect } from "react";
import Header from "./components/Header";
import axios from 'axios'
import CharacterList from "./components/CharacterList";

function App() {

  let baseApiUrl = "https://www.breakingbadapi.com/api/";
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState("")

  const changeSearch =(text)=>{
    setSearch(text);
 
  }

  const fetchItems = async () => {
    setIsLoading(true)
    const result = await axios(baseApiUrl + `characters?name=${search}`);
    setItems(result.data)
    setIsLoading(false)
    console.log(isLoading)
  }
  useEffect(() => {
    fetchItems()

  }, [search])

  return (

    <div className="bg-gradient-to-r from-green-400 via-black-500 to-green-900 w-screen h-screen">    
      <Header changeSearch={changeSearch}/>
      <br/>
      <CharacterList isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
