import '../styles/style.css';

// A button containing text followed by an icon
const TextButton = props => {

    const {buttonText, buttonIcon} = props;

    return(
        <div className="text-button">
            <p>{buttonText}</p>
            <i className={buttonIcon}/>
        </div>
    );
}

export default TextButton;