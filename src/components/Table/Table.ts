import styles from "./styles.module.css"
import { TableProps } from "./types"
import { clickSort, TableCell } from "components/TableCell"
import { createWinnerRow } from "helpers/createWinnerRow"
import { createElementWithClassName, loadFromStorage, winnersPerPage } from "helpers"
import { SORT, STORAGE } from "enums"

export const Table = async ({ headers, wins }: TableProps) => {
    const table = createElementWithClassName({ tagName: 'table', classname: styles.table })
    const thead = createElementWithClassName({ tagName: 'thead', classname: styles.thead })
    const tbody = createElementWithClassName({ tagName: 'tbody', classname: styles.tbody })
    headers.forEach((header) => {
        let th: HTMLTableCellElement = TableCell({ tagName: 'th', text: header, classname: styles.th })
        switch (header) {
            case 'Wins': th = TableCell({ tagName: 'th', text: header, classname: styles.th, onclick: () => { clickSort(SORT.WINS) } })
                break
            case 'Time': th = TableCell({ tagName: 'th', text: header, classname: styles.th, onclick: () => { clickSort(SORT.TIME) } })
                break
        }        
        thead.appendChild(th)
    })
    table.append(thead)
    const page = (loadFromStorage(STORAGE.winnersPage, false)) ? Number(loadFromStorage(STORAGE.winnersPage, false)) : 1

    const winnerRows = await Promise.all(
        wins.map((win, index) =>
            createWinnerRow(win, ((page - 1) * winnersPerPage) + index + 1),
        ),
    )

    tbody.replaceChildren(...winnerRows)
    table.append(tbody)

    return table
}