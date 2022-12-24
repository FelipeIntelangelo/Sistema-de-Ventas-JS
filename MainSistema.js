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

class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = Orden.contadorOrdenes++;
        this._productos = [];
    }

    get idOrden(){
        return this._idOrden;
    }



    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }else{
            console.log('Maxima cantidad de productos alcanzados');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += producto.toString() + '\n ';
        }
        console.log(`Orden: ${this._idOrden} | Total: ${this.calcularTotal()} |
    Productos: ${productosOrden}`);
    }
}



producto1 = new Producto('SteelSeries', 15000);
producto2 = new Producto('HyperX', 20000);

producto3 = new Producto('Logitech', 50000);


orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.mostrarOrden();

orden2 = new Orden();
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden2.mostrarOrden();