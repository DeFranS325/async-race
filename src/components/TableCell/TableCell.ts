import { createElementWithClassName } from 'helpers'

import { TableCellProps } from './types'

export const TableCell = ({ tagName, text = '', classname, onclick }: TableCellProps) => {
    const cellElement = createElementWithClassName({ tagName: tagName, classname })
    const handleClick = (event: MouseEvent) => {
        event.preventDefault()
        onclick?.()
    }
    cellElement.innerHTML = text
    cellElement.addEventListener('click', handleClick)
    return cellElement
}
