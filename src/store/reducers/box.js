import { toast } from "react-toastify";

const initialState = {
    name: "",
    weight: 0,
    color: "",
    colorRGB: {r:0,g:0,b:0},
    country : "Sweden",
    disabled: false
}


const boxReducer = (box = initialState, action) => {
    switch(action.type){
        case "SET_WEIGHT":

            // Check so input is number and(positive)
            var proceed = /^\d+$/.test(action.payload);


            if(action.payload === ""){
                proceed = true
            }

            if(proceed){

                let weight = parseInt(action.payload)
                if(action.payload === ""){
                    weight = ""
                }
                
                return {...box, weight: weight}
                
            }

            else {
                toast.error("Wrong input: " + action.payload.slice(-1))
            }
        
            return box;


        case "SET_COLOR":

            const rgb = hexToRgb(action.payload)
            let disabled = false;

            if(rgb.b > 100){
                disabled = true
            }

           
           return {...box, colorRGB: rgb, color: action.payload, disabled: disabled}
        
            
        case "SET_COUNTRY":
            return {...box, country: action.payload};

        case "SET_NAME":
            return {...box, name: action.payload}

        case "RESET_BOX":
            console.log("Resetting box")
            return initialState

        default:
            return box
    }
}


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

export default boxReducer