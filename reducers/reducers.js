const initState = {
    questions: [{category: {title: ''}, question: 'LOADING...', answer: ''}],
    numQuestions: 0,
    currentQuestion: 0,
    showQuestions: false,
    keepScore: false,
    scores: {}
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

        case 'KEEP_SCORE':
            return {
                ...state,
                keepScore: !this.keepScore
            }

        case 'ADD_TEAM':
            let newTeams = state.scores;
            newTeams[action.team] = 0;

            return {
                ...state,
                scores: newTeams
            }

        case 'CHANGE_SCORE':
            let newScores = state.scores;
            newScores[action.team] = newScores[action.team] + parseInt(action.points);

            return {
                ...state,
                scores: newTeams
            }

        default:
            return state
    }
}
