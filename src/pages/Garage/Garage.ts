import { createElementWithClassName, carsPerPage, loadFromStorage, saveToStorage } from 'helpers'
import styles from './styles.module.css'
import { getCars } from 'api'
import { GarageFooter } from 'components/GarageFooter'
import { Text } from 'components/Text'
import { createCarElement } from 'helpers/createCarElement'
import { TopPanel } from './panels'
import { STORAGE } from 'enums'

export const Garage = async () => {
    const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })
    let page: number | undefined
    let startButtons: HTMLButtonElement[] = []  //
    let stopButtons: HTMLButtonElement[] = []   //
    if (loadFromStorage(STORAGE.garagePage, false))
        page = Number(loadFromStorage(STORAGE.garagePage, false))
    const { cars, totalCount } = await getCars({ _limit: carsPerPage, _page: page })
    let pageCount = Math.ceil((totalCount || carsPerPage) / carsPerPage)
    if (pageCount)
        saveToStorage(STORAGE.garagePageCount, pageCount.toString())
    const { buttonsPanel, raceBtn } = TopPanel(cars, startButtons, stopButtons)
    const createRaceWrapper = createElementWithClassName({ tagName: 'div', classname: styles['create-race-wrapper'] })
    const garageTitle = Text({ tagName: 'h2', text: `Garage Page(${totalCount!})`, classname: styles['garage-title'] })
    const pageTitle = Text({ tagName: 'p', text: `Page #${page || 1}`, classname: styles['page-title'] })
    const raceBody = createElementWithClassName({ tagName: 'div', classname: styles['race-body'] })
    cars.forEach(car => {
        const { carElement, startBtn, stopBtn } = createCarElement(car, raceBtn, <HTMLButtonElement>buttonsPanel.childNodes[2])
        startButtons.push(startBtn)
        stopButtons.push(stopBtn)
        raceBody.appendChild(carElement)
    })
    createRaceWrapper.append(garageTitle, pageTitle, raceBody)
    wrapper.append(
        buttonsPanel,
        createRaceWrapper,
        GarageFooter())
    return wrapper
}