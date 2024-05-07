module.exports = {

    /**
     * Suma de dos numeros
     * @param {*} n1 
     * @param {*} n2 
     * @returns 
     */
    suma: function (n1, n2) {
        return (this.esNumero(n1, n2)) ? n1 + n2 : this.mensajeError();
    },

    /**
     * Resta de dos numeros
     * @param {*} n1 
     * @param {*} n2 
     * @returns 
     */
    resta: function (n1, n2) {
        return (this.esNumero(n1, n2)) ? n1 - n2 : this.mensajeError();
    },

    /**
     * multiplicacion de dos numeros
     * @param {*} n1 
     * @param {*} n2 
     * @returns 
     */
    multiplicacion: function (n1, n2) {
        return (this.esNumero(n1, n2)) ? n1 * n2 : this.mensajeError();
    },

    /**
     * division de dos numeros
     * @param {*} n1 
     * @param {*} n2 
     * @returns 
     */
    division: function (n1, n2) {
        return (this.esNumero(n1, n2)) ? n1 / n2 : this.mensajeError();
    },

    /**
     * Mensaje de error cuando no se ingresen valores numericos
     */
    mensajeError: function () {
        console.warn("Un valor o ambos valores no son numéricos");
    },

    /**
     * Comprueba que los valores sean numéricos
     * @param {*} n1 
     * @param {*} n2 
     * @returns boolean
     */
    esNumero: function (n1, n2) {
        return !((typeof n1 !== 'number' || typeof n2 !== 'number'));
    }
}