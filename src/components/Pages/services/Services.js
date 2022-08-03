import Header from '../Header';
import Footer from '../Footer'
import { FirstPart } from '../../StyledComponents/StyleSetTwo/FirstPart.styled';
import serviceHero from '../../../Assets/services-page-assets/services-hero.svg'
import { ServicesStack } from './ServicesStack';

export const Services = () => {
    return (
        <>
            <Header />
            <FirstPart>
                <div className="main-content">
				<div className="container">
					<div className="row align-items-md-center align-items-lg-center align-items-xl-center">
						<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
							<h1>Our Development Services</h1>
							<p>
								IT team with diverse software development experience working together to deliver solutions for your business.
							</p>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-md-right text-lg-right text-xl-right text-sm-center">
							<img className="d-sml-none" src={serviceHero} alt="contact image" />
						</div>
					</div>
				</div>
				</div>
			</FirstPart>
			<ServicesStack />
            <Footer />
        </>
    )
}