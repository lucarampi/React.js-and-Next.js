import Child from "./Child";

export default function Father(props) {
    function talkToDad(param) {
        console.log("Trigger:", param);
        console.log("I'm talking to dad");
    }
    return (
        <div>
            <Child talkToDad={talkToDad} />
        </div>
    )
}