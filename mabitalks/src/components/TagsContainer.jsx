import { useState } from 'react';
import '../styles/style.css';

// Container for all the tags
const TagsContainer = props => {

    const {onChangeCategory} = props;

    const labels = [
        {
            id:0,
            label: 'Design',
        }, {
            id:1,
            label: 'Development',
        }, {
            id:2,
            label: 'News',
        }, {
            id:3,
            label: 'R&D',
        }, {
            id:4,
            label: 'Presentation',
        },
    ];

    const [pressed, setPressed] = useState([false,false,false,false,false]);
    const onButtonClick = id => {
        let tmp = [false,false,false,false,false];
        tmp[id] = true;
        setPressed(tmp);
        onChangeCategory(labels[id].label);
    }

    return(
        <div className="tags-container">
            {labels.map(el => 
                <button key={el.label} className={"tag-button pressed-"+pressed[el.id]} onClick={()=>onButtonClick(el.id)}>{el.label}</button>
            )}
        </div>
    );
}

export default TagsContainer;