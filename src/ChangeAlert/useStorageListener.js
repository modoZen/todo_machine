import React from "react";

function useStorageListener(sincronizeTodos,setCanChange) {
    const [storageChange, setStorageChange ] = React.useState(false);

    // window.addEventListener('storage', (change)=>{
    //     if(change.key === 'TODOS_V1'){
    //         console.info('Hubo cambios en TODOS_V1');
    //         setStorageChange(true);
    //         setCanChange(false);
    //     }
    // });

    React.useEffect(() => {
        const onChange = (change) => {
          if (change.key === "TODOS_V1") {
            console.log("Hubo cambios en TODOS_V1");
            setStorageChange(true);
            setCanChange(false);
          }
        };
    
        window.addEventListener("storage", onChange);
    
        return () => {
          window.removeEventListener("storage", onChange);
        };
    }, []);

    const toggleShow = ()=>{
        setStorageChange(false);
        sincronizeTodos();
    }


    return {
        show: storageChange,
        toggleShow,
    }
};

export { useStorageListener }