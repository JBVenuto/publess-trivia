const questionsApi = async (num) => {
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=${num}`);
    const data = await response.json();

    const questionsWithScore = data.results.map((question) => {
      switch (question.difficulty) {
        case "easy":
          return {
            ...question,
            difficulty: 100,
          };
        case "medium":
          return {
            ...question,
            difficulty: 200,
          };
        case "hard":
          return {
            ...question,
            difficulty: 300,
          };
      }
    });

    return questionsWithScore;
  } catch (error) {
    console.log(error);
  }
};

export default questionsApi;
