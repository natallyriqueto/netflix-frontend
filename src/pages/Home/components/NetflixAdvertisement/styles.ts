import styled from 'styled-components';



export const AdvertisementContainer = styled.div`
    &>div:nth-child(even) {
        flex-direction: row-reverse;
    }
`;

export const AdvertisementContent = styled.div`
    padding: 7rem 30rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    align-items: center;
    margin: 0 auto;
    border-bottom: 8px solid ${props => props.theme['gray-600']};
  
    div {
        flex-basis: 50%;

        p { 
            margin-top: 1.5rem;
            font-size: 1.5rem;
            font-weight: 400;
        }

        h2 {
            font-size: 3rem;
            font-weight: 900;
        }

        img {
            max-width: 100%;
            height: auto;
        }
    }

   
    @media (max-width: 1000px) {
        flex-wrap: wrap;
        max-width: calc(100% - 4rem);

        div {
            flex-basis: 100%;
            text-align: center;
        }

    }
`;