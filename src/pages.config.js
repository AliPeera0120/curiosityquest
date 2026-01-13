import Home from './pages/Home';
import Activities from './pages/Activities';
import Events from './pages/Events';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Activities": Activities,
    "Events": Events,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};