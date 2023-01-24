import { TITLE, STORAGE } from "enums"
import { createElementWithClassName, loadNumPageAndCount } from "helpers"
import { routerPath } from "router"
import { Button, NextPage, PrevPage } from "components/Button"
import styles from './styles.module.css'

export const WinnersFooter = (): HTMLDivElement => {
    const winnersFooter = createElementWithClassName({ tagName: 'div', classname: styles['footer-winners'] })
    const [page, pageCount] = loadNumPageAndCount(STORAGE.winnersPage, STORAGE.winnersPageCount)

    const prevPage = Button({ value: TITLE.prev, classname: styles['prev-page'], disable: page <= 1, onclick: () => { PrevPage(routerPath.winners) } })
    let nextPage = Button({ value: TITLE.next, classname: styles['next-page'], disable: page >= pageCount, onclick: () => { NextPage(routerPath.winners) } })
    winnersFooter.append(prevPage, nextPage)
    return winnersFooter
}