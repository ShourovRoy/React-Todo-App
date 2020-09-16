import React from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Fab from '@material-ui/core/Fab';

// css
const noOutline = {
    outline: "none",
    border: "none",
}
// css end


const TodoList = (props) => {
    const runClick = () => {
        props.onSelect(props.id);
    }
    return(
        <>
            <div className="col-md-3">
                <div className="d-flex">
                    <span>
                        <Fab onClick={runClick} style={noOutline} size="small" color="secondary" aria-label="add">
                            <HighlightOffIcon />
                        </Fab>
                    </span>
                    <span className="ml-3 mt-1">
                        <h4>{props.showItem}</h4>
                    </span>
                </div>
            </div>
        </>
    );
};

export default TodoList;