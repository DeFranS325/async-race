import { STORAGE } from "../enums"
import { renderComponent, routerPath } from "../router"
import { loadNumPageAndCount, saveToStorage } from "./sessionStorage"

export const gotoPage = (side: '+' | '-', pageName: string) => {    
    let page: number = 0
    let pageCount: number = 0
    if (pageName === routerPath.garage) {
        [page, pageCount] = loadNumPageAndCount(STORAGE.garagePage, STORAGE.garagePageCount)
    }
    if (pageName === routerPath.winners) {
        [page, pageCount] = loadNumPageAndCount(STORAGE.winnersPage, STORAGE.winnersPageCount)
    }

    if (side === '+')
        page < pageCount ? page++ : page = pageCount
    else
        page > 1 ? page-- : page = 1
    if (pageName === routerPath.garage)
        saveToStorage(STORAGE.garagePage, page.toString())
    if (pageName === routerPath.winners)
        saveToStorage(STORAGE.winnersPage, page.toString())
    renderComponent()
}