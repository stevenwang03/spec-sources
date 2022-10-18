import React, {useState} from 'react';

function Block({handleAdd}) {

    const [sourceTitle, setSourceTitle] = useState("");
    const [sourceEmail, setSourceEmail] = useState("");

    function handleSubmit() {
        handleAdd(sourceTitle, sourceEmail)
        setSourceTitle("");
        setSourceEmail("");
        document.getElementById("block").reset();
    }

    return (
        <form id="block" class="block">
            <h2>Source Name:</h2>
            <input class="white" onChange={(e) => setSourceTitle(e.target.value)}>   
            </input>

            <h2>Source Email:</h2>
            <input class="white" onChange={(e) => setSourceEmail(e.target.value)}>   
            </input>
            <button class="green" type="button" onClick={() => {handleSubmit()}}><h2>ADD</h2></button>
        </form>
    );
}

export default Block;