import {Helmet} from "react-helmet";

import Menu from './components/menu/Menu';
import useLanguage from './helpers/useLanguage';
import {
    Routes, useNavigate, useLocation, Route,
} from 'react-router-dom';
import {useEffect, useState} from "react";
import Home from './components/home/Home';
import Contact from "./components/contact/Contact";
import './App.scss';


const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuVisible, toggleMobileMenu] = useState<boolean>(false);

    useEffect(() => {
        // @ts-ignore
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useLanguage(location, navigate);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const appContentClass = isMobileMenuVisible ? 'app-content app-content--moved': 'app-content';

    return (
        <div className="app">
            <Helmet>
                <title>VGB Tech</title>
            </Helmet>
            <Menu isMobileMenuVisible={isMobileMenuVisible} toggleMobileMenu={toggleMobileMenu}/>
            <div className={appContentClass}>
                <Routes>
                    <Route path="/pl" element={<Home/>}/>
                    <Route path="/en" element={<Home/>}/>
                    <Route path="/en/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
