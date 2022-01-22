import list from '../../data/porductList';

export default function renderTrable() {
    function generateTable() {
        return list.map((item, index) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
            );
        });
    }
    return (
        <div style={{ 
            margin: '0 auto',
            width: 'fit-content',
            backgroundColor: '#f5f5f5',
            border: '1px solid black',
         }}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {generateTable()}
                </tbody>


            </table>
        </div>
    );
}