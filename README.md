# 🍺 What the Beer 🍺 
#### Introduction
**What the Beer** ist eine App, welche es dem Nutzer ermöglicht, sein neustes Lieblingsbier zu finden. Die App leitet den Benutzer durch die verschiedenen Aromen, welche ein Bier aufweisen kann. 
Am Ende gelangt der Benutzer zu einem spezifischen Bier Stil wie beispielsweise **'American Pale Ale'** unter welchem er einige Beispiel-Biere aufgelistet findet.
Von hier kann der Benutzer mehr über die einzelnen Biere erfahren. Ebenso kann er einzelne Biere zu seinen Favoriten hinzufügen um sie später einfacher wieder finden zu können. Zu jedem Bier kann der Benutzer zudem Notizen erfassen und in der App abspeichern.<br/><br/>
Die App wurde während des **FHNW Workshops WS6C - Mobile App Development** erstellt.
#### Team Members
* Heimo Paffhausen <heimo.paffhausen@students.fhnw.ch>
* Matthias Langhard <matthias.langhard@students.fhnw.ch>
#### How to run the app
* **Frontend**
  * Install Ionic
  * `npm install` (or `yarn install`)
  * `ionic serve`
* **Backend**
  * Install json-server: `npm install -g json-server`
  * Run it using the db.json within the repo: `json-server --watch db.json`
#### Tech Stack
##### Frontend
* [ionic](http://ionicframework.com)
* [Angular](http://angular.io)
##### Backend (Just for Testing)
* [BreweryDB](http://www.brewerydb.com/developers/docs) - **Öffentliche API**, benutzt für die Liste der Biere sowie Beschreibung der Biere
* [json-server](https://github.com/typicode/json-server) - Für das Persistieren von **Favoriten und Notizen**
##### Screenshots
![Screenshot 1](http://langhard.com/fhnw/what_the_beer/1.png "Finde Dein Bier anhand deiner Geschmacksrichtung")<br/>
![Screenshot 2](http://langhard.com/fhnw/what_the_beer/2.png "Finde Deinen Bier Stil")<br/>
![Screenshot 3](http://langhard.com/fhnw/what_the_beer/3.png "Dein Lieblingsbier")
