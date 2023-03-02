import React, { useState } from 'react'

import useIsMobile from '../../../../data/hooks/useIsMobile';

import { 
    HeaderAppBar, 
    HeaderLogo,
    ButtonsContainer,
    HeaderDrawer
} from './Header.style';
import { Container, Toolbar, IconButton, MenuList, MenuItem, Divider } from '@mui/material';
import Logo from '../../../../assets/img/logos/logo.svg'
import Link from '../../navegations/Link/Link';
import RoundedButton from '../../inputs/RoundedButton/RoundedButton';

const HeaderDesktop = () => {
    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <Link href={'/'}>
                    <HeaderLogo src={Logo} alt={'e-diaristas'}/>
                </Link>

                <div>&nbsp;</div>
                <div>&nbsp;</div>

                <ButtonsContainer>
                    <Link 
                        href={'/cadastro/diarista'} 
                        Component={RoundedButton} 
                        mui={{
                            color: 'primary', variant: 'contained'
                        }} 
                        >
                            Seja um(a) diarista
                    </Link>

                    <Link 
                        href={'/login/diarista'} 
                        Component={RoundedButton} 
                        >
                            Login
                    </Link>
                </ButtonsContainer>
            </Toolbar>
        </HeaderAppBar>
    )
}

const HeaderMobile = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

    const handleDrawer = () => {
        setIsOpenDrawer(!isOpenDrawer);
    }

    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <IconButton edge={'start'} color={'inherit'} onClick={handleDrawer}>
                    <i className='twf-bars' />
                </IconButton>

                <Link href={'/'}>
                    <HeaderLogo src={Logo} alt={'e-diaristas'}/>
                </Link>

                <HeaderDrawer open={isOpenDrawer} onClose={handleDrawer} onClick={handleDrawer}>
                    <MenuList>
                        <Link 
                            href={'/login/diarista'} 
                            Component={MenuItem}
                            mui={{
                                color: `secondary`, variant: 'text'
                            }}  
                            >
                                Login
                        </Link>
                        
                        <Divider />

                        <Link 
                            href={'/cadastro/diarista'}  
                            Component={MenuItem} 
                            mui={{
                                color: 'secondary', variant: 'text'
                            }} 
                            >
                                Seja um(a) diarista
                        </Link>
                    </MenuList>
                </HeaderDrawer>
            </Toolbar>
        </HeaderAppBar>
    )
}

const Header: React.FC = () => {
    return useIsMobile() ? <HeaderMobile /> : <HeaderDesktop />
}

export default Header;