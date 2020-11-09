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

export const viewAnswer = () => {
    return {
        type: 'VIEW_ANSWER'
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
