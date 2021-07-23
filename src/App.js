import React, {useState} from 'react'
import axios from 'axios';
import Search from './components/Search/Search';
import Recipe from './components/Recipe/Recipe'
import { v4 as uuidv4 } from "uuid";
import {Container, Grid, Typography} from '@material-ui/core'
import Swal from 'sweetalert2'
const App = () => {
    const APP_ID = "29159c55"
    const APP_KEY = "742211e69dcca50c95cd645828dcd7ab"

    const [query, setQuery] = useState("");
    const [recipes, setRecipies] = useState([]);

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async () => {

        if(query !== "") {
            const result = await axios.get(url);
            if(!result.data.more) {
               return Swal.fire({
                icon: 'error',  
                title: 'Oops...',  
                text: 'No food found',
               })
            }
            console.log(result)
            setRecipies(result.data.hits)
            setQuery("")
        } else {
            alert('fill up the form')
        }
    }
    
    // const onSubmit = e => {
    //     e.preventDefault();
    //     getData();
    // }


    const onSubmit = e => {
        e.preventDefault();
        getData();
    }

        return (
            <>
            <Container>
             <Search  query={query} setQuery={setQuery} onSubmit={onSubmit} />  
                 {recipes.length ? <Typography variant="h4">Result...</Typography> : <Typography variant="h4">Try search something</Typography>}
            </Container>
             <Container style={{display: 'flex', margin:'0, auto'}}>
                <Grid container spacing={4}>
                        {
                            recipes !== [] && recipes.map((recipe) => {
                                return (
                                    <Grid item xs={12} sm={6} lg={3}>
                                        
                                        <Recipe recipe={recipe} key={uuidv4()} />
                                    </Grid>
                                )
                            }) 
                        }
                </Grid>
             </Container>
        </>
    )
}

export default App