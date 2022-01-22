export default function OnlyEven({ number: number }) {
    return number % 2 === 0 ?
        (<p>{number}</p>) : (null)

}