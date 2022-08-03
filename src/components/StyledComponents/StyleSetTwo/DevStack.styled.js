import styled from 'styled-components';

export const DevStackDiv = styled.div`
	width: 100%;
	padding-right: 0;
	padding-left: 0;
	margin-right: 0;
	margin-left: 0;
	height: 550px;
	background: #fefefe 0% 0% no-repeat padding-box;
	p {
		text-align: left;
		font: normal normal normal 14px/19px Segoe UI;
		letter-spacing: 0.84px;
		color: #021f2f;
		width: 70%;
	}
	h3 {
		text-align: left;
		font: normal normal normal 14px/19px Segoe UI;
		letter-spacing: 0.84px;
		color: #021f2f;
	}

	h2 {
		font: normal normal bold 24px/32px Segoe UI;
		letter-spacing: 1.44px;
	}
	h4 {
		text-align: left;
		font: normal normal bold 24px/32px Segoe UI;
		letter-spacing: 1.44px;
		color: #021f2f;
	}

	h5 {
		color: var(--unnamed-color-c1c3c5);
		text-align: left;
		font: normal normal bold 16px/21px Segoe UI;
		letter-spacing: 0.96px;
		color: #c1c3c5;
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
		border: 0.1px solid var(--unnamed-color-0b87d1);
		background: #ffffff 0% 0% no-repeat padding-box;
		box-shadow: 0px 3px 6px #00000029;
		border: 0.10000000149011612px solid #0b87d1;
		border-radius: 7px;
		padding: 3em;
	}

	.stacks img {
		margin-right: 10px !important;
	}

	@media (min-width: 481px) and (max-width: 820px) {
		.card {
			padding: 2em;
			height: 130px;
		}
	}

	@media (min-width: 320px) and (max-width: 480px) {
		height: 900px;

		.stacks {
			margin-top: 10px !important;
		}

		.card {
			padding: 2em;
		}

		p {
			width: 85%;
		}

		.ozwo {
			flex-direction: column;
		}

		.container {
			padding-left: 35px;
			padding-right: 35px;
		}

		.pb-sml-4 {
			padding-bottom: 2rem !important;
		}

		.d-sml-none {
			display: none !important;
		}
		.mt-sml-0 {
			margin-top: 0 !important;
		}
		.mt-sml-4 {
			margin-top: 2rem !important;
		}
		.m-top-2 {
			margin-top: 3em !important;
		}
		.mb-5 {
			margin-bottom: 2em !important;
		}
	}
`;
