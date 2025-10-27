# F-Count Frontend

Deze bestanden moeten in een `fcount` folder op je website geplaatst worden.

## Bestanden:
- `index.html` - Hoofdpagina van de applicatie
- `model.js` - Data model (Knockout.js)
- `vars.js` - Configuratie (inclusief Render backend URL)
- `vertaal.js` - Meertalige teksten
- `files/` - Logo en andere assets

## Setup:

1. **Upload deze bestanden naar je website in een `fcount` folder**
   ```
   jouwdomain.com/fcount/index.html
   jouwdomain.com/fcount/model.js
   jouwdomain.com/fcount/vars.js
   etc.
   ```

2. **Test de applicatie op:**
   ```
   https://jouwdomain.com/fcount/
   ```

3. **Zorg dat de URL in `vars.js` naar je Render backend wijst:**
   ```javascript
   var heroku="https://fcount.onrender.com/";
   ```

## Voordelen van deze setup:

- ✅ **Snelle interface** - Frontend draait op je eigen snelle website
- ✅ **Lage kosten** - Render wordt alleen gebruikt voor data opslag
- ✅ **Makkelijk te onderhouden** - Frontend kun je direct aanpassen
- ✅ **Betrouwbaar** - Geen afhankelijkheid van Render voor de UI

## Hoe het werkt:

1. Gebruiker opent `index.html` op jouw website
2. Gebruiker telt F's en voert aantal in
3. JavaScript stuurt data naar Render backend via `/geg` endpoint
4. Docenten kunnen via `/stats` endpoint grafieken bekijken

## Test de setup:

Ga naar je website en test:
- Laden van de pagina ✅
- Taalwissel functionaliteit ✅  
- F-count test met code `123446` ✅
- Data wordt opgeslagen (check Render logs) ✅