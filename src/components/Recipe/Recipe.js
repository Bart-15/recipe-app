import React, {useState, useEffect} from 'react'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import useStyles from './styles'
import Ingridients from './Ingridients'



const Recipie = ({recipe}) => {
    const [open, setOpen] = useState(false)
    const {label, image, url, ingredients} = recipe.recipe; 
    const classes = useStyles()

    


    //open and close modal dialog
    const handleClick = (e) => {
        e.preventDefault()
        setOpen(!open);
    }

    return (
    <>
       <Card className={classes.root} data-aos="fade-in">
           <CardActionArea>
               <CardMedia
               className={classes.media}
               image={image} />
           </CardActionArea>
           <CardContent>
               <Typography style={{color: '#fff',}} gutterBottom variant="h6">{label}</Typography>
           </CardContent>
           <CardActions>
            <Button className={classes.btn} variant="contained" style={{color:'#fff'}} href={url} target="_blank" rel="noopener noreferrer" >
                Source
            </Button>
            <Button className={classes.btn} variant="contained" style={{color:'#fff'}} onClick={handleClick} >
                Ingridients
            </Button>
           </CardActions>
             <Ingridients handleClick={handleClick}  open={open} ingredients={ingredients} />
       </Card>

    </>
    )
}

export default Recipie
