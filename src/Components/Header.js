import { AppBar , Container, createTheme, makeStyles, MenuItem, Select, Toolbar, Typography, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import logo from './cOre share.svg'

const useStyles = makeStyles ((theme) => ({
    title: {
      flex: 1,
    
      cursor: "pointer",
    },
  }));

const Header = () => {
    

    const classes = useStyles()

    const history = useHistory()

    const darkTheme = createTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark",
        },
      });
    
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>

                    <Toolbar>
                        <Typography onClick={() => history.push("/")} className={classes.title} >
                            <img src={logo} className="App-logo" alt="logo" style = {{   left: 0 }} />
                        </Typography>
                        <Select variant="outlined" style={{
                            width:100,
                            height: 40,
                            marginRight:15,
                        }}>
                            <MenuItem value={'USD'}>USD</MenuItem>
                            <MenuItem value={'BRL'}>BRL</MenuItem>
                            <MenuItem value={'EUR'}>EUR</MenuItem>
                            <MenuItem value={'CAD'}>CAD</MenuItem>
                            <MenuItem value={'GBP'}>GBP</MenuItem>

                        </Select>
                        

                    </Toolbar>

                </Container>

            </AppBar>
        </ThemeProvider>
    )
}

export default Header
