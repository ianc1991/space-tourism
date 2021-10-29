import { Tech } from './../../Models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-page',
  templateUrl: './technology-page.component.html',
  styleUrls: ['./technology-page.component.scss']
})
export class TechnologyPageComponent implements OnInit {

launchVehicle: Tech = {
  techName: 'LAUNCH VEHICLE',
  text: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad! ',
  image: '../../../assets/technology/image-launch-vehicle-portrait.jpg'
}
spaceport: Tech = {
  techName: 'SPACEPORT',
  text: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch. ',
  image: '../../../assets/technology/image-spaceport-portrait.jpg'
}
capsule: Tech = {
  techName: 'SPACE CAPSULE',
  text: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. ',
  image: '../../../assets/technology/image-space-capsule-portrait.jpg'
}

  imgSrc: string = this.launchVehicle.image;
  techName: string = this.launchVehicle.techName;
  bodyText: string = this.launchVehicle.text;
  activeTab: string = 'launch';

  constructor() { }

  ngOnInit(): void {
  }

  toggleTechDescription(tech: string) {
    if (tech === 'launch') {
    this.imgSrc = this.launchVehicle.image;
    this.techName = this.launchVehicle.techName;
    this.bodyText = this.launchVehicle.text;
  }

    if (tech === 'port') {
      this.imgSrc = this.spaceport.image;
      this.techName = this.spaceport.techName;
      this.bodyText = this.spaceport.text;
    }

    if (tech === 'capsule') {
      this.imgSrc = this.capsule.image;
      this.techName = this.capsule.techName;
      this.bodyText =this.capsule.text;
    }

    this.activeTab = tech;
  }

}
