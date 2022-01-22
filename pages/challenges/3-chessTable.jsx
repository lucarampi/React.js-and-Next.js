import ChessPosition from "../../components/Chess/ChessPosition";

export default function ChessTable() {
    const width = 50;
    const table = [9, 8];
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "0 auto",
            width: width * table[0] + "px",
        }} >
            {
                Array.from(Array(table[0])).map((_, row) => {
                    return (
                        <div>
                            {
                                Array.from(Array(table[1])).map((_, col) => {
                                    return (
                                        <ChessPosition width={width} bgColor={(row + col) % 2 === 0 ? "white" : "black"} />
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

