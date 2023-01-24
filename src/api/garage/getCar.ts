import { SYMBOL } from "enums"
import { ICar } from "interface"
import { domain, garage } from "api/baseURL"

export const getCar = (id: number) => {
    const requestUrl = `${domain}${garage}${SYMBOL.SLASH}${id}`
    return fetch(requestUrl).then(
        async (response): Promise<ICar> => (await response.json()) as ICar)
}