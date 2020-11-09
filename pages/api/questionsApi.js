const questionsApi = (num) => (
    fetch(`http://jservice.io/api/random?count=${num}`)
    .then(response => response.json())
)

export default questionsApi;