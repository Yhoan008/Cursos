
condicional = "2"


if condicional == "Gerardo" :
    print ("GERARDO LAS VACUNAS")
elif condicional == "Yurleni" :
    print ("Peguelas Gonorrea!")
#else:
    #print ("Nadie me quiere ")


#Para operadores logicos usamos & |

#Esto es falso 

false = True & False
true = True | False

esto_tambien_es_false = not True





# METODOS DE CADENAS 
# dir("") : Devuelve los metodos de un elemento
# len("") : Devuelve la cantidad de caracteres en una cadena
# .upper : Pasa mayuscula
# .lower : Pasa a minuscula 
# .capitalize : Primera letra a mayuscula

# .find : Devuelve la primera posicion de la busqueda o -1
# .index : Funciona como find pero si no escuentra devuelve error 

# .isnumeric : Si es numero devuelve True 
# .isalpha : Si es alfanumerico devuelve true, no incluye caracteres especiales como " "

# .count("Dato buscado") : Cuenta coincidencias 

# .startwith("") : Devuelve true si la cadena inicia 
# .endswith("") : Devuelve true si termina
# .replace("dato_buscado","dato_a_reemplazar") : Remplaza una cadena por otra 

# .split("dato") : Separa la cadena segun el dato que le pasemos, devuelve lista array


cadena = "Cadena numero uno"

mayus = cadena.find("numero")

letras = len(cadena)

cademan = cadena.split(" ")

#print ( cademan )


del cadena
del mayus
del letras







#METODOS DE LISTAS 

# list([]) : Usado para crear listas 
# len() : Devuelve la cantidad de elementos 
# .append() : Agrega un elemento al final de la lista 
# .insert("POS","nuevo elemento") :  Agrega elemento en una posicion en especifico
# .extend([]) : Agregar nuevos elementos en forma de lista 
# .pop() : Elimina elemento de una posicion en especifico, si damos la posicion -1 elimina el ultimo elemento
# .remove("") : Elimina algun elemento si encuentra coincidencia
# .clear() : Elimina todos los elementos de la lista 

# .sort(reverse=true) : Ordena la lista en orden ascendente
#  .reverse() : Invierte el orden de la lista 

    
lista1 = [1,2,3,4,5,6,"soy el ultimo"]    

lista1.reverse()
    
#print ( lista1 )






#DICCIONARIOS

# .keys() : Devuelve un array de los indices (["nombre","apellido","subs"])
# .get("indicador") : Devuelve el valor equivalente al indicador
# .clear() : Elimina todo el diccionario 
# .pop("ind") : Elimina el elemento indicado
# .items() : Funciona para iterar los elementos

diccionario = {
    "nombre" : "Lucas",
    "apellido" : "dalto",
    "subs" : 1000000
}

ind1 = diccionario["nombre"]  #Si no encuentra el indicador es error
ind2 = diccionario.get("asd") #Esto devuelve none

#print (ind2)




