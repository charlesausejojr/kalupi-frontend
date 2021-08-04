import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
          
        },
      },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },  
    paper: {
        paddingTop: theme.spacing(5),
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: theme.spacing(5),
        marginBottom: 400,
        width: '100%',
        textAlign: 'center',
    },
  }));

