import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner/Banner";
import hy from './img/hy.jpg'
import rd from './img/rd.jpg'
import ft from './img/ft.jpg'
import jg from './img/gaby.jpg'
import jenny from './img/kamta.jpg'
import ba from './img/ba.jpg'
import jc from './img/jc.jpg'
import mariam from './img/mariam.jpg'
import kamta from './img/kamta.jpg'
import './css/cat.css'
import { API, graphqlOperation } from "aws-amplify";
 
export default function CatPage1({ Articles, cart, updateCart }) {
  const [step, setStep] = useState(1);
  const [candidates, setCandidates ] = useState([])
  const [loading, setLoading] = useState(false)
  const categorie = "royaute"
  
  const handleVote = (gender) => {
    
  };

  function CoverImage(img){
    if(img == 'Maryam'){
      return mariam
    }
    if(img == 'rd'){
      return rd
    }
    if(img == 'hy'){
      return hy
    }
    if(img == 'jc'){
      return jc
    }
    if(img == 'ft'){
      return ft
    }
    if(img == 'jg'){
        return jg
      }
    if(img == 'kamta'){
        return kamta
      }
    if(img == 'ba'){
        return ba
      }
    if(img == 'jo'){
        return jenny
      }
 
   
  }
  
  const getCate = async()=>{
    if(loading){
      return;
  }
  
  setLoading(true)
  try {
  
    let candidates = [];
    let catCandidates = []
    candidates.forEach((element) => {
      if(element.categorie === categorie){
        catCandidates.push(element)
      }
    });
    setCandidates(catCandidates);
  
  }catch(e){
          console.log(e)

  }
  setLoading(false)
 
  }
 
  useEffect(()=>{
    console.log("oko")
    getCate()
    console.log(candidates)
  },[])

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // Here you can handle the completion of the voting process or any other necessary logic
      // For now, let's just reset the step and votes for the next time the user visits the page
      setStep(1);
 
    }
  };

  const updateClicked = async ()=>{
    const input ={

    }
     
  }

  const handleClick = ()=>{
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // Here you can handle the completion of the voting process or any other necessary logic
      // For now, let's just reset the step and votes for the next time the user visits the page
      setStep(1);
 
    }
  }
  const renderMaleStep = () => (
    <div className="votebox">
    <h1 id="imperial" >Royaute</h1>

      <h2 className="title">Nomminé masculin</h2>

      <div className="black-div-container">
    
           
        {
          loading?(
            <h2>loading ...</h2>
          ):(
            candidates.map((item)=>(
              <div className="NomBox">
                  <div
                    className="black-div"
                    onClick={()=>{
                      setStep(2)
                    }}
                    >
                    <img src={CoverImage(item.img)} alt="photo"/>
                    </div>
                  <p className="text">{item.name}</p>
              </div>
            ))
          )

        }
        
      </div>
        {/* Add more divs for male votes */}
      
     </div>
  );

  const renderFemaleStep = () => (
    <div className="votebox">
    <h1 id="imperial" >Royaute</h1>
      <h2 className="title">Nominé feminin</h2>
       <div className="black-div-container">
       {
            candidates.map((item)=>(
              <div className="NomBox">
                  <div
                    className="black-div"
                    onClick={()=>{
                      setStep(2)
                    }}
                    >
                    <img src={CoverImage(item.img)} alt="photo"/>
                    </div>
                  <p className="text">{item.name}</p>
              </div>
            ))
           }
         </div>
        {/* Add more divs for female votes */}
      </div>
   );

  return (
    <section className="CatPage-mobile">
       <Banner text={"made by enkas web development"} />
      {step === 1 ? renderMaleStep() : step === 2 ? renderFemaleStep() : null}
    </section>
  );
}

 


  


 
 
