# Aufgabe 7: Weiterentwicklung der Webseite mit Node.js und Handlebars

Jetzt wollen wir die Webseite mit Handelbars weiterentwickeln. Wir wollen dass unsere Änderungen automatisch auf der Webseite erscheinen, ohne dass wir den Container zuvor neu erstellen müssen.

Dockerfile und .dockerignore sind bereits vorhanden und müssen nicht verändert werden.

Wie in der vorherigen Aufgabe müssen wir unser lokales Verzeichnis in den Container mounten, damit die Änderungen automatisch übernommen werden. Dafür müssen wir den `docker run` Befehl anpassen.

Wie lautet der neue Befehl um den Container zu starten und dabei das lokale Verzeichnis in den Container zu mounten?

Starte den Container mit dem neuen Befehl und überprüfe ob die Änderungen automatisch übernommen werden. 

Du wirst feststellen, dass die Webseite nicht mehr korrekt ausgeführt wird. Kannst du dir erklären warum das so ist?
