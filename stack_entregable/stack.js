var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    // Añadir un elemento al stack usando el método push del array
    Stack.prototype.push = function (element) {
        this.items.push(element);
    };
    // Remover y devolver el elemento del tope del stack
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    // Devolver el elemento del tope sin removerlo
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    // Verificar si el stack está vacío
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    // Obtener el tamaño del stack
    Stack.prototype.size = function () {
        return this.items.length;
    };
    // Vaciar el stack
    Stack.prototype.clear = function () {
        this.items = [];
    };
    return Stack;
}());
// Ejemplo de uso
var stringStack = new Stack();
stringStack.push("Hola");
stringStack.push("Mundo");
stringStack.push("MI_nombre es");
stringStack.push("Johana");
console.log(stringStack.peek()); // Salida: "Johana"
console.log(stringStack.pop()); // Salida: "Johana"
console.log(stringStack.size()); // Salida: 3
console.log(stringStack.isEmpty()); // Salida: false
stringStack.clear();
console.log(stringStack.isEmpty()); // Salida: true
