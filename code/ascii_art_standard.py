try:
    from pyfiglet import Figlet
except ImportError:
    print("Installing pyfiglet...")
    import subprocess
    import sys
    subprocess.run([sys.executable, '-m', 'pip', 'install', '-q', 'pyfiglet'], check=True)
    from pyfiglet import Figlet

def generate_ascii_art(text, font='standard'):
    f = Figlet(font=font)
    return f.renderText(text)

art = generate_ascii_art("buckturner . files", font='standard')
print(art)
