import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from '../Redux/Slices/create';
import ReadName from './ReadName';

const UpdateName = () => {

    const ReadStoreName = useSelector((state) => state.F_name.value);
    const [newName, setUpdateName] = useState(ReadStoreName);
    const dispatch = useDispatch();

    dispatch(updateName(newName));

    return (
        <>
        <h2>Update Your Name Here: Then navigate to readName page</h2>
            <input style={{ width: "530px", fontSize: '20px', padding: '10px', borderRadius: '0.3rem' }} type="text" placeholder='Update your name here : ' onChange={(e) => setUpdateName(e.target.value)} />

            <br />
            <br />

            <ReadName />
        </>
    )
}

export default UpdateName;