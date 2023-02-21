import React from 'react'
import Base from '../Components/Base'
import '../Style/Global.css'
function Retina() {
  return (
    <Base>
       <div style={{backgroundColor:"#d8efff", margin :"-90px"}}>
		<br/>
		<br/>
		<br/>
		<br/>

		<div style={{marginLeft:"30px"}}>


        <h1 className='mt-5 centerIt fontStyle' style={{color:"#653daf"}}>Retina</h1>
        <hr style={{background:"black"}}/>

        <p className='centerIt'>The Retina is the heart of the eye. It is what captures and relays the image to our brain. This can be affected by multiple factors around you.</p>

        <div className="row mb-40">
								<div className="col-lg-6 col-md-6 col-sm-6 text-center boxshadowss">
									<div className="row">
										<div className="col-lg-12 mb-10">
											<h3 className="colblue" style={{color:"#653daf"}}>Causes of Retinal Issues</h3>
										</div>
									</div>
									<div className="row brgraay">
										<div className="col-lg-4">
											<div className="causebox">
												<img src="https://www.maxivisioneyehospital.com/assets/page_images/icons/Retina/Ageing.png" width="100" height="100" alt="Ageing"/>
												<p>Ageing</p>
											</div>
										</div>
										<div className="col-lg-4">
											<div className="causebox">
												<img src="https://www.maxivisioneyehospital.com/assets/page_images/icons/Retina/Diabetes.png" width="100" height="100" alt="Diabetes"/>
												<p>Diabetes</p>
											</div>
										</div>
										<div className="col-lg-4">
											<div className="causebox">
												<img src="https://www.maxivisioneyehospital.com/assets/page_images/icons/Retina/Straining the eyes.png" width="100" height="100" alt="Straining the eyes"/>
												<p>Straining the eyes</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6 text-center boxshadowss">
									<div className="row">
										<div className="col-lg-12 mb-10">
											<h3 className="colblue" style={{color:"#653daf"}}>Symptoms of Retinal Issues	</h3>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-4">
											<div className="causebox">
												<img src="https://www.maxivisioneyehospital.com/assets/page_images/icons/Retina/Cloudy Vision.png" width="100" height="100" alt="Cloudy Vision"/>
												<p>Cloudy Vision</p>
											</div>
										</div>
										<div className="col-lg-4">
											<div className="causebox">
												<img src="https://www.maxivisioneyehospital.com/assets/page_images/icons/Retina/Black Spots in Vision.png" width="100" height="100" alt="Black Spots in vision"/>
												<p>Black Spots in vision</p>
											</div>	
										</div>
										<div className="col-lg-4">
											<div className="causebox">
												<img src="https://www.maxivisioneyehospital.com/assets/page_images/icons/Retina/Vision loss.png" width="100" height="100" alt="Vision loss"/>
												<p>Vision loss</p>
											</div>
										</div>
									</div>
								</div>
								</div>

                                <hr style={{background:"black"}}/>


								<div className="col-lg-12">
								<h3 className="colblue centerIt" style={{color:"#653daf"}}>Treatments for Retinal Issues</h3>
							<p>While there are multiple causes for the Retina to get damaged, every cause has a treatment. We, at Maxivision, have adopted the best practices that are used all around the world to treat Retinal issues.</p>
							<p>Almost all the treatments are quick, painless, and patients can recover easily.</p>
							<ul className="dotsleft">
								<li>Fluorescein Angiography (FFA)</li>
								<li>OCT – Optical Coherence Tomography</li>
								<li>Sutureless Vitrectomy</li>
							</ul>
							
							<br/>
							<br/>
							<br/>
							
						</div>
        </div>
        </div>
    </Base>
  )
}

export default Retina
