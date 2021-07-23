import React from 'react'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import useStyles from './styles'
import { v4 as uuidv4 } from "uuid";
const Recipie = ({recipe}) => {
    
    const {label, image, url, ingridients} = recipe.recipe; 
    const classes = useStyles()


    return (
        <>
       <Card className={classes.root}>
           <CardActionArea>
               <CardMedia
               className={classes.media}
               image={image} />
           </CardActionArea>
           <CardContent>
               <Typography gutterBottom variant="h6">{label}</Typography>
           </CardContent>
           <CardActions>
            <Button size="small" color="primary">
                <a style={{textDecoration:"none"}} href={url} target="_blank" rel="noopener noreferrer">
                    Learn More
                </a>
            </Button>
           </CardActions>
       </Card>
        </>
    )
}

export default Recipie
