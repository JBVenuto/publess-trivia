const initState = {
    questions: [{category: {title: ''}, question: 'LOADING...', answer: ''}],
    numQuestions: 0,
    currentQuestion: 0,
    showQuestions: false,
    viewAnswer: false
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_NUM_QUESTIONS':
            return {
                ...state,
                numQuestions: action.numQuestions
            }
        case 'VIEW_ANSWER':
            return {
                ...state,
                viewAnswer: true
            }
        case 'NEXT_QUESTION':
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
                viewAnswer: false
            }
        case 'GET_QUESTIONS':
            return {
                ...state,
                questions: action.questions,
                numQuestions: action.numQuestions
            }
        default:
            return state
    }
}
