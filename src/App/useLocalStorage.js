import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [sincronizedItem, setSincronizedItem] = React.useState(true);
    const [canChange, setCanChange ] = React.useState(true);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    const [ item , setItem ]    = React.useState(initialValue);

    React.useEffect(()=>{
        setTimeout( ()=>{
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if(!localStorageItem) {
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem = initialValue;
            } else {
            parsedItem = JSON.parse(localStorageItem);
            }

            setItem(parsedItem);
            setLoading(false);
            setSincronizedItem(true);
            setCanChange(true)
        } catch (e) {
            setError(error);
        }
        },3000);
    },[sincronizedItem])

    const saveItem = (newItem) =>{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifiedItem);
        setItem(newItem);
    }

    const sincronizeItem = () =>{
        setLoading(true);
        setSincronizedItem(false);
        // setItem([])
    }

    return {
        item, 
        saveItem, 
        loading,
        error,
        sincronizeItem,
        canChange,
        setCanChange,

    };
}

export { useLocalStorage }

// console.log('render antes de useEffect');

// React.useEffect(()=>{
//   console.log('use effect');
// },[])

// console.log('render antes de useEffect');