import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'YouTube Comment Sentiment Analysis',
      description: 'Built with Python, NLP, and Machine Learning to analyze YouTube comments. Achieved 90% accuracy using Scikit-learn.',
      image: 'assets/youtube-sentiment.png'
    },
    {
      title: 'FindPerfectNest (MERN)',
      description: 'A real estate platform with interactive maps, property search, and live chat between agents and users.',
      image: 'assets/findperfectnest.png'
    }
  ];
}
