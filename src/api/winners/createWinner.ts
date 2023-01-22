import { IWinner } from "interface";
import { domain, winners } from "api/baseURL";
import { METHOD } from "enums";

export const createWinner = async (id: number, time: number) => {
    const requestUrl = `${domain}${winners}`
    const winner: IWinner = {
        id: id,
        wins: 1,
        time: time
    }
    await fetch(requestUrl, {
        method: METHOD.post,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(winner)
    })
}