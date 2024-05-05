
# Aufgabe 9 CMD vs ENTRYPOINT

## CMD

Erstelle ein Image mit dem Dockerfile1
docker build -t test1 -f Dockerfile1 .

Führe das Image mit dem Befehl docker run aus. Was wird ausgegeben?

Jetzt führe das Image mit dem Befehl dem folgenden Befehl aus: 

docker run test1 echo "Dieser Befehl ist wichtiger!"

Was wird ausgegeben?

Starte das Image mit dem Befehl erneut mit dem folgenden Befehl:

docker run test1 pwd

Was wird ausgegeben?

## ENTRYPOINT

Erstelle ein Image mit dem Dockerfile2
docker build -t test2 -f Dockerfile2 .

Führe das Image mit dem Befehl docker run aus. Was wird ausgegeben?

docker run test2 "Hier ist der Befehl wichtiger!"

Was wird ausgegeben?

Starte das Image mit dem Befehl erneut mit dem folgenden Befehl:

docker run test2 pwd

Was wird ausgegeben?

## ENTRYPOINT kombiniert mit CMD

Erstelle ein Image mit dem Dockerfile3
docker build -t test3 -f Dockerfile3 .

Führe das Image mit dem Befehl docker run aus. Was wird ausgegeben?

docker run test3 "Hier ist der Befehl wichtiger!"

Was wird ausgegeben?

Starte das Image mit dem Befehl erneut mit dem folgenden Befehl:

docker run test3 pwd

Was wird ausgegeben?
