class dulces {
  constructor(id, nombre, cantidad, precio) {
    this.id = id;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
    dulces.all.push(this);
  }

  getById(id){
      return dulces.all.find(x => x.id === id);
  }

  getAll(){
      return dulces.all;
  }

  saveObj(obj){
      dulces.all.push(obj);
  }

  deleteById(num){
      let i = dulces.all.find(x=> x.id === num);
      let j = dulces.all.indexOf(i);
      dulces.all.splice(j, 1);
      return dulces.all;
  }

  deleteAll(){
      while (dulces.all.length > 0) {
          dulces.all.pop();
      }
  }

  static all = []
}
var candies = [];

var candie1= new dulces(1, "Pulparindo", 15, 30);  
var candie2= new dulces(2, "pelon pelorico", 6, 60);  
var candie3 = new dulces(3, "lucas muecas", 6, 65);  
var candie4= new dulces(4, "pica fresas", 50, 35);
var candie5 = new dulces(5, "rocka leta", 15, 90);
var candie6= new dulces(6, "skwinkles", 8, 95);

console.log(candie1.getById(3));

console.log(candie1.getAll());

var candie7= new dulces(7, "doritos", 7, 105);
console.log(candie1.saveObj(candie7));
console.log(candie1.getAll());

console.log(candie1.deleteById(7));
console.log(candie1.getAll());

console.log(candie1.deleteAll());
console.log(candie1.getAll());
