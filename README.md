# F-Count Application - Split Architecture

Dit project gebruikt een gesplitste architectuur voor optimale performance en kostenbesparing:

## Architectuur

### 1. **Frontend (je eigen website)**
- Bestanden in `/frontend/` folder
- Volledige gebruikersinterface
- Snelle response voor gebruikers
- Makkelijk te onderhouden

### 2. **Backend (Render)**
- Alleen API endpoints voor data opslag
- Minimale resource usage
- Geoptimaliseerd voor kostenbesparing

## Bestanden Structuur

### Backend (Render deployment):
- `server.js` - Express.js API server
- `package.json` - Node.js dependencies

### Frontend (je website):
- `fcount/index.html` - Gebruikersinterface
- `fcount/model.js` - Data model
- `fcount/vars.js` - Configuratie
- `fcount/vertaal.js` - Meertalige teksten
- `fcount/files/` - Assets

## Deployment

### Stap 1: Backend op Render
1. Push de root directory naar GitHub
2. Render deployed automatisch de backend API
3. URL: `https://fcount.onrender.com/`

### Stap 2: Frontend op je website
1. Upload alle bestanden uit `/fcount/` naar je website in een `fcount` folder
2. Test de applicatie op `jouwdomain.com/fcount/`

## API Endpoints (Backend)

- `GET /geg?number=123456&aantalf=42` - Sla F-count data op
- `GET /bestaat?nummer=123456` - Check of dataset bestaat
- `GET /clear?number=123456` - Maak dataset leeg
- `GET /stats?dataset=123456` - Bekijk statistieken
- `GET /health` - Health check

## Voordelen

✅ **Performance** - Frontend op snelle website
✅ **Kosten** - Render alleen voor data storage
✅ **Flexibiliteit** - Frontend makkelijk aan te passen
✅ **Betrouwbaarheid** - Minder afhankelijkheden

## Demo Dataset

Dataset `123446` is altijd beschikbaar voor demo doeleinden.

## Support

Voor vragen neem contact op met de ontwikkelaar.