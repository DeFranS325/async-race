import { createElementWithClassName } from 'helpers'

import { TableRowProps } from './types'

export const TableRow = ({ classname }: TableRowProps) => {
    const rowElement = createElementWithClassName({ tagName: 'tr', classname })

    return rowElement
}
