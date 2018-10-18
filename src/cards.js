import React from 'react';
import Card from './Card';
class Cards extends React.Component{
    handleChangeScroll = () => {
        this.scrollElment.scrollIntoView({ behavior: "smooth"});
    }
    componentDidMount(){
        this.handleChangeScroll();
    }
    componentDidUpdate(){
        this.handleChangeScroll();
    }
    render(){
        const {images} = this.props;
        return(
            <div className="cards">
                {
                    images.map(image => <Card name={image.name} url={image.url} />)
                }
                <div ref={(ref) => this.scrollElment = ref} style={{ float:"left", clear: "both" }}></div>
            </div>
        )
    }
}

export default Cards;