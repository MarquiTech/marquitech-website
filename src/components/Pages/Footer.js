import logoName from '../../Assets/logo-name.png';
import { FooterDiv } from '../StyledComponents/StyleSetTwo/Footer.styled';
 const Footer = () => {
	return (
		<>
			<FooterDiv>
				<div className="container">
					<div className="row align-items-md-center align-items-lg-center align-items-xl-center text-sml-center">
						<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <img height={92} width={123} alt="logoName" src={logoName} />
                            <p class="mt-2 text-sml-center">info@marquitech.com</p>
							{/* <div className="d-flex pt-5">
                                <img src={imgGridWhite} alt="white grid" />
                                <div className="ml-3">
                                    <h3 className="text-white">info@marquitech.com</h3>
                                </div>
                            </div> */}
						</div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-md-right text-lg-right text-xl-right text-sm-center mt-sml-2">
                            <img height={92} width={123} alt="logoName" src={logoName} />
						</div>
					</div>
				</div>
			</FooterDiv>
		</>
	);
};

export default Footer;