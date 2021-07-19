/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkairbit"] = self["webpackChunkairbit"] || []).push([["src_pages_Feils_king-av-programmeringsfeil_md"],{

/***/ "./src/pages/Feilsøking-av-programmeringsfeil.md":
/*!*******************************************************!*\
  !*** ./src/pages/Feilsøking-av-programmeringsfeil.md ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"Den mest vanlige opplevelsen mens man skriver kode er desverre at ting ikke funker fordi man har gjort en feil ett eller annet sted. Dette er omtrent som å skrive en stil i norsk, du kommer alltids til å ha en eller annen skrivefeil her eller der. Akkurat som i norsk, er det viktig å huske på en ting: dette er helt vanlig! Selv om du har norsk som morsmål så vil du fortsatt av og til stave noe feil. Selv om du har programmert i flere tiår, vi du forsatt gjøre små feil. Slik er det bare.\\n\\n## Innhold\\n\\n- [Innhold](#innhold)\\n- [Feilmarkeringer i Arduino IDE](#feilmarkeringer-i-arduino-ide)\\n- [En feil om gangen](#en-feil-om-gangen)\\n- [Vanlige feil](#vanlige-feil)\\n  - [For hyppig klikk på Upload-knappen](#for-hyppig-klikk-på-upload-knappen)\\n  - [Bruk av annen `COM`-Port](#bruk-av-annen-com-port)\\n  - [Manglende Semikolon](#manglende-semikolon)\\n  - [Manglende lukkende parentes](#manglende-lukkende-parentes)\\n  - [Feilstavelser i navn](#feilstavelser-i-navn)\\n  - [Bruk av variabler utenfor scope](#bruk-av-variabler-utenfor-scope)\\n- [Gå tilbake](#gå-tilbake)\\n\\n## Feilmarkeringer i Arduino IDE\\n\\nAkkurat som læreren din i språkfag er også datamaskinen veldig nøye med hvordan du skriver koden din. Slike feil er forholdsvis enkle feil, siden datamaskinen oppdager feilstavelser når du laster opp programmet ditt til Arduinoen. Så selv om dette kanskje er plagsomt, så vil datamaskinen i det minste ikke få Arduinoen til gjøre noe helt fullstendig galt. I slike tilfeller vil Arduino IDE også vise hvor feilen ligger og si hva som er feil.\\n\\nTa for eksempel denne koden:\\n\\n``` cpp\\nint counter;\\n\\nvoid setup() {\\n  counter = 0\\n}\\n```\\n\\nSer du feilen? Om du klikker på `Verify`-knappen til venstre over teksten kan du verifisere at koden er rett og vise feil som datamaskinen kan oppdage.\\n\\n![Verifiser kode][missing-semicolon]\\n\\nI bildet over ser du også at Arduino IDE fremhever linjen der feilen oppsto med rød bakgrunn. Feilen oppsto ifølge Arduino IDE i linje 5.\\n\\nI feilmeldingen under teksteditoren skriver Arduino IDE dessuten også ut en forklaring av feilen:\\n\\n> Arduino: 1.8.5 (Windows 10), Board: \\\"Arduino/Genuino Uno\\\"\\n> \\n> C:\\\\Users\\\\Fredrik\\\\Documents\\\\Arduino\\\\sketch_nov14a\\\\sketch_nov14a.ino: In\\n> function 'void setup()':\\n> \\n> sketch_nov14a:5: error: expected ';' before '}' token\\n> \\n>  }\\n> \\n>  ^\\n> \\n> exit status 1\\n> expected ';' before '}' token\\n\\nFørste linjen i feilmeldingen viser versjonen til Arduinoe IDE og hvilken type Arduino vi programmerer med.\\n\\nSå kommer filnavnet og i hvilken del av programmet feilen oppsto. I dette tilfellet oppsto feilen i filen `C:\\\\Users\\\\Fredrik\\\\Documents\\\\Arduino\\\\sketch_nov14a\\\\sketch_nov14a.ino` og der i funksjonen `void setup()`, altså i `setup`-funksjonen vår.\\n\\nSå kommer en liste med alle feil i denne funksjonen. I dette tilfellet er det bare én feil. Først kommer navnet av filen, så et kolon, og så linjenummeret (*5*). Etter dette kommer selve feilmeldingen:\\n\\n> error: expected ';' before '}' token\\n\\nArduino IDE klager på at det mangler ett semikolon (`;`) ett eller annet sted **før** den lukkende klammerparantesen i linje 5. Og det er jo helt rett, fordi vi har glemt å avslutte instruksjonen i linje 4 med et semikolon.\\n\\n``` cpp\\nint counter;\\n\\nvoid setup() {\\n  counter = 0;\\n}\\n```\\n\\n**Så husk**: Ofte ligger feilen ikke nøyaktig der hvor Arduino IDE sier at den oppsto, men gjerne i linjen over. Dette kommer av at datamaskinen prøver så godt den kan og skjønne hva du vil gjøre. Derfor oppstår feilen først der hvor datamaskinen må gi opp og si at det er noe feil.\\n\\n## En feil om gangen\\n\\nNå du skriver et større program med mye kode kan det fort skje at du får mange feil, og noen av disse kan også påvirke hverandre. Da blir feilsøking gjerne litt vanskelig og feilmeldingene blir mer og mer kryptisk. En tommelfingerregel er å verifisere koden så ofte som mulig etter hvert småsteg du tar i programmeringen.\\n\\nNår du finner feil koden din, lønner det seg å alltids rette opp en og en feil og verifisere koden mellom hver rettelse. Feil lager ofte følgefeil, som da plutselig forsvinner. *Se for deg et stort regnestykke. Om du har ett tall feil helt i begynnelsen blir alt etter det feil, men om du bare retter opp feilen helt i begynnelsen, så blir gjerne alle følgende regnestykkene rett igjen.*\\n\\n## Vanlige feil\\n\\nAkkurat som små stavefeil i norsk, gjør vi også veldig vanlige feil som går igjen hele tiden når vi skriver kode. Her er noen av de mest vanlige feilene:\\n\\n### For hyppig klikk på Upload-knappen\\n\\nArduinoen er litt sårbar akkurat mens du laster opp kode til den ved å trykke på `Upload`-knappen i Arduino IDE. Når du trykker på `Upload`-knappen burde du helst vente til Arduino IDE enten har fullført å laste opp koden din, eller at den gir deg en feilmelding.\\n\\nOm du trykker på `Upload`-knappen mens det allerede er en opplastning underveis, kan det oppstå veldig rare feilmeldinger som kommer av at bare deler av et faktisk Arduino program havner på Arduinoen. Detter er ikke farlig, du må bare prøve igjen og neste gang vente til opplastingen er ferdig.\\n\\n### Bruk av annen `COM`-Port\\n\\nPå siden [Konfigurasjon av Arduino IDE][config-ide] vises det hvordan du setter opp Arduino IDE til å bruke rett `COM`-port for å snakke med Arduinoen over USB-ledningen. Om du ved en senere anledning plugger inn Arduinoen i en annen USB-port på datamaskinen din, eller plugger inn en annen Arduino, må du huske å velge rett `COM`-port på nytt, slik det står beskrevet i guiden.\\n\\n### Manglende Semikolon\\n\\nInstruksjoner i C++ må avsluttes med semikolon. Om du glemmer semikolon vil det oppstå en feil i linjen **etter** der du glemte semikolon. Feilmeldingen ser da slik ut:\\n\\n> expected ';' before &lt;tegn&gt; token\\n\\n*&lt;tegn&gt; kan være hva som helst som kommer etter linjen der du glemte semikolon.\\n\\nI noen tilfeller vil feilmeldingen si at den forventet noe annet enn ';' som her:\\n\\n``` cpp\\nvoid setup() {\\n  int x;\\n  int c\\n  x = 0;\\n  c = 1;\\n}\\n```\\n\\nFeilmelding:\\n\\n> sketch.ino:4: error: expected initializer before 'x'\\n\\nIgjen her mangler det noe (et semikolon) **før** `x` i linje 4.\\n\\n### Manglende lukkende parentes\\n\\nParenteser kommer alltid i par. For hver parentes du åpner må du også lukke den igjen. Dette gjelder for vanlige parenteser (`(`, `)`), krøllparenteser (`{`, `}`) og firkant-parenteser (`[`, `]`).\\n\\nFor manglende lukkende krøllparanteser `}` vil du se mange rare feilmeldinger og helt til slutt denne:\\n\\n> error: expected '}' at end of input\\n\\nFor manglende lukkende parenteser (`)`) vil du se mange rare feilmeldinger og blant dem denne. Det samme gjelder for manglende lukkende firkant-parenteser (`]`):\\n\\n> error: expected ')' before ...\\n\\n### Feilstavelser i navn\\n\\nDatamaskinen er **veldig** nøye når det gjelder navn på funksjoner og variabler. Husk at stor- og små-bokstaver er forskjellige for datamaskinen:\\n\\n``` cpp\\nvoid setup() {\\n  int intger;\\n  integer = 42;\\n}\\n```\\n\\nFeilmeldingen ser da slik ut:\\n\\n> sketch.ino:3: error: 'integer' was not declared in this scope\\n\\n### Bruk av variabler utenfor scope\\n\\nNår du skriver et sett med krøllparenteser (`{`, `}`) så introduserer du det vi kaller et *scope* i koden din. Dette skjer altså for hver funksjon, if-setning, eller løkke du skriver. Det som er viktig å huske på med et scope er at variabler du deklarerer inni dette scopet kun *lever* til koden møter den matchende lukkende krøllparentesen. La oss se på dette:\\n\\n``` cpp\\nvoid loop() {\\n  do {\\n    int error = sensor.read();\\n  } while (error < 0);\\n}\\n```\\n\\nI eksemplet over ser du en `do`-`while`-løkke. Inni denne deklarer vi variabelen `error` og setter dens verdi lik resultatet av en avlesning av sensor. **Men**: vi skjekker verdien til denne variabelen i betingelsen til `do`-`while`-løkken (i `(error < 0)`). Med den lukkende krøllparentesen foran `while`-kodeordet har variabelen `error` sluttet å eksistere, så `Arduino IDE` kommer til å klage med følgende feilmelding:\\n\\n> sketch.ino:4: error: 'error' was not declared in this scope\\n\\nFor å løse dette problemet må du deklarere variabelen i scopet utenfor løkken, som vist under. Merk at vi forsatt setter variabelens verdi *inni* løkken.\\n\\n``` cpp\\nvoid loop() {\\n  int error;\\n  do {\\n    error = sensor.read();\\n  } while (error < 0);\\n}\\n```\\n\\nMerk også at indre scopes har kjennskap til alle overordnete scopes. Dvs. `error` kjennes til både i scopet til `loop` funksjonen og inni scopet til `do`-`while`-løkken, siden den ligger inni scopet til `loop` funksjonen. Derimot så kan yttre scopes ikke ha kjennskap til ting som ligger i et indre scope, dvs. variabler inni `do`-`while`-løkken kommer ikke til å eksistere utenfor denne løkken.\\n\\n-----\\n\\n## Gå tilbake\\n\\n&uarr; [Gå til: **Guider**][guides]\\n\\n[guides]: airbit-Guider\\n[config-ide]: Konfigurasjon-av-Arduino-IDE\\n\\n[missing-semicolon]: /Arduino-IDE-Missing-Semicolon.png\\n\");\n\n//# sourceURL=webpack://airbit/./src/pages/Feils%C3%B8king-av-programmeringsfeil.md?");

/***/ })

}]);