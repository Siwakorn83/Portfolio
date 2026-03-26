const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://localhost:3000/cleanfolio',
  title: 'Siwakorn Pooparkdee',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Siwakorn',
  role: 'Front End Developer',
  picture: 'my_face.png',

  description:
    'My name is Siwakorn Pooparkdee. I am an IT student at Kasetsart University, Kamphaeng Saen Campus.',
  resume: 'https://drive.google.com/file/d/19dLq3wcD7aNPtyoZLMjNF4G3Zz4q1oDi/view?usp=sharing',
  social: {
    github: 'https://github.com/Siwakorn83'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Portfolio Project',
    description:
      'A personal portfolio project developed to present my web development projects, technical skills.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/Siwakorn83',
    image: 'cleanfolio.png',
  },
  {
    name: 'Feeder App Project',
    description:
      'A group IoT feeder project developed to automate feeding processes and provide real-time monitoring via a web application.',
    stack: ['Flutter', 'Dart', 'Node.js'],
    sourceCode: 'https://github.com/phattaradanaikru/app_for_iot_feeder',
    image: 'iot.png',
  },
  {
    name: 'Vandermachine',
    description:
      'Vandermachine is a Flutter app simulating a vending machine, allowing users to browse and select products easily.',
    stack: ['C++', 'Flutter', 'Dart'],
    sourceCode: 'https://github.com/Siwakorn83/vendermachine.git',
    image: 'cha.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'SASS',
  'Git',
  'Flutter',
  'Dart',
  'Node.js',
  'Java',
  'Github',
  'Docker',
  'Spring Boot',
  'Figma',
  'Vs Code',
  'Angular'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ankpao06160@gmail.com',
}

export { header, about, projects, skills, contact }
