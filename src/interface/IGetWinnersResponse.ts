import { IWinner } from "./IWinner";

export interface IGetWinnersResponse {
    winners: IWinner[],
    totalCount?: number
}