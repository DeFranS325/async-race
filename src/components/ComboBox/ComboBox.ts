import styles from 'components/ComboBox/styles.module.css'
import { createElementWithClassName } from 'helpers'
import { ComboBoxOption } from './Option'

import { ComboBoxProps } from './types'

export const ComboBox = ({ options, disabled = false, classname }: ComboBoxProps) => {
    const comboBox = createElementWithClassName({ tagName: 'select', classname })
    comboBox.disabled = disabled
    comboBox.appendChild(ComboBoxOption({ value: '', text: 'Select item...', selected: true, disabled: true, classname: styles.option }))
    if (Array.isArray(options))
        options.forEach((option) => {
            comboBox.appendChild(ComboBoxOption({ value: option, text: option, classname: styles.option }))
        })
    else 
        comboBox.appendChild(ComboBoxOption({ value: options, text: options, classname: styles.option }))

    return comboBox
}