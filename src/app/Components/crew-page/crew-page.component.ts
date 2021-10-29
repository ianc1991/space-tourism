import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/Models';

@Component({
  selector: 'app-crew-page',
  templateUrl: './crew-page.component.html',
  styleUrls: ['./crew-page.component.scss']
})
export class CrewPageComponent implements OnInit {
  

  crewDouglas: Crew = {
    jobTitle: 'COMMANDER',
    name: 'DOUGLAS HURLEY',
    text: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    image: '../../../assets/crew/image-douglas-hurley.png'
  }
  crewMark: Crew = {
    jobTitle: 'Mission Specialist',
    name: 'Mark Shuttleworth',
    text: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    image: '../../../assets/crew/image-mark-shuttleworth.png'
  }
  crewVictor: Crew = {
    jobTitle: 'Pilot',
    name: 'Victor Glover',
    text: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    image: '../../../assets/crew/image-victor-glover.png'
  }
  crewAnousheh: Crew = {
    jobTitle: 'Flight Engineer',
    name: 'Anousheh Ansari',
    text: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    image: '../../../assets/crew/image-anousheh-ansari.png'
  }

  crewImg: string = this.crewDouglas.image;
  crewJobTitle: string = this.crewDouglas.jobTitle;
  crewName: string = this.crewDouglas.name;
  crewText: string = this.crewDouglas.text;
  activeTab: string = 'douglas';





  constructor() { }

  ngOnInit(): void {
  }

  toggleCrewDescription(crewMember: string) {
    if(crewMember === 'douglas') {
      this.crewImg = this.crewDouglas.image;
      this.crewJobTitle = this.crewDouglas.jobTitle;
      this.crewName = this.crewDouglas.name;
      this.crewText = this.crewDouglas.text;
    }

    if(crewMember === 'mark') {
      this.crewImg = this.crewMark.image;
      this.crewJobTitle = this.crewMark.jobTitle;
      this.crewName = this.crewMark.name;
      this.crewText = this.crewMark.text;
    }

    if(crewMember === 'victor') {
      this.crewImg = this.crewVictor.image;
      this.crewJobTitle = this.crewVictor.jobTitle;
      this.crewName = this.crewVictor.name;
      this.crewText = this.crewVictor.text;
    }

    if(crewMember === 'anousheh') {
      this.crewImg = this.crewAnousheh.image;
      this.crewJobTitle = this.crewAnousheh.jobTitle;
      this.crewName = this.crewAnousheh.name;
      this.crewText = this.crewAnousheh.text;
    }

    this.activeTabChanger(crewMember);
  }

  activeTabChanger(activeTabValue: string) {
    this.activeTab = activeTabValue;
  }

}
