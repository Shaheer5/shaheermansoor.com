interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  // {
  //   title: 'A Search Engine',
  //   description: `What if you could look up any information in the world? Webpages, images, videos
  //   and more. Google has many features to help you find exactly what you're looking
  //   for.`,
  //   imgSrc: '/static/images/google.png',
  //   href: 'https://www.google.com',
  // },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
  // {
  //   title: 'Horizon Banking App - With Finance Management',
  //   description: `Built with Next.js, Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users...`,
  //   imgSrc: '/static/images/projects/horizon-banking-homepage.png',
  //   href: '/blog/horizon-banking',
  // },
  {
    title: 'YC Directory - Startup Ideas Platform',
    description: `A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience....`,
    imgSrc: '/static/images/projects/yc-directory-banner.png',
    href: '/blog/yc-directory',
  },
  {
    title: 'ThreeJS Customizable Shirt',
    description: `Create your unique and exclusive shirt with our brand new 3D customization tool. Convert Imagination to Reality and define your own style...`,
    imgSrc: '/static/images/projects/threejs-shirt-live.png',
    href: '/blog/threejs-shirt',
  },
  {
    title: 'Apple Website Clone - iPhone 15 Pro',
    description: `1:1 Apple iPhone 15 Pro Webpage clone, powered by Three.JS, GSAP for smooth animations and all the design saved by Tailwind CSS...`,
    imgSrc: '/static/images/projects/apple-website-iphone15-live.png',
    href: '/blog/apple-iphone15-clone',
  },
]

export default projectsData
