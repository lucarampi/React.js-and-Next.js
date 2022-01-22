import Child from "./Child";

export default function Father({ family, members }) {
    return (
        <div style={
            {
                textAlign: "center",
            }
        }>
            <h2>{family} family</h2>
            {members.map(name => (
                <Child name={name} family={family} />
            ))}
        </div>
    )
}