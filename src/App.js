import Hook from "./Hook";
function App() {
    const arrayList = ["Huyen","Hoa","Hung","Long"];
    const [addData,saveData,data,arrData] = Hook(arrayList)
  return (
    <div >
       <div>
           学生一覧：[Huyen,Hoa,Hung,Long]
       </div>
        <div>
            追加する名前を入力してください。
        </div>
        <input onChange={addData}/>
        <button onClick={()=>saveData()}>
            確定
        </button>
        <div>
            追加する名前:{data}
        </div>
        <div>
            新しい一覧：{arrData.map((i,key)=>{
            if(key ==0)
            {
                return(
                    <span>
                     [{i},
                 </span>
                )} else if(key == arrData.length -1){
                return(
                    <span>
                     {i}]
                 </span>
                )
            } else{
                return(
                    <span>
                         {i},
                     </span>
                )
            }
        } )}
        </div>
    </div>
  );
}

export default App;