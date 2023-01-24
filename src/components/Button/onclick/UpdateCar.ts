import { updateCar } from "api"
import { ICar } from "interface"
import { renderComponent } from "router"

export const UpdateCar = async (car: ICar, updatePanel: HTMLDivElement) => {
    await updateCar(car)
    updatePanel.remove()
    renderComponent()
}