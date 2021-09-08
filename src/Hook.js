import React, {useEffect, useState} from 'react';
function Hook(arrList){
    const [data,setData] = useState();
    const [arrData,setArrData] = useState(arrList);
     const addData=(e)=>{
         setData(e.target.value);
     }
     const saveData=()=>{
         arrList.push(data);
         setArrData([...arrData,data]);
         console.log(arrList);
     }
     useEffect(()=>{
         console.log(arrList);
     },[arrList])
     return [addData,saveData,data,arrData]
}
export default Hook;