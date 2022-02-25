(self.webpackChunkairbit=self.webpackChunkairbit||[]).push([[635],{6635:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>i});const i="Støvsensoren til air:bit er litt mere komplisert enn temperatursensoren, men igjen finnes det et Arduino bibliotekt for å lese av målinger fra sensoren.\n\nSom i temperatursensor-eksemplet kommer vi til å demonstrere hvordan vi tar målinger fra støvsensoren, og skrive dem ut til seriell-forbindelsen til PC'en.\n\n## Ny Sketch\n\nIgjen starter vi med en helt ny Sketch. `File`&rarr;`New` i menyen.\n\n``` cpp\nvoid setup () {\n\n}\n\nvoid loop() {\n\n}\n```\n\n## Laste ned bibliotek helplink\n\nAkkurat som DHT-biblioteket vi brukte for temperatursensoren, finnes det et bibliotek for støvsensoren. Desverre oppstår det komplikasjoner med de andre sensorene i air:bit når vi bruker denne. Derfor har air:bit teamet laget sin egen versjon for dette biblioteket. Last ned den nyeste, dvs. den øverste, versjonen i listen du finner når du klikker på denne linken: (klikk der det står `zip`) **[SDS011 biblioteket](https://github.com/skolelab/SDS011/releases)**  \nDet er viktig at du lagrer (**ikke åpner**) filen. Husk hvor du lagrer filen, vi må finne frem den filen i neste steg.\n\nEtter du har lastet ned biblioteket og lagret filen må vi installere biblioteket i `Arduino IDE`. Klikk i menyen på `Sketch`&rarr;`Include library`&rarr;`Add ZIP library` (punktet under `Manage libraries`). Velg filen du nettopp lastet ned. Om nettleseren din ikke ba deg om å velge hvor filen skulle lagres, vil du mest sannsynligvis finne den under `Downloads` (`Nedlastinger`).\n\n## Globale definisjoner helplink\n\nArduino IDE kommer med en del små hjelper-bibliotek som allerede er installert på forhånd. Ett av disse er `SoftwareSerial`-biblioteket. Støvsensoren sender faktisk målingene over ledningen til Arduinoen på lignende måte som Arduinoen 'snakker' med PCen over USB-ledningen. `SoftwareSerial` tillater å lage en seriell forbindelse over pinner på Arduinoen i stedet for USB-ledningen, så derfor bruker vi følgende `#include` direktiv:\n\n``` cpp\n#include <SoftwareSerial.h>\n```\n\nFørst må vi inkludere `SDS011`-biblioteket. Bruk det følgende `#include` direktivet:\n\n``` cpp\n#include <SDS011.h>\n```\n\nSå er det tid å konsultere [pinout skjemaet][pinout]. Som vanlig definerer vi konstanter for pinnene som brukes for kommunikasjon med Arduinoen.\n\n``` cpp\n#define PM_TX 2\n#define PM_RX 3\n```\n\nSå må vi lage en global variabel for tilkoblingen til Støvsensoren. Denne gang bruker vi `SDS011` datatypen. *Igjen kan variabler navngis som du synes best.*\n\n``` cpp\nSDS011 sds;\n```\n\n## `setup` helplink\n\nAkkurat som kommunikasjonen med PC'en din, må vi også initialisere kommunikasjonen med støvsensoren. Vi bruker `begin`-kommandoen som hører til `sds` variabelen. Den tar imot TX-pinnen og så RX-pinnen som sensoren er koblet til med som argument.\n\n``` cpp\n  sds.begin(PM_TX, PM_RX);\n```\n\nVi skal også skrive ut målingene over seriell-tilkoblingen til datamaskinen.\n\n``` cpp\n  Serial.begin(9600);\n```\n\n## `loop` helplink\n\nSom med temperatursensoren, skal vi lese ut målingene fra støvsensoren og så printe dem ut. Støvsensoren tar målinger for to forskjellige partikelstørrelser: 2.5µm og 10µm. Begge tall gir konsentrasjoner som desimaltall. Enheten for verdiene er i `µg/m³` (mikrogramm per kubikkmeter)\n\n``` cpp\n  float pm25, pm10;\n```\n\n*Merk at du kan deklarere flere variabler av samme type ved å skrive komma mellom variablene.*\n\n`read`-kommandoen til `sds`-variabelen brukes for å lese ut data fra sensoren. Kommandoen kan feile, så kommandoen returnerer en feilverdi som vi lagrer i en variabel. Kommadoen tar plassering først for 2.5µm og så for 10µm konsentrasjonen som argument.\n\n``` cpp\n  int error = sds.read(&pm25, &pm10);\n```\n\nI koden over ser du at feilverdier som regel lagres av datamaskinen som heltall (derfor har `error` variabelen datatypen `int`).\n\nI den tekniske spesifikasjonen til Støvsensoren står det at den kun kan leses av én gang hvert sekund. `read` kommandoen vil derfor feile om vi spør etter målinger oftere enn det. Dersom `read`-kommandoen feilet vil `error` ha en verdi ulik `0`. Den beste måten å håndtere denne situasjonen på er å prøve på nytt helt til vi har fått inn ny data fra støvsensoren.\n\nFår å forsikre at vi faktisk har en glydig måleverdi fra sensoren, må vi altså prøve å kjøre `read`-kommandoen om og om igjen helt til feilverdien er lik `0` (dvs. ingen feil). Når vi vil be Arduinoen om å kjøre den samme koden flere ganger bruker vi i programmering en løkke (*loop* på engelsk).\n\nI `C++`, kodespråket til Arduino, finnes det tre typer løkker. I dette tilfellet skal vi benytte oss av *do-while*-løkken. Denne løkken kjører en kommando (eller flere) og repeterer dersom en betinglse er sann. Dette ser slikt ut:\n\n``` cpp\n  do {\n    // Code to repeat\n  } while (error != 0); // Stop repetition once error is 0.\n```\n\nI kodebiten over ser du at vi skjekker om `error` er ulik 0. Med én gang `error` er `0`, er vi sikre på at vi har fått gyldige målinger fra Støvsensoren og kan fortsette med å skrive dem ut. Så la oss fylle inn `read`-kommandoen mellom krøllparentesene til `do`-`while`-løkken vår.\n\n``` cpp\n  int error;\n  do {\n    error = sds.read(&pm25, &pm10);\n  } while (error != 0);\n```\n\n**Merk** at vi deklarer utenfor løkken! [Bruk av variabler utenfor scope][debugging-scopes] er en vanlig feil som lett er gjort når du skriver kode. Gå til [Feilsøking av programmeringsfeil][debugging-scopes] får å vite mer om hvorfor vi flyttet deklarasjonen av `error` utenfor løkken.\n\nSiden Støvsensoren kun kan avleses én gang per sekund er det lurt å bruke `delay`-kommandoen til slutt. Få Arduinoen til å vente for minst ett sekund.\n\n## Ferdig\n\nUnder ser du et eksempel for koden når alt er på plass.\n\n``` cpp\n#include <SoftwareSerial.h>\n#include <SDS011.h>\n\n#define PM_TX 2\n#define PM_RX 3\n\nSDS011 sds;\n\nvoid setup() {\n  sds.begin(PM_TX, PM_RX);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  float pm25, pm10;\n  int error;\n  do {\n    error = sds.read(&pm25, &pm10);\n  } while (error != 0);\n\n  Serial.print(pm25);\n  Serial.print(\"\\t\");\n  Serial.print(pm10);\n  Serial.println();\n\n  delay(1000);\n}\n```\n\n## Gå videre\n\n&uarr; [Gå til **innholdsfortegnelsen**][home]  \n&larr; [Gå tilbake forrige neste steg: **Temperatursensoren**][dht]  \n&rarr; [Gå til neste steg: **GPS-antenna**][gps]  \n\n[home]: airbit-Programmering\n[dht]: Programmering-med-Temperatursensoren\n[gps]: Programmering-med-GPS-antenna\n\n[pinout]: airbit-Pinout\n\n[debugging-scopes]: Feilsøking-av-programmeringsfeil#bruk-av-variabler-utenfor-scope\n"}}]);