import styled from 'styled-components';

export const QuestionsContainer = styled.div`
    max-width: calc(66.66666666666666%);   

    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 1rem;

    text-align: center;

    @media (max-width: 1400px) {
        max-width: calc(100% - 4rem);   
    }
`;

export const QuestionsAndAnswersContainer = styled.div`
    margin: 0.5rem 1.5rem;
    gap: 0.075rem;
    display: flex;
    flex-direction: column;
`;

export const QuestionsAnswersBase = styled.div`
    padding: 2rem;
    background-color: ${props => props.theme['gray-600']};
`;

export const QuestionContent = styled(QuestionsAnswersBase)`
    display: flex;
    justify-content: space-between;
`;

export const AnswerContent = styled(QuestionsAnswersBase)`
    text-align: left;
`;

