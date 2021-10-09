import "./button.css";
const Button = ({ text, onClick, classN = "btn", color, textColor }) => {
    return (
        <button
            onClick={onClick}
            className={classN}
            style={{ backgroundColor: color, color: textColor }}
        >
            {text}
        </button>
    );
};

export default Button;
