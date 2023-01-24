import { SYMBOL } from "enums"

export const generateQueryURL = (params: Record<string, string | number | undefined>) => {
    const queryParamsEntries = Object.entries(params).filter(([, value]) => !!value)

    if (!queryParamsEntries.length) {        
        return ''
    }

    let queryURL: string = SYMBOL.QUESTION

    queryParamsEntries.forEach(([key, value]) => {
        const param = `${key}${SYMBOL.EQUAL}${value!}${SYMBOL.AMPERSAND}`

        queryURL += param
    })

    return queryURL.slice(0, -1)
}