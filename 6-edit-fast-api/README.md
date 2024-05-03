# Aufgabe 6: Weiterentwicklung einer FastAPI Anwendung

In dieser Aufgabe soll die FastAPI Anwendung weiterentwickelt werden. Wir wollen dass unsere Änderungen automatisch auf der Webseite erscheinen, ohne dass wir den Container zuvor neu erstellen müssen.

Dockerfile und .dockerignore sind bereits vorhanden und müssen vorerst nicht verändert werden.

Wie in der vorherigen Aufgabe müssen wir unser lokales Verzeichnis in den Container mounten, damit die Änderungen automatisch übernommen werden. Dafür müssen wir den `docker run` Befehl anpassen.

Wie lautet der neue Befehl um den Container zu starten und dabei das lokale Verzeichnis in den Container zu mounten?

Starte den Container mit dem neuen Befehl und überprüfe ob die Änderungen automatisch übernommen werden.

Kannst du dir erklären warum die Änderungen nicht automatisch übernommen werden? Wie könnten wir das Problem lösen?

Stoppe und starte den Container erneut und überprüfe, ob die Änderungen jetzt übernommen wurden.

Um das Problem zu lösen, müssen wir den `uvicorn` Befehl anpassen. Wie lautet der neue Befehl um die FastAPI Anwendung zu starten und dabei die Änderungen automatisch zu übernehmen?
