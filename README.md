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



*** Om du inte har bower sen tidigare, och klonat repot istället för att följa
dessa instruktioner i ett nytt projekt, installera bower:

npm install -g bower
bower install



*** Test runner som kör noll st tester

Enhetstestning med Karma

- grunt karma



*** Protractor-test - gör helst i nytt terminalfönster

- https://github.com/andresdominguez/generator-protractor
- npm install -g generator-protractor
- mkdir protractor && cd $_
- yo protractor
- ./node_modules/.bin/webdriver-manager start
- ./node_modules/.bin/protractor protractor.conf.js




*** Få igång Angular/server på localhost:8000

`grunt serve` bygger om appen *och* kör alla enhetstester så snart man sparar en fil.

- cd ..
- grunt serve
- Ändra ett av scaffold-testerna så det fallerar. Visa output i terminalen.



Statisk testdata, vi hämtar json via manuellt API-anrop.

Vårt första test: Vi vill ha ett lunchställe i en vy, t.ex. i en h2:a (slumpmässigt utvald)
Controller för att hämta data.
Protractor-test!
Utgå från example-spec
Till att börja med så väljer vi konsekvent den första i listan
När vi har ett test som failar så har vi en bra anledning att skriva markup och kod
Istället för att hårdkoda namnet i vyn så använder vi en angular-template
Innan vi implementerar vår modell och kontroller så vill vi ha enhetstester!
Rensa ut scaffolding från main controller och skriv om testerna som genererades till projektet



Watch kör inte testerna vid ändring i controller, endast vid ändring i testet
Löser detta genom att ändra files-path för jsTest i Gruntfiles.js


*** Serva statisk JSON-data lokalt

- Lägg in statisk JSON-fil i test/fixtures/nearby.json
- Lägg in en connect-middleware som knyter '/places' till 'test/fixtures' (i både `test` och `livereload`)
- snippet: `connect().use('/places', connect.static('test/fixtures'))`
- Starta om servern och se att localhost:9000/places/nearby.json ger JSON-data


*** Testa mot servad JSON-data

- Testdriv MainCtrl till att mocka ut $httpBackend.

```
// beforeEach()
$httpBackend = $injector.get('$httpBackend');

// mocked response:
{
  response: {
    groups: [ {
      items: [ {
        venue: { name: 'Lounge Lizards' }
      } ]
    } ]
  }
}
```

- Viktigt: testa att anropet faktiskt utfördes! Demas enklast genom att försöka hårdkoda :)

```
afterEach(function() {
  $httpBackend.verifyNoOutstandingExpectation();
  $httpBackend.verifyNoOutstandingRequest();
});
```

- När controller-testet är grönt, validera med Protractor. Är Protractor grön:
  ladda om sidan för att visa att det fungerar på riktigt också.

## Bonusuppgifter

* Skriv Protractor-tester för Home och Contacts. (Med den version vi utvecklat
  här så visas inte Home när man följer länken - write a test, make it work
* Lägg in en knapp för att slumpa fram ett nytt ställe. Slumpa fram en
  restaurang som *inte* är samma som innan!
