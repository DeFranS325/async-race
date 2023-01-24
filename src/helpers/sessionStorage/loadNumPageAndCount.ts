import { loadFromStorage } from "./loadFromStorage"

export const loadNumPageAndCount = (pageName: string, pageCountName: string): [page: number, pageCount: number] => {
    let page: number = (loadFromStorage(pageName, false)) ? Number(loadFromStorage(pageName, false)) : 1
    let pageCount: number = (loadFromStorage(pageCountName, false)) ? Number(loadFromStorage(pageCountName, false)) : 1
    return [page, pageCount]
}