// import { ReactComponent as HamMenu } from '../../assets/hamburger-menu.svg';
// import { useClickAway } from "react-use";
// import { useRef } from "react";
import Hamburger from "hamburger-react";
// import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';
import './mobile-navigation.styles.scss';

function MobileNavigation({ outlet }) {
    const [isOpen, setOpen] = useState(false);

  return (
    <>
    <div className="mobile-nav-container">
        <div className="lg:hidden ">
            <Hamburger className="hamburger-animation" toggled={isOpen} size={30} toggle={setOpen} />
        </div>        
    </div>
    {outlet}
    </>
  )
}

export default MobileNavigation;