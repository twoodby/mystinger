import { useState } from 'react'

const Stringer = () => {
    const [stringVal, setStringVal] = useState('')

    const flipString = () => {
        var newString = "";
        for (var i = stringVal.length - 1; i >= 0; i--) {
            newString += stringVal[i];
        }
        return newString;
    }

    const crazyCamel = () => {
        console.log(stringVal)
        var newString = "";
        for (var i = 0; i < stringVal.length ; i++) {
            if(i % 2 == 0) {
                newString += stringVal[i].toUpperCase();    
            } else {
                newString += stringVal[i].toLowerCase();    
            }
        }
        return newString;
    }



    return { stringVal, setStringVal, flipString, crazyCamel}
}

export default Stringer