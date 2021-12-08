import React from "react";

function useStorageListener(sincronizeTodos) {
    const [storageChange, setStorageChange ] = React.useState(false);

    // window.addEventListener('storage', (change)=>{
    //     if(change.key === 'TODOS_V1'){
    //         console.info('Hubo cambios en TODOS_V1');
    //         setStorageChange(true);
    //     }
    // });

    React.useEffect(() => {
        const onChange = (change) => {
          if (change.key === "TODOS_V1") {
            console.log("Hubo cambios en TODOS_V1");
            setStorageChange(true);
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