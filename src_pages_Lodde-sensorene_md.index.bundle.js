/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkairbit"] = self["webpackChunkairbit"] || []).push([["src_pages_Lodde-sensorene_md"],{

/***/ "./src/pages/Lodde-sensorene.md":
/*!**************************************!*\
  !*** ./src/pages/Lodde-sensorene.md ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"På selve header shieldet finner vi bare LED lysene og motstanderene de trenger for å ikke brenne opp. Desverre er veldig lite spennende vi kan gjøre med Arduino'en uten sensorer. Så nå må vi lodde fast pinner i de tilsvarende hullene på shieldet.\\n\\n## Dette trenger du\\n\\n* Header shield\\n* Hvit/Blå ledning med fire ledere til støvmåleren\\n* Temperatursensoren (\\\"*Sukkerbiten*\\\")\\n* GPS modulen\\n* SD-kortleseren\\n* ZipLock-posen med smådeler\\n\\n## Lodde pinner på shieldet helplink\\n\\nTa frem radene med male header pinner som du allerede bruket når du loddet fast pinnene som plugges i Arduinoen. Klipp av rett antall pinner og plassér dem i shieldet på merkeringene for `Støvmåler`, `Temp/Fukt`, `GPS` og `SD-kortleser`. I alle tilfeller skal den korte delen av pinnen stikkes ned i shieldet og den lange delen av pinnen skal stikke opp.\\n\\nDu lodder fast pinnene ved å snu shieldet oppned, og lodder fast de korte endestykkene som stikker ut på undersiden av shieldet. Gjenta denne prosessen for alle fire delene.\\n\\n![][header-pins-pm]  \\nHeader pinner for støvmåleren.\\n\\n![][header-pins-dht]  \\nHeader pinner for temperatursensoren\\n\\n![][header-pins-gps]  \\nHeader pinner for GPS\\n\\n![][header-pins-sd]  \\nHeader pinner for microSD kortleseren\\n\\n## Lodde plugger i sensorene helplink\\n\\nStøvmåleren og Temperatursensoren kommer allerede med sine egne ledninger, og er derfor nå allerede klar til bruk. Men om du ser på GPS modulen og microSD kortleseren, så ser du at det bare er masse hull på chipene der dem skal kobles til shieldet. Vi må altså lodde fast plugger på disse, slik at vi kan plugge dem i shieldet.\\n\\nTa frem raden med female header plugger (*se bildet nedenfor*). Klipp til rett antall plugger for GPS'en og en gang til kortleseren. Stikk så pluggene inn gjennom hullene på chipen slik at pluggene stikker ut på undersiden. Du vil da kunne lodde fast endestykkene på oversiden av chipene.\\n\\n![Plassering av pluggene på undersiden av chipen][header-plugs-placement]\\n\\n![][header-plugs-sd]  \\nPlugger på undersiden av microSD kortleseren\\n\\n![][header-plugs-gps]  \\nPlugger på undersiden av GPS modulen\\n\\n## Ferdig\\n\\nNår alle pinner og plugger er plassert og loddet fast kan du plugge i de forskjellige delene i shieldet.\\n\\n![][plugging-pm]  \\nLedningen til Støvmåleren\\n\\n![][plugging-dht]  \\nPlugge inn temperatursensoren\\n\\n![][plugging-gps]  \\nPlugge inn GPS modulen\\n\\n## Gå videre\\n\\n&uarr; [Gå til **innholdsfortegnelsen**][home]  \\n&larr; [Gå tilbake til forrige steg: **Lodde header shieldet**][shield]  \\n&rarr; [Gå til neste steg: **Skru fast delene i boksen**][skrew]  \\n\\n[home]: Guide-Bygging-og-Lodding\\n[shield]: Lodde-header-shield\\n[skrew]: Skru-fast-komponenter\\n\\n[header-pins-pm]: 20171019_120102.jpg\\n[header-pins-dht]: 20171019_121148.jpg\\n[header-pins-gps]: 20171019_122615.jpg\\n[header-pins-sd]: 20171019_125617.jpg\\n[header-plugs-placement]: 20171019_130534.jpg\\n[header-plugs-gps]: 20171019_122732.jpg\\n[header-plugs-sd]: 20171019_130550.jpg\\n[plugging-pm]: 20171019_120201.jpg\\n[plugging-dht]: 20171019_121343.jpg\\n[plugging-gps]: 20171019_125500.jpg\\n\");\n\n//# sourceURL=webpack://airbit/./src/pages/Lodde-sensorene.md?");

/***/ })

}]);