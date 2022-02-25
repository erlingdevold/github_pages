(self.webpackChunkairbit=self.webpackChunkairbit||[]).push([[272],{3272:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>i});const i='Av alle sensorene til air:bit er temperatursensoren den enkleste. Temperatursensoren vi bruker i air:bit, DHT, er en veldig vanlig type sensor. Heldigvis betyr dette for oss at noen andre allerede har gjort jobben med å finne ut hvordan man leser av data fra sensoren. Dette gjør det veldig mye enklere å lese av temperaturdata.\n\nVi kommer til å skrive en veldig enkel Arduino Sketch, der vi skriver ut temperatur og fuktighetsmålinger over en seriell forbindelse.\n\n## Komme i gang\n\nIgjen vil vi starte med en helt fersk tom Sketch. Du kan klikke på `File`&rarr;`New` menyen for å starte en ny Sketch.\n\n``` cpp\nvoid setup() {\n  \n}\n\nvoid loop() {\n  \n}\n```\n\n### Installere `DHT sensor library` biblioteket helplink\n\nFør vi begynner må vi laste ned og installere et Arduino bibliotek. Tidligere har vi brukt kommandoer som `delay`, `pinMode` og `digitalWrite` som alle er del av standard-biblioteket for Arduino. Vi trenger nye kommandoer for å lese av temperatur fra DHT-sensoren. Disse vil vi finne i et bibliotek som heter `DHT sensor library` som er laget av selskapet Adafruit. *Adafruit er en av de største produsentene for Arduino-utstyr.*\n\n`Arduino IDE` har en innebygd meny for å laste ned Arduino bibliotek. Klikk på `Sketch`&rarr;`Include library`&rarr;`Manage libraries...` for å åpne `Library Manager`.\n\n![Arduino IDE Manage libraries][manage-libraries-menu]\n\nI `Library Manager` som åpner seg, må du nå søke for `DHT sensor library` som er biblioteket for sensoren DHT i air:bit. Skriv inn `DHT sensor library` i søkefeltet. Klikk på resultatet som kommer opp, velg den nyeste versjonen i Drop-Down-menyen og klikk på `Install`.\n\n![Arduino IDE Library Manager: DHT sensor library][library-manager-dht-sensor-library]\n\n### Installere `Adafruit_Sensor` biblioteket helplink\n\n`DHT sensor library`-biblioteket bruker Adafruit sitt overordnete `Adafruit_Sensor` bibliotek. Dette inneholder informasjon som er til felles for alle Adafruit sine sensorer.\n\nFor å installere dette biblioteket skal vi laste ned nyeste version selv ved å klikke på denne linken: [**Adafruit_Sensor**][adafruit-sensor-latest]  \nKlikk på linken **Source code** (zip) for å laste ned biblioteket.  \nDet er viktig at du lagrer (**ikke åpner**) filen. Husk hvor du lagrer filen, vi må finne frem den filen i neste steg.\n\n![Download Adafruit_Sensor library][adafruit_sensor-download]\n\nEtter du har lastet ned biblioteket og lagret filen må vi installere biblioteket i `Arduino IDE`. Klikk i menyen på `Sketch`&rarr;`Include library`&rarr;`Add ZIP library` (punktet under `Manage libraries`). Velg filen du nettopp lastet ned. Om nettleseren din ikke ba deg om å velge hvor filen skulle lagres, vil du mest sannsynligvis finne den under `Downloads` (`Nedlastinger`).\n\n## Globale definisjoner helplink\n\nFørst må `DHT`-biblioteket inkluderes i Arduino-Sketchen. I `C++` bruker vi `#include` direktivet for dette:\n\n``` cpp\n#include <DHT.h>\n```\n\nSå ta en titt på [Pinout Skjemaet][pinout]. Definér en konstant for pinnen for Temperatursensoren:\n\n``` cpp\n#define DHTPIN 9\n```\n\nTidligere i [eksempelet for telling][counting] deklarerte du en variabel med datatype `int`. Nå må du deklarere en variabel for å kontrollere forbindelsen med DHT sensoren. Datatypen for dette kommer fra det inkluderte `DHT` biblioteket og heter `DHT`. For å deklarere denne variabelen trenger du to ting: hvilken pinne den er koblet til på, og hvilken slags type DHT du bruker.\n\nPinnen har du allere definiert i `DHTPIN` konstanten i linjen over, og i vårt tilfelle bruker vi en DHT-sensor type `DHT22`.\n\n``` cpp\nDHT dhtSensor(DHTPIN, DHT22);\n```\n\n*I koden over kalles variabelen `dhtSensor`, men du kan bruke hvilket som helst navn som du har lyst å bruke. Det anbefales å bruke et deskriptivt navn som virker intuitivt å bruke. Merk også at vi bruker konstanten `DHT22`. Fra beskrivelsen som vistes når du installerte DHT-biblioteket kan du se at det finnes flere varianter av DHT-sensorer. air:bit sin sensor er av den nyere `DHT22` varianten.*\n\n## `setup` helplink\n\nFor dette eksemplet for programmering med DHT sensoren skal vi bruke en seriell forbindelse med PC\'en, så vi må initialisere den serielle forbindelsen, slik vi har gjort tidligere.\n\n``` cpp\n  Serial.begin(9600);\n```\n\n## `loop` helplink\n\nFor hver gjennomgang gjennom `loop`-funksjonen skal vi lese ut måleverdiene fra sensoren, så skrive dem ut over seriell-forbindelsen. Til slutt skal vi vente en stund til vi tar neste måling.\n\nFor å starte med trenger vi to lokale variabler for å lagre måleverdiene (en for temperatur og en for fuktighet). Lokale variabler deklareres akkurat som globale variabler (som f.eks. `dhtSensor`), men de varer bare for én gjennomgang gjennom `loop`-funksjonen, dvs. variabelen lages på nytt for hver gjennomgang. Variabler for å lagre en måling fra sensorer lages best som lokale variabler i stedet for globale variabler.\n\nTemperatur og Fuktighet er verdier som representeres som kommatall. F.eks. et vanlig digitalt termometer vil vise temperatur som f.eks. `20.7°C`. Fuktighet måles som relativ fuktighet i %, f.eks. `41.2% RH`. Variabler for å lagre kommatall må bruke datatypen `float`. *`float` er en forkortelse for `floating-point decimal number` og det er slik en datamaskin vanligvis håndterer kommatall.*\n\n``` cpp\n  float temperature = 0.0;\n  float humidity = 0.0;\n```\n\nI koden over ser du at variabler også kan initialiseres samtidig med deklarasjonen. Merk at kommatall bruker `.` (punktum) som komma-tegn. *Igjen, merk at variablene kan navngis hvordan som helst.*\n\nNå kan vi bruke `readTemperature` og `readHumidity` kommandoene som hører til `dhtSensor` variabelen vår. Resultatene vil bli gitt i hhv. grader Celsius (`°C`) og `%` relativ fuktighet.\n\n``` cpp\n  temperature = dhtSensor.readTemperature();\n  humidity = dhtSensor.readHumidity();\n```\n\nEtter disse kommandoene vil den aktuelle verdien for temperatur og fuktighet være lagret i variablene, så vi kan skrive dem ut.\n\n``` cpp\n  Serial.print(temperature);\n  Serial.print("°C");\n  Serial.print("\\t");\n  Serial.print(humidity);\n  Serial.print("%");\n  Serial.println();\n```\n\nI den tredje linjen over ser du at `\\t` skrives ut. I `C++` brukes `\\` (backslash) for spesielle tegn. `\\t` er et spesiellt tegn kalt tabulator. Det brukes for å skille kolonner i en tabell fra hverandre. I et vanlig tekst-program, som f.eks. Word, vil du skrive et tabulator-symbol ved å trykke Tab-tasten til venstre for `Q` på det norske tastaturet.\n\nHelt til slutt vil vi vente en liten stund til det leses av en ny måling. Bruk `delay`-kommandoen for dette.\n\n``` cpp\n  delay(1500);\n```\n\n## Ferdig\n\nSiden variabler kan navngis som du ønsker kan koden din se litt anderledes ut, men hovedsakelig burde ting se ut som vist under.\n\n``` cpp\n#include <DHT.h>\n\n#define DHTPIN 9\nDHT dht22(DHTPIN, DHT22);\n\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  // Declare variables for sensor readings\n  float temperature = 0;\n  float humidity = 0;\n  // Take readings from sensor\n  temperature = dht22.readTemperature();\n  humidity = dht22.readHumidity();\n\n  // Print out readings\n  Serial.print(temperature);\n  Serial.print("°C");\n  Serial.print("\\t");\n  Serial.print(humidity);\n  Serial.print("%");\n  Serial.println();\n\n  // Wait 2.5 seconds until next reading.\n  delay(2500);\n}\n```\n\n## Gå videre\n\n&uarr; [Gå til **innholdsfortegnelsen**][home]  \n&larr; [Gå tilbake forrige neste steg: **LED**][led]  \n&rarr; [Gå til neste steg: **Støvsensoren**][pm]  \n\n[pinout]: airbit-Pinout\n[counting]: Variabler-og-telling-i-Arduino\n\n[home]: airbit-Programmering\n[led]: airbit-LED-Blinking\n[pm]: Programmering-med-Støvsensoren\n\n[adafruit-sensor-latest]: https://github.com/adafruit/Adafruit_Sensor/releases/latest\n\n[manage-libraries-menu]: Arduino-IDE-Manage-Library.png\n[library-manager-simple-dht]: Arduino-IDE-Library-Manager-SimpleDHT.png\n[library-manager-dht-sensor-library]: Arduino-IDE-Library-Manager-DHTSensorLibrary.png\n[adafruit_sensor-download]: GitHub-Adafruit_Sensor-download.png\n'}}]);