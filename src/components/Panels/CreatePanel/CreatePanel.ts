import { carsList, createElementWithClassName } from "helpers"
import { ICar } from "interface"
import { Button, NewCar } from "components/Button"
import { Input } from "components/Input"
import styles from './styles.module.css'
import defaultStyles from 'components/Panels/styles.module.css'
import { ComboBox } from "components/ComboBox"
import { Text } from "components/Text"
import { TITLE } from "enums"

export const CreatePanel = (): HTMLDivElement => {
    let car: ICar = { name: '', color: '' }
    const wrapper = createElementWithClassName({ tagName: 'div', classname: defaultStyles.wrapper })
    const createPanel = createElementWithClassName({ tagName: 'div', classname: [styles['create-car'], defaultStyles.panel] })
    const buttonsDiv = createElementWithClassName({ tagName: 'div', classname: defaultStyles.conteiner })
    const createBtn = Button({ value: TITLE.create, classname: defaultStyles.button, disable: true, onclick: () => { NewCar(car) } })
    const cancelBtn = Button({ value: TITLE.cancel, classname: defaultStyles.button, onclick: () => { wrapper.remove() } })
    buttonsDiv.append(createBtn, cancelBtn)    
    const manufacturer: string[] = carsList.map((el) => el.name)
    const nameManufacturerTitle = Text({ tagName: 'span', text: 'Select manufacturer: ', classname: defaultStyles.title })
    const nameManufacturer = ComboBox({ options: manufacturer, classname: defaultStyles.combobox })    
    nameManufacturer.addEventListener('input', function () {
        const indexManufacturer = this.selectedIndex - 1
        const models = carsList[indexManufacturer]!.models
        const newNameModel = ComboBox({ options: models, disabled: false, classname: defaultStyles.combobox })
        newNameModel.addEventListener('input', function () {
            car.name = `${nameManufacturer.value}: ${this.value}`
            createBtn.disabled = false
        })
        modelsDiv.replaceChild(newNameModel, <Node>modelsDiv.children[1])
    })
    const nameModelTitle = Text({ tagName: 'span', text: 'Select models: ', classname: defaultStyles.title })
    const nameModel = ComboBox({ options: '', disabled: true, classname: defaultStyles.combobox })
    const colorNewCarTitle = Text({ tagName: 'span', text: 'Select color: ', classname: defaultStyles.title })
    const colorNewCar = Input({ type: 'color', value: '', classname: defaultStyles.colorbox })        
    colorNewCar.addEventListener('input', function () { car.color = this.value })
    const manufacturerDiv = createElementWithClassName({ tagName: 'div', classname: defaultStyles.conteiner })
    manufacturerDiv.append(nameManufacturerTitle, nameManufacturer)
    const modelsDiv = createElementWithClassName({ tagName: 'div', classname: defaultStyles.conteiner })
    modelsDiv.append(nameModelTitle, nameModel)
    const colorDiv = createElementWithClassName({ tagName: 'div', classname: defaultStyles.conteiner })
    colorDiv.append(colorNewCarTitle, colorNewCar)
    createPanel.append(manufacturerDiv, modelsDiv, colorDiv, buttonsDiv)    
    wrapper.appendChild(createPanel)
    return wrapper
}