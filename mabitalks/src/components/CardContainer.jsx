import { useEffect, useReducer } from 'react';
import '../styles/style.css';
import Card from './Card';
import axios from 'axios';

// Component responsable of fetching data andpassing them to the components
const CardContainer = props => {


    const {currentCategory} = props;

    const URL = "/react";
    const fetchInit = 'FETCH_INIT';
    const fetchSuccess = 'FETCH_SUCCESS';
    const fetchFailture = 'FETCH_FAILTURE';

    const cardsReducer = (state, action)=>{
        switch(action.type){
            case fetchInit:
                return {
                    ...state,
                    isLoading: true,
                    isError: false,
                };
            case fetchSuccess:
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    data: action.payload,
                };
            case fetchFailture:
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            default:{
                return null;
            }
        }
    }

    const[cards, dispatchCards] = useReducer(cardsReducer,{data:[], isLoading:false, isError:false});

    useEffect(()=>{
        dispatchCards({type: fetchInit});

        axios
            .get(URL)
            .then( data => {
                console.log(data);
                dispatchCards({
                    type: fetchSuccess,
                    payload: data.data,
                });
            })
            .catch(e => {
                console.log(e);
                dispatchCards({type: fetchFailture})
            });
    },[])

    const compareDate = date => {
        const currDate = new Date();
        const cmpDate = new Date(date);
        return cmpDate > currDate;
    }

    const displayContent = () => {
        if(cards.isLoading && !cards.isError){
            return <p>Loading data...</p>
        } else if(cards.isError){
            return <p>Loading failed</p>
        } else {
            return(
            <>    
                {cards.data.filter(
                    card => {return((card.tags.includes(currentCategory.toLowerCase()) || currentCategory==='all'))}
                    )
                    .map(card =>
                    <Card key={card.id} titleText={card.title} descriptionText={card.description} imgSource={card.image} toDisplay={compareDate(card.date)} id={card.id}/>
                )}
            </>    
            )
        }
    }

    return(
        <div className="cards-container">
            {displayContent()}
        </div>
    );
}

export default CardContainer;