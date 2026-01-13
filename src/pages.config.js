import Activities from './pages/Activities';
import CareersInSTEM from './pages/CareersInSTEM';
import Events from './pages/Events';
import Home from './pages/Home';
import ThisWeekInSTEM from './pages/ThisWeekInSTEM';
import MakeAnImpact from './pages/MakeAnImpact';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Activities": Activities,
    "CareersInSTEM": CareersInSTEM,
    "Events": Events,
    "Home": Home,
    "ThisWeekInSTEM": ThisWeekInSTEM,
    "MakeAnImpact": MakeAnImpact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};