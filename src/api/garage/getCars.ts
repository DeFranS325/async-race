import { SYMBOL } from "enums"
import { ICar, IGetCarsResponse } from "interface"
import { CarsQueryParams } from "types"
import { domain, garage } from "api/baseURL"

export const getCars = ({ _limit, _page }: CarsQueryParams) => {
    let requestUrl = `${domain}${garage}`

    const queryParamsEntries = Object.entries({ _limit, _page }).filter(([, value]) => !!value)

    if (queryParamsEntries.length) {
        requestUrl += SYMBOL.QUESTION

        queryParamsEntries.forEach(([key, value]) => {
            const param = `${key}${SYMBOL.EQUAL}${value}`
            requestUrl += `${param}${SYMBOL.AMPERSAND}`
        })
        requestUrl = requestUrl.slice(0, -1)

        return fetch(requestUrl).then(async (response): Promise<IGetCarsResponse> => ({
            cars: (await response.json()) as ICar[],
            totalCount: Number(response.headers.get('X-Total-Count'))
        })
        )
    }

    return fetch(requestUrl).then(
        async (response): Promise<IGetCarsResponse> => ({
            cars: (await response.json()) as ICar[],
        }),
    )
}