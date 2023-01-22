import { gotoPage } from "helpers"

export const PrevPage = (pageName: string) => {
    gotoPage('-', pageName)
}