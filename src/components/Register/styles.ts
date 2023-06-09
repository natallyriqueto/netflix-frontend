import styled from 'styled-components';

export const RegisterContainer = styled.div`
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;


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
    justify-content: center;
    
    margin: 0 auto;
    width: 100%;
    max-width: 36.625rem;
    flex-wrap: wrap;
`;

export const RegisterInput = styled.input`
    padding: 0.9rem 1.5rem;
    opacity: 0.6;
    line-height: 1.5rem;

    background: transparent;
    background-color: ${props => props.theme['gray-600']};

    border: none;
    border: 1px solid ${props => props.theme['gray-200']};

    flex: 1;

    &::placeholder {
        color: ${props => props.theme.white};
    }
`;

export const RegisterButton = styled.button`
    padding: 0.9rem 1.5rem;
    background-color: ${props => props.theme.red};
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
 `;


