import React, { useState } from "react";

// import  '../../Style/Global.css';
import Base from '../../Components/Base';

function PatientProblemDetails(props){

    const [allergies, setAllergies] = useState('');
    const [illness , setIllness] = useState('');
    const [operations , setOperations] = useState('');
    const [medications , setMedications] = useState('');
    const [exercise , setExercise] = useState('');
    const [diet,setDiet] = useState('');
    const [alcohol, setAlcohol] = useState('');
    const [caffeine, setCaffeine] = useState('');
    const [everhad, setEverHad] = useState('');
    const [disease, setDisease] = useState([]);
    const [smoke, setSmoke] = useState('');
   
    var dList=[];

    const handleAllergyChange =(e)=>{
        setAllergies(e.target.value)
    }
    const handleIllnessChange =(e)=>{
        setIllness(e.target.value)
    }
    const handleOperationChange =(e)=>{
        setOperations(e.target.value)
    }
    const handleMedicationsChange =(e)=>{
        setMedications(e.target.value)
    }
    const handleExerciseChange =(str)=>{
        setExercise(str)
    }
    const handleDietChange =(str)=>{
        setDiet(str)
    }
    const handleAlcoholChange =(str)=>{
        setAlcohol(str)
    }
    const handleCaffeineChange =(str)=>{
        setCaffeine(str)
    }
    const handleSmokeChange =(str)=>{                   
        setSmoke(str)
    }
    const handleDisease=(key)=>{
        dList.push(lst[key])
    }


    const handleOtherChange =(e)=>{
        console.log(e.target.value)
    }

    const handleSubmit =()=>{

    }
    
    const lst=['Refractive Errors','Cataract','Diabetic Retinopathy','Glaucoma','Amblyopia','Strabismus','Color Blindness','Amblyopia (Lazy Eye)','Retinal Detachment','Color Blindness','Floaters'    ];

    return(
        <Base>
        <form className="row g-3 justify-content-center mt-5" onSubmit={handleSubmit()}>
            <h1 className="text-center">Patients information</h1>
            
            <div className="col-4 text-center">
            <label htmlFor='AllergiesInput'>Please list any drug allergies</label>
            <input type="text" className="form-control" id='AllergiesInput' onChange={(e)=>{handleAllergyChange(e)}} />
            </div>



            <div className="col-4 text-center">
            <label htmlFor="OperationsInput">Please list any Operations</label>
            <input type="text"  className="form-control" id='operations' onChange={(e)=>{handleOperationChange(e)}}/>
            </div>

            <div className="col-4 text-center " >
            <label htmlFor="MedicationsInput">Please list your Current Medications</label>
            <input type="text" className="form-control" id='MedicationsInput' onChange={(e)=>{handleMedicationsChange(e)}}/>
            </div>

            <div className="text-start mt-5">
            <p>Please mark if you have any problem written below</p>
            {lst.map(data=>{
             return(<div className="form-check-inline col-3"><input type="checkbox" key={lst.indexOf(data)} onClick={()=>handleDisease(lst.indexOf(data))} />{data }</div>)
            })}
            </div>
            
            
            <div className="col-4 text-center">
            <label  htmlFor="IllnessInput">Other illness</label>
            <input type="text"  className="form-control" id='IllnessInput' onChange={(e)=>{handleIllnessChange(e)}} />
            </div>

            
            <div className="col-4 text-center">
                <label  htmlFor="">Comments regarding your Medical History</label>
                <input className="form-control" type="text" onChange={(e)=>{handleOtherChange(e)}}/>
            </div>


            <h5 className="mt-5">Healthy and Unhealthy Habits</h5>
            
            <div className="text-start">
            <label className="me-5" htmlFor="ExerciseInput">Exercise</label>
            never <input className="me-4" type="radio" id="ExerciseInput" name="exercise" onClick={(e)=>{handleExerciseChange(e)}}/>           
            2-3days <input className="me-4" type="radio"  id="ExerciseInput" name="exercise" onClick={(e)=>{handleExerciseChange(e)}}/>
            4-5days <input className="me-4" type="radio"  id="ExerciseInput" name="exercise" onClick={(e)=>{handleExerciseChange(e)}}/>
            5+days <input className="me-4" type="radio"  id="ExerciseInput" name="exercise" onClick={(e)=>{handleExerciseChange(e)}}/>
            </div>

            <div className="text-start">
            <label className="me-5" htmlFor="DietInput">Eating </label>
            I have a loose diet <input className="me-4" type="radio" id="DietInput" name="diet" onClick={(e)=>{handleDietChange(e)}}/>           
            I have a strict diet <input className="me-4" type="radio"  id="DietInput" name="diet" onClick={(e)=>{handleDietChange(e)}}/>
            I don't have a diet plan <input className="me-4" type="radio"  id="DietInput" name="diet" onClick={(e)=>{handleDietChange(e)}}/>
            
            </div>


            <div className="text-start"> 
            <label className="me-5" htmlFor="AlcoholInput" >Alcohol Consumption </label>
            I don't drink <input className="me-4" type="radio" id="AlcoholInput" onClick={(e)=>{handleAlcoholChange(e)}}/>           
            1-2 glasses/day <input className="me-4" type="radio"  id="AlcoholInput" onClick={(e)=>{handleAlcoholChange(e)}}/>
            3-4 glasses/day <input className="me-4" type="radio"  id="AlcoholInput" onClick={(e)=>{handleAlcoholChange(e)}}/>
            5+ glasses/day <input className="me-4" type="radio"  id="AlcoholInput" onClick={(e)=>{handleAlcoholChange(e)}}/>
            </div>  

            <div className="text-start">
            <label className="me-5" htmlFor="CaffeineInput">Caffeine Consumption</label>
            I don't use caffeine<input className="me-4" type="radio" id="CaffeineInput" name="caffeine" onClick={()=>{handleCaffeineChange("I don't use caffeine")}}/>           
            1-2 cups/day<input className="me-4" type="radio" id="CaffeineInput" name="caffeine" onClick={(e)=>{handleCaffeineChange("1-2 cups/day")}}/>
            3-4 cups/day<input className="me-4" type="radio" id="CaffeineInput" name="caffeine" onClick={(e)=>{handleCaffeineChange("3-4 cups/day")}}/>
            5+ cups/day<input className="me-4" type="radio" id="CaffeineInput" name="caffeine" onClick={(e)=>{handleCaffeineChange("5+ cups/day")}}/>
            </div>


            <div className="text-start">
            <label className="me-5" htmlFor="SmokeInput" onChange={(e)=>{handleSmokeChange(e)}}> Do you smoke?</label>
            No <input className="me-4" type="radio"  id='SmokeInput' name="smoke" onClick={(e)=>{handleOtherChange(e)}} />           
            0-1 pack/day <input className="me-4" type="radio" name="smoke"  id='SmokeInput' onClick={(e)=>{handleSmokeChange(e)}}/>
            1-2 packs/day <input className="me-4" type="radio" name="smoke"  id='SmokeInput' onClick={(e)=>{handleSmokeChange(e)}}/>
            2+ packs/day <input className="me-4" type="radio" name="smoke"  id='SmokeInput' onClick={(e)=> {handleSmokeChange(e)}}/>
            </div>  


            <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary ">submit</button>
          </div>

        </form>
        </Base>
    )
}

export default PatientProblemDetails;