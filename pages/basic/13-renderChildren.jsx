import Item from "../../components/List/Item"
import List from "../../components/List/List"
export default function myList(){
    return (
        <List>
            <Item content="Item 1" />
            <Item content="Item 2" />
            <Item content="Item 3" />
            <Item content="Item 4" />
            <Item content="Item 5" />
        </List>
    )
}