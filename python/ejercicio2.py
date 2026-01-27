text = input("Ingrese un texto: ")

palabras = text.split(" ")

duracion_por_palabra = 2

duracion_total = len(palabras) * duracion_por_palabra

if (duracion_total > 10):
    print( "Parce le pedi texto no una biblia" )
else:
    print ("Duración total (segundos):", duracion_total)
    print ("Número de palabras:", len(palabras))
    
    
timer_dalto = duracion_por_palabra - ( duracion_por_palabra * 30 / 100 )
time = timer_dalto * len(palabras)

print ( f"Timer dalto (segundos): {time:.1f} " )