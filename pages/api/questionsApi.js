const questionsApi = (num) => (
    fetch(`https://jservice.io/api/random?count=${num}`)
    .then(response => response.json())
)

export default questionsApi;