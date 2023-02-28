import React from 'react'
import Base from '../Components/Base'
import {Row, Col} from 'react-bootstrap'
import '../Style/Global.css'
export default function Cataract() {
  return (

    <Base>
    <div style={{backgroundColor:"#d8efff", margin :"-90px"}}>
		<br/>
		<br/>
		<br/>
		<br/>

		<div style={{marginLeft:"30px"}}>
	<h1  className='mt-5 centerIt fontStyle' style={{color:"#653daf"}}>Cataract</h1>
	<hr style={{background:"black"}}/>
	<p className='centerIt'>
	As you age, there is a chance of tissue breakdown in the lens of your eye. It results in cloudy vision. 
	It is one of the telling symptoms of Cataracts being developed in your eyes.
	</p>




    <div className="row mb-40">
						<div className="col-lg-6 col-md-6 col-sm-6 text-center boxshadowss ">
							<div className="row">
								<div className="col-lg-12 mb-10">
									<h3 className="colblue" style={{color:"#653daf"}}>Causes of Cataracts</h3>
								</div>
							</div>
							<div className="row brgraay">
								<div className="col-lg-4">
									<div className="causebox">
										<img src="https://www.maxivisioneyehospital.com/assets/page_images/icons/Cataract/Ageing.png" width="100" height="100" alt="Ageing"/>
										<p>Ageing</p>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="causebox">
										<img src="https://www.maxivisioneyehospital.com/assets/page_images/icons/Cataract/Trauma.png" width="100" height="100" alt="Trauma"/>
										<p>Trauma</p>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="causebox">
										<img src="https://www.maxivisioneyehospital.com/assets/page_images/icons/Cataract/Diabetes.png" width="100" height="100" alt="Diabetes"/>
										<p>Diabetes</p>
									</div>
								</div>
							</div>
						</div>
						
						<div className="col-lg-6 col-md-6 col-sm-6 text-center boxshadowss ">
							<div className="row">
								<div className="col-lg-12 mb-10">
									<h3 className="colblue" style={{color:"#653daf"}}>Symptoms of Cataracts</h3>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-4">
									<div className="causebox">
										<img src="https://www.maxivisioneyehospital.com/assets/page_images/icons/Cataract/Double Vision.png" width="100" height="100" alt="Double Vision"/>
										<p>Double Vision</p>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="causebox">
										<img src="https://www.maxivisioneyehospital.com/assets/page_images/icons/Cataract/Cloudy Vision.png" width="100" height="100" alt="Cloudy Vision"/>
										<p>Cloudy Vision</p>
									</div>	
								</div>
								<div className="col-lg-4">
									<div className="causebox">
										<img src="https://www.maxivisioneyehospital.com/assets/page_images/icons/Cataract/Sensitive to light.png" width="100" height="100" alt="Sensitive to light"/>
										<p>Sensitive to light</p>
									</div>
								</div>
							</div>
						</div>
						</div>


						<hr style={{background:"black"}}/>
						<div className="col-lg-12 mt-5">
							<div className="">
								<h3 className="colblue centerIt" style={{color:"#653daf"}}>Treatment for Cataracts</h3>
								<p>The science of treating Cataracts has advanced tenfold. And, we even do bladeless Cataract surgeries too. Please get a thorough analysis and explanation from our specialists.</p>
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<p>Cataract Surgeries</p>
										<ul className="dotsleft">
											<li>Phaco Emulsification</li>
											<li>FEMTO Laser Cataract Surgeries</li>
											<li>Micro Incision Cataract Surgery (MICS)</li>
										</ul>
									</div>
									<div className="col-lg-6 col-md-6">
										<p>Intraocular Lenses (IOLs)</p>
										<ul className="dotsleft">
											<li>Multifocal</li>
											<li>Accommodative</li>
											<li>Toric</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						</div>
	</div>

	<br/>
		
    </Base>
  )
}
