export const updateNumQuestions = (numQuestions) => {
    return {
        type: 'UPDATE_NUM_QUESTIONS',
        numQuestions
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

export async function getQuestions(numQuestions) {
    let questions = await getQuestions(numQuestions);

    return {
        type: 'GET_QUESTIONS',
        questions
    }
}
