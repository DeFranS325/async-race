import { removeCars } from "api/garage/removeCar"
import { ICar } from "interface"
import { renderComponent } from "router"

export const RemoveCar = async (car: ICar) => {
    await removeCars(car)
    renderComponent()
}