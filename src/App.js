import React, {useState} from 'react'
import axios from 'axios';
import Search from './components/Search/Search';

const App = () => {
    const APP_ID = "29159c55"
    const APP_KEY = "742211e69dcca50c95cd645828dcd7ab"

    const [query, setQuery] = useState("s");


    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async () => {
        const result = await axios.get(url);
        console.log(result.data.hits);
    }
    

        return (
            <div>
             <Search getData={getData} query={query} setQuery={setQuery} />  
        </div>
    )
}

export default App