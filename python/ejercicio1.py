

#Cual es la diferencia en porcentaje entre las horas dedicadas para completar el curso 

this_course = 1.5
min_course = 2.5
prom_course = 4
max_course = 7


porc_Min = 100-( this_course / min_course * 100)

porc_Prom = 100-( this_course / prom_course * 100)

porc_Max = 100-( this_course / max_course * 100)


print ("En promedio este curso se completa un:")

print ( f"-{porc_Min:.1f} % mas rapido que los cursos de menor duracion." )

print ( f"-{porc_Prom:.1f} % mas rapido que los cursos de duracion promedio." )

print ( f"-{porc_Max:.1f} % mas rapido que los cursos de mayor duracion." )

print ("-------------------------------")




#Porcentaje de material inservible 

c1_material = 5
c2_material = 4

g1_material = 3.5
g2_material = 1.5

prom_Deleted_C = int( ((c1_material - c2_material) / c1_material) * 100 ) 

prom_Deleted_G = int( ((g1_material - g2_material) / g1_material) * 100 )

prom_Prom = int( (prom_Deleted_C + prom_Deleted_G) / 2 )

print ( f"Porcentaje de material inservible en promedio: {prom_Prom}%" )

print ( f"Porcentaje de material inservible en este curso es {prom_Deleted_G}%")


print ("-------------------------------")


#10 Horas de este curso cuanto equivalen en horas de otros cursos


inc1 = float((min_course / this_course) * 10 )

inc2 = float((prom_course / this_course) * 10 )

inc3 = float((max_course / this_course) * 10 )

print ( "10 horas de este curso equivalen a:" )

print ( f"{inc1:.1f} horas de cursos de menor duracion." )

print ( f"{inc2:.1f} horas de cursos de duracion promedio." )

print ( f"{inc3:.1f} horas de cursos de mayor duracion." )

