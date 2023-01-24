import { createCar } from "api/garage/createCar"
import { ICar } from "interface"
import { renderComponent } from "router"

export const NewCar = async (car: ICar) => {
    await createCar(car)
    renderComponent()
}