import React, {useState} from 'react'
import axios from 'axios';
import Search from './components/Search/Search';

const App = () => {
    const APP_ID = "29159c55"
    const APP_KEY = "742211e69dcca50c95cd645828dcd7ab"

    const [query, setQuery] = useState("");
    const [recipies, setRecipies] = useState([]);

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async () => {
        const result = await axios.get(url);
        setRecipies(result.data.hits)
    }
    
    // const onSubmit = e => {
    //     e.preventDefault();
    //     getData();
    // }


    const onSubmit = e => {
        e.preventDefault();
        getData();
    }
    



    console.log(recipies)

        return (
            <div>
                
             <Search  query={query} setQuery={setQuery} onSubmit={onSubmit} />  
        </div>
    )
}

export default App