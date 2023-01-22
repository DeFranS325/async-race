import styles from "pages/Garage/styles.module.css"
import { carImage } from "./constants"
import { createElementWithClassName } from "./createElementWithClassName"

export function addCarImage(color: string): HTMLDivElement {
    const car = createElementWithClassName({ tagName: 'div', classname: styles['car-img'] })
    car.innerHTML = carImage(color);
    return car
}