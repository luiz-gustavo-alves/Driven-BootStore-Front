import styled from "styled-components";

const Container = styled.div`

    margin: 100px 35px 60px 35px;
`;

const Footer = styled.footer`

    display: ${props => props.hidden ? "none" : "flex"};
    justify-content: center;
    align-items: center;
    margin-top: 35px;
`;

const ScrollButton = styled.button`

    color: #fff;
    border: 1px solid #217cff;
    background-color: #217cff;
    width: 300px;
`;

export {
    Container,
    Footer,
    ScrollButton
}