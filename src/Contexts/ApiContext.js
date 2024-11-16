import { createContext, useState } from "react";

export const ApiContext=createContext("");

export const ApiProvider=({children})=>{
    const [tLista,setTLista]=useState([])

function getAdat(vegpont){
    axios
        .get(vegpont)
        .then(function (response) {
            // handle success
            console.log(response.data); setTLista(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}

//aszinkron hívások esetén, hogy a hívás csak 1x történjen meg, illetve csak akkor módosul újra a hívás, ha valami változás történik
useEffect(()=> {
    getAdat('https://fakestoreapi.com/products')
}, []);

    return <ApiContext.Provider value={{tLista}}>
        {children}
    </ApiContext.Provider>
}