export default function ChessPosition({ width, bgColor }) {
    return (
        <div style={
            {
                width: width ? width : "100px",
                height: width ? width : "100px",
                backgroundColor: bgColor ? bgColor : "black",
            }}>
        </div>
    );
}
