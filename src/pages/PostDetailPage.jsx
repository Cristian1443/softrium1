// src/pages/PostDetailPage.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CalendarIcon, UserIcon, ClockIcon, ArrowIcon, TagIcon } from '../components/Icons';
import styles from './PostDetailPage.module.css';

// Importar imágenes
import blogImage1 from '../assets/blog/blog-image-1.jpg';
import blogImage2 from '../assets/blog/blog-image-2.jpg';
import teamSoftrium from '../assets/team-softrium.jpg';

function PostDetailPage() {
  const { id } = useParams();

  // Datos de los posts (mismo array que en BlogPage)
  const posts = [
    {
      id: 1,
      title: "Las Tendencias de Desarrollo Web para 2024",
      excerpt: "Descubre las tecnologías y prácticas que dominarán el desarrollo web este año, desde frameworks modernos hasta herramientas de desarrollo.",
      content: `
El desarrollo web continúa evolucionando a un ritmo acelerado, y 2024 promete ser un año revolucionario para los desarrolladores y las empresas que buscan mantenerse a la vanguardia tecnológica.

## Frameworks de Nueva Generación

### Next.js 14 y App Router
Next.js ha revolucionado el desarrollo de aplicaciones React con su nuevo App Router, ofreciendo:
- **Server Components** para mejor rendimiento
- **Streaming** para cargas más rápidas
- **Optimizaciones automáticas** de imágenes y fuentes
- **Edge Runtime** para despliegues globales

### Astro y la Era del Static Site Generation
Astro se está posicionando como la herramienta preferida para sitios web ultra-rápidos:
- **Zero JavaScript** por defecto
- **Island Architecture** para hidratación selectiva
- **Compatibilidad multi-framework**
- **SEO optimizado** desde el primer momento

## TypeScript Everywhere

TypeScript ya no es una opción, es una necesidad. Las ventajas son claras:
- **Detección temprana de errores**
- **Mejor experiencia de desarrollo**
- **Refactoring seguro**
- **Documentación automática**

## Herramientas de Desarrollo Modernas

### Vite como Build Tool
Vite ha cambiado el juego con:
- **Hot Module Replacement** instantáneo
- **Builds optimizados** con Rollup
- **Soporte nativo** para TypeScript
- **Plugin ecosystem** robusto

### Nuevas Herramientas de Testing
- **Vitest** para testing unitario
- **Playwright** para testing end-to-end
- **Testing Library** para testing de componentes

## El Futuro de CSS

### CSS Container Queries
Finalmente podemos escribir CSS verdaderamente responsivo:
\`\`\`css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

### CSS Layers y Cascade Layers
Una nueva forma de manejar la especificidad:
\`\`\`css
@layer base, components, utilities;
@layer base {
  h1 { font-size: 2rem; }
}
\`\`\`

## Performance y Core Web Vitals

Google continúa priorizando la experiencia del usuario:
- **Largest Contentful Paint (LCP)** < 2.5s
- **First Input Delay (FID)** < 100ms
- **Cumulative Layout Shift (CLS)** < 0.1

## Conclusión

2024 será el año donde la experiencia del desarrollador y la performance del usuario convergen. Las herramientas están madurando, los estándares se están estableciendo, y las mejores prácticas se están cristalizando.

Para mantenerte competitivo, enfócate en:
1. **Adoptar TypeScript** si aún no lo has hecho
2. **Experimentar con Next.js 14** y Astro
3. **Optimizar Core Web Vitals**
4. **Implementar testing automatizado**
5. **Explorar las nuevas características de CSS**
      `,
      date: "2024-01-15",
      author: "Carlos Martínez",
      image: blogImage1,
      category: "Desarrollo Web",
      readTime: "5 min",
      featured: true,
      tags: ["React", "Next.js", "TypeScript", "Web Development"]
    },
    {
      id: 2,
      title: "Cómo la IA está Transformando el Desarrollo de Software",
      excerpt: "Un análisis profundo del impacto de la inteligencia artificial en la industria del software y las nuevas oportunidades que presenta.",
      content: `
La inteligencia artificial está revolucionando la manera en que desarrollamos software, desde la escritura de código hasta el testing y deployment. Esta transformación no es futura, está sucediendo ahora.

## IA en la Escritura de Código

### GitHub Copilot y Asistentes de Código
Los asistentes de IA han cambiado fundamentalmente cómo escribimos código:
- **Autocompletado inteligente** que entiende el contexto
- **Generación de funciones completas**
- **Sugerencias de mejores prácticas**
- **Detección automática de bugs**

### Claude, ChatGPT y el Pair Programming con IA
Los grandes modelos de lenguaje se han convertido en compañeros de programación:
- **Explicación de código complejo**
- **Refactoring automático**
- **Generación de documentación**
- **Resolución de problemas específicos**

## Automatización de Testing

### Testing Inteligente
La IA está transformando cómo probamos nuestras aplicaciones:
- **Generación automática de test cases**
- **Detección de edge cases**
- **Testing visual automatizado**
- **Predicción de fallos**

### Quality Assurance Aumentado
Los equipos de QA ahora tienen herramientas más poderosas:
- **Análisis automático de bugs**
- **Priorización inteligente de tests**
- **Detección de regresiones**
- **Optimización de test suites**

## DevOps y Deployment

### MLOps para Aplicaciones Tradicionales
Conceptos de MLOps se están aplicando al desarrollo tradicional:
- **Monitoreo predictivo**
- **Auto-scaling inteligente**
- **Detección de anomalías**
- **Rollback automático**

### Infrastructure as Code Inteligente
La IA está optimizando nuestra infraestructura:
- **Configuración automática**
- **Optimización de recursos**
- **Security scanning**
- **Cost optimization**

## Análisis y Monitoreo

### Observabilidad Inteligente
Los sistemas de monitoreo ahora pueden:
- **Predecir fallos antes de que ocurran**
- **Correlacionar métricas automáticamente**
- **Generar insights accionables**
- **Alertas inteligentes sin ruido**

### Analytics Avanzado
El análisis de datos de aplicaciones se ha vuelto más sofisticado:
- **Segmentación automática de usuarios**
- **Predicción de churn**
- **Optimización de UX**
- **A/B testing inteligente**

## El Futuro del Desarrollo

### No-Code/Low-Code Evolution
La IA está democratizando el desarrollo:
- **Generación de aplicaciones por descripción**
- **Interfaces naturales para programar**
- **Automación de tareas repetitivas**
- **Ciudadanos desarrolladores**

### Nuevos Roles y Habilidades
El panorama laboral está cambiando:
- **AI Prompt Engineers**
- **ML Infrastructure Engineers**
- **Data-Driven Developers**
- **Human-AI Collaboration Specialists**

## Consideraciones Éticas

### Responsabilidad y Transparencia
Con gran poder viene gran responsabilidad:
- **Bias en algoritmos de IA**
- **Transparencia en decisiones automatizadas**
- **Privacy y protección de datos**
- **Accountability en sistemas autónomos**

## Preparándose para el Futuro

Para los desarrolladores de hoy, es crucial:

1. **Aprender a trabajar con IA** como herramienta
2. **Entender los fundamentos** de machine learning
3. **Desarrollar pensamiento crítico** sobre IA
4. **Mantenerse actualizado** con las herramientas emergentes
5. **Enfocarse en problemas únicamente humanos**

La IA no está aquí para reemplazar a los desarrolladores, sino para amplificar nuestras capacidades y permitirnos enfocarnos en resolver problemas más complejos y creativos.
      `,
      date: "2024-01-10",
      author: "Ana García",
      image: blogImage2,
      category: "Inteligencia Artificial",
      readTime: "7 min",
      featured: true,
      tags: ["AI", "Machine Learning", "Automation", "Future"]
    },
    {
      id: 3,
      title: "Mejores Prácticas en Desarrollo Móvil",
      excerpt: "Guía completa para crear aplicaciones móviles exitosas y escalables utilizando las últimas tecnologías.",
      content: `
El desarrollo móvil requiere un enfoque específico que considere las limitaciones únicas de los dispositivos móviles, desde la batería hasta la conectividad variable.

## Arquitectura Móvil Moderna

### React Native vs Flutter vs Nativo
La elección de tecnología es crucial:

**React Native:**
- **Shared codebase** con desarrollo web
- **Hot reload** para desarrollo rápido
- **Comunidad masiva** y ecosistema maduro
- **Performance cercana a nativo**

**Flutter:**
- **Un solo codebase** para múltiples plataformas
- **Widgets personalizables**
- **Performance excelente**
- **Respaldado por Google**

**Desarrollo Nativo:**
- **Performance óptima**
- **Acceso completo** a APIs del sistema
- **UI/UX platform-specific**
- **Mantenimiento de múltiples codebases**

## Gestión de Estado Eficiente

### Redux Toolkit para React Native
\`\`\`javascript
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    loading: false
  },
  reducers: {
    setUser: (state, action) => {
      state.profile = action.payload
    }
  }
})
\`\`\`

### Context API para Estado Local
Para estado local y medio:
\`\`\`javascript
const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('es')
  
  return (
    <AppContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      {children}
    </AppContext.Provider>
  )
}
\`\`\`

## Performance Optimization

### Lazy Loading y Code Splitting
\`\`\`javascript
const ProfileScreen = lazy(() => import('./screens/ProfileScreen'))

const App = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <ProfileScreen />
  </Suspense>
)
\`\`\`

### Image Optimization
\`\`\`javascript
import FastImage from 'react-native-fast-image'

const OptimizedImage = ({ source, style }) => (
  <FastImage
    style={style}
    source={{
      uri: source,
      priority: FastImage.priority.normal,
      cache: FastImage.cacheControl.immutable
    }}
    resizeMode={FastImage.resizeMode.cover}
  />
)
\`\`\`

## Offline-First Development

### Storage Local
\`\`\`javascript
import AsyncStorage from '@react-native-async-storage/async-storage'

const saveUserData = async (userData) => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(userData))
  } catch (error) {
    console.error('Error saving user data:', error)
  }
}
\`\`\`

### Sync Estrategies
- **Background sync** para datos críticos
- **Conflict resolution** para updates concurrentes
- **Queue management** para operaciones offline
- **Progressive sync** para grandes datasets

## Testing Móvil Comprehensivo

### Unit Testing
\`\`\`javascript
import { render, fireEvent } from '@testing-library/react-native'
import LoginScreen from '../LoginScreen'

test('validates email input', () => {
  const { getByTestId } = render(<LoginScreen />)
  const emailInput = getByTestId('email-input')
  
  fireEvent.changeText(emailInput, 'invalid-email')
  // Assert validation error
})
\`\`\`

### Integration Testing
- **API integration tests**
- **Navigation flow tests**
- **State management tests**
- **Offline behavior tests**

### E2E Testing con Detox
\`\`\`javascript
describe('Login Flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should login successfully', async () => {
    await element(by.id('email-input')).typeText('user@example.com')
    await element(by.id('password-input')).typeText('password123')
    await element(by.id('login-button')).tap()
    
    await expect(element(by.id('home-screen'))).toBeVisible()
  })
})
\`\`\`

## Security Best Practices

### Secure Storage
\`\`\`javascript
import { Keychain } from 'react-native-keychain'

const storeCredentials = async (username, password) => {
  await Keychain.setInternetCredentials(
    'myapp',
    username,
    password
  )
}
\`\`\`

### API Security
- **Certificate pinning**
- **Token rotation**
- **Request signing**
- **Rate limiting**

## Deployment y CI/CD

### Automated Builds
\`\`\`yaml
name: Build and Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Build iOS
        run: npx react-native run-ios --configuration Release
\`\`\`

### Code Push para Updates Rápidos
\`\`\`javascript
import codePush from 'react-native-code-push'

const App = () => {
  useEffect(() => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    })
  }, [])
  
  return <MainApp />
}

export default codePush(App)
\`\`\`

## Conclusión

El desarrollo móvil exitoso requiere:

1. **Arquitectura bien planificada**
2. **Performance como prioridad**
3. **Testing comprehensivo**
4. **Security desde el inicio**
5. **CI/CD automatizado**
6. **Monitoreo continuo**

La clave está en encontrar el balance entre funcionalidad, performance y experiencia de usuario, siempre considerando las limitaciones únicas del entorno móvil.
      `,
      date: "2024-01-05",
      author: "Miguel Rodríguez",
      image: blogImage1,
      category: "Desarrollo Móvil",
      readTime: "6 min",
      featured: false,
      tags: ["React Native", "Flutter", "Mobile", "App Development"]
    },
    {
      id: 4,
      title: "DevOps: Automatización y Mejores Prácticas",
      excerpt: "Aprende cómo implementar DevOps en tu organización para mejorar la eficiencia y calidad del desarrollo.",
      content: `
DevOps es más que una metodología; es una cultura que transforma la manera en que desarrollamos, desplegamos y mantenemos software.

## Fundamentos de DevOps

### Cultura y Colaboración
DevOps comienza con un cambio cultural:
- **Silos eliminados** entre Dev y Ops
- **Responsabilidad compartida**
- **Comunicación continua**
- **Aprendizaje de fallos**

### Principios Clave
1. **Automatización** de procesos repetitivos
2. **Monitoreo** continuo
3. **Integración** y delivery continuas
4. **Infrastructure as Code**
5. **Feedback loops** rápidos

## CI/CD Pipeline Design

### Continuous Integration
\`\`\`yaml
# .github/workflows/ci.yml
name: CI Pipeline
on:
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linting
        run: npm run lint
      
      - name: Run tests
        run: npm run test:coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
\`\`\`

### Continuous Deployment
\`\`\`yaml
# .github/workflows/cd.yml
name: CD Pipeline
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: |
          docker build -t myapp:SHA_HERE .
          docker tag myapp:SHA_HERE myapp:latest
      
      - name: Deploy to production
        run: |
          kubectl set image deployment/myapp myapp=myapp:SHA_HERE
          kubectl rollout status deployment/myapp
\`\`\`

## Infrastructure as Code

### Terraform para Infrastructure
\`\`\`hcl
# main.tf
provider "aws" {
  region = var.aws_region
}

resource "aws_ecs_cluster" "main" {
  name = "myapp-cluster"
  
  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}

resource "aws_ecs_service" "app" {
  name            = "myapp-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = var.app_count

  deployment_configuration {
    maximum_percent         = 200
    minimum_healthy_percent = 100
  }
}
\`\`\`

### Kubernetes Manifests
\`\`\`yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
\`\`\`

## Containerization Strategy

### Multi-stage Docker Builds
\`\`\`dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runtime
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --chown=nextjs:nodejs . .

USER nextjs
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### Docker Compose para Development
\`\`\`yaml
# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - db
      - redis

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
\`\`\`

## Monitoring y Observability

### Prometheus + Grafana Setup
\`\`\`yaml
# docker-compose.monitoring.yml
version: '3.8'
services:
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana
    ports:
      - "3001:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana_data:/var/lib/grafana

volumes:
  grafana_data:
\`\`\`

### Application Metrics
\`\`\`javascript
// metrics.js
const promClient = require('prom-client')

const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status']
})

const httpRequestsTotal = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
})

module.exports = {
  httpRequestDuration,
  httpRequestsTotal,
  register: promClient.register
}
\`\`\`

## Security DevSecOps

### Security Scanning Pipeline
\`\`\`yaml
security:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v3
    
          - name: Run Snyk security scan
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: \$\{\{ secrets.SNYK_TOKEN \}\}
    
    - name: Run Trivy vulnerability scanner
      uses: aquasecurity/trivy-action@master
      with:
        image-ref: 'myapp:latest'
        format: 'sarif'
        output: 'trivy-results.sarif'
\`\`\`

### Secret Management
\`\`\`yaml
# secrets.yaml (sealed-secrets)
apiVersion: bitnami.com/v1alpha1
kind: SealedSecret
metadata:
  name: mysecret
spec:
  encryptedData:
    password: AgBy3i4OJSWK+PiTySYZZA9rO43cGDEQAx...
    username: AgBy3i4OJSWK+PiTySYZZA9rO43cGDEQAx...
\`\`\`

## Best Practices

### 1. Version Control
- **Git flow** or **GitHub flow**
- **Conventional commits**
- **Branch protection rules**
- **Code review requirements**

### 2. Testing Strategy
- **Unit tests** (80% coverage)
- **Integration tests**
- **E2E tests** for critical paths
- **Performance tests**
- **Security tests**

### 3. Deployment Strategies
- **Blue-green deployments**
- **Canary releases**
- **Feature flags**
- **Rollback plans**

### 4. Monitoring
- **Application metrics**
- **Infrastructure metrics**
- **Log aggregation**
- **Alerting rules**
- **SLA/SLO tracking**

## Conclusión

Una implementación exitosa de DevOps requiere:

1. **Cambio cultural** hacia la colaboración
2. **Automatización** de procesos manuales
3. **Monitoring** comprehensivo
4. **Security** integrada desde el inicio
5. **Continuous learning** y mejora

El objetivo no es solo acelerar el desarrollo, sino crear sistemas más confiables, seguros y mantenibles que entreguen valor real al negocio.
      `,
      date: "2024-01-08",
      author: "Luis Fernández",
      image: blogImage2,
      category: "DevOps",
      readTime: "8 min",
      featured: false,
      tags: ["Docker", "CI/CD", "Automation", "DevOps"]
    },
    {
      id: 5,
      title: "Diseño UI/UX: Principios Fundamentales",
      excerpt: "Los principios esenciales del diseño de interfaces que todo desarrollador debería conocer.",
      content: `
El diseño UI/UX es crucial para el éxito de cualquier aplicación. No se trata solo de hacer algo "bonito", sino de crear experiencias que sean intuitivas, eficientes y memorables.

## Fundamentos del Diseño UX

### User-Centered Design
Todo diseño debe comenzar con el usuario:
- **Research de usuarios** para entender necesidades
- **Personas** y **user journeys**
- **Testing con usuarios reales**
- **Iteración basada en feedback**

### Principios de Usabilidad
Los principios de Nielsen siguen siendo relevantes:

1. **Visibilidad del sistema** - El usuario siempre debe saber qué está pasando
2. **Match con el mundo real** - Usar lenguaje familiar
3. **Control del usuario** - Permitir deshacer acciones
4. **Consistencia** - Patrones similares para funciones similares
5. **Prevención de errores** - Diseñar para evitar errores
6. **Reconocimiento sobre recuerdo** - Hacer opciones visibles
7. **Flexibilidad** - Shortcuts para usuarios expertos
8. **Diseño minimalista** - Solo información relevante
9. **Recovery de errores** - Mensajes claros y soluciones
10. **Ayuda y documentación** - Accesible cuando se necesite

## Principios de Diseño Visual

### Jerarquía Visual
Guiar la atención del usuario:
\`\`\`css
/* Jerarquía tipográfica */
h1 { font-size: 3rem; font-weight: 800; }
h2 { font-size: 2rem; font-weight: 700; }
h3 { font-size: 1.5rem; font-weight: 600; }
p { font-size: 1rem; line-height: 1.6; }

/* Jerarquía de color */
.primary { color: #007bff; }
.secondary { color: #6c757d; }
.muted { color: #adb5bd; }
\`\`\`

### Uso del Color
El color comunica significado:
- **Primario** - Acciones principales (azul)
- **Secundario** - Acciones de apoyo (gris)
- **Success** - Confirmaciones (verde)
- **Warning** - Advertencias (amarillo)
- **Error** - Errores y peligros (rojo)

### Espaciado y Layout
El espacio en blanco es tan importante como el contenido:
\`\`\`css
/* Sistema de espaciado consistente */
:root {
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 3rem;      /* 48px */
}

.card {
  padding: var(--space-lg);
  margin-bottom: var(--space-md);
  gap: var(--space-sm);
}
\`\`\`

## Design Systems

### Atomic Design
Construcción modular de interfaces:

**Átomos** - Elementos básicos
\`\`\`jsx
const Button = ({ variant, size, children, ...props }) => {
  const baseClasses = "px-4 py-2 rounded font-medium transition-colors"
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300"
  }
  
  return (
    <button 
      className={\`\${baseClasses} \${variantClasses[variant]}\`}
      {...props}
    >
      {children}
    </button>
  )
}
\`\`\`

**Moléculas** - Combinaciones de átomos
\`\`\`jsx
const SearchBox = ({ onSearch, placeholder }) => {
  const [value, setValue] = useState('')
  
  return (
    <div className="flex gap-2">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <Button 
        variant="primary" 
        onClick={() => onSearch(value)}
      >
        Buscar
      </Button>
    </div>
  )
}
\`\`\`

### Design Tokens
Valores reutilizables para mantener consistencia:
\`\`\`json
{
  "color": {
    "primary": {
      "50": "#eff6ff",
      "500": "#3b82f6",
      "900": "#1e3a8a"
    }
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px"
  },
  "typography": {
    "heading-1": {
      "fontSize": "2.25rem",
      "lineHeight": "2.5rem",
      "fontWeight": "800"
    }
  }
}
\`\`\`

## Accesibilidad (a11y)

### WCAG Guidelines
Cumplir con estándares de accesibilidad:

**Perceptible**
\`\`\`css
/* Contraste adecuado */
.text-primary { color: #1f2937; } /* 4.5:1 ratio */
.text-secondary { color: #4b5563; } /* 4.5:1 ratio */

/* Texto alternativo para imágenes */
\`\`\`
\`\`\`jsx
<img src="chart.png" alt="Ventas aumentaron 25% este trimestre" />
\`\`\`

**Operable**
\`\`\`jsx
// Navegación por teclado
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])
  
  return isOpen ? (
    <div 
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      tabIndex="-1"
    >
      {children}
    </div>
  ) : null
}
\`\`\`

**Comprensible**
\`\`\`jsx
// Labels claros y descriptivos
<form>
  <label htmlFor="email">
    Correo electrónico *
  </label>
  <input
    id="email"
    type="email"
    required
    aria-describedby="email-error"
  />
  <div id="email-error" role="alert">
    {emailError}
  </div>
</form>
\`\`\`

**Robusto**
\`\`\`jsx
// Semantic HTML
<main>
  <article>
    <header>
      <h1>Título del artículo</h1>
      <time dateTime="2024-01-15">15 de enero, 2024</time>
    </header>
    <section>
      <p>Contenido del artículo...</p>
    </section>
  </article>
</main>
\`\`\`

## Mobile-First Design

### Responsive Design Principles
\`\`\`css
/* Mobile-first approach */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 768px;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding: 3rem;
  }
}
\`\`\`

### Touch-Friendly Interactions
\`\`\`css
/* Targets táctiles de al menos 44px */
.button {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
}

/* Hover states solo para dispositivos que soportan hover */
@media (hover: hover) {
  .button:hover {
    background-color: var(--color-primary-dark);
  }
}
\`\`\`

## Performance y UX

### Perceived Performance
La percepción de velocidad es tan importante como la velocidad real:

**Loading States**
\`\`\`jsx
const ProductCard = ({ product, loading }) => {
  if (loading) {
    return (
      <div className="product-card animate-pulse">
        <div className="bg-gray-200 h-48 rounded"></div>
        <div className="space-y-2 p-4">
          <div className="bg-gray-200 h-4 rounded w-3/4"></div>
          <div className="bg-gray-200 h-4 rounded w-1/2"></div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="p-4">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  )
}
\`\`\`

**Progressive Enhancement**
\`\`\`jsx
const ImageWithFallback = ({ src, alt, fallback }) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  
  return (
    <div className="relative">
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={loaded ? 'opacity-100' : 'opacity-0'}
      />
      {error && fallback}
    </div>
  )
}
\`\`\`

## Testing de Usabilidad

### A/B Testing
\`\`\`jsx
const CTAButton = () => {
  const variant = useABTest('cta-button-test', {
    control: 'Registrarse',
    variant: 'Comenzar Gratis'
  })
  
  return (
    <Button 
      variant="primary"
      onClick={() => trackEvent('cta_click', { variant })}
    >
      {variant}
    </Button>
  )
}
\`\`\`

### User Testing
Métodos para validar diseños:
- **Moderated usability testing**
- **Unmoderated remote testing**
- **Guerrilla testing**
- **First-click testing**
- **Card sorting**

## Conclusión

Un buen diseño UI/UX:

1. **Resuelve problemas reales** del usuario
2. **Es consistente** en toda la aplicación
3. **Es accesible** para todos los usuarios
4. **Funciona bien** en todos los dispositivos
5. **Se basa en datos** y feedback de usuarios
6. **Evoluciona** continuamente

Recuerda: el mejor diseño es invisible. Cuando los usuarios pueden completar sus tareas sin pensar en la interfaz, has logrado un excelente diseño UX.
      `,
      date: "2024-01-12",
      author: "Carolina López",
      image: teamSoftrium,
      category: "UI/UX",
      readTime: "4 min",
      featured: false,
      tags: ["Design", "UX", "UI", "User Experience"]
    }
  ];

  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Posts relacionados (misma categoría, excluyendo el actual)
  const relatedPosts = posts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // Función para renderizar markdown mejorado
  const renderMarkdownContent = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let currentList = [];
    let currentCodeBlock = [];
    let inCodeBlock = false;
    let listIndex = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${listIndex++}`} className={styles.markdownList}>
            {currentList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    const flushCodeBlock = () => {
      if (currentCodeBlock.length > 0) {
        const codeContent = currentCodeBlock.join('\n');
        elements.push(
          <pre key={`code-${elements.length}`} className={styles.codeBlock}>
            <code>{codeContent}</code>
          </pre>
        );
        currentCodeBlock = [];
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Manejo de bloques de código
      if (trimmedLine.startsWith('```')) {
        if (inCodeBlock) {
          flushCodeBlock();
          inCodeBlock = false;
        } else {
          flushList();
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        currentCodeBlock.push(line);
        continue;
      }

      // Líneas vacías
      if (trimmedLine === '') {
        flushList();
        continue;
      }

      // Títulos H2
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={`h2-${elements.length}`}>
            {trimmedLine.replace('## ', '')}
          </h2>
        );
        continue;
      }

      // Títulos H3
      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={`h3-${elements.length}`}>
            {trimmedLine.replace('### ', '')}
          </h3>
        );
        continue;
      }

      // Lista con bullets
      if (trimmedLine.startsWith('- ')) {
        const listItem = trimmedLine.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        currentList.push(<span dangerouslySetInnerHTML={{ __html: listItem }} />);
        continue;
      }

      // Párrafos normales
      flushList();
      if (trimmedLine.length > 0) {
        // Procesar texto con negritas
        const processedText = trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        elements.push(
          <p key={`p-${elements.length}`} dangerouslySetInnerHTML={{ __html: processedText }} />
        );
      }
    }

    // Flush final
    flushList();
    flushCodeBlock();

    return elements;
  };

  return (
    <>
      <Header />
      <main className={styles.postPage}>
        {/* Breadcrumbs */}
        <section className={styles.breadcrumbs}>
          <div className="container">
            <nav className={styles.breadcrumbNav}>
              <Link to="/">Inicio</Link>
              <span>/</span>
              <Link to="/blog">Blog</Link>
              <span>/</span>
              <span>{post.title}</span>
            </nav>
          </div>
        </section>

        {/* Post Header */}
        <section className={styles.postHeader}>
          <div className="container">
            <div className={styles.headerContent}>
              <div className={styles.categoryBadge}>{post.category}</div>
              <h1 className={styles.postTitle}>{post.title}</h1>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              
              <div className={styles.postMeta}>
                <div className={styles.metaGroup}>
                  <UserIcon className={styles.metaIcon} />
                  <span>{post.author}</span>
                </div>
                <div className={styles.metaGroup}>
                  <CalendarIcon className={styles.metaIcon} />
                  <span>
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className={styles.metaGroup}>
                  <ClockIcon className={styles.metaIcon} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className={styles.tags}>
                {post.tags.map(tag => (
                  <span key={tag} className={styles.tag}>
                    <TagIcon className={styles.tagIcon} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Post Image */}
        <section className={styles.postImageSection}>
          <div className="container">
            <div className={styles.imageContainer}>
              <img src={post.image} alt={post.title} className={styles.postImage} />
            </div>
          </div>
        </section>

        {/* Post Content */}
        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.contentWrapper}>
              <article className={styles.postContent}>
                <div className={styles.markdownContent}>
                  {renderMarkdownContent(post.content)}
          </div>
        </article>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className={styles.relatedSection}>
            <div className="container">
              <h2 className={styles.relatedTitle}>Artículos Relacionados</h2>
              <div className={styles.relatedGrid}>
                {relatedPosts.map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedImage}>
                      <img src={relatedPost.image} alt={relatedPost.title} />
                    </div>
                    <div className={styles.relatedContent}>
                      <div className={styles.relatedCategory}>{relatedPost.category}</div>
                      <h3>{relatedPost.title}</h3>
                      <p>{relatedPost.excerpt}</p>
                      <div className={styles.relatedMeta}>
                        <span>{relatedPost.author}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <section className={styles.backSection}>
          <div className="container">
            <Link to="/blog" className={styles.backButton}>
              <ArrowIcon className={styles.backIcon} />
              Volver al Blog
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PostDetailPage;