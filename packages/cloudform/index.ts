import { Template } from '@landrush/cloudform-types'
export * from '@landrush/cloudform-types'

export default function cloudform(template: Template) {
    return JSON.stringify(template, undefined, 2)
}
