class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = Producto.contadorProductos++;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `
        ID Producto: ${this._idProducto}
        Nombre: ${this._nombre}
        Precio: ${this._precio}` 
    }
}
