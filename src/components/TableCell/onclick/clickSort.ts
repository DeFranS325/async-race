import { ORDER, SORT } from "enums"
import { loadFromStorage, saveToStorage } from "helpers"
import { renderComponent } from "router"

export const clickSort = (clickSort: string) => {
    let sort = (loadFromStorage('sort', false)) ? String(loadFromStorage('sort', false)) : SORT.ID
    let order = (loadFromStorage('order', false)) ? String(loadFromStorage('order', false)) : ORDER.ASC
    if (sort === clickSort) {
        if (order === ORDER.ASC)
            order = ORDER.DESC
        else
            order = ORDER.ASC
    }
    else
        sort = clickSort
    saveToStorage('sort', sort);
    saveToStorage('order', order);
    renderComponent()
}