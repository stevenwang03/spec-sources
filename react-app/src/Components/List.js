
const sourceList = [{sourceName:"Presbo", sourceEmail: "presbo@columbia.edu"}, 
                    {sourceName:"John Jay Mouse", sourceEmail: "mouse@columbia.edu"}, 
                    {sourceName:"Water Bottle Man", sourceEmail: "flipper@columbia.edu"}]

function List() {
    return (
        <div class="List">
            {sourceList.map((source, index) => (<ListItem index = {index+1} sourceName={source.sourceName} sourceEmail={source.sourceEmail}/>))}
        </div>
    );
}

export default List;

function ListItem({index, sourceName, sourceEmail}) {
    return (
        <div class="source">
            <h1>{index}</h1>
            <h1>{sourceName}</h1>
            <h1 class="email">{sourceEmail}</h1>
            <div class="red">
                <h2>DELETE</h2>
            </div>
        </div>
    );
}