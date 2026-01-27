
#  CURSO DE PYTHON - DALTO GRANDE DALTO GOD

#Esto es un comentario de una linea 

"""
Esto es un comentario de multiples lineas 
y testo tambien, ademas sirvo de comentario
"""



#TIPOS DE DATOS     

numero = 12

numeroFlotante = 12.45

string = 'Hola Comentario'

booleano = True   #Recuerda que en python las palabras reservadas van con mayuscula



nombre = True

pregunta = f"¿Como estas {nombre} ?"    #Para concatenar


#Podemos eliminar cualquier variable con del

del nombre
del pregunta
del numero
del numeroFlotante
del string
del booleano




#Podemos filtar en CADENAS DE TEXTO facilmente usando "in" y "not in"

cadena = "Hola soy una cadena de texto"
#print("Hola" in cadena)      #Devuelve True

del cadena



#COMO RECOMENDACION USAR SNAKE_CASE PARA VARIABLES Y FUNCIONES

hola_soy_una_variable = "Hola soy una variable en snake_case"

del hola_soy_una_variable






#TIPOS DE DATOS COMPUESTOS

lista = [1, 2, "dato3", 4, True]   #Lista

#print(lista[2])   #Acceder a un elemento de la lista


#las tupas, definidas no con corchetes [], sino con parentesis ( ), NO SE MODIFICAN

tupla = (1, 2, "dato3", 4, True) 

#print (lista , tupla)






#Tambien tenemos conjuntos, son instancias de un conjunto de datos 

conjunto = {"hola",3,"soy un dato"}

lista = [ " gola mundo ", ["yo tambien","tengo"]]

del conjunto
del lista




#Y principalmente el dato tipo json, donde es como conjunto pero agregando clave (key) y valor  


diccionario = {
    'nombre' : "Yhoan Mateo",
    'edad' : 24,
    'profesion' : "Programador"
}

#print(diccionario)




#Tipos de datos type
#print (type("esto es un string"))


#print (type(diccionario))


##Operadores de comparacion 
#  == || != || > || < || >= || <=


