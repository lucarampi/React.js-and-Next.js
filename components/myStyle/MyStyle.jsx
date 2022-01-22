export default function MyStyle(props) {
    const applyedClass = props.number % 2 === 0 ? 'lightpink' : 'lightblue';
    return (
        <div style={
            {
                textAlign: props.textRight ? "right" : "left"
            }
        }>
            <h1 style={
                {
                    color: props.number >= 5 ? "green" : "red",
                    backgroundColor: props.bgColor ? props.bgColor : "none",
                    

                }
            }>MyStyle Number: {props.number}</h1>

            <h2 className={applyedClass}>
                MyClass Number: {props.number}</h2>
        </div >
    )
}
