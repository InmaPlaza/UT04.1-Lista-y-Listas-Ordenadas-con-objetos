/* Funciones que dependen de la pagina */
var lista = new Lista();

//Funcion que añade un elemento a una lista
function addName(name,surname){ 
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	error.innerHTML = "";  
 	try {
        var person = new Person(name,surname);
	 	lista.add(person);
	 	list.innerHTML = lista.toString();
 	} catch (err) {
 		error.innerHTML = err;
 	}	
}

//Funcion que borra un elemento de la lista
function pollName (){
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	list.innerHTML = "";  
 	try {
		lista.remove(lista.size()-1);
	 	list.innerHTML = lista.toString();
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

/* Objetos de la pagina */
function Person(name,surname){
    this.name = name;
    this.surname = surname;
    this.fullname = function(){
        return this.name + " " + this.surname;
    }
}

function Lista(){
    var list = [];
    var MAX_ELEM_LIST = 5; //Constante para almacenar el numero maximo de elementos

    //Funcion que devuelve true o false en funcion de si la lista esta vacia
    this.isEmpty = function(){
        return (list.length === 0);
    };

    //Funcion que devuelve true o false en función de si la lista está llena
    this.isFull = function(){
        return (list.length === MAX_ELEM_LIST);
    };

    //Funcion que devuelve el número de elementos de la lista
    this.size = function(){
        return list.length;
    };

    //REVISAR!!!!!!!!!
    //Funcion que añade un nuevo elemento a la lista manteniendo la relación de orden.
    //Devuelve el tamaño de la lista una vez añadido.
    this.add = function(elem){
        //Si el elemento no es una instancia de Person...
        if (!(elem instanceof Person)){
            throw "El elemento no es una instancia de Person."; //Lanzamos una excepcion
        }
    
        //Si la lista no esta llena...
        if(!this.isFull()){
            //Si la lista esta vacia...
            if(this.isEmpty()){
                list[0] = elem; //Añadimos el elemento en la posicion 0
            //Si el elemento ultimo de la lista es menor que el elemento que queremos añadir...
            } else if((list[this.size(list)-1]) < elem){
                list[this.size(list)] = elem; //Añadimos el elemento en la ultima posicion
            } else{
                var aux;
                var long = this.size(list);
                var boolean = false;
                for(var i = 0; i<= long; i++){
                    aux = list[i]; //Recogemos el valor de cada elemento de la lista
                    //Si el elemento de la lista es mayor que el nuevo elemento...
                    if(aux > elem){
                        boolean = true; //Cambiamos el valor de boolean a true
                    }
                    //Si el valor de boolean es true...movemos cada elemento a la derecha
                    if(boolean){
                        list[i] = elem;
                        elem = aux;
                    }
                }
            }
        } else{
            throw "La lista está llena. No puedes poner el elemento sobre ella";
        }
        return this.size(list); //Devolvemos la longitud de la lista
    };

    //Funcion que devuelve el elemento de la lista de la posición indicada
    this.get = function(index){
        //Si el indice es mayor que el tamaño de la lista o es menor o igual que -1...
        if(index > this.size(list) || index <= -1){
            throw "El indice esta fuera de los limites de la lista."; //Lanzamos una excepcion
        }
        else {
            return list[index].fullname(); //Devolvemos el elemento de la posicion indicada
        }
    };

    //Funcion que devuelve la lista en formato cadena. El delimitador de elementos será “-“
    this.toString = function(){
        var str = "";

        //Si la lista no esta vacia...
        if (!this.isEmpty(list)){
            var length = this.size(list); //Recogemos su tamaño en una variable	
            for (var i = 0; i < length-1; i++){ //Recorremos la lista y vamos recogiendo los valores añadiendo el "-"
                str = str + list[i].fullname() + " - ";
            } 		 		
            str = str + list[i].fullname(); 		
        } 	
        return str;
    };

    //Funcion que devuelve la posición del objeto indicado,si el objeto no está en la lista devuelve -1
    this.indexOf = function(elem){
        var position = -1;

        //Si el elemento es una instancia de Person...
        if ((elem instanceof Person)) {
            //Si la lista no esta vacia...
            if (!this.isEmpty()){
                //Asignamos a la variable position,la posicion de la primera aparicion del objeto indicado
                position = list.indexOf(elem);   		 		
            } 	
        } else{
            throw "El elemento no es una instancia de Person"; //Sino...lanzamos una excepcion
        }
        return position; //Devolvemos la posicion
    };

    //Funcion que devuelve el máximo número de elementos que podemos tener en la lista
    this.capacity = function(){
        return MAX_ELEM_LIST;
    };

    //Funcion que devuelve vacía la lista
    this.clear = function(){
        //Si la lista no esta vacia...
        if (!this.isEmpty()){
            list.splice(0, list.length); //Borramos todos los elementos 		 		
        } 
    };

    //Funcion que devuelve el primer elemento de la lista
    this.firstElement = function(){
        var first;

        //Si la lista no esta vacia...
        if (!this.isEmpty()){
            first = list[0].fullname(); //Asignamos a la variable first, el valor del primer elemento de la lista	
        } else {
            throw "La lista está vacia."; //Sino...lanzamos una excepcion
        }
        return first;
    };

    //Funcion que devuelve el ultimo elemento de la lista
    this.lastElement = function(){
        var last;

        //Si la lista no esta vacia...
        if (!this.isEmpty()){
            last = list[list.length-1].fullname(); //Asignamos a la variable last, el valor del ultimo elemento de la lista			
        } else {
            throw "La lista está vacia."; //Sino...lanzamos una excepcion
        }
        return last;
    };

    //Funcion que elimina el elemento de la posición indicada. Devuelve el elemento borrado
    this.remove = function(index){
        var persona;

        //Si el indice es mayor que el tamaño de la lista o es menor o igual que -1...
        if(index > this.size(list) || index <= -1){
            throw "El indice esta fuera de los limites de la lista."; //Lanzamos una excepcion
        } else {
            persona = list.splice(index,1); //Eliminamos el elemento con el indice indicado
        }
        return persona[0].fullname();
    };

    //Funcion que elimina el elemento indicado de la lista.
    //Devuelve true si se ha podido borrar el elemento, false en caso contrario.
    this.removeElement = function(elem,index){
        var borrado = false;
    
        //Si el elemento es una instancia de Person...
        if (elem instanceof Person) {
            var posicion = this.indexOf(elem); //Recogemos su posicion
    
            //Si la posicion es distinta a -1...
            if(posicion != -1){
                list.splice(posicion,1); //Eliminamos el elemento
                borrado = true; //Cambiamos el valor de borrado a true
            }
        } else {
            throw "El elemento no es una instancia de Person."; //Lanzamos una excepcion
        }
        return borrado; //Devolvemos el valor de borrado
    };
}

function testlist(){
    var list = new Lista();

    var per1 = new Person("Laura","Nieto");
    var per2 = new Person("Roberto","Paton");
    var per3 = new Person("Ana","Montero");
    var per4 = new Person("Raul","Garcia");
    var per5 = new Person("Maria","Fernandez");
    var per6 = new Person("Jesus","Jimenez");

    console.log ("Capacidad: " + list.capacity());
    console.log("¿Esta vacia la lista?: " + list.isEmpty());
    console.log("¿Esta llena la lista?: " + list.isFull());
    console.log("Longitud: " + list.size());

    try {
		list.add(per1);
		list.add(per2);
		list.add(per3);
		list.add(per4);
		list.add(per5);
		list.add(per6); //Para que genere una exepcion
	} catch (err) {
		console.log("Intento añadir una 6 persona: " + err);
    }
    
    console.log ("La lista llena: " + list.toString());
    console.log ("Recogo el elemento de la posicion 3: " + list.get(3));
    
    console.log ("¿Esta "+ per1.fullname() + " en la lista?: " + list.indexOf(per1));	 	
    console.log ("¿Esta "+ per6.fullname() + " en la lista?: " + list.lastIndexOf(per6));
    
    console.log ("El primer elemento de la lista: " + list.firstElement());
    console.log ("El ultimo elemento de la lista: " + list.lastElement());
    
    //clear(list);

    console.log ("Borramos a " + per1.fullname() + ": "+ list.removeElement(per1));
    console.log ("La lista llena: " + list.toString());

    try {
		var i = list.size() - 1;
		while (true){
			console.log ("Elemento borrado: " + list.remove(i));
			console.log ("La lista: " + list.toString(list));
			i--;		 	
		}
	} catch (err) {
		console.log(err); //Cuando la lista este vacia, una exception sera capturada.
	}
}
window.onload = testlist;