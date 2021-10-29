import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/Models';

@Component({
  selector: 'app-destination-page',
  templateUrl: './destination-page.component.html',
  styleUrls: ['./destination-page.component.scss']
})
export class DestinationPageComponent implements OnInit {  

  moon: Planet = {
    title: 'MOON',
    text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    image: '../../../assets/destination/image-moon.png',
    avgDistance: '384,400 KM',
    travelTime: '3 DAYS'
  }
  mars: Planet = {
    title: 'MARS',
    text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    image: '../../../assets/destination/image-mars.png',
    avgDistance: '225 MIL. KM',
    travelTime: '9 MONTHS'
  }
  europa: Planet = {
    title: 'EUROPA',
    text: ' The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    image: '../../../assets/destination/image-europa.png',
    avgDistance: '628 MIL. KM',
    travelTime: '3 YEARS'
  }
  titan: Planet = {
    title: 'TITAN',
    text: ' The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    image: '../../../assets/destination/image-titan.png',
    avgDistance: '1.6 BIL. KM',
    travelTime: '7 YEARS'
  }
  imgSource: string = this.moon.image;
  planetTitle: string = this.moon.title;
  planetText: string = this.moon.text;
  avgDistance: string = this.moon.avgDistance;
  travelTime: string = this.moon.travelTime;
  activeTab: string = 'moon';

  constructor() { }

  ngOnInit(): void {
  }

  // TODO - Could probably refactor this to an NgFor in template
  // Update planet information when tab is clicked
  togglePlanetDescription(planet: string) {
    if (planet == 'moon') {
      this.imgSource = this.moon.image;
      this.planetTitle = this.moon.title;
      this.planetText = this.moon.text;
      this.avgDistance = this.moon.avgDistance;
      this.travelTime = this.moon.travelTime;
    }
    if (planet == 'mars') {
      this.imgSource = this.mars.image;
      this.planetTitle = this.mars.title;
      this.planetText = this.mars.text;
      this.avgDistance = this.mars.avgDistance;
      this.travelTime = this.mars.travelTime;
    }
    if(planet == 'europa') {
      this.imgSource = this.europa.image;
      this.planetTitle = this.europa.title;
      this.planetText = this.europa.text;
      this.avgDistance = this.europa.avgDistance;
      this.travelTime = this.europa.travelTime;
    }
    if(planet == 'titan') {
      this.imgSource = this.titan.image;
      this.planetTitle = this.titan.title;
      this.planetText = this.titan.text;
      this.avgDistance = this.titan.avgDistance;
      this.travelTime = this.titan.travelTime;
    }

    this.activeTabChanger(planet);
  }

  // Keeps active tab underlined
  activeTabChanger(activeTabValue: string) {
    this.activeTab = activeTabValue;
  }
}
