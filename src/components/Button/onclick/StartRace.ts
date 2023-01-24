import { ICar } from "interface";
import { sessionStorageInstanse } from "helpers";

export const StartRace = (cars: ICar[], startButtons: HTMLButtonElement[]) => {
    sessionStorageInstanse.removeCurrentWinner()
    cars.forEach((_, index) => {
        startButtons[index]!.click()
    })
}