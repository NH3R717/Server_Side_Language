import sys

name = raw_input("What is your name?")

print("Welcome: " +name)

# f = open("pythonFile.txt", "a")
# f.write("Here is my text " +name)

f = open("pythonFile.txt", "w") #"w" overwrites
f.write("New Line " +name)
f.close()

f = open("pythonFile.txt", "r")
print(f.read())