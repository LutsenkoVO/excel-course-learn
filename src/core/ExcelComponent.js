import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
    }
    // повертає шаблон компонента
    toHTML() {
        return ''
    }
    init() {
        this.initDOMListeners()
    }
}