import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
	${reset}

	*,
	body {
		box-sizing: border-box;
		font-family: "SUIT", sans-serif;
		font-size: 14px;
	}

	small {
		font-size: 12px;
	}
`;
