import {DevStackDiv} from '../../StyledComponents/StyleSetTwo/DevStack.styled'
import imgGridGradient from '../../../Assets/grid-gradient.svg';
import amazon from '../../../Assets/services-page-assets/amazon_aws-icon.svg'
import digitalOcean from '../../../Assets/services-page-assets/digitalocean-icon.svg'
import heroku from '../../../Assets/services-page-assets/heroku-icon.svg'
import java from '../../../Assets/services-page-assets/java-icon.svg'
import mongodb from '../../../Assets/services-page-assets/mongodb-icon.svg'
import nodejs from '../../../Assets/services-page-assets/nodejs-icon.svg'
// import postgresql from '../../../Assets/services-page-assets/postgresql-icon.svg'
import reactjs from '../../../Assets/services-page-assets/reactjs-icon.svg'
import redis from '../../../Assets/services-page-assets/redis-icon.svg'
import typescriptlang from '../../../Assets/services-page-assets/typescriptlang-icon.svg'
// import css from '../../../Assets/services-page-assets/css-icon.svg'

export const DevStack = () => {
    return (
        <>
            <DevStackDiv>
                <div className="container mt-5">
				<div className="d-flex pt-5 pb-sml-4">
					<img src={imgGridGradient} alt="white grid" />
					<div className="ml-3 text-white ls-2" style={{ height: 32 }}>
						<h4 className="">Development Tech Stack</h4>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-6 mt-lg-5 mt-md-5 mt-xl-5 mt-sml-4">
							<div className="card">
                                <div className="d-flex justify-content-between ozwo ozwo">
                                    <div>
                                        <h5>Backend tech stack</h5>
                                        <h3 className="text-black">Java, NodeJS, Spring, Express</h3>

                                    </div>
                                    <div className='stacks'>
                                        <img alt="node js" width={33} height={36} src={nodejs} />
                                        <img alt="java" width={33} height={36} src={java} />
                                    </div>
								</div>
								
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6 mt-lg-5 mt-md-5 mt-xl-5 mt-sml-4">
							<div className="card">
								<div className="d-flex justify-content-between ozwo">
									<div>
									<h5>Cloud deployment tech stack</h5>
									<h3 className="text-black">Amazon, Digital Ocean, Heroku</h3>

                                    </div>
                                    <div className='stacks'>
                                        <img alt="amazon" width={33} height={36} src={amazon} />
                                        <img alt="digital ocean" width={33} height={36} src={digitalOcean} />
                                        <img alt="heroku" width={33} height={36} src={heroku} />
                                    </div>
								</div>
								
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6 mt-lg-5 mt-md-5 mt-xl-5 mt-sml-4">
							<div className="card">
								<div className="d-flex justify-content-between ozwo">
									<div>
									<h5>Frontend tech stack</h5>
									<h3 className="text-black">React, HTML, CSS, TypeScript, JavaScript</h3>

                                    </div>
                                    <div className='stacks'>
                                        <img alt="react js" width={33} height={36} src={reactjs} />
                                        <img alt="typescript" width={33} height={36} src={typescriptlang} />
                                        {/* <img alt="css" width={33} height={36} src={css} /> */}
                                    </div>
								</div>
								
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6 mt-lg-5 mt-md-5 mt-xl-5 mt-sml-4">
							<div className="card">
								<div className="d-flex justify-content-between ozwo">
									<div>
									<h5>Database tech stack</h5>
									<h3 className="text-black">Postgres SQL, MongoDB, Redis</h3>

                                    </div>
                                    <div className='stacks'>
                                        <img alt="mongo db" width={33} height={36} src={mongodb} />
                                        <img alt="redis" width={33} height={36} src={redis} />
                                    </div>
								</div>
								
						</div>
					</div>
					
				</div>
			</div>
        </DevStackDiv>
        </>
    )
}