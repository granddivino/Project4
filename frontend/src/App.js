import React, { useState, useEffect} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
//Dispatch for use in redux to dispatch an action
import { useDispatch } from 'react-redux'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import { getPosts } from './actions/posts'
import useStyles from './styles'
import Flag from './images/Flag.jpg'


const App = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h1" align="center" class="heading">Asylum</Typography>
      <img className={classes.image} src={Flag} alt="icon" height="150"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}


export default App;
