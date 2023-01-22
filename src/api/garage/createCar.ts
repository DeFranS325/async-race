import { ICar } from "interface"
import { domain, garage } from "api/baseURL";
import { METHOD } from "enums";

export const createCar = async (car: ICar) => {    
    const requestUrl = `${domain}${garage}`
    await fetch(requestUrl, {
        method: METHOD.post,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    })
}