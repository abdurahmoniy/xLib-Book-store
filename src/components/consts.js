import Home from "./Home";
import Books from "./Books";
import Contact from "./Contact";
import fantasy from './assests/fantasy.jpeg'

export const navLink = [
    {
        id: 'home',
        title: 'Home',
        icon: 'fa-solid fa-home',
        path: '/',
        element: <Home/>
    },
    {
        id: 'books',
        title: 'Books',
        icon: 'fa-solid fa-book',
        path: '/books',
        element: <Books />
    },
    {
        id: 'contact',
        title: 'Contact',
        icon: 'fa-solid fa-link',
        path: '/contact',
        element: <Contact />
    },
]

export const i = [
    {
      class: 'fa-brands fa-instagram p-2',
      href: 'https://instagram.com/abdurakhmoniy'
    },
    {
      class: 'fa-brands fa-telegram p-2',
      href: 'https://t.me/abdurahmoniy'
    },
    {
      class: 'fa-brands fa-twitter p-2',
      href: 'https://instagram.com/abdurakhmoniy'
    },
    {
      class: 'fa-brands fa-facebook p-2',
      href: 'https://fb.com/abdurakhmoniy'
    },
    {
      class: 'fa-brands fa-linkedin p-2',
      href: 'https://linkedin.com/abdurakhmoniy'
    },
    {
      class: 'fa-brands fa-youtube p-2',
      href: 'https://instagram.com/abdurakhmoniy'
    },
  ]
  
  export const catg = [
    {
      img: fantasy,
      title: 'Fantasy',
      class: 'mt-8 mx-8'
    },
    {
      img: fantasy,
      title: 'Contemporary',
      class: 'mt-8 mx-8'
    },
    {
      img: fantasy,
      title: 'Mystery',
      class: 'mt-8 mx-8'
    },
    {
      img: fantasy,
      title: 'Thriller',
      class: 'm-8'
    },
    {
      img: fantasy,
      title: 'Romance',
      class: 'm-8'
    },
    {
      img: fantasy,
      title: 'Dystopian',
      class: 'm-8'
    },
  ]