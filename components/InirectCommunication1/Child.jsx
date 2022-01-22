export default function Child({talkToDad}) {
    return (
        <div>
            <h1>Child</h1>
            <button onClick={talkToDad} > Talk to dad (show event)</button>
            <button onClick={ev => talkToDad(ev)} > Talk to dad (show event)</button>
            <button onClick={() => talkToDad("I am your son!")} >Talk to dad (send a message to dad)</button>

        </div>
    )
}