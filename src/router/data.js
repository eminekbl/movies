import Home from '../pages/Home'
import Edit from '../pages/Edit'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

const links = [
    { link: "/", title: "Movies", component: Home, isExact: true, islink: false },
    { link: "/movie/:id", title: "Movies", component: Edit, isExact: true, islink: false },
    { link: "/contact", title: "Contact", component: Contact, isExact: false, islink: true },
    { link: "/404", title: "404", component: NotFound, isExact: false, islink: false }

]

export default links