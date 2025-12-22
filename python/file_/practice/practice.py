# finding for specific character in line  

file=open("practice.txt","w")
file.write("Python is fun.\n")
file.write("File I/O is useful.\n")
file.write("We can read and write files.\n")
file.close()

cnt=0
with open("/Users/lambardaar/Desktop/python/practice.txt","r") as f:
    for file in f:
        cnt+=1
        if "useful" in file:
            print( cnt)
f.close()
