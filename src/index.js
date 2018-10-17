import React, {Component} from "react";
import ReactDOM from "react-dom";
import "index.scss";
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
          <div className="cards">
            {
              images.map(image =>(
                <div className="card">
                <img className="card-img-top" src={image.url} alt="Card image cap" height={300}/>
                <div className="card-body">
                  <h5 className="card-title">{image.name}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              ))
            }
            

          </div>

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