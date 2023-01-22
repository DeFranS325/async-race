import styles from './styles.module.css'
import defaultStyles from 'components/Panels/styles.module.css'
import { Button } from 'components/Button'
import { addCarImage, createElementWithClassName } from 'helpers'
import { ICar } from 'interface'
import { Text } from 'components/Text'
import { TITLE } from 'enums'

export const WinnerPanel = (car: ICar, time: number): HTMLDivElement => {
    const wrapper = createElementWithClassName({ tagName: 'div', classname: defaultStyles.wrapper })
    const winnerPanel = createElementWithClassName({ tagName: 'div', classname: styles['winner-panel'] })
    const winnerTitle = Text({ tagName: 'h1', text: 'CONGRATULATION!!!', classname: styles.title })
    const winnerCar = Text({ tagName: 'h2', text: `${car.name}`, classname: styles['winner-name'] })
    const carDiv = createElementWithClassName({ tagName: 'div', classname: defaultStyles.conteiner });
    carDiv.innerHTML = addCarImage(car.color).innerHTML
    const winnerTime = Text({ tagName: 'h2', text: `Time: ${time}s`, classname: styles['winner-time'] })
    const closeBtn = Button({ value: TITLE.close, classname: styles.button, onclick: () => { wrapper.remove() } })

    winnerPanel.append(
        winnerTitle,
        winnerCar,
        carDiv,
        winnerTime,
        closeBtn        
    )
    wrapper.appendChild(winnerPanel)
    return wrapper
}