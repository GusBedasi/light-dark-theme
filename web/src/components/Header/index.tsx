import React, { useContext } from 'react';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components'

import { Container } from './styles';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

    const { title, colors } = useContext(ThemeContext);

    return (
        <Container>
            Hello World
            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor="#fafafa"
                onColor={colors.background}
            />
        </Container>
    );
}

export default Header;