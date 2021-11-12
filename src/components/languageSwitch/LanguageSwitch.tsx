import {useEffect, useState} from "react";
import Languages from "../../enums/Languages";
import FlagPL from '../../flags/pl.svg';
import FlagEN from '../../flags/en.svg';
import i18n from "i18next";
import './LanguageSwitch.scss';


const LanguageSwitch = () => {
    const [visible, toggleVisibility] = useState<boolean>(false);

    const renderIcon = () => {
        if (i18n.language === Languages.EN) {
            return <img src={FlagEN} alt="" className="icon"/>;
        }
        return <img src={FlagPL} alt="" className="icon"/>;
    }

    const redirectTo = () => {
        if (i18n.language === Languages.EN) {
            window.location.href = `/${Languages.PL}`;
        } else {
            window.location.href = `/${Languages.EN}`;
        }
    }

    useEffect(() => {
        toggleVisibility(true);
    }, []);

    const switchClass = visible ? 'language-switch language-switch--visible' : 'language-switch';

    return (<button
        className={switchClass}
        onClick={() => redirectTo()}
    >
        {renderIcon()}
    </button>);
}

export default LanguageSwitch;
