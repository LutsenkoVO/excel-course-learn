export class Emitter {
    constructor() {
      this.listeners = {}
    }
    // dispatch, fire, trigger
    // Повідомляємо слухачів якщо вони є
    // table.emit('table:select', {a: 1})
    emit(event, ...args) {
      if (!Array.isArray(this.listeners[event])) {
        return false
      }
      this.listeners[event].forEach(listener => {
        listener(...args)
      })
      return true
    }
    // on, listen
    // Підписуємося на повідомлення
    // Добавляємо нового слухача
    // formula.subscribe('table:select', () => {})
    subscribe(event, fn) {
      this.listeners[event] = this.listeners[event] || []
      this.listeners[event].push(fn)
      return () => {
        this.listeners[event] =
          this.listeners[event].filter(listener => listener !== fn)
      }
    }
  }