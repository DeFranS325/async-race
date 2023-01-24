import styles from "pages/Garage/styles.module.css"
import { createElementWithClassName } from "./createElementWithClassName";
import { Button, RemoveCar } from "components/Button";
import { Text } from "components/Text";
import { ICar } from "interface";
import { addCarImage } from "./addCarImage";
import { Image } from "components/Image";
import { startAnimation } from "./startAnimation";
import { Body } from "components/Body";
import { UpdatePanel } from "components/Panels/UpdatePanel";
import { TITLE } from "enums";
import finishFlag from 'assets/images/finish.png';

export const createCarElement = (car: ICar, raceButton: HTMLButtonElement, resetBtn: HTMLButtonElement): { carElement: HTMLDivElement, startBtn: HTMLButtonElement, stopBtn: HTMLButtonElement } => {
    const carElement = createElementWithClassName({ tagName: 'div', classname: styles['car-wrapper'] });
    const carTitle = createElementWithClassName({ tagName: 'div', classname: styles['car-title'] });
    const carSelect = Button({
        value: TITLE.edit, classname: styles['car-select-btn'],
        onclick: () => { const updatePanel: HTMLDivElement = UpdatePanel(car); Body.append(updatePanel) }
    })
    const carRemove = Button({ value: TITLE.remove, classname: styles['car-remove-btn'], onclick: () => { RemoveCar(car) } })
    const carName = Text({ tagName: 'span', text: `${car.name} (ID:${car.id})`, classname: styles['car-name'] })
    const carBody = createElementWithClassName({ tagName: 'div', classname: styles['car-body'] });
    const carStart = Button({ value: TITLE.start, classname: styles['car-start-btn'] })
    const carStop = Button({ value: TITLE.stop, disable: true, classname: styles['car-stop-btn'] })
    const carDiv = createElementWithClassName({ tagName: 'div', classname: styles['car-div'] });
    const carImg = addCarImage(car.color)
    carDiv.append(carImg);
    const finish = Image({ src: finishFlag, alt: 'Finish', classname: styles['car-finish'] })
    carBody.append(carStart, carStop, carDiv, finish)
    carTitle.append(carSelect, carRemove, carName) 
    carElement.append(carTitle, carBody)
    startAnimation(car, carImg, carStart, carStop, raceButton, resetBtn)
    return { carElement: carElement, startBtn: carStart, stopBtn: carStop };
}