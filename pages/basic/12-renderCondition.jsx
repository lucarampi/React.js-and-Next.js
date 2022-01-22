import OnlyEven from "../../components/OnlyEven/OnlyEven";

export default function renderCondition() {
    const repeat = 11
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
            {Array.from({ length: repeat }).map((_, index) => (
                <OnlyEven key={index} number={index} />
            ))}
        </div>

    )

}