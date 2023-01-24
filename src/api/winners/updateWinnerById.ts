import { request } from 'api/request'
import { METHOD, SYMBOL } from 'enums'
import { IWinner } from 'interface'
import { domain, winners } from 'api/baseURL'

import { UpdateWinnerRequestData } from './types'

export const updateWinnerById = ({ carId, time, wins }: UpdateWinnerRequestData) => {
    const body = {
        time,
        wins,
    }

    return request<IWinner>(`${domain}${winners}${SYMBOL.SLASH}${carId}`, {
        method: METHOD.put,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(body),
    })
}