export default function List(props) {
    return (
        <ul style=
        {{
            display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                padding: "5px",
                border: "1px solid black",
                width: "fit-content",
                backgroundColor: "white",
                listStyle: "none"
        }}>
            {props.children}
        </ul>
    )
}