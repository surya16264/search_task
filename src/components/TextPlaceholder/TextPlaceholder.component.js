import './TextPlaceholder.style.scss';

export const TextPlaceholder = (props) => {
    const { length } = props;
    return <span className={ `TextPlaceholder ${length}` } />;
}

export default TextPlaceholder;
