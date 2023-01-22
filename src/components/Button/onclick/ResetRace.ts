import { ICar } from "interface";

export const ResetRace = (cars: ICar[], stopButtons: HTMLButtonElement[], createCarBtn: HTMLButtonElement) => {    
    cars.forEach((_, index) => {
        stopButtons[index]!.disabled = false;
        stopButtons[index]!.click()
    })
    createCarBtn.disabled = false
}