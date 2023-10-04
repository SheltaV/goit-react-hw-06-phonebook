import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "redux/filterReducer";

export const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)

    return (<div>
        <p>Find contacts by name</p>
        <input type="text" value={filter} onChange={evt => dispatch(addFilter(evt.target.value))} />
    </div>)
}