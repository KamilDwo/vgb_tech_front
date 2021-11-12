import i18n from "i18next";
import Languages from "../enums/Languages";

const useLanguage = (location: { pathname: string }, navigate: (s: string) => void) => {
    if (location.pathname.includes('/en') && i18n.language !== 'en') {
        i18n.changeLanguage(Languages.EN);
    }
    if (location.pathname.includes('/pl') && i18n.language !== 'pl') {
        i18n.changeLanguage(Languages.PL);
    }

    if (location.pathname === '/') {
        navigate(`/${i18n.language}`);
    }
}

export default useLanguage;
