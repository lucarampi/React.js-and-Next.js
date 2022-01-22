export default function listGenerator() {
    let items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let listItems = (
        <><ul>
            {GenerateListItemsByNumber(10)}
        </ul><ul>
                {GenerateListItemsByArray(items)}
            </ul></>
    );
    console.log(listItems);
    return (listItems)
}

function GenerateListItemsByArray(array) {
    let listItems = []
    {
        array.map((item, index) => {
            console.log(item);
            if (index == array.length - 1) {
                listItems.push(<li key={index} >{item}</li>)
            } else {
                listItems.push(<li key={index} >{item},</li>)
            }
        })
    } return (listItems)
}

function GenerateListItemsByNumber(number = 10) {
    let listItems = []
    for (let i = 0; i <= number; i++) {
        {
            if (i == number) {
                listItems.push(<li key={i} >{i}</li>)
            } else {
                listItems.push(<li key={i} >{i},</li>)
            }
        }
    } return (listItems)
}

