import "./button.css";
import { Label, Icon } from "semantic-ui-react";

const Button = ({ text, onClick, classN = "btn", color, textColor, icon }) => {
    return (
        <button
            onClick={onClick}
            className={classN}
            style={{ backgroundColor: color, color: textColor }}
        >
            {icon && <Icon name={icon} />}
            {text}
        </button>
    );
};

export default Button;
