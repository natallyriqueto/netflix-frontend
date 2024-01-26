import styled from 'styled-components';

export const QuestionsContainer = styled.div`
    padding: 4.5rem 0;    

    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin: 0 auto;
    cursor: pointer;
    text-align: center;
    border-bottom: 8px solid ${props => props.theme['gray-600']};

    h2 {
        font-size: 3rem;
        font-weight: 900;
    }

    @media (max-width: 1400px) {
        max-width: calc(100% - 4rem);   
    }
`;

export const QuestionText = styled.h3`
    font-size: 1.5rem;
    font-weight: 400;
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

    &:hover {
        background-color: rgb(65,65,65);
        transition: background-color 255ms;
    }
`;

export const AnswerContent = styled(QuestionsAnswersBase)`
    text-align: left;
`;

