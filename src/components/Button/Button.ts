import { addClassnameToElement, createElementWithClassName } from 'helpers'
import styles from './styles.module.css'
import { ButtonProps } from './types'

export const Button = ({ value = '', classname, disable = false, onclick }: ButtonProps) => {
    const buttonElement = createElementWithClassName({ tagName: 'button', classname })
    addClassnameToElement({ element: buttonElement, classname: styles.button })
    buttonElement.disabled = disable
    const handleClick = (event: MouseEvent) => {
        event.preventDefault()
        onclick?.()
    }
    buttonElement.textContent = value
    buttonElement.addEventListener('click', handleClick)
    return buttonElement
}
