import React from 'react';
import "./ImageContainer.css"

const ImageContainer = (props) =>{
    return(<div>
        <section>
            <h1 className="img-text">{props.page}</h1>
            <img className="img-c" src = "/Resource/image-3.jpg" alt="Image not available"></img>
        </section>
    </div>)
}

export default ImageContainer;