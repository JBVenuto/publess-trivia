const NumInput = props => (
    <section>
        <h3>How many questions would you like to answer?</h3>
        <input value={props.value} onChange={props.inputChange} type='text' ></input>
        <button onClick={props.buttonClick}>Start</button>
    </section>
)

export default NumInput;