import { useSelector } from 'react-redux';

const ReadName = () => {
  
    const name = useSelector((state) => state.F_name.value);
  
    return (
    <>
       <h1> Name: {name}</h1>
    </>
  )
}

export default ReadName;