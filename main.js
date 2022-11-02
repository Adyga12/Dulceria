class container {
    #array;
    constructor() {
      this.#array = [];
    }
    save (id, nombre, cantidad, precio) {
        const obj = {
            id: id,
            nombre: nombre,
            cantidad: cantidad,
            precio: precio,
        }
        this.#array.push(obj);
    }

    getById(id){ 
        if (this.#array.find(x => x.id === id)){
             return this.#array.find(x => x.id === id);
        }
       return null;
    }

    getAll(){
        return this.#array;
    }

    deleteById(id){
        if(this.#array.map(obj => obj.id).indexOf(id) >= 0){
            let index = this.#array.map (obj => obj.id).indexOf(id);
            this.#array.splice(index,1);
        }else{
            console.log('obejto no encontrado');
        }
    }

    deleteAll(){
        while (this.#array.length > 0) {
            this.#array.pop();
        }
    }
  }

  const dulces = new container();
  
  dulces.save({id: 1, nombre: "Pulparindo", cantidad: 30, precio: 70});
  dulces.save({id: 2, nombre: "Pelon Pelorico", cantidad: 15,precio: 120});  
  dulces.save({id: 3, nombre: "Lucas muecas", cantidad: 8, precio: 100});  
  dulces.save({id: 4, nombre: "Pica fresas", cantidad: 50,precio: 90});  
  dulces.save({id: 5, nombre: "Rockaleta", cantidad: 15,precio: 95});  
  dulces.save({id: 6, nombre: "Skwinkles", cantidad: 8,precio: 85});  

console.log(dulces.getAll());

var dulceNuevo= {id:7, nombre:"doritos",cantidad: 7,precio: 105};
console.log(dulces.save(dulceNuevo));
console.log(dulces.getAll());


console.log(dulces.getById(5));

console.log(dulces.deleteById(7));
console.log(dulces.getAll());
  
console.log(dulces.deleteAll());
console.log(dulces.getAll());
console.log(dulces.getAll());
