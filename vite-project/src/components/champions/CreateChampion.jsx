import {useNavigate} from 'react-router-dom'
import useForm from '../../hooks/useForm'
import fighterData from '../../sevices/fighterAPI'
import {optionsState} from 'react'

export default function CreateChampion({
  goBackHome
}) {
  const navigation = useNavigate()
    const initialValues = {
        name:'',
        type:'',
        img:'',
        attack:'',
        defense:'',
        speed:'',
        intelligence:'',
        health:'',
        element:'fire'
    }
    
    async function createHandler(values){
        try {
            const  {_id : fighterId} = await fighterData.createFighter(values)
            navigation(`/armory/champions/${fighterId}`)
        } catch (error) {
            console.log(error.message)
        }
    }
    const {values,changeHandler,submitHandler} = useForm(initialValues,createHandler)
    
  
  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    changeHandler({ target: { name: 'img', value: file } });
  }

  return (
    <>
        <div className="loginAndRegisterBackground">
        <div className="overlay">
          <div className="backdrop" onClick={goBackHome}></div>
          <div className="modal2">
            <div className="onTop">
            <button className="btn close" onClick={goBackHome}>
                &times;
              </button>
            </div>
            <div className='dialogue p-2'>
                Create your warrior
            </div>
            <div className='separator'></div>
            <form onSubmit={submitHandler} className="form">
                
            <div className='statsDiv'>
                <div className='wrapperDiv1'>
                <div className='idk1'></div>
                  <label>
                    <span className="spanClass" htmlFor="name">Name:</span>
                    
                    <input className="stats" type="text" name="name" onChange={changeHandler} value={values.name} required />
                  </label>
                </div>
                <div className='wrapperDiv1'>
                <div className='idk1'></div>
                  <label>
                    <span className="spanClass" htmlFor="type">Type:</span>
                    
                    <input className="stats" type="text" name="type" onChange={changeHandler} value={values.type} required />
                  </label>
                </div>
                </div>
                
                <div className='wrapperDiv'>
                <div className='idk'></div>
                  <label>
                    <span className="spanClass " htmlFor="img">Image:</span>
                    <div className='inputImage'></div>
                    <input className="inputClass pt-3" type="file" name="img" onChange={fileChangeHandler} accept="image/*" required />
                  </label>
                </div>
                
                <div className='statsDiv2'>
                <div className='statsDiv'>
                <div className='wrapperDiv1'>
                <div className='idk1'></div>
                  <label>
                    <span className="spanClass" htmlFor="attack">Attack:</span>
                    
                    <input className="stats" type="text" name="attack" onChange={changeHandler} value={values.attack} required />
                  </label>
                </div>
                <div className='wrapperDiv1'>
                <div className='idk1'></div>
                  <label>
                    <span className="spanClass" htmlFor="defense">Defense:</span>
                    
                    <input className="stats" type="text" name="defense" onChange={changeHandler} value={values.defense} required />
                  </label>
                </div>
                </div>
                <div className='statsDiv'>
                <div className='wrapperDiv1'>
                <div className='idk1'></div>
                  <label>
                    <span className="spanClass" htmlFor="speed">Speed:</span>
                    
                    <input className="stats" type="text" name="speed" onChange={changeHandler} value={values.speed} required />
                  </label>
                </div>
                <div className='wrapperDiv1'>
                <div className='idk1'></div>
                  <label>
                    <span className="spanClass" htmlFor="intelligence">Intelligence:</span>
                    
                    <input className="stats" type="text" name="intelligence" onChange={changeHandler} value={values.intelligence} required />
                  </label>
                </div>
                </div>
                <div className='statsDiv'>
                <div className='wrapperDiv1'>
                <div className='idk1'></div>
                  <label>
                    <span className="spanClass" htmlFor="health">Health:</span>
                    
                    <input className="stats" type="text" name="health" onChange={changeHandler} value={values.health} required />
                  </label>
                </div>
                <div className='wrapperDiv1'>
                <div className='idk1'></div>
                  <label>
                    <span className="spanClass" htmlFor="element">Element:</span>
                    </label>
                <select
                  id="champion-element"
                  name="element"
                  autoComplete="element"
                  className="stats pt-0 red-600"
                  onChange={changeHandler}
                  value={optionsState}
                >
                  <option className='options' value="fire">Fire</option>
                  <option className='options' value="earth">Earth</option>
                  <option className='options' value="water">Water</option>
                  <option className='options' value="wind">Wind</option>
                </select>
                </div>
                </div>
                </div>
              <div className='downPart'>
              </div>
              <button type='submit' className='btnSubmit'>
                <div className='btnBackground'></div>
                <div className='btnBackgroundImage'></div>
                <div className='btnText'>
                    <span className='btnSpan'>Create</span>
                </div>
              </button>
            </form>
            
          </div>
        </div>
        </div>
            </>
  )
}
