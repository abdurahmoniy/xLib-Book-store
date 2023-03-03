import Home from "./Home";
import Books from "./Books";
import Contact from "./Contact";

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
      class: 'fa-brands fa-instagram p-2'
    },
    {
      class: 'fa-brands fa-telegram p-2'
    },
    {
      class: 'fa-brands fa-twitter p-2'
    },
    {
      class: 'fa-brands fa-facebook p-2'
    },
    {
      class: 'fa-brands fa-linkedin p-2'
    },
    {
      class: 'fa-brands fa-youtube p-2'
    },
  ]
  