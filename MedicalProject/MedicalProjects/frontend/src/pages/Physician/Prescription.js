import React from 'react'
import { useState } from 'react';
import Base from '../../Components/Base';
// import  '../../Style/Global.css';
function Prescription(){
    return (
        <Base>
        
        <div className="">
        <table className="table table-bordered text-start">
                    <h3 className="text-center">Prescription</h3>


                    <tr>
                        <td>Any Drug allergies</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Other illness</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Any Operations</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Current Medications</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Exercise</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Eating</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>Alcohol Consumtipn</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>Caffeine Consumption</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Smoke</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>Comments regarding Medical History</td>
                        <td>10</td>
                    </tr>

                </table>

                <div className="text-center">
                    <h4 >Prescription</h4>
                    <p className="border border-primary" >jjjjjjjjj lorem3 efm</p>
                </div>
            </div>
            </Base>
                )
}


export default Prescription