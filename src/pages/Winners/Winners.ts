import styles from './styles.module.css'
import { getWinners } from "api/winners"
import { Text } from "components/Text"
import { ORDER, SORT, STORAGE } from "enums"
import { createElementWithClassName, loadFromStorage, saveToStorage, winnersPerPage, winnersTableHeader } from "helpers"
import { WinnersFooter } from "components/WinnersFooter"
import { Table } from "components/Table"

export const Winners = async () => {
    const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })
    let page: number | undefined
    let sort: string
    let order: string
    if (loadFromStorage(STORAGE.winnersPage, false))
        page = Number(loadFromStorage(STORAGE.winnersPage, false))
    sort = (loadFromStorage(STORAGE.sort, false)) ? String(loadFromStorage(STORAGE.sort, false)) : SORT.ID
    order = (loadFromStorage(STORAGE.order, false)) ? String(loadFromStorage(STORAGE.order, false)) : ORDER.ASC
    const { winners, totalCount } = await getWinners({ _limit: winnersPerPage, _page: page, _sort: sort, _order: order })
    let pageCount = Math.ceil((totalCount || winnersPerPage) / winnersPerPage)
    if (pageCount)
        saveToStorage(STORAGE.winnersPageCount, pageCount.toString())
    const winnersTitle = Text({ tagName: 'h2', text: `Winners Page(${totalCount!})`, classname: styles['winners-title'] })
    const pageTitle = Text({ tagName: 'p', text: `Page #${page || 1}`, classname: styles['page-title'] })
    const winnersTable = Table({ headers: winnersTableHeader, wins: winners })

    wrapper.append(winnersTitle, pageTitle, await winnersTable, WinnersFooter())

    return wrapper
}