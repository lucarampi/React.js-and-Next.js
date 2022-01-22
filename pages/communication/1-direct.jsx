import Child from "../../components/DirectCommunication/Child";
import Father from "../../components/DirectCommunication/Father";

export default function direct({ family }) {
    const families = [["Happy",["Bianca", "Luca", "Lucrecia", "Otto"]],[ "Cool",["James", "Jean", "Jhon", "Jane"]], ["Nice",["Brian", "Dom", "Letty", "Robs"]]];  
    return (
        <div style={
            {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
            }
        }>
            {families.map((family, index) => (

                
                <Father family={family[0]} members={family[1]}>
                   
                </Father>
            ))}
        </div>
    )
}