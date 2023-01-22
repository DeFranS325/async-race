import { ICar } from "./ICar";

export interface IGetCarsResponse {
    cars: ICar[],
    totalCount?: number
}