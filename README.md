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

- Would you like to use Sass (with Compass)? **No**
- Would you like to include Bootstrap? **Yes**
- Which modules would you like to include? **[default]**

Sass är trevligt och något vi gärna använder, men Compass kräver att man har
Ruby-beroenden installerade. Poängen här är att bygga med TDD - inte att visa
fullständig setup för en webapp. Så vi duckar för den och kör vanlig CSS.



*** Test runner som kör noll st tester

Enhetstestning med Karma
- grunt watch



Protractor-test
- https://github.com/andresdominguez/generator-protractor
- npm install -g generator-protractor
- mkdir protractor && cd $_
- yo protractor
- ./node_modules/.bin/webdriver-manager start
- ./node_modules/.bin/protractor protractor.conf.js




Få igång Angular/server på localhost:8000
- cd ..
- grunt serve
