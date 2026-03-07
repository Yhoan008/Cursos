#! /bin/bash

#La primera linea especifica la terminal que ejecuta


#Para pasar texto a un archivo
#echo > hola.txt

#con cat le pedimos al usuario que de una entrada
#cat >> hola.txt

#Esto es un output, que funciona igual que echo
cat << myText
esto es un texto
que se muestra
en tu terminal
myText

#Inputs, para recibir y almacenar valores 
echo "Ingresa tu edad: "
read edad 
echo "Esta es tu edad : $edad años"






#Condicionales
#Los estados son -eq = "==" , -ge = ">=", -le = "<=", -gt = ">", -lt = "<"

age=16

if [ $age -ge 10 ]
then
    echo "El numero es mayor o igual"
else
    echo "El numero es menor"
fi



#Tambien podemos usar una sintaxis mas amigable agregado dos parentesis
#Los operadores son && o || 

if (( $age > 18 ))
then
    echo "Ya eres un adulto"
elif (( $age <= 17 && $age >= 16 ))
then
    echo "Ya casi eres un adulto"
else
    echo "Eres un niño"
fi




echo "Ingrese un numero entre 1 y 2"
read number
case $number in 
    1)
        echo "Selecciono el 1"
    ;;
    2)
        echo "Selecciono el 2"
    ;;
    *)
        echo "Opcion no valida"
    ;;
esac



#loops

count=1

#Inicialmente tenemos while
#Puede reemplazarse por until que se cumple mientras el parametro es falso

while (( $count < 10 ))
do
    echo $count
    count=$(( count+1 ))
done

#Para bucles for
#En los bucles podemos usar break para romper el bucle o continue para saltar la instancia actual


for i in 1 2 3 4 5
do 
    echo $i
done

for i in {0..10..2}
do
    echo $i
done

#continue o break
for (( i=0;i<10;i++ ))
do
    if (( i == 5 ))
    then
        continue
    fi
    echo $i
done



#Argumentos
#Son los parametros que podemos tomar de cuando ejecutamos el archivo
# ejm :  main.sh 1 2 3 4 asda masd

#Se diferencian solo con el espacion en cada argumento
#Los invocamos con $

echo "Soy el argumento 1: $1"

echo "Todos los argumentos son: $@"

echo "Y la cantidad de arg son : $#"

#Tambien puedo tomarlos en variables 

args=("$@")

echo " ${args[0]} , ${args[1]}, ${args[2]}, ${args[3]}  "




#Standar input
#Podemos leer archivos externos de texto y procesarlos
#Para esto usamos dev/stdin que es como una dependencia para lectura de archivos

while read line
do 
    echo $line
done < "${1:-/dev/stdin}"   #Debemos pasar una archivo txt como argumento 1 