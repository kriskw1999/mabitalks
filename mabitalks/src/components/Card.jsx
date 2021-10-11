import { useState } from 'react';
import '../styles/style.css';

// Card thatcontains fetched information
const Card = props => {

    const {imgSource, titleText, descriptionText, toDisplay, id} = props;
    const displayDontMiss = toDisplay ? 'inline' : 'none'; 
    const [isLiked, setIsLiked] = useState(localStorage.getItem('liked'+id));


    const handleLike = () => {
        if(isLiked){
            setIsLiked('');
            localStorage.setItem('liked'+id, '')
        }else{
            setIsLiked('liked');
            localStorage.setItem('liked'+id, 'liked')
        }
    }

    return(
        <div className="card-div">
            <p className="dont-miss" style={{display: displayDontMiss}}>DA NON PERDERE</p>
            <img src={imgSource} alt={descriptionText} className="card-img"/>
            <div className="description-div">
                <div className="text-div">
                    <p className="card-title">{titleText}</p>
                    <p className="description-text">{descriptionText}</p>
                </div>
                <i className={"far fa-heart " + isLiked} onClick={handleLike}/>
            </div>
        </div>
    );
}

export default Card;