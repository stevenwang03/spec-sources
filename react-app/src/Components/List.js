



function List({sourceList, handleDelete}) {
    return (
        <div class="List">
            {sourceList.map((source, index) => (<ListItem index = {index+1} sourceName={source.sourceName} sourceEmail={source.sourceEmail} handleDelete={handleDelete}/>))}
        </div>
    );
}

export default List;

function ListItem({index, sourceName, sourceEmail, handleDelete}) {
    return (
        <div class="source">
            <h1>{index}</h1>
            <h1>{sourceName}</h1>
            <h1 class="email">{sourceEmail}</h1>
            <button class="red" onClick={() => handleDelete(index)}>
                <h2>DELETE</h2>
            </button>
        </div>
    );
}