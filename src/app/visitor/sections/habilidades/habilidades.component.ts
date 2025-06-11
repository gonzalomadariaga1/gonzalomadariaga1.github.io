// habilidades.component.ts - VERSIÓN SIMPLIFICADA
import { Component } from '@angular/core';

interface Technology {
  name: string;
  logo: string;
}

interface SkillCategory {
  name: string;
  icon: string;
  technologies: Technology[];
  isExpanded: boolean;
}

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent {

  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: '🖥️',
      isExpanded: false,
      technologies: [
        {
          name: 'Angular',
          logo: 'https://angular.io/assets/images/logos/angular/angular.svg'
        },
        {
          name: 'Blade',
          logo: 'https://cdn.worldvectorlogo.com/logos/blade-ui-kit.svg'
        },
        {
          name: 'Bootstrap',
          logo: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png'
        },
        {
          name: 'Tailwind CSS',
          logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
        },
        {
          name: 'PrimeNG',
          logo: 'https://www.primefaces.org/wp-content/uploads/2018/05/primeng-logo.png'
        }
      ]
    },
    {
      name: 'Backend',
      icon: '⚙️',
      isExpanded: false,
      technologies: [
        {
          name: 'Node.js',
          logo: 'https://nodejs.org/static/images/logo.svg'
        },
        {
          name: 'Express.js',
          logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'
        },
        {
          name: 'Laravel',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png'
        }
      ]
    },
    {
      name: 'Base de Datos',
      icon: '🗄️',
      isExpanded: false,
      technologies: [
        {
          name: 'MySQL',
          logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-official.svg'
        },
        {
          name: 'MongoDB',
          logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg'
        },
        {
          name: 'SQLServer',
          logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg'
        }
      ]
    },
    {
      name: 'Control de Versiones',
      icon: '📚',
      isExpanded: false,
      technologies: [
        {
          name: 'Git',
          logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
        },
        {
          name: 'GitHub',
          logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg'
        }
      ]
    }
  ];

  toggleCategory(index: number): void {
    this.skillCategories[index].isExpanded = !this.skillCategories[index].isExpanded;
  }
}
