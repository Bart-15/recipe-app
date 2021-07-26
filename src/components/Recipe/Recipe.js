import React, {useState, useCallback} from 'react'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import useStyles from './styles'
import Ingridients from './Ingridients'

const Recipie = ({recipe}) => {
    const [open, setOpen] = useState(false)
    const {label, image, url, ingredients} = recipe.recipe; 
    const classes = useStyles()

    
    const handleClick = (e) => {
        e.preventDefault()
        setOpen(!open);
    }
   console.log(recipe)

    return (
    <>
       <Card className={classes.root}>
           <CardActionArea>
               <CardMedia
               className={classes.media}
               image={image} />
           </CardActionArea>
           <CardContent>
               <Typography style={{color: '#3C1053FF',}} gutterBottom variant="h6">{label}</Typography>
           </CardContent>
           <CardActions>
            <Button className={classes.btn} variant="contained" style={{color:'#fff'}} href={url} target="_blank" rel="noopener noreferrer" >
                Learn More
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
