import React from "react";

function useLocalStorage(itemName, initialValue) {
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
        } catch (e) {
            setError(error);
        }
        },3000);
    },[error, itemName, initialValue])

    const saveItem = (newItem) =>{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifiedItem);
        setItem(newItem);
    }

    return {
        item, 
        saveItem, 
        loading,
        error
    };
}

export { useLocalStorage }

// console.log('render antes de useEffect');

// React.useEffect(()=>{
//   console.log('use effect');
// },[])

// console.log('render antes de useEffect');