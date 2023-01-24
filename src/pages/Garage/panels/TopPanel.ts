import styles from './styles.module.css'
import { Button, GenerateCars, ResetRace, StartRace } from 'components/Button'
import { createElementWithClassName, raceStartAttribute } from 'helpers'
import { Body } from 'components/Body'
import { ICar } from 'interface'
import { CreatePanel } from 'components/Panels/CreatePanel'
import { TITLE } from 'enums'

export const TopPanel = (cars: ICar[], startButtons: HTMLButtonElement[], stopButtons: HTMLButtonElement[]): { buttonsPanel: HTMLDivElement, raceBtn: HTMLButtonElement } => {
    const buttonsPanel = createElementWithClassName({ tagName: 'div', classname: styles['button-panel'] })
    const createCarBtn = Button({ value: TITLE.create, classname: styles['race-btn'], onclick: () => { const createPanel: HTMLDivElement = CreatePanel(); Body.append(createPanel) } })
    const raceBtn = Button({ value: TITLE.race, classname: styles['race-btn'] })
    const resetBtn = Button({ value: TITLE.reset, disable: true, classname: styles['reset-btn'] })
    const generateBtn = Button({ value: TITLE.generateCars, classname: styles['generate-btn'], onclick: GenerateCars })
    raceBtn.addEventListener('click', () => {
        raceBtn.disabled = true
        createCarBtn.disabled = true
        resetBtn.disabled = true
        generateBtn.disabled = true
        raceBtn.setAttribute(raceStartAttribute, 'true')
        StartRace(cars, startButtons)
    })
    resetBtn.addEventListener('click', () => {
        raceBtn.disabled = false
        createCarBtn.disabled = false
        resetBtn.disabled = true
        generateBtn.disabled = false
        raceBtn.removeAttribute(raceStartAttribute)
        ResetRace(cars, stopButtons, createCarBtn)
    })

    buttonsPanel.append( createCarBtn, raceBtn, resetBtn, generateBtn )
    return { buttonsPanel, raceBtn }
}