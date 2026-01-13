import Activities from './pages/Activities';
import Events from './pages/Events';
import Home from './pages/Home';
import ThisWeekInSTEM from './pages/ThisWeekInSTEM';
import CareersInSTEM from './pages/CareersInSTEM';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Activities": Activities,
    "Events": Events,
    "Home": Home,
    "ThisWeekInSTEM": ThisWeekInSTEM,
    "CareersInSTEM": CareersInSTEM,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};