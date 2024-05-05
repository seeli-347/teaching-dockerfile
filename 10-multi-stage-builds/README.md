# Aufgabe 10 Multi-Stage Builds

Speziell für Anwendungen, die in mehreren Schritten kompiliert werden müssen, bietet Docker die Möglichkeit, sogenannte Multi-Stage Builds zu verwenden. Dabei wird ein Dockerfile in mehrere Abschnitte unterteilt, die jeweils ein eigenes Basisimage verwenden. Das Ergebnis ist ein schlankes Image, das nur die notwendigen Dateien enthält.

Hier handelt es sich um eine Taschenrechneranwendung, die in C# und DotNet entwickelt worden ist.

Erstelle ein Docker-Image mit dem Dockerfile1, das die Anwendung kompiliert und ausführt. Das Ergebnis ist ein grosses Image, das alle für die Ausführung der Anwendung erforderlichen Dateien enthält und zusätzlich noch die gesamte Entwicklungsumgebung, die für die Kompilierung der Anwendung benötigt wird.

Wie gross ist das Image?

Erstelle ein Docker-Image mit dem Dockerfile2, das die Anwendung in zwei Schritten kompiliert und ausführt. Das Ergebnis ist ein schlankes Image, das nur die für die Ausführung der Anwendung erforderlichen Dateien enthält.

Wie gross ist jetzt das Image?



![grafik](https://user-images.githubusercontent.com/96045942/206849988-99210c0d-297b-471f-9cf9-3c276aa5921b.png)
