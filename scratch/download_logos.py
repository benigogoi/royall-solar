import urllib.request
import os

os.makedirs('public/assets/brands', exist_ok=True)

urls = {
    'havells.svg': 'https://upload.wikimedia.org/wikipedia/commons/2/23/Havells_logo.svg',
    'exide.svg': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Exide.svg',
    'waaree.png': 'https://www.waareertl.com/wp-content/uploads/2021/11/waaree-logo.png',
    'utl.png': 'https://www.utlsolar.com/wp-content/uploads/2020/09/utl-logo.png'
}

opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')]
urllib.request.install_opener(opener)

for name, url in urls.items():
    path = os.path.join('public/assets/brands', name)
    try:
        print(f"Downloading {url} to {path}...")
        urllib.request.urlretrieve(url, path)
        print("Success")
    except Exception as e:
        print(f"Failed: {e}")
