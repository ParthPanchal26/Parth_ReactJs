import { useDispatch } from "react-redux";
import { deleteName } from "../Redux/Slices/create";
import ReadName from "./ReadName";

const DeleteName = () => {

    const dispatch = useDispatch();

    return (
        <>

            <br />
            <br />
            <h2>Delete Your Name Here: Then navigate to readName page</h2>

            <br />

            <button onClick={() => dispatch(deleteName())}>Delete Name</button>

            <br />
            <br />

            <ReadName />
        </>
    )
}

export default DeleteName;