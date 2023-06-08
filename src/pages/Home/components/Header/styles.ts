import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: black;
    height: 5.70rem;

    nav {
        max-width: 100rem;
        margin: auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    img {
        width: 10rem;
        height: 6rem;
    }

    @media (max-width: 1915px) {
        nav {
            max-width: calc(100% - 4rem);        
        }
    }

    @media (max-width: 768px) {
        img {
            width: 6rem;
            height: 4rem;
        }
    }

`;

export const BaseButton = styled.button`
    padding: 0.4rem 1rem;
    border-radius: 4px;
    border: none;
    font-weight: bold;
    font-size: 0.9rem;
    color: ${props => props.theme.white};
`;

export const SignInButton = styled(BaseButton)`
    background-color: ${props => props.theme.red};
`;

export const LanguageButton = styled(BaseButton)`
    background-color: transparent;
    align-items: center;
    display: flex;
    gap: 0.5rem;
    border: 1px solid ${props => props.theme['gray-300']};
`;