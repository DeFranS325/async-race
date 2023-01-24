import { ORDER, SORT } from "../enums";
import { IWinner } from "../interface";

export const sortWinners = (winners: IWinner[], sort: string, order: string): IWinner[] => {
    let result: IWinner[] = winners
    switch (sort) {
        case SORT.ID:
            result = (order === ORDER.ASC) ?
                result.sort((a, b) => a.id - b.id) :
                result.sort((a, b) => b.id - a.id); break
        case SORT.TIME:
            result = (order === ORDER.ASC) ?
                result.sort((a, b) => a.time - b.time) :
                result.sort((a, b) => b.time - a.time); break
        case SORT.WINS:
            result = (order === ORDER.ASC) ?
                result.sort((a, b) => a.wins - b.wins) :
                result.sort((a, b) => b.wins - a.wins); break
    }
    return result
}