from pyfiglet import Figlet

f = Figlet(font='standard')
art = f.renderText('buckturner . files')
print(art)

# Also save to file
with open('tmp/ascii_logo.txt', 'w') as file:
    file.write(art)
