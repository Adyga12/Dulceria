class container {
    #array;
    #file
    constructor(road) {
        this.#array = [];
        this.#file = road;
        }  
        save (id, nombre, cantidad, precio) {
            const obj = {
                id: id,
                nombre:nombre,
                cantidad: cantidad,
                precio: precio
            };
            try {
                this.#array.push(obj);
            } catch (error) {
                throw new Error ('Error en el metodo save');
            }
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
            console.log('objeto no encontrado');
        }
    }

    deleteAll(){
        while (this.#array.length > 0) {
            this.#array.pop();
        }
    }
  }
const element = new container 

 element.save (1, 'Pulparindo', 30, 70);
 element.save (2, 'Pelon Pelorico', 15, 120);
 element.save (3, 'Lucas muecas', 8, 100);
 element.save (4, 'Pica fresas', 50, 90);
 element.save (5, 'Rockaleta', 15, 95);
 element.save (6, 'Skwinkles', 8, 85);

 console.log(element.getAll());

 element.save (7, 'doritos',7 ,105);
 console.log(element.getAll());
 
 console.log(element.getById(5));
 
 console.log(element.deleteById(7));
 console.log(element.getAll());
   
 console.log(element.deleteAll());
 console.log(element.getAll());