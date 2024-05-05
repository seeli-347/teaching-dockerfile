# Aufgabe 2: Einfachste NodeJS-App

Hier soll eine einfache NodeJS-App in einem Docker-Container bereitgestellt werden. Die App ist so einfach, dass sie keine externen Referenzen benötigt. 

Die Applikation wird mit dem Befehl `node app.js` gestartet. Der Server lauscht auf Port 3000 und gibt bei einem GET-Request auf die URL `/` den Text `Hello World!` zurück.

Erstelle ein Dockerfile, das die NodeJS-App in einem Container startet und den Port 3000 freigibt.

Erstelle ebenfalls ein .dockerignore-File, um Dateien und Verzeichnisse von der Übertragung in das Docker-Image auszuschliessen.

Mit welchen Befehlen kann das Docker-Image gebaut und der Container gestartet werden?
