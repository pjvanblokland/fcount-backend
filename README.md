# F-Count Application - Render Deployment

Dit project is een webapplicatie voor het testen van nauwkeurigheid bij het tellen van letters. Oorspronkelijk gemaakt voor Glitch, nu aangepast voor Render.

## Bestanden Structuur

- `index.html` - Frontend HTML interface
- `server.js` - Express.js backend server
- `package.json` - Node.js dependencies en scripts
- `model.js` - Frontend data model (Knockout.js)
- `vars.js` - Configuratie variabelen
- `vertaal.js` - Meertalige teksten
- `files/logo.js` - Logo rendering functie
- `files/favicoVU.png` - Favicon (vervang met echte PNG)

## Deployment op Render

### Stap 1: GitHub Repository
1. Push deze bestanden naar een GitHub repository
2. Zorg dat alle bestanden in de root van de repository staan

### Stap 2: Render Service Aanmaken
1. Ga naar [render.com](https://render.com)
2. Maak een account aan of log in
3. Klik op "New" → "Web Service"
4. Verbind je GitHub repository
5. Vul de volgende instellingen in:
   - **Name**: `fcount-amsterdam` (of een andere naam)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free` (voor testing)

### Stap 3: URL Configuratie
1. Na deployment krijg je een URL zoals: `https://your-app-name.onrender.com`
2. Update de URL in `vars.js`:
   ```javascript
   var heroku = "https://your-app-name.onrender.com/";
   ```
3. Commit en push deze wijziging

### Stap 4: Environment Variables (optioneel)
In Render dashboard kun je environment variables toevoegen:
- `NODE_ENV=production`
- `PORT=3000` (wordt automatisch ingesteld door Render)

## Lokale Development

Voor lokale ontwikkeling:

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev

# Of start production server
npm start
```

De applicatie draait dan op `http://localhost:3000`

## API Endpoints

De backend biedt de volgende endpoints:

- `GET /` - Serve de HTML interface
- `GET /bestaat?nummer=123456` - Check of dataset bestaat
- `GET /exists?number=123456&wachtwoord=pass&code=2` - Uitgebreide dataset operaties
- `GET /geg?number=123456&aantalf=42` - Sla F-count data op
- `GET /clear?number=123456` - Maak dataset leeg
- `GET /stats?dataset=123456` - Bekijk statistieken
- `GET /health` - Health check

## Demo Dataset

Dataset `123446` is altijd beschikbaar voor demo doeleinden.

## Vervang Placeholder Bestanden

- Vervang `files/favicoVU.png.placeholder` met een echte PNG favicon
- Update logo.js met het echte VU Amsterdam logo indien nodig

## Support

Voor vragen of problemen, neem contact op met de ontwikkelaar.