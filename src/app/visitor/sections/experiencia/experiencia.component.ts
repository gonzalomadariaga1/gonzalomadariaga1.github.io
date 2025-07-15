import { Component } from '@angular/core';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
  languages: string[];
  databases: string[];
  logo?: string;
}

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {

  experiences: Experience[] = [
    {
      company: "Dirección General de Modernización y Transformación Digital - Universidad de Valparaíso ",
      position: "Ingeniero de Software",
      period: "Julio, 2024 - Actualidad",
      description: [
        "Desarrollo de proyectos encargados de automatizar procesos académicos de la división de posgrado de la Universidad de Valparaíso, como la creación de programas, planes de estudios, asignaturas, periodos académicos, etc. Bajo metodologías ágiles, se implementaron módulos para los portales de funcionarios y académicos. Entre los módulos destacan: programas, planes de estudios, asignaturas, campus, facultades, unidades académicas, periodos, calendarios académicos, etc. Notificaciones vía correo electrónico. Manejo de archivos en MongoDB. Desarrollo de procedimientos almacenados en SQL Server. Arquitectura Front-end: MVC con dependencias TypeScript, Angular, NodeJS, PrimeNG. Arquitectura Back-end: microservicios (base, lógica, lógica compleja, controlador) con dependencias NodeJS y ExpressJs. Versionamiento con GIT y GitFlow."
      ],
      technologies: ["Angular", "PrimeNG", "NodeJS", "Git"],
      languages: ["Typescript", "Javascript"],
      databases: ["SQLServer", "MongoDB"],
      logo: 'assets/logos/uv.png'
    },
    {
      company: "Proyectos como freelance",
      position: "Ingeniero de Software",
      period: "Junio, 2021 - Abril, 2025",
      description: [
        "Clouds accesorios: ecommerce diseñado a medida con wordpress y woocommerce, recibe pagos mediante WebPay. Cuenta con plataforma de control de inventario, ventas, cambios y traslados de stock de productos. Puede ser utilizada en múltiples sucursales para tiendas ubicadas en variados centros comerciales. Importación y exportación masiva de productos y ventas.",
        "Progetto Sviluppo Psiche: plataforma autoadministrable multilenguaje que permite gestionar agenda y blog de psicóloga italiana. Pago de citas con PayPal y Stripe. Generación de notificaciones tanto para psicóloga y paciente. Sistema de cupones de descuento.",
        "Juntas pero no revueltas: ecommerce diseñado a medida con wordpress y woocommerce, recibe pagos mediante Flow. Cuenta con plataforma de control de inventario, ventas y cambios de productos. Puede ser utilizada en múltiples sucursales para tiendas ubicadas en variados centros comerciales. Permite a proveedores ingresar productos al sistema a través de formulario externo. Validación de productos,importación y exportación de productos, usuarios, ventas mediante archivos Excel, etc.",
        "Monitoreo de labores docentes: plataforma que permite automatizar y parametrizar labores de jefatura de unidad técnica pedagógica de establecimiento educacional. Genera anotaciones que sancionan a docentes que no cumplen con ciertas tareas requeridas por cada trimestre. Anotaciones son enlistada en archivo PDF que contiene firmas de director y jefe UTP del establecimiento."
      ],
      technologies: ["Laravel", "Wordpress", "JQuery", "Laravel DOMPDF", "Maatwebsite Excel", "Laravel Cookie Consent", "Laravel-permission"],
      languages: ["PHP", "Javascript"],
      databases: ["MySQL"]
    },
    {
      company: "Práctica profesional: SCL Consultores",
      position: "Estudiante de ingeniería civil en informática",
      period: "Septiembre, 2020 - Febrero, 2021",
      description: [
        "Desarrollo de plataforma de administración de servicio de agua potable rural capaz de obtener el consumo de agua (medidores) de cada cliente y con eso generar boletas electrónicas, convenios, repactación de deudas, pagos de boletas, generación de multas, etc."
      ],
      technologies: ["Laravel", "JQuery", "Laravel DOMPDF", "Maatwebsite Excel", "Laravel-permission"],
      languages: ["PHP", "Javascript"],
      databases: ["MySQL"],
      logo: 'assets/logos/scl.png'
    },
    {
      company: "Práctica profesional: Dirección de Programas, Investigación y Desarrollo de la Armada",
      position: "Estudiante de ingeniería civil en informática",
      period: "Enero, 2020 - Mayo, 2020",
      description: [
        "Desarrollo de plataforma que recopilaba información de personas de interés del ecosistema de investigación, desarrollo e innovación de la Armada de Chile."
      ],
      technologies: ["PHP nativo", "JQuery"],
      languages: ["PHP", "Javascript"],
      databases: ["MySQL"],
      logo: 'assets/logos/armada.png'
    },
  ]

}
