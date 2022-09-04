import  {useState,useEffect}  from 'react';
const useSessionStorage=(key,initialValue)=> {

const [storedValue,setStoredValue]=useState(()=>{

    try{
        const item= sessionStorage.getItem(key);
        return item ? JSON.parse(item):initialValue;
    }
    catch(err){
        console.log("error is ",err);
        return initialValue;
    }
});
    
useEffect(() => {
    // storing input search
    sessionStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

    return [storedValue,setStoredValue]
}

export default useSessionStorage
