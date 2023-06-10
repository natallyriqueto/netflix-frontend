import styled from 'styled-components';

export const FooterContainer = styled.div`
    max-width: calc( 66.66666666666666%);
    margin: 0 auto;
    padding: 2rem 0;
    color: ${props => props.theme['gray-200']};
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.75rem; 

    padding: 2rem 0;
    list-style: none;

    a {
        color: ${props => props.theme['gray-200']}
    }

    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 972px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr; 
    }
`;