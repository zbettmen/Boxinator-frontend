import axios from "axios"
import { toast } from "react-toastify"
import { RESET_BOX } from "./RESET_BOX"

export const SEND_BOX = (box) => {

    return dispatch => {

        try {
            axios.post("http://localhost:8080/box", box)
            .then(res => {
                console.log(res)
                if(res.status === 200){
                    toast.success("Saved your order")
                    dispatch({type: "RESET_BOX"})
    
                } else {
                    toast.error("Something went wrong")
                }
            })
    
        } catch(error) {
            toast.error("Fyll i allting ordentligt")
        }

    }

    
}

