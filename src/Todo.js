import React, {useState} from "react";
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import "./index.css";
import TodoList from "./TodoList";

// css
const noOutline = {
    outline: "none",
    border: "none",
}
// css end



const Todo = () => {
    const [itemList, setItemList] = useState([]);
    const [getItem, setGetItem] = useState("");

    const inputEvent = (event) => {
        setGetItem(event.target.value);

    }

    const sumitNow = () => {
        setItemList((prevVale) => {
            return [...prevVale, getItem]
        });
        setGetItem("");
    }


    const refreshEvent = (noRefresh) => {
        noRefresh.preventDefault();
    }

    const deleteItem = (id) => {
        setItemList((oldData) => {
            return oldData.filter((anyFun, index) => {
                return id !== index;
                
            })
        });
    }

    return(
        <>
            <section className="py-4">
                <div className="container">
                    <Card className="all__width py-4">
                        <h2 className="text-center">This is teh Todo List</h2>
                        <form onSubmit={refreshEvent} className="text-center mt-3">
                            <TextField value={getItem} type="text" onChange={inputEvent}  label="Add Item" />
                            <Fab type="submit" onClick={sumitNow} className="mt-2" style={noOutline} size="small" color="secondary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </form>
                    </Card>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        {itemList.map((allItem, index) => {
                            return (
                                <TodoList key={index} id={index} showItem={allItem} onSelect={deleteItem} />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Todo;