import styled from 'styled-components';

export const QuestionsContainer = styled.div`
    padding: 4.5rem  1.5rem;   

    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    margin: 0 auto;
    cursor: pointer;
    text-align: center;
    border-bottom: 8px solid ${props => props.theme['gray-600']};

    h2 {
        font-size: 3rem;
        font-weight: 900;
    }

    @media(max-width: 900px) {
        padding: 2rem;
    }

`;

export const QuestionsBox = styled.div`
    width: 70%;

    @media(max-width: 900px) {
        width: 100%;
    } 
`;

export const QuestionText = styled.h3`
    font-size: 1.5rem;
    font-weight: 400;
    text-align: start;
`;

export const QuestionsAndAnswersContainer = styled.div`
    margin: 0.5rem 1.5rem;
    gap: 0.075rem;
    display: flex;
    flex-direction: column;
`;

export const QuestionsAnswersBase = styled.div`
    padding: 1.5rem;
    background-color: ${props => props.theme['gray-600']};
`;

export const QuestionContent = styled(QuestionsAnswersBase)`
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    &:hover {
        background-color: rgb(65,65,65);
        transition: background-color 255ms;
    }
`;

export const AnswerContent = styled(QuestionsAnswersBase)`
    text-align: left;
`;

