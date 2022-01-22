export default function Child({name,family}) {
    return (
        <div  style={
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                padding: "5px",
                border: "1px solid black",
                width: "fit-content",
                backgroundColor: "white",
            }
        }>
            <h3>Child name: {name}</h3>
            <span>Hello, I am from <strong>{family}</strong> family</span>
        </div>
    )
}