import {makeStyles} from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },

    container: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center'
    },

    textField : {
      width:'30ch',
      padding:'5px',
      margin:'10px 0 10px 0',
      borderRadius:'0 10 0 10px',
      color:'#C5FAD5 !important',
    }
}))

export default style;