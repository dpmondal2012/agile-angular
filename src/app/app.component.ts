import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(){ }

  public selectedLevel = {};
  public data: Array<Object> = [
      {application: "",
      technologies: "",
      dependency: ""},
      {application: "Advisor Portal",
      technologies: "Java, Services & Angular",
      dependency: "Agents Journey"},
      {application: "Customer Portal",
      technologies: "Java, Services, Angular & KnockoutJS",
      dependency: "Customer Journey"},
      {application: "Sales Portal",
      technologies: "AEM & Third Party services",
      dependency: "Sales team Journey"}
  ];

  selected(){
    console.log(this.selectedLevel)
  }
}
