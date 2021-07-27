import React, {useState} from 'react'
import axios from 'axios';
import Search from './components/Search/Search';
import Recipe from './components/Recipe/Recipe'
import { v4 as uuidv4 } from "uuid";
import {Container, Grid, Typography, CssBaseline} from '@material-ui/core'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import {BiFoodMenu} from 'react-icons/bi'

import Swal from 'sweetalert2'

const themeDark = createTheme({
    palette: {
      background: {
        default: "#333333"
      },
      
      text: {
        primary: "#C7D3D4FF",
        letterSpacing: '2px',
      },
    }
  });
const App = () => {
    const APP_ID = "29159c55"
    const APP_KEY = "742211e69dcca50c95cd645828dcd7ab"

    const [query, setQuery] = useState("");
    const [recipes, setRecipies] = useState([]);

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;




    //api request 
    const getData = async () => {

        if(query) {
            const response = await axios.get(url);
            if(!response.data.more) {
               return Swal.fire({
                icon: 'error',  
                title: 'Oops...',  
                text: 'Food not found!',
               })
            }
            // console.log(response)
            setRecipies(response.data.hits)
            setQuery("")
        } else {
            Swal.fire({
                text:'Please fill up the form'
            })
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
            <MuiThemeProvider theme={themeDark}>
            <CssBaseline />
            <Container>
             <Search style={{color:'#fff'}} query={query} setQuery={setQuery} onSubmit={onSubmit} />  
                 {
                 recipes.length ?
                  <Typography style={{color:'#fff'}} variant="h4">Result...</Typography> 
                  : 
                  <Typography
                   style={{color:'#fff', textAlign:'center', textTransform:'uppercase', letterSpacing:'2px'
                   }} 
                   variant="h5"
                   >Explore the foodie in you <BiFoodMenu size={18} />
            </Typography>
            }
            </Container>
             <Container style={{display: 'flex', margin:'0, auto', paddingBottom: 0,}}>
                <Grid container spacing={4}>
                        {
                            recipes && recipes.map((recipe) => {
                                return (
                                    <Grid item xs={12} sm={6} lg={4}>
                                        
                                        <Recipe recipe={recipe} key={uuidv4()} />
                                    </Grid>
                                )
                            }) 
                        }
                </Grid>
             </Container>
            </MuiThemeProvider>
        </>
    )
}

export default App