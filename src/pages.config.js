import Activities from './pages/Activities';
import AdminMessages from './pages/AdminMessages';
import CareersInSTEM from './pages/CareersInSTEM';
import Events from './pages/Events';
import Home from './pages/Home';
import MakeAnImpact from './pages/MakeAnImpact';
import ThisWeekInSTEM from './pages/ThisWeekInSTEM';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Activities": Activities,
    "AdminMessages": AdminMessages,
    "CareersInSTEM": CareersInSTEM,
    "Events": Events,
    "Home": Home,
    "MakeAnImpact": MakeAnImpact,
    "ThisWeekInSTEM": ThisWeekInSTEM,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};