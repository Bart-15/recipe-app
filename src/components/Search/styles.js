import {makeStyles} from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
}))

export default style;