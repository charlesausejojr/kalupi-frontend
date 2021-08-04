import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 150,
      marginRight: 150,
      padding: 30,
      marginBottom: 30,
    },
    button:{
      color: '#3B5249',
      marginLeft: 2,
      marginRight: -40,
      height: 50,
      background: 'linear-gradient(45deg, #CDF3A2 30%, #93D9A3  90%)',
    },
    link: {
      textDecoration: 'none',
    }
  }));