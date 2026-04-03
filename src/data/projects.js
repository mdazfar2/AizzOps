export const projects = [
  {
    id: '1', 
    name: 'HelpOps-Hub',
    category: 'fullstack',
    detailPath: '/project/helpops-hub',
    visit: `https://github.com/mdazfar2`,
    viewCode: `https://github.com/mdazfar2`,
    description: 'A collaborative DevOps platform for solving real-world errors and automating workflows with community-driven solutions.',
    technologies: ['Next.js', 'MongoDB', `TailwindCSS`, 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    id: '2',
    name: 'MERN EKS CI/CD Pipeline',
    detailPath: '/project/mern-eks-cicd-pipeline',
    category: 'devops',
    visit: `https://github.com/mdazfar2/Github-Actions-EKS-CICD-Cafe-Coffee`,
    subCategory: 'CI/CD Pipeline',
    description: 'Automated CI/CD pipeline deploying MERN apps to AWS EKS using Docker, Terraform, and GitHub Actions.',
    technologies: ['Docker', 'Terraform', 'AWS EKS', 'GitHub Actions', 'SonarQube']

  },
  {
    id: '3',
    name: 'SpaceWeb CI/CD Automation',
    category: 'devops',
    detailPath: '/project/spaceweb-ci-cd-automation',
    subCategory: 'CI/CD Pipeline',
    visit:`https://github.com/mdazfar2/Automated-CI-CD-Pipeline-Space-Web`,
    description: 'Automated CI/CD pipeline deploying static websites using Docker Compose, Jenkins, and GitHub Webhooks.',
    technologies: ['Docker', 'Docker Compose', 'Jenkins', 'GitHub', 'GitHub Webhooks', 'CI/CD']


  },
  {
    id: '4',
    name: 'Spring Boot GitOps CI/CD Pipeline',
    category: 'devops',
    detailPath: '/project/spring-boot-gitops-cicd-pipeline',
    subCategory: 'CI/CD Pipeline',
    visit: `https://github.com/mdazfar2/Deployed-on-k8s-with-GitOps`,
    description: 'End-to-end CI/CD pipeline deploying Spring Boot apps using Kubernetes, ArgoCD, Jenkins, and Azure.',
    technologies: ['Jenkins', 'SonarQube', 'Kubernetes', 'ArgoCD', 'Microsoft Azure']

  },
  {
    id: '5',
    name: 'Netflix DevSecOps CI/CD Pipeline',
    category: 'devops',
    detailPath: '/project/netflix-devsecops-cicd-pipeline',
    subCategory: 'Monitoring & Logging',
    visit: `https://blog.devops.dev/netflix-clone-ci-cd-with-monitoring-jenkins-docker-kubernetes-monitoring-devsecops-6430fbd5f867`,
    viewCode: `https://github.com/mdazfar2/DevSecOps-CICD-Pipeline-NetflixClone`,
    description: 'End-to-end DevSecOps pipeline deploying Netflix clone with Jenkins, Docker, Kubernetes, monitoring, and security scanning.',
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Trivy']

  },
  {
    id:6,
    name: 'Two Tier Flask App Deployment',
    category: 'devops',
    detailPath: '/project/two-tier-flask-app-deployment',
    visit: `https://github.com/mdazfar2/two-tier-flask-app`,
    subCategory: 'Monitoring & Logging',
    description: 'Scalable Flask and MySQL application deployed using Docker, Kubernetes, EKS, and automated CI/CD pipelines.',
    technologies: ['Docker', 'Kubernetes', 'AWS EKS', 'Helm', 'Flask', 'MySQL']
  },
  {
    id:7,
    name: 'Three Tier Wanderlust App Deployment',
    category: 'devops',
    detailPath: '/project/three-tier-wanderlust-app-deployment',
    subCategory: 'Monitoring & Logging',
    visit: `https://github.com/mdazfar2/three-tier-deploy-wanderlustApp`,
    description: 'Three tier travel app deployed using Docker, AWS, and MERN stack with scalable architecture.',
    technologies: ['Docker', 'AWS EC2', 'React', 'Node.js', 'MongoDB']
  },

  {
    id: 8,
    name: 'Azure Web App CI/CD Pipeline',
    category: 'devops',
    detailPath: '/project/azure-webapp-cicd-pipeline',
    subCategory: 'Cloud Services',
    visit: `https://github.com/mdazfar2/Azure-WebApp-Github-Actions`,
    description: 'Automated Node.js deployment to Azure Web App using GitHub Actions with build, test, and artifact workflows.',
    technologies: ['GitHub Actions', 'Azure Web App', 'Node.js', 'CI/CD']
},
{
  id: 26,
  name: 'Virtual AI Mouse',
  category: 'ai-computer-vision',
  detailPath: '/project/virtual-ai-mouse',
  viewCode: `https://github.com/mdazfar2/AI-virtual-mouse`,
  description: 'Control your computer using hand gestures with AI-powered real-time cursor tracking.',
  technologies: ['Python', 'OpenCV', 'CVZone', 'Machine Learning']
},
{
    id: 9,
    name: 'FingerConnect AI Web App',
    category: ['devops', `ai-computer-vision`],
    subCategory: 'Cloud Services',
    detailPath: '/project/fingerconnect-ai-web-app',
    viewCode: `https://github.com/mdazfar2/aws_AI_finger_webApp_live`,
    description: 'AI powered system connecting Android and PC enabling remote control using gestures with cloud deployment.',
    technologies: ['Python', 'AWS', 'Flask', 'OpenCV', 'Docker']
},
{
    id: 10,
    name: 'EKS Jenkins Operator CI/CD Pipeline',
    category: 'devops',
    detailPath: '/project/eks-jenkins-operator-cicd-pipeline',
    subCategory: 'CI/CD Pipeline',
    viewCode: `https://github.com/mdazfar2/devops_workshop_eks_jenkins_loki_operator`,
    visit: `https://www.linkedin.com/posts/md-azfar-alam_solvingprobem-asktechnicalissue-devops-activity-7117845808317706240-easK/?utm_source=share&utm_medium=member_desktop`,
    description: 'Automated Jenkins deployment on EKS using operator with pipeline as code, dynamic provisioning, and monitoring stack.',
    technologies: ['Kubernetes', 'Jenkins', 'AWS EKS', 'Prometheus', 'Grafana', 'Loki']
},
{
    id: 17,
    name: 'EzyShop E-Commerce Platform',
    category: 'fullstack',
    detailPath: '/project/ezyshop-e-commerce-platform',
    viewCode: `https://github.com/mdazfar2/Ezyshop`,
    visit: `https://ezyshopz.vercel.app/`,
    description: 'E commerce platform connecting local stores with users offering product browsing price comparison and secure online payments.',
    technologies: ['Next.js', 'MongoDB', 'Prisma', 'TypeScript', 'Razorpay', 'TailwindCSS']
},

{
    id: 12,
    name: 'Eywa Private Communication Platform',
    category: 'fullstack',
    detailPath: '/project/eywa-private-communication-platform',
    visit: `https://eywaa.vercel.app/`,
    description: 'Secure private communication platform with real time chat, encrypted messaging, media sharing, and voice video calls.',
    technologies: ['React', 'Flask', 'MongoDB', 'Socket.IO', 'WebRTC', 'AES']
},
{
    id: 13,
    name: 'Azfar Broadcast Video Platform',
    detailPath: '/project/azfar-broadcast-video-platform',
    category: 'fullstack',
    visit: `https://azfarb.vercel.app/`,
    description: 'Instant video calling platform enabling users to join live group calls via link with real time interaction.',
    technologies: ['React', 'Flask', 'WebRTC', 'Socket.IO']
},
{
    id: 14,
    name: 'Studyrium Study Tracker',
    category: 'fullstack',
    detailPath: '/project/studyrium-study-tracker',
    visit: `https://studyrium.vercel.app/`,
    description: 'Study tracking web app helping students monitor daily progress and stay consistent with learning goals.',
    technologies: ['React', 'Flask']
},
{
    id: 15,
    name: 'DFA Visual Simulator',
    category: 'fullstack',
    detailPath: '/project/dfa-visual-simulator',
    visit: `https://dfavisual.vercel.app/`,
    viewCode: `https://github.com/mdazfar2/DFA-Visual`,
    description: 'Interactive platform to build simulate and visualize DFA with animations and regex to DFA conversion.',
    technologies: ['React', 'Node.js', 'Express', 'Three.js', 'TailwindCSS']
},
{
    id: 16,
    name: 'GfBanao Learning & Connection Platform',
    category: 'fullstack',
    detailPath: '/project/gfbanao-learning-connection-platform',
    viewCode: `https://github.com/mdazfar2/GfBanao`,
    visit:`https://github.com/mdazfar2/GfBanao`,
    description: 'Platform combining e learning and connections enabling users to grow skills collaborate and build meaningful relationships.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'TailwindCSS']
},
{
    id: 18,
    name: 'RapidGig Labs Agency Website',
    category: 'fullstack',
    visit: `https://rapidgig.vercel.app/`,
    detailPath: '/project/rapidgig-labs-agency-website',
    description: 'Modern freelance agency website showcasing services and enabling clients to connect and learn about the platform.',
    technologies: ['React', 'TailwindCSS', 'TypeScript']
},
{
    id: 19,
    name: 'Certify Certificate Verification System',
    category: 'fullstack',
    detailPath: '/project/certify-certificate-verification-system',
    visit: `https://certify-helpops.vercel.app/`,
    description: 'Certificate verification platform enabling users to validate certificates via unique IDs with admin panel management features.',
    technologies: ['React', 'TypeScript', 'MongoDB']
},
{
    id: 20,
    name: 'DBGMI Tournament Platform',
    category: 'fullstack',
    detailPath: '/project/dbgmi-tournament-platform',
    viewCode: `https://github.com/mdazfar2/DBGMI-Playzone`,
    visit: `https://dbgmi.vercel.app/`,
    description: 'Gaming tournament platform frontend enabling users to explore matches register and view schedules with admin interface design.',
    technologies: ['React', 'TailwindCSS']
},
{
    id: 21,
    name: 'JEC Forge Community Platform',
    category: 'fullstack',
    detailPath: '/project/jec-forge-community-platform',
    viewCode: `https://github.com/mdazfar2/jec-forge`,
    visit: `https://jecforge.vercel.app/`,
    description: 'Student community platform frontend showcasing projects events study materials and enabling participation with modern responsive design.',
    technologies: ['React', 'TailwindCSS']
},
{
    id: 23,
    name: 'Gesture Controlled Docker Launcher',
    category: ['devops', `ai-computer-vision`],
    detailPath: '/project/gesture-controlled-docker-launcher',
    subCategory: 'Automation',
    viewCode:`https://github.com/mdazfar2/Docker_container_launch_by_finger`,
    visit: `https://medium.com/@azfaralam/scaling-docker-containers-with-fingers-5f818e2b8abe`,
    description: 'Gesture based system using computer vision to launch and manage Docker containers automatically without manual commands.',
    technologies: ['Python', 'Docker', 'OpenCV']
},
{
  id: 27,
  name: "Azfar's First App",
  category: 'app-development',
  viewCode: `https://github.com/mdazfar2/AlmaAbierta`,
  detailPath: '/project/azfars-first-app',
  description: 'A social media mobile app to share thoughts, connect with users, and interact through posts, likes, and comments.',
  technologies: ['Dart', 'Flutter', 'Firebase']
},



];