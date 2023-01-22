import styles from "components/Table/styles.module.css"

import { getCar } from "api";
import { TableCell } from "components/TableCell";
import { TableRow } from "components/TableRow";
import { ICar, IWinner } from "interface";
import { addCarImage } from "./addCarImage";

export const createWinnerRow = async (winner: IWinner, num: number) => {
    const winnerCar: ICar = await getCar(winner.id)
    let winnersRow = TableRow({ classname: styles.tr })
    const tdNum = TableCell({ tagName: 'td', text: `${num}`, classname: styles.td })
    const tdImage = TableCell({ tagName: 'td', text: addCarImage(winnerCar.color).innerHTML, classname: styles.td })
    const tdNameCar = TableCell({ tagName: 'td', text: winnerCar.name, classname: styles.td })
    const tdWinsCount = TableCell({ tagName: 'td', text: `${winner.wins}`, classname: styles.td })
    const tdTime = TableCell({ tagName: 'td', text: `${winner.time}`, classname: styles.td })

    winnersRow.append(tdNum, tdImage, tdNameCar, tdWinsCount, tdTime)
    return winnersRow
}