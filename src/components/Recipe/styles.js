import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
    root: {
        maxWidth: 450,
        backgroundColor:'#656565',
        margin:'2%',
        boxShadow:'-3px 5px 32px 0px rgba(0,0,0,50)'
      },
      "&:last-child": {
        paddingBottom: 0,
     },
      media: {
        height: 225,
      },

      btn :{
        backgroundColor:'#CE4A7EFF',
        color:'#1C1C1BFF!important',
        "&:hover" :{
          backgroundColor:'#1C1C1BFF',
          color:'#CE4A7EFF!important'
        } 
      }
      
}));


export default styles;