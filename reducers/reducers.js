const initState = {
    questions: [{category: {title: ''}, question: 'LOADING...', answer: ''}],
    numQuestions: 0,
    currentQuestion: 0,
    showQuestions: false
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_NUM_QUESTIONS':
            return {
                ...state,
                numQuestions: action.numQuestions
            }
        case 'VIEW_QUESTIONS':
            return {
                ...state,
                showQuestions: !state.showQuestions
            }
        case 'NEXT_QUESTION':
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
            }
        case 'GET_QUESTIONS':
            return {
                ...state,
                questions: action.questions
            }
        case 'RESET':
            return {
                ...initState
            }
        default:
            return state
    }
}
