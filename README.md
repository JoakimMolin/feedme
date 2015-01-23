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



Enhetstestning test-runner https://github.com/callumlocke/generator-mocha-testem
- npm install -g generator-mocha-testem
- npm install -g bower
- yo mocha-testem
- testem

*** Test runner som kör noll st tester



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
- inse att vi ville använda Karma istället för Testem ;)