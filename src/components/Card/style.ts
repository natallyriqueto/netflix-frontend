import styled from 'styled-components';
import backgroundImage from '../../assets/background-img.jpg';

export const CardOverlay = styled.div`  
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    min-height: inherit;
    width: 100%;
    z-index: 1;
`;

export const CardContainer = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${backgroundImage});
    
    width: 100%;
    min-height: 43.75rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;

        z-index: 2;
        text-align: center;

        h3 {
            font-size: 1.25rem;
            font-weight: 400;
        }

        h1 {
            font-size: 3rem;
            font-weight: 700;
        }
    }
`;

