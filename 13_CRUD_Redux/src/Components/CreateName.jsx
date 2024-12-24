import { useState } from 'react';
import { createName } from '../Redux/Slices/create';
import { useDispatch, useSelector } from 'react-redux';
import ReadName from './ReadName';

const CreateName = () => {

  const ReadStoreName = useSelector((state) => state.F_name.value);
  const [name, setName] = useState(ReadStoreName)
  const dispatch = useDispatch()

  dispatch(createName(name))


  

  return (
    <>
      <h2>Enter Your Name Here: Then navigate to readName page</h2>
      <input style={{ width: "510px", fontSize: '20px', padding: '10px', borderRadius: '0.3rem' }} type="text" placeholder='Enter your name here : ' onChange={(e) => setName(e.target.value)} />

      <br />
      <br />

      <ReadName />

    </>
  )
}

export default CreateName;