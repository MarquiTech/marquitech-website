import { Continer } from '../../StyledComponents/StyleSetTwo/Continer.styled';
import imgGridWhite from '../../../Assets/grid-white.svg';
import contact from '../../../Assets/contact-us.svg';
export const ContactForm = () => {
	return (
		<Continer bg={bg} bgColor={bgColor}>
			{/* <div> */}
			<div className="container mt-5">
				<div className="d-flex pt-5">
					<img src={imgGridWhite} alt="white grid" />
					<div className="ml-3 text-white ls-2" style={{ height: 32 }}>
						<h3 className="">Get in touch with us</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-6 mt-lg-5 mt-md-5 mt-xl-5 mt-sml-0">
						<div className="m-top-2">
							<p className=" mb-5">
								Reach out to the MarquiTech team by filling up the form. We look
								forward to hearing from you.
							</p>
							<img src={contact} alt="contact us" className="d-sml-none" />
						</div>
					</div>

					<div className="col-md-6 col-lg-6 col-sm-12 mt-lg-5 mt-md-5 mt-xl-5 formDiv">
						<div className="card">
							<div className="form-group">
								<label>First Name *</label>
								<input type="text" className="form-control" />
							</div>
							<div className="form-group">
								<label>Last Name *</label>
								<input type="text" className="form-control" />
							</div>
							<div className="form-group">
								<label>Phone Number *</label>
								<input type="text" className="form-control" />
							</div>

							<div className="form-group">
								<label>Message *</label>
								<textarea className="form-control" rows="3" />
							</div>
							<button className="btn btn-block btn-primary">Send Message</button>
						</div>
					</div>
				</div>
			</div>
		</Continer>
	);
};
