import { useHistory } from "react-router-dom";

export default function ComponentB(){
    const history=useHistory();
    return(
        <>
        <div>component c</div>
        <button onClick={()=> history.push('/lol')}>Go to A</button>
        </>
        
    );
}