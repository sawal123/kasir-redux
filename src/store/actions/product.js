export const addCart = id=>{
    return{
        type: "ADD_TO_CART",
        payload: id
    }
}