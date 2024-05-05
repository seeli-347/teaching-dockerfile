# Aufgabe 3: Python FastAPI

In dieser Aufgabe soll eine einfache API die in Python mit FastAPI erstellt worden ist in einen Container verpackt werden und dann in diesem Container ausgeführt werden. Auch diese API ist uns auch schon einmal im Cloud-Modul begegnet.

Der Befehl zum Installieren der Abhängigkeiten in Python lautet `pip install -r requirements.txt`.

Der Befehl zum Starten der API lautet `uvicorn main:app --host 0.0.0.0 --port 8000`

Erstelle ein Dockerfile, das die API in einem Container startet und den Port 8000 freigibt.

Erstelle ebenfalls ein .dockerignore-File, um Dateien und Verzeichnisse von der Übertragung in das Docker-Image auszuschliessen.

Mit welchen Befehlen kann das Docker-Image gebaut und der Container gestartet werden?

Wenn du die API testen möchtest, kannst du das mit dem File test.http machen. Installiere dazu die Extension "REST Client" in Visual Studio Code und führe die Anfragen aus.

