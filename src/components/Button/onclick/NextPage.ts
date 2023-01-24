import { gotoPage } from "helpers"

export const NextPage = (pageName: string) => {
    gotoPage('+', pageName)
}