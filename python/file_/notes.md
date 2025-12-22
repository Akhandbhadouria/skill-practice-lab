
file_object = open("filename", "mode")

"r"	Read (default). File must exist.
"w"	Write. Creates file if it doesn’t exist. Overwrites if file exists.
"a"	Append. Adds content at the end of the file.
"x"	Create. Creates a file, fails if file exists.
"rb"	Read binary.
"wb"	Write binary.
"ab"	Append binary.

-----------------------------seek in file I/0 -----------------------------
seek(2) → moves the file pointer to position 2 (3rd character).

read(19) → reads 19 characters starting from position 2.

Why 19? Because from position 2 up to 20 is 19 characters.