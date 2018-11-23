"use strict";

function Person(name,surname){
    this.name = name;
    this.surname = surname;
} 

function Lista(){
    var list = [];
    var MAX_ELEM_LIST = 5; //Constante para almacenar el numero maximo de elementos

    Object.defineProperty(this, "arrayPerson",{
        get: function(){
            console.log('get!');
            return list;
        },
    });

    this.getList = function(){
        return list;
    };

    this.isEmpty = function(){
        return (list.length === 0);
    };

    this.isEmpty = function(){
        return (list.length === 0);
    };
    
    this.isFull = function(){
        return (list.length === MAX_ELEM_LIST);
    };

    this.size = function(){
        return list.length;
    };

    this.add = function(elem){
        //Si el elemento no es una instancia de Person...
        if (!(elem instanceof Person)){
            throw "El elemento no es una instancia de Person"; //Lanzamos una excepcion
        }

        //Si la lista no esta llena...añade el elemento
        if (!this.isFull(list)){
            arrayPerson.push(elem);
        } else { //Sino lanza una excepcion diciendo que esta llena
           throw "La lista está llena. No puedes poner el elemento sobre ella";
        }
        return this.size(list); //Devolvemos el tamaño de la lista
    };

    this.addAt = function(elem){
        //Si el elemento no es una instancia de Person...
        if (!(elem instanceof Person)) {
            throw "El elemento no es una instancia de Person"; //Lanzamos una excepcion
        }

        //Si el indice es mayor que el tamaño de la lista o es menor o igual que -1...
        if(index > this.size(list) || index <= -1){
            throw "El indice esta fuera de los limites de la lista."; //Lanzamos una excepcion
        }

        //Si la lista no esta llena...
        if (!this.isFull(list)){
            list.splice(index,0,elem); //Añadimos el elemento en el indice indicado
        } else {
            throw "La lista está llena. No puedes poner el elemento sobre ella";
        }
        return this.size(list); //Devolvemos el tamaño de la lista
    };
    
}

function test(){
    var pers1 = new Person("Inma","Plaza");
    var pers2 = new Person("Alejandro","Rodriguez");

    var lista = new Lista();

    lista.add(pers1);
    lista.add(pers2);
    console.log(lista.getList());
    console.log(lista.isEmpty());
}
window.onload = test;


function cleanData(){
 	document.getElementById ("num").value = "" ;  
}

//Funcion que añade un numero a una lista
function addNumber(num){
	var error = document.getElementById ("error");
	var list = document.getElementById ("lista");
	error.innerHTML = "";  
 	try {
	 	add(NUMBERS_LIST,num);
	 	list.innerHTML = toString(NUMBERS_LIST);
 	} catch (err) {
 		error.innerHTML = err;
 	}	
}

