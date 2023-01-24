import { WinnersQueryParams } from "types"
import { domain, winners } from "api/baseURL"
import { IWinner } from "interface/IWinner"
import { IGetWinnersResponse } from "interface/IGetWinnersResponse"
import { SYMBOL } from "enums"
import { sortWinners } from "helpers/sortWinners"

export const getWinners = ({ _limit, _page, _sort, _order }: WinnersQueryParams) => {
    let requestUrl = `${domain}${winners}`

    const queryParamsEntries = Object.entries({ _limit, _page, _sort, _order }).filter(([, value]) => !!value)

    if (queryParamsEntries.length) {
        requestUrl += SYMBOL.QUESTION

        queryParamsEntries.forEach(([key, value]) => {
            const param = `${key}${SYMBOL.EQUAL}${value}`
            requestUrl += `${param}${SYMBOL.AMPERSAND}`
        })
        requestUrl = requestUrl.slice(0, -1)

        return fetch(requestUrl).then(async (response): Promise<IGetWinnersResponse> => ({
            winners: sortWinners((await response.json()) as IWinner[], _sort, _order),
            totalCount: Number(response.headers.get('X-Total-Count'))
        })
        )
    }

    return fetch(requestUrl).then(
        async (response): Promise<IGetWinnersResponse> => ({
            winners: (await response.json()) as IWinner[],
        }),
    )
}