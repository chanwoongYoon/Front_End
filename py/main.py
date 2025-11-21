driver_names = [
    "Alexander Albon",
    "Fernando Alonso",
    "Kimi Antonelli",
    "Oliver Bearman",
    "Valtteri Bottas",
    "Gabriel Bortoleto",
    "Franco Colapinto",
    "Jack Doohan",
    "Pierre Gasly",
    "Isack Hadjar",
    "Lewis Hamilton",
    "Nico Hülkenberg",
    "Daniil Kvyat",
    "Nicholas Latifi",
    "Liam Lawson",
    "Charles Leclerc",
    "Kevin Magnussen",
    "Lando Norris",
    "Esteban Ocon",
    "Sergio Pérez",
    "Oscar Piastri",
    "Kimi Räikkönen",
    "Daniel Ricciardo",
    "George Russell",
    "Carlos Sainz",
    "Mick Schumacher",
    "Lance Stroll",
    "Yuki Tsunoda",
    "Max Verstappen",
    "Sebastian Vettel",
    "Guanyu Zhou"
]

# print(90-ord('A')) #25
# print(90-ord('Z')) #0
dic = {}
final = []

for i in driver_names:
    order_number = 90-ord(i[0])
    lst_number = i
    dic[i] = order_number
result = list(sorted(dic.items()))

cycle = 0
print("const driver_names = [")
for i in result:
    final.append(i[0])
    print(f'    "{i[0]}"',end='')
    cycle += 1
    if(cycle != len(driver_names)):
        print(',')
    else:
        print('')
print('];')
