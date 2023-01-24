import { createElementWithClassName } from 'helpers'

import { ComboBoxOptionProps } from './types'

export const ComboBoxOption = ({ value = '', text = '', disabled = false, selected = false, classname }: ComboBoxOptionProps) => {
    const option = createElementWithClassName({ tagName: 'option', classname })
    option.selected = selected
    option.disabled = disabled
    option.value = value
    option.innerHTML = text

    return option
}