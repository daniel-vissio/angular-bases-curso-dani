import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})


export class HeroComponent {

  public name:string = "iron Man";
  public age:number = 35;
  // Puedo crear get y set.

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = "Spiderman";
  }

  changeAge():void{
    this.age = 50;
  }

  resetForm():void{
    this.name = "iron Man";
    this.age = 35;
  }

}