//Funcion que borra un numero de la lista
function pollNumber (){
	var error = document.getElementById ("error");
	var list = document.getElementById ("lista");
	error.innerHTML = "";  
 	try {
	 	poll(NUMBERS_LIST);
	 	list.innerHTML = toString(NUMBERS_LIST);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}


//Funcion que devuelve el elemento de la lista de la posición indicada
function get(list,index){
    //Si el indice es mayor que el tamaño de la lista o es menor o igual que -1...
    if(index > size(list) || index <= -1){
        throw "El indice esta fuera de los limites de la lista."; //Lanzamos una excepcion
    }
    else {
        return list[index]; //Devolvemos el elemento de la posicion indicada
    }
}

//Funcion que devuelve la lista en formato cadena. El delimitador de elementos será “-“
function toString(list){
    var str = "";

    //Si la lista no esta vacia...
    if (!isEmpty(list)){
        var length = size(list); //Recogemos su tamaño en una variable	
        for (var i = 0; i < length-1; i++){ //Recorremos la lista y vamos recogiendo los valores añadiendo el "-"
            str = str + list[i] + " - ";
        } 		 		
        str = str + list[i]; 		
    } 	
    return str;
} 

//Funcion que devuelve la posición del elemento indicado,si el elemento no está en la lista devuelve -1
function indexOf(list,elem){
    var position = -1;
    elem = parseInt(elem);
     
    //Si el elemento es un numero...
 	if (!isNaN(elem)) {
        //Si la lista no esta vacia...
	 	if (!isEmpty(list)){
            //Asignamos a la variable position,la posicion de la primera aparicion del elemento indicado
	 		position = list.indexOf(elem);   		 		
	 	} 	
 	} else{
 		throw "El elemento no es un numero."; //Sino...lanzamos una excepcion
 	}
 	return position; //Devolvemos la posicion
}

//Funcion que devuelve la posición del elemento indicado comenzando por el final. 
//Si el elemento no está en la lista devuelve -1
function lastIndexOf(list,elem){
    var position = -1;
    elem = parseInt(elem);
     
    //Si el elemento es un numero...
 	if (!isNaN(elem)) {
        //Si la lista no esta vacia...
	 	if (!isEmpty(list)){
            //Asignamos a la variable position,la posicion de la ultima aparicion del elemento indicado
	 		position = list.lastIndexOf(elem);  		 		
	 	} 	
 	} else{
 		throw "El elemento no es un numero."; //Sino...lanzamos una excepcion
 	}
 	return position; //Devolvemos la posicion
}

//Funcion que devuelve el máximo número de elementos que podemos tener en la lista
function capacity(list){
    return MAX_ELEM_LIST;
} 

//Funcion que devuelve vacía la lista
function clear(list){
    var elem = Number.NaN;

    //Si la lista no esta vacia...
    if (!isEmpty(list)){
        list.splice(0, list.length); //Borramos todos los elementos 		 		
    } 	
} 

//Funcion que devuelve el primer elemento de la lista
function firstElement(list){
    var first;

    //Si la lista no esta vacia...
    if (!isEmpty(list)){
        first = list[0]; //Asignamos a la variable first, el valor del primer elemento de la lista	
    } else {
        throw "La lista está vacia."; //Sino...lanzamos una excepcion
    }
    return first;
} 

//Funcion que devuelve el ultimo elemento de la lista
function lastElement(list){
    var last;

    //Si la lista no esta vacia...
    if (!isEmpty(list)){
        last = list[list.length-1]; //Asignamos a la variable last, el valor del ultimo elemento de la lista			
    } else {
        throw "La lista está vacia."; //Sino...lanzamos una excepcion
    }
    return last;
} 

//Funcion que elimina el elemento de la posición indicada. Devuelve el elemento borrado
function remove(list,index){
    var num;

    //Si el indice es mayor que el tamaño de la lista o es menor o igual que -1...
    if(index > size(list) || index <= -1){
        throw "El indice esta fuera de los limites de la lista."; //Lanzamos una excepcion
    } else {
        num = list.splice(index,1); //Eliminamos el elemento con el indice indicado
    }
    return num;
}

//Funcion que elimina el elemento indicado de la lista.
//Devuelve true si se ha podido borrar el elemento, false en caso contrario.
function removeElement(list,elem){
    elem = parseInt(elem);
    var borrado = false;

    //Si el elemento es un numero...
    if (!isNaN(elem)) {
        var posicion = indexOf(list,elem); //Recogemos su posicion

        //Si la posicion es distinta a -1...
        if(posicion != -1){
            list.splice(posicion,1); //Eliminamos el elemento
            borrado = true; //Cambiamos el valor de borrado a true
        }
    } else {
        throw "El elemento no es un numero."; //Lanzamos una excepcion
    }
    return borrado; //Devolvemos el valor de borrado
}

//Funcion que reemplaza el elemento de la lista indicado por el índice.
//Devuelve el elemento que estaba anteriormente en la lista.
function set(list,elem,index){
    elem = parseInt(elem);
    var num;

    //Si el indice es mayor que el tamaño de la lista o es menor o igual que -1...
    if(index > size(list) || index <= -1){
        throw "El indice esta fuera de los limites de la lista."; //Lanzamos una excepcion
    } else {
        //Si el elemento no es un numero...
        if(isNaN(elem)){
            throw "El elemento no es un numero."; //Lanzamos una excepcion
        } else {
            num = get(list,index); //Recogemos de la lista el indice indicado
            list.splice(index,1,elem); //Reemplazamos el indice, con el elemento indicado
        }
    }
    return num; //Devolvemos el valor reemplazado
}

/*function testlist(){
    //var list = create ();
    var list = []; 	
    console.log ("Capacidad: " + capacity(list));
    console.log("¿Esta vacia la lista?: " + isEmpty(list));
    console.log("¿Esta llena la lista?: " + isFull(list));
    console.log("Longitud: " + size(list));

    try {
        for (var i = 0; i < 4; i++){
            console.log("Nº de elementos: " + add(list,i*10));
        }
        addAt(list,40,3);
        console.log("Añado el elemento 40 en la posicion 3");
        add(list,i); //Esto genera una excepcion
    } catch (err) {
        console.log(err);
    }

    console.log ("La lista completa: " + toString(list));
    console.log("Recogo el elemento de la posicion 2: " + get(list,2));
    console.log("¿Esta el elemento 20 en la lista?: " + indexOf(list,20));
    console.log("¿Esta el elemento -20 en la lista?: " + lastIndexOf(list,-20));

    console.log ("El primer elemento de la lista: " + firstElement(list));
    console.log ("El ultimo elemento de la lista: " + lastElement(list));
	 	
    //clear(list);

    console.log("Busco el elemento 15: " + removeElement(list,15));
    console.log("Reemplazo el elemento " + set(list,60,2) + " por el 60. ");
    console.log("Lista completa: " + toString(list));

    try {
        var i = size(list) -1;
        while (true){
            console.log("Elemento borrado: "+ remove(list,i));
            console.log ("La lista: " + toString(list));
            i--;	 	 		 	
        }
    } catch (err) {
        console.log(err); //Cuando la lista esta vacia, la excepcion debe ser capturada
    }	 	
} 
window.onload = testlist;*/