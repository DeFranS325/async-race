import styles from './styles.module.css'
import defaultStyles from 'components/Panels/styles.module.css'
import { Button, UpdateCar } from 'components/Button'
import { Input } from 'components/Input'
import { carsList, createElementWithClassName } from 'helpers'
import { ICar } from 'interface'
import { Text } from 'components/Text'
import { ComboBox } from 'components/ComboBox'
import { TITLE } from 'enums'

export const UpdatePanel = (car: ICar): HTMLDivElement => {
    const wrapper = createElementWithClassName({ tagName: 'div', classname: defaultStyles.wrapper })
    const updatePanel = createElementWithClassName({ tagName: 'div', classname: [styles['update-car'], defaultStyles.panel] })
    const buttonsDiv = createElementWithClassName({ tagName: 'div', classname: defaultStyles.conteiner })
    const updateBtn = Button({ value: TITLE.update, classname: defaultStyles.button, onclick: async () => { await UpdateCar(car, updatePanel) } })
    const cancelBtn = Button({ value: TITLE.cancel, classname: defaultStyles.button, onclick: () => { wrapper.remove() } })
    buttonsDiv.append(updateBtn, cancelBtn)
    const manufacturer: string[] = carsList.map((el) => el.name)
    const nameManufacturerTitle = Text({ tagName: 'span', text: 'Select manufacturer: ', classname: defaultStyles.title })
    const nameManufacturer = ComboBox({ options: manufacturer, classname: defaultStyles.combobox })
    let [manufCar, modelCar] = car.name.split(': ')
    const manufIndex = manufacturer.indexOf(manufCar!) + 1
    nameManufacturer.selectedIndex = manufIndex
    nameManufacturer.addEventListener('input', function () {
        const indexManufacturer = this.selectedIndex - 1
        const models = carsList[indexManufacturer]!.models
        const newNameModel = ComboBox({ options: models, disabled: false, classname: defaultStyles.combobox })
        newNameModel.addEventListener('input', function () { car.name = `${nameManufacturer.value}: ${this.value}` })
        modelsDiv.replaceChild(newNameModel, <Node>modelsDiv.children[1])
    })
    const nameModelTitle = Text({ tagName: 'span', text: 'Select models: ', classname: defaultStyles.title })
    const models = carsList[manufIndex-1]!.models
    const nameModel = ComboBox({ options: models, disabled: false, classname: defaultStyles.combobox })
    nameModel.selectedIndex = models.indexOf(modelCar!) + 1
    nameModel.addEventListener('input', function () { car.name = `${nameManufacturer.value}: ${this.value}` })
    const colorNewCarTitle = Text({ tagName: 'span', text: 'Select color: ', classname: defaultStyles.title })
    const colorNewCar = Input({ type: 'color', value: car.color, classname: defaultStyles.colorbox })
    colorNewCar.addEventListener('input', function () { car.color = this.value })
    const manufacturerDiv = createElementWithClassName({ tagName: 'div', classname: defaultStyles.conteiner })
    manufacturerDiv.append(nameManufacturerTitle, nameManufacturer)
    const modelsDiv = createElementWithClassName({ tagName: 'div', classname: defaultStyles.conteiner })
    modelsDiv.append(nameModelTitle, nameModel)
    const colorDiv = createElementWithClassName({ tagName: 'div', classname: defaultStyles.conteiner })
    colorDiv.append(colorNewCarTitle, colorNewCar)
    updatePanel.append(manufacturerDiv, modelsDiv, colorDiv, buttonsDiv)    
    wrapper.appendChild(updatePanel)
    return wrapper
}