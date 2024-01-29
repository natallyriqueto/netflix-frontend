import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: transparent;
    height: 5.70rem;
    width: 100%;
    position: absolute;
    z-index: 999;
    top: 0;

    div {
        display: flex;
        align-items: center;
        gap: 1.75rem;
    }

    img {
        width: 12rem;
        height: 7rem;
    }

    @media (max-width: 1900px) {
        nav {
            max-width: calc(100% - 6rem);        
        }
    }


    @media (max-width: 768px) {
        nav {
            max-width: calc(100% - 2rem);        
        }

        div {
            gap: 1rem;
        }

        img {
            width: 6rem;
            height: 4rem;
        }
    }

`;

export const Nav = styled.nav`
    max-width: calc(66.66666666666666% - 6rem);   
    margin: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        max-width: calc(100% - 2rem);        
    
    }
`;

export const SignInButton = styled.button`
    background-color: ${props => props.theme.red};
    font-weight: 500;
    cursor: pointer;
    font-size: 0.9rem;

    :hover {
        background: rgb(193, 17, 25);
    }
`;

export const LanguageButton = styled.button`
    background-color: transparent;
    align-items: center;
    display: flex;
    gap: 0.5rem;
    border: 1px solid ${props => props.theme['gray-300']};
`;