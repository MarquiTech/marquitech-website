import styled from 'styled-components';

export const FooterDiv = styled.footer`
	width: 100%;
	height: auto;
	max-height: 100%;
	padding: 4rem;

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

	@media (min-width: 320px) and (max-width: 480px) {
		.container {
			padding-left: 35px;
			padding-right: 35px;
		}
		.align-items-sml-center {
			align-items: center !important;
		}
		.text-sml-center {
			text-align: center !important;
		}
		.d-sml-none {
			display: none !important;
		}
		.mt-sml-0 {
			margin-top: 0 !important;
		}
		.mt-sml-2 {
			margin-top: 1em !important;
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
