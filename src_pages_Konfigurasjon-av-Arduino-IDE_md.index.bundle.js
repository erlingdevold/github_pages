/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkairbit"] = self["webpackChunkairbit"] || []).push([["src_pages_Konfigurasjon-av-Arduino-IDE_md"],{

/***/ "./src/pages/Konfigurasjon-av-Arduino-IDE.md":
/*!***************************************************!*\
  !*** ./src/pages/Konfigurasjon-av-Arduino-IDE.md ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"Nå må vi sette opp `Arduino IDE` til å snakke med mikrokontrolleren vår. Vi vil også sette noen innstillinger som vil gjøre det enkere å programmere og finne mulige feil i koden senere.\\n\\n## Valg av Port for din Arduino helplink\\n\\nNå er det på tide å bruke USB-ledningen til Arduino'en og plugge den inn i PCen på en helt vanlig USB-port. Om du har skrudd på lyden på maskinen din, vil du høre den vanlige lyden PCer gir fra seg når du plugger inn nye enheter.\\n\\nNår du plugger inn en Arduino vil Operativsystemet sette opp noe som kalles en seriell port, også kallt `COM`. På Windows er disse portene nummerert med et tall og tallet blir større for hver ny COM-enhet du kobler til maskinen din.\\n\\n**Når du nettopp har plugget inn Arduino kontrolleren din vil den høyeste tilgjengelige porten være porten som er tildelt til din Arduino!**\\n\\nI `Arduino IDE` i menylinjen øvert velg `Tools` (eller `Verktøy`) så velg `Port` og velg den COM-porten med det høyeste tallet.\\n\\n![Velg Arduino COM Port i Arduino IDE][select-arduino-ide-port]\\n\\n*Merk at tallet du ser i listen kan være forskjellig fra det du ser i bildet over*\\n\\nI den samme menyen, i punket over Porten, står det også hvilken type Arduino systemet er valg å programmere imot (det finner mange forskjellige Arduinoer). Vanligvis vil `Arduino/Genuino Uno` være valgt som er den rette. Skjekk at den rette enhetstypen er valgt. Du vil også se enhetstypen stående nederst i høyre hjørnet av vinduet.\\n\\nPå Windows maskiner vil operativsystemet huske din Arduino. Så lenge du bruker samme Arduino på din PC, vil COM-porten ikke endre seg om du plugger inn Arduinoen på nytt. Merk at port vil forsvinne som valgmulighet fra menyen dersom du kobler fra Arduinoen fra datamaskinen.\\n\\n## Innstillinger helplink\\n\\nVi kommer til å bruke mye tid med leke oss med Arduino-kode i `Arduino IDE`. For å være mest produktiv, er det lurt å sette opp noen innstillinger for programmet nå, slik at ting blir litt mere oversiktlig og enklere å håndtere.\\n\\nI menylinjen øverst, klikk på `File` (eller `Fil`) og velg så `Preferences` (`Preferanser`).  \\n![Menypunkt File -> Preferences][menu-file-preferences]\\n\\nNår du holder på med programmering anbefales det på det sterkeste å skru på linjenummering i editoren. Det vil gjøre det enklere å lese feilmeldinger senere siden de alle kommer med et linjenummer der feilen oppsto.  \\n![Innstillingen for linjenummerering][preferences-linenumbers]\\n\\nI det samme vinduet kan du også endre skriftsørrelsen på teksten i editoren (`Editor font size`), skru på flere feil- og varselmeldinger fra programmet som tolker koden din (`Compiler warnings`) og du kan bytte språk på `Arduino IDE` (`Editor Language`).\\n\\nSiden alle guidene, og bilder i disse guidene bruker Engelsk språk i Arduino IDE anbefales det at du velger Engelsk som språk. Dette vil gjøre det enklere å finne rette menypunkt. I tillegg vil feilmeldinger være enklere å 'google' når dem er på engelsk, siden det er så få som snakker norsk og enda ferre som programmerer Arduinoer.\\n\\nDu kan senere alltids gå tilbake til innstillingene senere og endre på dem om du ønsker. Ignorér innstillinger som du ikke skjønner hva dem gjør, i disse tilfellene er det best å la dem være på standard-innstillingene.\\n\\n## Gå videre\\n\\n&uarr; [Gå til **innholdsfortegnelsen**][setup-home]  \\n&larr; [Gå tilbake til forrige steg: **Start Arduino IDE**][start-arduino-ide]  \\n&rarr; [Gå til neste steg: **Laste opp tom sketch**][upload-empty-sketch]  \\n\\n[setup-home]: Guide-Oppsett-for-programmering\\n[start-arduino-ide]: Start-Arduino-IDE\\n[upload-empty-sketch]: Laste-opp-tom-sketch-til-Arduinoen\\n\\n[select-arduino-ide-port]: Arduino-IDE-Select-Port-Screen.png\\n[menu-file-preferences]: Arduino-IDE-Menu-File-Preferences.png\\n[preferences-linenumbers]: Arduino-IDE-Preferences-DisplayLineNumbers.png\\n\");\n\n//# sourceURL=webpack://airbit/./src/pages/Konfigurasjon-av-Arduino-IDE.md?");

/***/ })

}]);