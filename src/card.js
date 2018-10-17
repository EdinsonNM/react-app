import React from 'react';
const Card = ({name, url}) => {
    return (
        <div className="card">
            <img className="card-img-top" src={url} alt="Card image cap" height={300}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
export default Card;