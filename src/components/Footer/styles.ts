import styled from 'styled-components';

export const FooterContainer = styled.div`
    max-width: calc( 66.66666666666666%);
    margin: 0 auto;
    padding: 2rem 0;
    color: ${props => props.theme['gray-200']};
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 0.75rem; 
    
    padding: 2rem 0;

    list-style: none;

    a {
        color: ${props => props.theme['gray-200']}
    }
`;