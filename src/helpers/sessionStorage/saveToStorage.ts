export const saveToStorage = (param: string, value: string | Array<string>) => {
    sessionStorage.setItem(
        param,
        Array.isArray(value) ? JSON.stringify(value) : value
    )
}