import React, {useEffect, useState} from 'react';


const Lifecycle = () =>{
//     const [count, setCount] = useState(0);

//     const [text, setText] = useState("");


//     useEffect(()=>{
//         console.log("Mount!");
//     }, []);

//     useEffect(() =>{

//         console.log("Update!");
//     });


//     useEffect(()=>{console.log(`count is update : ${count}`);
//     if(count >5 ) {
//         alert("count 가 5를 넘었습니다 따라서 1로 초기화합니다.");
//         setCount(1);
//     }
// },[count])


// useEffect(() => {
//     console.log(`text is update : ${text}`);

// }, [text]);
const UnmonutTest = () =>{
    useEffect (() => {

        console.log("Mount");
        return ()=>{
            //Unmount 시점에 실행되게 함
            console.log("Unmount!");
        }

    },[])
    return  <div>UnmonutTesting component</div>
}
const [isVisible, setIsVisible] = useState(false);
const toggle = () => setIsVisible(!isVisible);
    return (<div style={{padding : 20}}>
        {/* <div>
            {count}
            <button onClick={()=> setCount(count + 1 )}> + </button>
    


        </div>
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)}/>

        </div> */}
    <button onClick={toggle}>ON/OFF</button>
        {isVisible && <UnmonutTest/>}

    </div>);
};
export default Lifecycle;