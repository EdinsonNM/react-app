import React, {Component} from "react";
import ReactDOM from "react-dom";
import "index.scss";
import Cards from './Cards';
import Header from './header';
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const images = [
  {
    name: 'Imagen 1',
    url: 'https://picsum.photos/300/200'
  },

]
const theme = createMuiTheme({
  palette: {
    primary: {
        light: '#757ce8',
        main: '#009530',
        dark: '#002884',
        contrastText: '#fff',
    },
    secondary: {
        light: '#ff7961',
        main: '#ffb400',
        dark: '#ba000d',
        contrastText: '#fff',
    },
  }
});

class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        images: images || []
      }
    }
    handleAdd = () => {
      //console.log("Agregar imagen...");
      const {images} = this.state;
      this.state.images.push({
        name: `imagen ${images.length}`,
        url: `https://picsum.photos/300/200?image=${images.length}`
      })
      this.setState({images})
    }
    render(){
      return (
        <MuiThemeProvider theme={theme}>
        <div className="app">
          <Header title={`Galeria (${images.length})`} />
          <Cards images={images} />
          <Button variant="fab" color="primary" aria-label="Add" className="bmd-btn-fab" onClick={this.handleAdd}>
            <AddIcon />
          </Button>
        </div>
        </MuiThemeProvider>
      )
    }
}
ReactDOM.render(
  <App/>,
  document.getElementById("root")
);