# Aufgabe 8: Datenbank-Dateien ausserhalb des Containers speichern

Diese Web-Applikation verwaltet ToDo-Items. Die Daten werden in einer SQLite Datenbank gespeichert.
Das Frontend wurde mit dem ReactJS-Framework realisiert.

Die Applikation ist bereits fertig und funktioniert. Du musst dich also nicht um die Entwicklung kümmern. Deine Aufgabe ist es, die Applikation in einem Docker-Container laufen zu lassen. Dabei soll die SQLite Datenbank ausserhalb des Containers in einem Docker-Volume gespeichert werden.

Der Befehl zum Installieren der Abhängigkeiten in NodeJS lautet `npm install`.

Um die Abhängigkeiten zu installieren, muss das File `package.json` vorhanden sein.

Der Befehl zum Starten der Webseite lautet `npm run dev`.

- Erstelle ein Dockerfile um die Applikation in einem Container laufen zu lassen.
- Erstelle ein Docker-Volume und sorge dafür, dass die Daten der SQLite Datenbank in das Volume geschrieben werden (Volume Mount).
- Wie lautet der Befehl um den Container zu starten? Starte den Container und überprüfe ob die Applikation korrekt funktioniert.


