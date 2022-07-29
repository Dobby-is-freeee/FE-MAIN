import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
	${reset}
	@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

	*,
	body {
		box-sizing: border-box;
		font-family: "SUIT", sans-serif;
		font-size: 14px;
		color : ${theme.colors.black};
	}

	small {
		font-size: 12px;
	}
`;
