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
      image: 'assets/youtube_sentiment.png'
    },
    {
      title: 'FindPerfectNest (MERN)',
      description: 'A real estate platform with interactive maps, property search, and live chat between agents and users.',
      image: 'assets/find_perfect_nest.png'
    },
    {
      title: 'Home Loan Finance (Spring Boot, Angular, MySQL)',
      description: 'Developed a full-stack loan management system with role-based dashboards. Implemented workflows for loan application, CIBIL check, document verification, sanction generation, and final disbursement.',
      image: 'assets/home_loan_finance.png'
    }
  ];
}
