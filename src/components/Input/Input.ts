import { createElementWithClassName } from 'helpers'

import { InputProps } from './types'

export const Input = ({ type, value = '', classname }: InputProps) => {
    const inputElement = createElementWithClassName({ tagName: 'input', classname })
    inputElement.type = type
    inputElement.value = value

    return inputElement
}