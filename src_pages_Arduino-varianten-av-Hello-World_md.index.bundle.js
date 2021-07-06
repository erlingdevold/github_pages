/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkairbit"] = self["webpackChunkairbit"] || []).push([["src_pages_Arduino-varianten-av-Hello-World_md"],{

/***/ "./src/pages/Arduino-varianten-av-Hello-World.md":
/*!*******************************************************!*\
  !*** ./src/pages/Arduino-varianten-av-Hello-World.md ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"Når man lærer et nytt programmeringsspråk er det vanlig å lage et program som ofte kalles `Hello World`. Det handler om å få datamaskinen, eller i dette tilfellet Arduinoen, til å skrive ut teksten `Hello World`.\\n\\nI forrige steg så vi at en tom sketch inneholder to funksjoner `setup` og `loop`. Vi må skrive instruksjoner for begge funksjonene for dette eksemplet til å funke.\\n\\n### Hvordan skrive ut tekst på en Arduino helplink\\n\\nNår du kobler til en Arduino til datamaskinen kan vi sende data fra Arduinoen til datamaskeinen og ledningen. Dette kalles *Seriell kommunikasjon*.\\n\\nI `Arduino IDE` bruker vi *Serial Monitor* (*seriell overvåker*) for å lese teksten Arduinoen sender til datamaskinen over ledningen.\\n\\n![Menyknapp for Serial Monitor][serial-monitor-button]\\n\\nMens denne måten av kommunikasjon ikke alltid er særlig nyttig i en virkelig bruk av Arduinoen, er dette et godt redskap for feilsøking mens du utvikler kode.\\n\\nOm du klikker på knappen nå, vil antageligvis ingenting vises i vinduet som kommer opp. Detter er fordi vi ikke ennå har sagt at Arduinoen skal gjøre noe, og derfor vil den ikke sende noe data over seriell-porten heller.\\n\\n### `setup` helplink\\n\\n``` cpp\\nvoid setup() {\\n  // initialize serial communication at 9600 bauds per second:\\n  Serial.begin(9600);\\n}\\n```\\n\\nI koden over ser vi `setup`-koden for å aktivere seriell kommunikasjon på Arduinoen. Første linje er en kommentar (merk at linjen er farget annerledes) siden den starter med to skråstreker `//`.\\n\\nSå følger en instruksjon på neste linje: `Serial.begin(9600);`  \\n`Serial.begin` er kommandoen for å starte seriell kommunikasjon. Så følger et par med runde (eller vanlige) paranteser `(` og `)`. Alt mellom et par med runde paranteser er argumenter for kommandoen. I dette tilfellet har vi et argument, verdien `9600`.\\n\\nDersom man leser dokumentasjonen på nettet vil man se at seriell kommunikasjon (eller `UART`) må kalibreres for en hastighet som kommunikasjonen skal foregå på. Mest vanligvis bruker man en hastighet på `9600 bauds`. Det er dette vi bruker her også. Hva, hvordan og hvorfor denne serielle kommunikasjonen foregår er ikke direkte viktig for dette eksemplet. Vend deg til å bruke `Serial.begin` med argument `9600`.\\n\\n**Merk** at korrekt staving av `Serial.begin` og store og små bokstaver må skrives **nøyaktig** som vist over. Du vil legge merke til at fargen av teksten du skriver i `Arduino IDE` endrer seg når programmet skjønner hva du mener.\\n\\n**Merk** også det avsluttende semi-kolonet `;`. `;` avslutter en kommando og **må** skrives. Siden datamaskinen har semi-kolonet for å finne slutten av en kommando, kan man godt bruke flere linjer for en kommando. Man kan også skrive flere kommandoer etter hverandre på én linje. *Men selv om dette er mulig, er det skjeldent en go idé å gjøre det.*\\n\\n### `loop` helplink\\n\\n``` cpp\\nvoid loop() {\\n  // print out Hello World:\\n  Serial.println(\\\"Hello World!\\\");\\n  delay(1000); // delay for one second\\n}\\n```\\n\\nOver er koden for `loop` funksjonen. Hvis vi ignorerer kommentarene, så ser vi at vi har to instruksjoner her.\\n\\nFørst bruker vi kommandoen `Serial.println`. `println` er en forkortelse for `print line`, så denne kommandoen vil skrive en linje med tekst over seriell-kommunikasjonen. Teksten som skrives vil vises i `Serial Monitor` i `Arduino IDE` når Arduinoen kjører. Argumentet til `Serial.println` er her verdien `\\\"Hello World!\\\"` (merk anførelsestegnene `\\\"` på begynnelsen og slutten).\\n\\nNeste kommando er `delay`. `delay` vil får Arduinoen til å stoppe og pause for ett gitt antall millisekunder før den fortsetter å jobbe. Argumentet er verdien `1000`, dvs. 1000 millsekunder, eller 1 sekund. Denne kommandoen vil altså få Arduinoen til å pause i ett sekund etter den har skrevet ut teksten i den forrige kommandoen.\\n\\n### Upload og kjør helplink\\n\\nKlikk på `Upload` (`Laste opp`) knappen til venstre over teksteditoren. Vent til `Arduino IDE` er ferdig å bygge koden og sender den opp til Arduinoen. Når den viser at alt gikk bra, klikk på `Serial Monitor` knappen.  \\nOm du har gjort alt rett vil du se teksten `\\\"Hello World!` bli printet ut om og om igjen med ett sekunds mellomrom.\\n\\n## Gå videre\\n\\n&uarr; [Gå til **Introduksjon til Arduino**][intro-prog-home]  \\n&larr; [Gå tilbake til forrige steg: **Arduino Sketch**][sketch]  \\n&rarr; [Gå til neste steg: **Variabler og tellere**][variables]  \\n\\n[intro-prog-home]: Introduksjon-til-Arduino-programmering\\n[sketch]: Tom-Arduino-Sketch\\n[variables]: Variabler-og-telling-i-Arduino\\n\\n[serial-monitor-button]: Arduino-IDE-SerialMonitor-Button.png\\n\");\n\n//# sourceURL=webpack://airbit/./src/pages/Arduino-varianten-av-Hello-World.md?");

/***/ })

}]);