import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	${reset}
	@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

	*,
	body {
		box-sizing: border-box;
		font-family: "Pretendard", "SUIT", sans-serif;
		font-size: 14px;
	  line-height: 18px;
	  letter-spacing: -0.0025em;
	}

	small {
		font-size: 12px;
	}

	strong {
		font-weight: bold;
	}

	button {
		cursor: pointer;
		outline: none;
		border :none;
		padding: 0;
		margin: 0;
	}
`;
