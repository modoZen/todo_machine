import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener (props) {
        const [storageChange, setStorageChange ] = React.useState(false);

        // window.addEventListener('storage', (change)=>{
        //     if(change.key === 'TODOS_V1'){
        //         console.info('Hubo cambios en TODOS_V1');
        //         setStorageChange(true);
        //         props.setCanChange(false);
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
            props.sincronizeTodos();
        }

        return (
            <WrappedComponent 
            show={storageChange} 
            toggleShow={toggleShow} 
            />
        );
    };
}

export { withStorageListener }