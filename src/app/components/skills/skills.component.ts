import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // skills = ['Java', 'Angular', 'JavaScript', 'MySQL', 'HTML', 'CSS', 'AWS', 'GitHub'];
  // skills.component.ts
skills = [
  { name: 'Java', img: 'assets/Images/java.jpg' },
  { name: 'Angular', img: 'assets/Images/angular.jpg' },
  { name: 'AWS', img: 'assets/Images/aws.png' },
  { name: 'HTML', img: 'assets/Images/html.png' },
  { name: 'CSS', img: 'assets/Images/css.jpg' },
  { name: 'JavaScript', img: 'assets/Images/js.png' },
  { name: 'MySQL', img: 'assets/Images/mysql.png' },
];
}
