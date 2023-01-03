import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    height: 100px;
    background-color: ${props => props.theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
        font-size: 54px;
        color: white;
        margin-top: 40px;
    }

    p {
        margin-top: 24px;
        font-size: 24px;
    }
`
