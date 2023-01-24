import { METHOD, SYMBOL } from "enums";
import { ICar } from "interface"
import { domain, garage } from "api/baseURL";

export const updateCar = async (car: ICar) => {
    const requestUrl = `${domain}${garage}${SYMBOL.SLASH}${car.id}`
    //await updateWinner(car.id!)
    await fetch(requestUrl, {
        method: METHOD.put,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: car.name, color: car.color })
    })
}