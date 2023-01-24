export const loadFromStorage = (param: string, isArray: boolean): string | Array<string> | null => {
    if (sessionStorage.getItem(param)) {
        if (isArray)
            return JSON.parse(String(sessionStorage.getItem(param)))

        return sessionStorage.getItem(param)
    }
    return null;
}