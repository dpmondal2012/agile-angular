import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(){ }

  public selectedLevel = {};
  public deleteLevel: any = {};
  public showAddButton: boolean = true;
  public appName = "";
  public appTechnology = "";
  public appDependency = "";
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

  selected() {
    console.log(this.selectedLevel)
  }
  delete() {
    console.log(this.deleteLevel)
  }
  addAppClick() {
    this.showAddButton = false;
  }
  cancelClick() {
    this.showAddButton = true;
    this.appName = "";
    this.appTechnology = "";
    this.appDependency = "";
  }
  appAdded() {
    this.data.push({application: this.appName, technologies: this.appTechnology, dependency: this.appDependency});
    this.showAddButton = true;
    this.appName = "";
    this.appTechnology = "";
    this.appDependency = "";
  }
  deleteApp() {
    console.log(this.deleteLevel);
    let index: number
    this.data.map((x: any) => {
      if(x.application !== "" && x.application === this.deleteLevel.application ) {
        index = this.data.indexOf(x);
      }
    });
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }
}
