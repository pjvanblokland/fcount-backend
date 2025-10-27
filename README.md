# F-Count Application

Dit project test nauwkeurigheid bij het tellen van letters. Het gebruikt een gesplitste architectuur voor optimale performance.

## Project Structuur

```
fcount/                   # Hoofdproject
├── index.html           # Frontend bestanden (voor je website)
├── model.js             
├── vars.js              
├── vertaal.js           
├── files/               
└── heroku/              # Backend bestanden (voor Render deployment)
    ├── server.js        
    ├── package.json     
    ├── .gitignore       
    └── README.md        
```

## Deployment

### 1. Frontend (je website)
Upload alle bestanden uit de hoofdfolder naar je website:
```
jouwdomain.com/fcount/index.html
jouwdomain.com/fcount/model.js
jouwdomain.com/fcount/vars.js
etc.
```

### 2. Backend (Render)
1. Verbind de `/heroku/` folder met Render
2. Render gebruikt de bestanden in `/heroku/` voor deployment
3. Backend draait op `https://fcount.onrender.com/`

## Configuratie

Zorg dat `vars.js` naar de juiste backend URL wijst:
```javascript
var heroku="https://fcount.onrender.com/";
```

## Voordelen

✅ **Snelle interface** - Frontend op je eigen website
✅ **Lage kosten** - Backend alleen voor data storage  
✅ **Organisatie** - Duidelijke scheiding frontend/backend
✅ **Flexibiliteit** - Frontend makkelijk aan te passen

## Demo

Test met code `123446` (demo dataset)