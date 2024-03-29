const questionsApi = (num) => (
    // fetch(`https://jservice.io/api/random?count=${num}`)
    fetch(`https://opentdb.com/api.php?amount=${num}`)
    .then(response => response.json())
)

export default questionsApi;