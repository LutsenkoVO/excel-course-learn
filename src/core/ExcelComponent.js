import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribers = []
        this.prepare()
    }
    // налаштовуємо компонент до init
    prepare() {}
    // повертаємо шаблон компонента
    toHTML() {
        return ''
    }
    // повідомляємо слухачів про подію event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }
    // підписуємося на подію event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    // Ініціалізуємо компонент
    // добавляємо DOM слухачів
    init() {
        this.initDOMListeners()
    }
    // видаляємо компонент
    // чистимо слухачів
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}