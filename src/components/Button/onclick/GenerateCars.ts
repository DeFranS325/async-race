import { createCar } from "api/garage/createCar"
import { generateCount, generateNameCar } from "helpers"
import { ICar } from "interface"
import { renderComponent } from "router"

export const GenerateCars = async () => {
    for (let i = 0; i < generateCount; i++) {
        const car: ICar = {
            name: await generateNameCar(),
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` 
        }
        await createCar(car)
    }
    renderComponent()
}