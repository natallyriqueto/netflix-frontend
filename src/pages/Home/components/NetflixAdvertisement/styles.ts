import styled from 'styled-components';

export const AdvertisementContainer = styled.div`
    &>div:nth-child(even) {
        flex-direction: row-reverse;
    }
`;

export const AdvertisementContent = styled.div`
    padding: 8rem 2rem; 
    display: flex;
    justify-content: center;
    gap: 3rem;
    align-items: center;
    margin: 0 auto;
    border-bottom: 8px solid ${props => props.theme['gray-600']};
  
    div {
        flex-basis: 30%;

        p { 
            margin-top: 1.5rem;
            font-size: 1.5rem;
            font-weight: 400;
        }

        h2 {
            font-size: 3rem;
            font-weight: 900;
        }

       
    }
    
    @media (max-width: 1300px) {
        flex-wrap: wrap;

        div {
            flex-basis: 100%;
            text-align: center;
        }

    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;

    img {
        max-width: 100%;
        height: auto;
    }
`;