# Projekt und Aufgabe zum Kennenlerntag für Frontend-Entwickler*innnen

Das Projekt nutzt ein node.js-Backend mit dem Express-Framework.
Das FE-Framework kann frei gewählt werden.

## Aufgabe

Siehe [Story und Aufgaben](./TASKS.md)

## Notwendige Vorraussetzungen zur Umsetzung der Aufgabe

* Ein Gitlab-Account
* git ist lokal installiert
* Node.js ist lokal installiert
* Eine IDE ist lokal installiert (Visual Studio Code, WebStorm, IDEA, Eclipse, ...)

## API starten
Im api-Verzeichnis ausführen:
```bash
npm install
npm start
```
Der Server läuft nun auf Port 5000

Über die Route `/api/products` können die Produktdaten abgerufen werden. 

### Proxy API Requests bei React
Um aus der Applikation auf die API zugreifen zu können, muss in `package.json` folgendes hinzugefügt werden: 
```
"proxy": "http://localhost:5000"
```
Doku: https://create-react-app.dev/docs/proxying-api-requests-in-development/

### Proxy API Requests bei Angular
Um aus der Applikation auf die API zugreifen zu können, muss in `proxy.conf.json` folgendes hinzugefügt werden:
```
{
  "/api/products": {
    "target": "http://localhost:5000",
    "secure": false
  }
}
```
Doku: https://angular.io/guide/build#proxying-to-a-backend-server

### Proxy API Requests bei Vue.js
Um aus der Applikation auf die API zugreifen zu können, muss in `vue.config.js` folgendes hinzugefügt werden:
```
devServer: {
    proxy: 'http://localhost:5000'
}
```

Doku: https://cli.vuejs.org/config/#devserver