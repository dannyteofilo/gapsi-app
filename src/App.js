import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import './App.css';
import { Provider } from "react-redux";
import { getStore } from "./shared/redux/store";


const theme = createMuiTheme({
    palette:{
      primary :  {main: '#ff5722'},
      secondary : {main: '#00b0ff'}      
    }
});

class  App extends Component{
  render(){
    return(
      <Provider store={getStore()}>
        <MuiThemeProvider theme={theme}>
          <div>
            Gapsi
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
