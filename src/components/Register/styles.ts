import styled from 'styled-components';

export const RegisterContainer = styled.div`
    width: 100%;
    
    div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1rem;
    }

    h3 {
        text-align: center;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.875rem
    }

`;

export const Form = styled.form`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    
    margin: 0 auto;
    width: 100%;
    max-width: 36.625rem;
    height: 3rem;
`;

export const RegisterInput = styled.input`
    opacity: 0.6;
    background: transparent;
    background-color: ${props => props.theme['gray-600']};
    border: none;
    flex: 1;
    border: 1px solid ${props => props.theme['gray-200']};

    &::placeholder {
        color: ${props => props.theme.white};
        padding: 1.5rem 1rem 0.5rem;
    }
`;

export const RegisterButton = styled.button`
    background-color: ${props => props.theme.red};
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 0.9rem 1.5rem;
    font-size: 1.5rem;
`;


