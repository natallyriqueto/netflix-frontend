import styled from 'styled-components';

export const PriceTagContainer = styled.div`
    position: absolute;
    transform: translateY(-50%);
    width: 100%;
    z-index: 1;
`;

export const PriceTagContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    position: relative;
    background: radial-gradient( 51.39% 511.66% at 47.68% -217.91%, #ff9900 0%, #e50914 17.27%, #0e1b4f 79.44%, #000413 100% );
    box-shadow: 0px -8px 25px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    margin: 0 4.6rem;
    color: white;
    padding: 1.3rem;

    @media(max-width: 650px) {
        margin: 0 2rem;
    }
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 30px;
        margin: 0;
    }

    a {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #448ef4;    
        font-weight: 500;
    }
`;


export const ImageContainer = styled.div`
    img {
        height: 6rem;
        width: 6rem;
    }
`;