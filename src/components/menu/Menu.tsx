import LanguageSwitch from "../languageSwitch/LanguageSwitch";
import {useTranslation} from "react-i18next";
import {NavLink, useLocation} from "react-router-dom";
import i18n from "i18next";
import {isMobile} from 'react-device-detect';
import HamburgerIcon from '../../icons/menu_black_24dp.svg';
import './Menu.scss';


const Menu = ({
                  isMobileMenuVisible,
                  toggleMobileMenu
              }: { isMobileMenuVisible: boolean; toggleMobileMenu: (b: boolean) => void }) => {
    const {t} = useTranslation();
    const location = useLocation();


    if (isMobile) {
        const mobileMenuClass  = isMobileMenuVisible ? 'mobile-menu mobile-menu--visible' : 'mobile-menu'
        return (<>
            <button className="hamburger" onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
                <img src={HamburgerIcon} alt=""/>
            </button>
             <div className={mobileMenuClass}>mobile menu</div>

        </>);
    }

    return (
        <ul className="menu">
            <li>
                <NavLink
                    to={`/${i18n.language}`}
                    style={() => ({
                        color: location.pathname === '/pl' || location.pathname === '/en' ? "#0089ff" : ""
                    })}>
                    {t('menu.home')}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={`/${i18n.language}/${t('routes.news')}`}
                    style={({isActive}) => ({
                        color: isActive ? "#0089ff" : ""
                    })}>
                    {t('menu.news')}
                </NavLink>
            </li>
            <li>
                <NavLink to={`/${i18n.language}/${t('routes.contact')}`}
                         style={({isActive}) => ({
                             color: isActive ? "#0089ff" : ""
                         })}>
                    {t('menu.contact')}
                </NavLink>
            </li>
            <li>
                <LanguageSwitch/>
            </li>
        </ul>
    );
}

export default Menu;
