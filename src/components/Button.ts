import styled from "styled-components";

export const Button = styled.button<ITheme>`
    padding: 0 20px;
    height: 32px;
    font-weight: 500;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;
    font-size: 14px;
    color: ${props => (props.color === "primary" ? props.theme.colors.primary.white : props.theme.colors.text.main)};
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.main};

    &:hover {
        background-color: rgba(0,0,0,0.05)
    }
`;

export default Button;
