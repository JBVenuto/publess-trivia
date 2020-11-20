export const updateNumQuestions = (numQuestions) => {
    return {
        type: 'UPDATE_NUM_QUESTIONS',
        numQuestions
    }
}

export const viewQuestions = () => {
    return {
        type: 'VIEW_QUESTIONS'
    }
}

export const nextQuestion = () => {
    return {
        type: 'NEXT_QUESTION'
    }
}

export const getQuestions = (questions) => {
    return {
        type: 'GET_QUESTIONS',
        questions
    }
}

export const toggleKeepScore = () => {
    return {
        type: 'TOGGLE_KEEP_SCORE'
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export const addTeam = (team) => {
    return {
        type: 'ADD_TEAM',
        team
    }
}

export const changeScore = (team, points) => {
    return {
        type: 'CHANGE_SCORE',
        team,
        points
    }
}

export const showFinalScore = () => {
    return {
        type: 'SHOW_FINAL_SCORE'
    }
}

export const nextRound = () => {
    return {
        type: 'NEXT_ROUND'
    }
}