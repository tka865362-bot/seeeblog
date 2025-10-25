try:
    from pyfiglet import Figlet
    f = Figlet(font='big')
    print(f.renderText('buckturner . files'))
except ImportError:
    print("Installing pyfiglet...")
    import subprocess
    subprocess.run(['pip', 'install', '-q', 'pyfiglet'], check=True)
    from pyfiglet import Figlet
    f = Figlet(font='big')
    ascii_art = f.renderText('buckturner . files')
    print(ascii_art)
