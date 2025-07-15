// proyectos.component.ts - VERSIÓN OPTIMIZADA
import { Component, OnDestroy, OnInit } from '@angular/core';

interface Project {
  isProduction: boolean,
  title: string;
  description: string[];
  images: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent implements OnInit, OnDestroy {
  isProduction: boolean = true;
  filteredProjects: Project[] = [];
  projects: Project[] = [
    {
      isProduction: true,
      title: "Clouds Accesorios",
      description: [
        "Control de acceso mediante cuentas de usuarios con roles.",
        "Mantenedores de usuarios, roles, permisos, productos, sucursales y ventas.",
        "Gestión de ventas y traslado de stocks de productos.",
        "Importación masiva de productos mediante archivos EXCEL.",
        "Exportación masiva de traslados de stocks de productos, ventas y productos mediantes archivos EXCEL.",
        "Ecommerce diseñado a medida con wordpress y woocommerce",
        "Ecommerce: envío de cupones por email según eventos: nuevo cliente, primera compra, número de pedidos, cumpleaños, etc.",
        "Ecommerce: personalización completa de emails generados por woocommerce",
        "Ecommerce: lista de deseos",
        "Ecommerce: ventanas emergentes según factores: nuevos productos en categoría específica, geolocalización, total carrito, etc.",
      ],
      images: [
        "assets/proyectos/clouds_1.jpg",
        "assets/proyectos/clouds_2.jpg",
        "assets/proyectos/clouds_3.jpg",
        "assets/proyectos/clouds_4.jpg"
      ],
      technologies: ["Laravel", "Wordpress", "JQuery", "Maatwebsite Excel", "Laravel-permission", "PHP", "MySQL", "Javascript", "GIT"],
    },
    {
      isProduction: true,
      title: "Progetto Sviluppo Psiche",
      description: [
        "Control de acceso mediante cuentas de usuarios con roles.",
        "Sitio autoadministrable, opción de editar páginas: sobre mi, servicios, tarifas, blog, TyC, consentimiento, etc.",
        "Multilenguaje: español - italiano.",
        "Blog autoadministrable. Mantenedores para posts, categorías, etiquetas.",
        "Agenda online. Mantenedores para horas disponibles, reservas por confirmar, paquetes, servicios y modalidades.",
        "Pago de citas por medio de PayPal, Stripe, transferencia bancaria (requiere verificación).",
        "Cupones de descuento. Mantenedor de cupones que genera descuento por porcentaje o cantidad fija. Límite de uso máximo de veces, limite de uso por paciente",
        "Mantenedores de usuarios, roles y permisos."
      ],
      images: [
        "assets/proyectos/psp_1.jpg",
        "assets/proyectos/psp_2.jpg",
        "assets/proyectos/psp_3.jpg",
        "assets/proyectos/psp_4.jpg",
        "assets/proyectos/psp_5.jpg",
      ],
      technologies: ["Laravel", "Wordpress", "JQuery", "Laravel-permission", "PHP", "MySQL", "Javascript", "GIT"],
    },
    {
      isProduction: true,
      title: "Tienda Juntas pero no revueltas",
      description: [
        "Control de acceso mediante cuentas de usuarios con roles.",
        "Ingreso de productos a través de formulario externo para proveedores. Solo pueden ingresar productos proveedores que se encuentren registrados en el sistema. Los proveedores ingresan con su RUT.",
        "Mantenedor de productos: permite aceptar o rechazar productos de formulario externo. Producto asociado a proveedor consignación o factura. Cálculo automático valor neto, valor IVA, ganancia y porcentaje ganancia.",
        "Mantenedor de proveedores: atributo RUT (número de cédula chilena) se verifica si fue ingresado correctamente.",
        "Mantenedor de ventas. Permite ingresar una venta de uno o más productos permitiendo además, agregar un descuento en porcentaje.",
        "Control de cambios de productos: permite gestionar el cambio de uno o más productos de una venta. Por cada producto es posible reponer su stock. El cambio será posible siempre y cuando el total de los productos nuevos supere o iguale el valor de los productos seleccionados para cambiar.",
        "Importación masiva de productos por medio de un archivo en formato .xslx (Excel).",
        "Exportación masiva de usuarios, proveedores, productos y ventas (con detalle de ventas) mediante archivo en formato .xslx.",
        "Ecommerce diseñado a medida con wordpress y woocommerce",
        "Ecommerce: envío de cupones por email según eventos: nuevo cliente, primera compra, número de pedidos, cumpleaños, etc.",
        "Ecommerce: personalización completa de emails generados por woocommerce",
        "Ecommerce: lista de deseos",
        "Ecommerce: ventanas emergentes según factores: nuevos productos en categoría específica, geolocalización, total carrito, etc."
      ],
      images: [
        "assets/proyectos/juntas_1.jpg",
        "assets/proyectos/juntas_2.jpg",
        "assets/proyectos/juntas_3.jpg",
        "assets/proyectos/juntas_4.jpg",
        "assets/proyectos/juntas_5.jpg"
      ],
      technologies: ["Laravel", "Wordpress", "JQuery", "Laravel-permission", "Maatwebsite Excel", "PHP", "MySQL", "Javascript", "GIT"],
    },
    {
      isProduction: false,
      title: "Salón de belleza",
      description: [
        "Control de acceso mediante cuentas de usuarios con roles.",
        "Mantenedor de citas",
        "Sistema de notificaciones para administrador y clientes",
        "Cuenta demo: portafolio@gmail.com",
        "Contraseña demo: password"
      ],
      images: [
        "assets/proyectos/salon_1.jpg",
        "assets/proyectos/salon_2.jpg",
        "assets/proyectos/salon_3.jpg",
        "assets/proyectos/salon_4.jpg",
      ],
      technologies: ["VueJs", "Node.js", "Express", "MongoDB", "Tailwind"],
      demoUrl: 'https://app-salon-frontend-red.vercel.app/auth/login'
    },
    {
      isProduction: false,
      title: "Punto de venta",
      description: [
        "Control de acceso mediante cuentas de usuarios con roles.",
        "Carrito reactivo",
        "Mantenedor de productos",
        "Cálculo de stock automático",
        "Cupones de descuento",
        "Visualización de resumen de ventas",
        "Cupones de descuento: 10DESCUENTO - 20 DESCUENTO"
      ],
      images: [
        "assets/proyectos/seguimiento-1.webp",
        "assets/proyectos/seguimiento-2.webp",
      ],
      technologies: ["VueJs", "Node.js", "Express", "Firebase", "Tailwind"],
      demoUrl: 'https://pos-vue-pi.vercel.app/'
    },
    {
      isProduction: false,
      title: "Venta de propiedades",
      description: [
        "Control de acceso mediante cuentas de usuarios con roles.",
        "Mantenedor de propiedades con fotos",
        "Ubicación propiedad por mapa",
        "Cuenta demo: portafolio@gmail.com",
        "Contraseña demo: password"
      ],
      images: [
        "assets/proyectos/bienes_1.jpg",
        "assets/proyectos/bienes_2.jpg",
        "assets/proyectos/bienes_3.jpg",
      ],
      technologies: ["VueJs", "Node.js", "Express", "MongoDB", "Tailwind"],
      demoUrl: 'https://bienesraices-five.vercel.app/'
    },
    {
      isProduction: false,
      title: "Recetas de cocktail",
      description: [
        "Búsqueda de tragos",
        "Uso de API",
        "Seleccionar trago como favorito (se guarda en localStorage)"
      ],
      images: [
        "assets/proyectos/cocktail_1.jpg",

      ],
      technologies: ["VueJs", "Headlessui", "Axios"],
      demoUrl: 'https://bebidas-app-vue.vercel.app/'
    },
    {
      isProduction: false,
      title: "Clima",
      description: [
        "Clima actual de ciudad según data obtenida desde API."
      ],
      images: [
        "assets/proyectos/clima_1.jpg",
      ],
      technologies: ["VueJs"],
      demoUrl: 'https://app-clima-vue-peach.vercel.app/'
    }
  ];

  currentImageIndices: number[] = [];
  private carouselIntervals: any[] = [];
  isTransitioning: boolean[] = [];

  private transitionDuration = 300;
  private autoplayDelay = 4000;

  // Colores para tecnologías usando clases de Tailwind
  techColors: { [key: string]: string } = {
    'Angular': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
    'Laravel': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    'VueJs': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    'Wordpress': 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
    'JQuery': 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
    'Node.js': 'bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-200',
    'Express': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
    'MongoDB': 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200',
    'MySQL': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    'TypeScript': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    'Laravel-permission': 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200',
    'PHP': 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200',
    'Javascript': 'bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200',
    'Laravel DOMPDF': 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200',
    'PrimeNG': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
    'Maatwebsite Excel': 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
    'SCSS': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
    'HTML': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
    'GIT': 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
    'AWS S3': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
    'Tailwind': 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200',
  };

  ngOnInit() {
    this.updateFilteredProjects();
    this.initializeCarousel();
  }

  ngOnDestroy() {
    this.carouselIntervals.forEach(interval => clearInterval(interval));
  }

  private initializeCarousel() {
    this.currentImageIndices = new Array(this.filteredProjects.length).fill(0);
    this.isTransitioning = new Array(this.filteredProjects.length).fill(false);

    this.filteredProjects.forEach((project, index) => {
      if (project.images.length > 1) {
        const interval = setInterval(() => {
          if (!this.isTransitioning[index]) {
            this.nextImage(index);
          }
        }, this.autoplayDelay);
        this.carouselIntervals.push(interval);
      }
    });
  }

  nextImage(projectIndex: number) {
    if (this.isTransitioning[projectIndex]) return;

    const project = this.filteredProjects[projectIndex];
    if (project.images.length <= 1) return;

    this.performTransition(projectIndex, () => {
      this.currentImageIndices[projectIndex] =
        (this.currentImageIndices[projectIndex] + 1) % project.images.length;
    });
  }

  previousImage(projectIndex: number) {
    if (this.isTransitioning[projectIndex]) return;

    const project = this.filteredProjects[projectIndex];
    if (project.images.length <= 1) return;

    this.performTransition(projectIndex, () => {
      this.currentImageIndices[projectIndex] =
        this.currentImageIndices[projectIndex] === 0
          ? project.images.length - 1
          : this.currentImageIndices[projectIndex] - 1;
    });
  }

  goToImage(projectIndex: number, imageIndex: number) {
    if (this.isTransitioning[projectIndex] ||
        this.currentImageIndices[projectIndex] === imageIndex) return;

    this.performTransition(projectIndex, () => {
      this.currentImageIndices[projectIndex] = imageIndex;
    });
  }

  private performTransition(projectIndex: number, callback: () => void) {
    this.isTransitioning[projectIndex] = true;
    callback();
    setTimeout(() => {
      this.isTransitioning[projectIndex] = false;
    }, this.transitionDuration);
  }

  getTechColor(tech: string): string {
    return this.techColors[tech] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
  }

  getWrapperTransform(projectIndex: number): string {
    const currentIndex = this.currentImageIndices[projectIndex];
    return `translateX(-${currentIndex * 100}%)`;
  }

  pauseAutoplay(projectIndex: number) {
    if (this.carouselIntervals[projectIndex]) {
      clearInterval(this.carouselIntervals[projectIndex]);
      this.carouselIntervals[projectIndex] = null;
    }
  }

  resumeAutoplay(projectIndex: number) {
    const project = this.filteredProjects[projectIndex];
    if (project.images.length > 1 && !this.carouselIntervals[projectIndex]) {
      const interval = setInterval(() => {
        if (!this.isTransitioning[projectIndex]) {
          this.nextImage(projectIndex);
        }
      }, this.autoplayDelay);
      this.carouselIntervals[projectIndex] = interval;
    }
  }

  onImageLoad(): void {
    // Imagen cargada correctamente
  }

  onImageError(): void {
    console.error('Error al cargar la imagen');
  }

  changeMode(mode: boolean){
    this.isProduction = mode;
    this.updateFilteredProjects();
  }

  updateFilteredProjects() {
    this.filteredProjects = this.projects.filter(project => project.isProduction === this.isProduction);
  }
}
