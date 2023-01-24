import { METHOD, SYMBOL } from "enums"
import { ICar } from "interface"
import { domain, garage } from "api/baseURL"
import { removeWinner } from "api/winners"

export const removeCars = async (car: ICar) => {
    try {
        const requestUrl = `${domain}${garage}${SYMBOL.SLASH}${car.id}`
        await removeWinner(car.id!)
        await fetch(requestUrl, {
            method: METHOD.delete
        })
    }
    catch { }
}