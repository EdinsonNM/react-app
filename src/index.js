import React, {Component} from "react";
import ReactDOM from "react-dom";
import "index.scss";
import Cards from './Cards';
const images = [
  {
    name: 'Imagen 1',
    url: 'https://picsum.photos/300/200'
  },

]
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
        url: `https://picsum.photos/200/300?image=${images.length}`
      })
      this.setState({images})
    }
    render(){
      return (
        <div className="app">
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand" href="#">
          Navbar
          {(images.length === 0) ? "No hay fotos": `(${images.length})`}
          </a>
        </nav>
          <Cards images={images} />
          <button type="button" class="btn btn-primary bmd-btn-fab" onClick={this.handleAdd}>
            <i class="material-icons">add</i>
          </button>
        </div>
      )
    }
}
ReactDOM.render(
  <App/>,
  document.getElementById("root")
);