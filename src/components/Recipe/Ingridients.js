import React from 'react'
import { Button, Typography, Dialog, ListItem, ListItemText, List, Divider, AppBar, Toolbar, Slide} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from "uuid";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
  });

  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
      backgroundColor:'#444444',
      letterSpacing:'3px',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 2,
    },
  }));
  const Ingridients = ({open, handleClick, ingredients}) => {
      const classes = useStyles();
    return <>
         <Dialog fullScreen open={open} onClose={handleClick}  TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Ingredients
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClick} >
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <List>
            {
                ingredients.map((ingredient) => {
                    const {text, weight} = ingredient;
                    return (
                        <>
                        <ListItem key={uuidv4()} button>
                        <ListItemText key={uuidv4()} primary={text} secondary={Math.trunc(weight)+'g'} />
                        </ListItem>
                        <Divider />
                        </>
                    )
                })
            }
        </List>
      </Dialog> 
    </>
}

export default Ingridients
