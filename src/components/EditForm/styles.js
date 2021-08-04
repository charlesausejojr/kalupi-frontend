
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    margin: theme.spacing(2,15),
    marginTop: 0,
    width: '100%',
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
    paddingBottom: theme.spacing(5),
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
  editor: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 60,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submit: {
    color: '#3B5249',
    background: 'linear-gradient(45deg, #93D9A3 30%, #CDF3A2 90%)',
    margin: theme.spacing(3, 5, 2),
    minWidth: 200,
    height: 50,
  },
  clear: {
    margin: theme.spacing(3, 0, 2),
    height: 50,
    minWidth: 100,
  },
  buttons: {
    display: 'inline',
    float: 'none',
    textAlign: 'center',
    justifyContent: 'center',
  }
}));
