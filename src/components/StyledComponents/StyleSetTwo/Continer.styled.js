import styled from 'styled-components';

export const Continer = styled.div`
	width: 100%;
	padding-right: 0;
	padding-left: 0;
	margin-right: 0;
	margin-left: 0;
	height: 800px;
	background: transparent linear-gradient(180deg, #00aeef 0%, #21409a 100%) 0% 0% no-repeat
		padding-box;
	p {
		letter-spacing: 0.96px;
		color: #fefefe;
	}
	h3 {
		font: normal normal bold 24px/32px Segoe UI;
		letter-spacing: 1.44px;
		color: #fefefe;
	}

	.form-control {
		border-radius: 5px;
	}

	textarea.form-control {
		border-radius: 5px;
	}

	.btn-primary {
		color: #fff;
		background: #0d86d1;
		border-radius: 5px;
	}

	label {
		color: var(---021f2f);
		text-align: left;
		font: normal normal normal 16px/21px Segoe UI;
		letter-spacing: 0.96px;
		color: #021f2f;
	}

	.card {
		border-radius: 15px;
		padding: 3em;
	}

	@media (min-width: 481px) and (max-width: 820px) {
		.card {
			padding: 2em;
		}
	}

	@media (min-width: 320px) and (max-width: 480px) {
		height: 850px;

		.card {
			padding: 2em;
		}

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
		.m-top-2 {
			margin-top: 3em !important;
		}
		.mb-5 {
			margin-bottom: 2em !important;
		}
	}
`;
