import styled from 'styled-components';

export const FirstPart = styled.header`
	width: 100%;
	height: 80vh;
	max-height: 100%;
	padding-top: 4rem;
	margin-top: 100px !important;

	h1 {
		text-align: left;
		font: normal normal bold 30px/40px Segoe UI;
		letter-spacing: 1.8px;
		color: #021f2f;
	}

	p {
		text-align: left;
		font: normal normal normal 14px/19px Segoe UI;
		letter-spacing: 0.84px;
		color: #021f2f;
	}

	@media (min-width: 481px) and (max-width: 820px) {
		height: 50vh;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		height: 22vh;
		.container {
			padding-left: 35px;
			padding-right: 35px;
		}
		.d-sml-none {
			display: none !important;
		}
		.mt-sml-0 {
			margin-top: 0 !important;
		}
		.d-sml-inline {
			display: inline !important;
		}
		.d-sml-inline-block {
			display: inline-block !important;
		}
		.d-sml-block {
			display: block !important;
		}
		.d-sml-table {
			display: table !important;
		}
		.d-sml-table-row {
			display: table-row !important;
		}
		.d-sml-table-cell {
			display: table-cell !important;
		}
		.d-sml-flex {
			display: flex !important;
		}
		.d-sml-inline-flex {
			display: inline-flex !important;
		}
	}
`;
