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
      padding: 40,
      marginBottom: 30,
    },
    button:{
      color: '#3B5249',
      marginLeft: 2,
      marginRight: -40,
      height: 50,
      background: 'linear-gradient(45deg, #CDF3A2 30%, #93D9A3  90%)',
    },
    right:{
     display: 'flex',
     alignItems: 'center',
     marginBottom: 10,
    },
    top: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: "space-between"
    },
    username: {
     marginLeft: 8,
    },
    creator: {
     marginLeft: 12,
     color: "grey",
    },
    description: {
        margin: 20,
        borderRadius: 20,
        padding: 30,
        backgroundColor: '#EDEDED',
    },
    answer: {
      margin: 20,
      borderRadius: 20,
      padding: 30,
      backgroundColor: '#EDEDED',
    },
    more: {
      justifyContent: "space-between",

    },
    editor: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      paddingLeft: 0,
      paddingRight: 0,
      marginBottom: 60,
    },
    submit: {
      margin: theme.spacing(3,40,0),
      padding: 20,
      background: 'linear-gradient(45deg, #CDF3A2 30%, #93D9A3  90%)',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    container: {
      display: 'flex',
      padding: 20,
    },
    info: {
      marginLeft: 30,
    },
    bottomPaper: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      marginLeft: 150,
      marginRight: 150,
      padding: 30,
      marginBottom: 30,
    },
  }));