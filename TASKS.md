# Frontend Kennenlerntag - Story und Aufgaben

## Story: "Bummelfeed"

Als ENTDECKEN-Team möchten wir den Kunden eine neue Seite, den *Bummelfeed*, präsentieren, damit diese abhängig von Einkaufserfahrung und Vorlieben Produkte gezeigt bekommt, die ihnen persönlich gefallen. Der Bummelfeed soll dazu einladen auf der Seite zu verweilen und dadurch neue Produkte kennenzulernen.

Siehe [Bummelfeed_Konzeption.pdf](./Bummelfeed_Konzeption.pdf) zur Veranschaulichung der Idee.


## Aufgaben

1. Zeige alle Bilder an

    Auf der Seite `localhost:3000/` sollen alle Produktbilder angezeigt werden, die vom Backend derzeit ausgespielt werden.
    Die Produktdaten im JSON-Format findest du in der Datei `./products.json`. Sie werden über den Endpunkt `localhost:5000/api/products` zurückgegeben.

2. Responsive Darstellung der Bilder

    Bis zur Breite von 749px sollen nur 2 Bilder pro Reihe angezeigt werden, ab einer Breite von 750px 4 Bilder.

3. Kategorien auswählen - Filterung in der UI

    Auf der Bummelfeed-Seite soll es die Möglichkeit geben Kategorien (Oberteile, Hosen, Schuhe, Accessoires) auszuwählen. Nach Auswahl der Kategorien soll die Bummelfeed-Ansicht aktualisiert werden. Es sollen nur noch Produkte der ausgewählten Kategorie angezeigt werden.

### Optionale Aufgaben

- Newsletter-Anmeldung

    Durch Eingabe der E-Mail-Adresse soll es möglich sein sich für den Newsletter anzumelden. Die E-Mail-Adresse soll an einen spezifischen Endpunkt im Frontend übertragen werden.

- Bild liken

    Es muss erkenntlich sein, dass das Bild gelikt wurde.

- Bild disliken

    Es muss erkenntlich sein, dass das Bild dislikt bzw. entfernt wurde.

- Rückgängig machen von Dislikes

    Nachdem ein Bild entfernt wurde, soll es einen Hinweis geben, dass die Aktion rückgängig gemacht werden kann.

- Kategorien auswählen - Informationen an das Backend senden

    Die Kategorie-Auswahl soll an das node.js-Backend an einen spezifischen Endpunkt übertragen werden.