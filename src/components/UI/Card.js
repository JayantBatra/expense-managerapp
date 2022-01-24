import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
    // The content between opening and the closing of the coustom component will be always available as children props. children is a reserved keyword for the props.

}

export default Card;