import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            primaryDarker: string;
            secundary: string;

            background: string;
            text: string;
        }
    }
}