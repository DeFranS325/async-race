import { request } from 'api/request'
import { domain, winners } from 'api/baseURL'
import { IWinner } from 'interface'
import { SYMBOL } from 'enums'

export const getWinnerById = (carId: number) => request<IWinner>(`${domain}${winners}${SYMBOL.SLASH}${carId}`)