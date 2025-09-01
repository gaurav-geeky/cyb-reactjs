import React, { useState } from 'react'

function Todolist() {
    let [input, setInput] = useState("");
    let [todo, setTodo] = useState([]);
    let [editid, setEditid] = useState(null);
    let [newtext, setNewtext] = useState("");

    function addTodo() {
        if (input == "") return;

        setTodo([...todo, { id: Date.now(), text: input, condition: false }]);

        setInput("");
    }

    function deleteit(id) {
        setTodo(todo.filter((each) => each.id != id));
    }

    function letsedit(id, text) {
        setEditid(id);
        setNewtext(text);
    };

    function saveit(id) {
        setTodo(todo.map((each) =>
            each.id == id ? { ...each, text: newtext } : each
        ));
        setEditid(null);
        setNewtext("");
    };

    return (
        <>
            <section style={{ textAlign: "center", padding: "20px", border: "1px solid red", backgroundColor: "pink" }}>
                <>
                    <div>
                        <p style={{ fontSize: "30px", color: "blue", fontWeight: "bold" }}>TODOLIST New practice </p>
                        <input
                            type="text"
                            style={{ padding: "3px" }}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            style={{ padding: "1px 3px", backgroundColor: "yellow", margin: "0px 5px" }}
                            onClick={() => addTodo()}
                        > ADD </button>
                    </div>

                    <article>
                        {
                            todo.map((each) => (
                                <div style={{ marginTop: "20px" }} >
                                    {
                                        each.id != editid ?
                                            <li  >
                                                {/* onclick EDiT  */}
                                                <span> {each.text} </span>

                                                <button
                                                    style={{ padding: "2px 4px", backgroundColor: "red", color: "white", margin: "0px 5px" }}
                                                    onClick={() => deleteit(each.id)}
                                                > DEL </button>

                                                <button
                                                    style={{ padding: "1px 3px", backgroundColor: "blue", color: "white", margin: "0px 5px" }}
                                                    onClick={() => letsedit(each.id, each.text)}
                                                > EDIT </button>
                                            </li>
                                            :
                                            //  while EDITING .. 
                                            <li  >
                                                <input
                                                    style={{ padding: "3px", }}
                                                    type="text"
                                                    value={newtext}
                                                    onChange={(e) => setNewtext(e.target.value)}
                                                />

                                                <button style={{ margin: "0px 5px" }} onClick={() => saveit(each.id)}> save </button>

                                                <button style={{ margin: "0px 5px" }} onClick={() => setEditid(null)}> cancel </button>
                                            </li>
                                    }
                                </div>
                            ))
                        }
                    </article>
                </>
            </section>
        </>
    )
}

export default Todolist
