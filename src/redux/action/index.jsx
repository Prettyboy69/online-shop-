import { type } from "@testing-library/user-event/dist/type";
import Product from '../../component/Product'

export const  addCart =(Product) =>{
    return{
        type : "ADDITEM",
        payload : Product
    }
}

//for Delee  item from  cart 

export  const delCart =(Product)=>{
    return{
        type : "DELEITEM",
        payload: Product
    }
}