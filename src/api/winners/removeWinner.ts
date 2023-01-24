import { METHOD, SYMBOL } from "enums"
import { domain, winners } from "api/baseURL"

export const removeWinner = async (id: number) => {
    const requestUrl = `${domain}${winners}${SYMBOL.SLASH}${id}`
    await fetch(requestUrl, {
        method: METHOD.delete
    })
}