import { TITLE, STORAGE } from "enums"
import { createElementWithClassName, loadNumPageAndCount } from "helpers"
import { routerPath } from "router"
import { Button, NextPage, PrevPage } from "components/Button"
import styles from './styles.module.css'

export const GarageFooter = (): HTMLDivElement => {
    const garageFooter = createElementWithClassName({ tagName: 'div', classname: styles['footer-garage'] })
    const [page, pageCount] = loadNumPageAndCount(STORAGE.garagePage, STORAGE.garagePageCount)
    const prevPage = Button({
        value: TITLE.prev,
        classname: styles['prev-page'],
        disable: page <= 1,
        onclick: () => { PrevPage(routerPath.garage) }
    })
    let nextPage = Button({
        value: TITLE.next,
        classname: styles['next-page'],
        disable: page >= pageCount,
        onclick: () => { NextPage(routerPath.garage) }
    })
    garageFooter.append(prevPage, nextPage)
    return garageFooter
}