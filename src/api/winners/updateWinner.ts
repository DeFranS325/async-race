import { METHOD, SYMBOL } from "enums";
import { IWinner } from "interface";
import { domain, winners } from "api/baseURL";
import { getWinner } from "./getWinner";

export const updateWinner = async (id: number, win?: boolean, newtime?: number) => {
    const requestUrl = `${domain}${winners}${SYMBOL.SLASH}${id}`
    const winner: IWinner = await getWinner(id)
    if (win) {
        winner.wins++
        if (newtime)
            winner.time = newtime
    }    
    await fetch(requestUrl, {
        method: METHOD.put,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ wins: winner.wins, time: winner.time })
    })
}