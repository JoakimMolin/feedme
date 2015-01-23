FEEDME
======

Koncept: Slumpa ett förslag på lunchställe (begränsa radie)

Steg 1: Statisk JSON
Steg 2: Foursquare API (https://developer.foursquare.com, antagligen bättre anpassat än google places) 

Scaffolding:
- Lineman med Angular template: https://github.com/linemanjs/lineman-angular-template
- eller Yeoman med Angular generator: https://github.com/yeoman/generator-angular

Testning:
- Protractor för att testa Angular-logiken
- Mocha med Sinon + Chai för modeller
- Testem.js som testrunner (Karma hade kunnat vara ett alternativ)



npm install -g generator-angular

*** Prata om Lineman och Yeoman, vad Yeoman används till (scaffolding, automatiserad uppsättning)



yo angular

*** Bootstrap, Sass, Angular-moduler



https://github.com/callumlocke/generator-mocha-testem
npm install -g generator-mocha-testem
npm install -g bower
yo mocha-testem

*** Test runner som kör noll st tester