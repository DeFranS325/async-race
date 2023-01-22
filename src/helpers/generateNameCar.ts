import { carsList } from "./carsList";

export const generateNameCar = (): string => {
    const idManufacturer: number = Math.round(Math.random() * (carsList.length-1))    
    const manufacturer = carsList[idManufacturer]!.name
    const n = carsList[idManufacturer]!.models.length - 1   
    const idModel: number = Math.round(Math.random() * n)
    const model = carsList[idManufacturer]!.models[idModel]!
    let name: string = `${manufacturer}: ${model}`;
    return name
}