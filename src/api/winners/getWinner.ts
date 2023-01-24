import { SYMBOL } from "enums"
import { IWinner } from "interface"
import { domain, winners } from "api/baseURL"

export const getWinner = async (id: number) => {
    const requestUrl = `${domain}${winners}${SYMBOL.SLASH}${id}`

    return fetch(requestUrl).then(
        async (response): Promise<IWinner> => (await response.json()) as IWinner)
}