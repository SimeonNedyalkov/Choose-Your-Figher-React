import {useNavigate} from 'react-router-dom';
import useForm from '../../hooks/useForm';
import fighterData from '../../sevices/fighterAPI';
import { useState } from 'react';

const initialValues = {
  name: '',
  img: '',
  type: '',
  element: 'Fire',
  stats: {
    attack: '',
    defense: '',
    speed: '',
    intelligence: '',
    health: ''
  },
  description:'',
  wins:0,
  losses:0
};

export default function CreateChampion({goBackHome}) {
  const navigation = useNavigate();
  const [errors,setErrors] = useState({})

  async function createHandler(values) {
    const { stats } = values;

    const updatedStats = {
      attack: Number(stats.attack),
      defense: Number(stats.defense),
      health: Number(stats.health),
      intelligence: Number(stats.intelligence),
      speed: Number(stats.speed),
    };

    const updatedValues = {
      ...values,
      stats: updatedStats,
    };

    try {
      if(updatedValues.name.length < 3){
        setErrors({name: 'Warning: Name should be atleast 3 characters long'})
        return
      }
      if(updatedValues.type.length < 3){
        setErrors({type: 'Warning: Type should be atleast 3 characters long'})
        return
      }
      if(updatedValues.description.length < 200){
          setErrors({description: 'Warning: Description should be atleast 200 characters long'})
          return
      }
      const combinedStats = updatedStats.attack + updatedStats.defense + updatedStats.health + updatedStats.intelligence + updatedStats.speed
      if(combinedStats > 350){
        setErrors({combinedStats: 'Warning: The total value of stats should be equal to 350 or lower!'})
        return
    }
      const {_id: fighterId} = await fighterData.createFighter(updatedValues);
      navigation(`/armory/champions/${fighterId}`);
    } catch (error) {
      console.log(error.message);
    }
  }
  const {values, changeHandler, submitHandler} = useForm(initialValues, createHandler);

  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    changeHandler({target: {name: 'img', value: `/images/fighters-images/${file.name}`}});
  };

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
            <div className="dialogue p-2">
              Create your warrior
            </div>
            <div className="separator"></div>
            <form onSubmit={submitHandler} className="form">
              <div className="statsDiv">
                <div className="wrapperDiv1">
                  <div className="idk1"></div>
                  <label>
                    <span className="spanClass" htmlFor="name">Name:</span>
                    <input className="stats" type="text" name="name" onChange={changeHandler} value={values.name} required />
                  </label>
                </div>
                <div className="wrapperDiv1">
                  <div className="idk1"></div>
                  <label>
                    <span className="spanClass" htmlFor="description">Description:</span>
                    <input className="stats" type="text" name="description" onChange={changeHandler} value={values.description} required />
                  </label>
                </div>
                <div className="wrapperDiv1">
                  <div className="idk1"></div>
                  <label>
                    <span className="spanClass" htmlFor="type">Type:</span>
                    <input className="stats" type="text" name="type" onChange={changeHandler} value={values.type} required />
                  </label>
                </div>
              </div>
              <div className="wrapperDiv">
                <div className="idk"></div>
                <label>
                  <span className="spanClass" htmlFor="img">Image:</span>
                  <div className="inputImage"></div>
                  <input className="inputClass pt-3" type="file" name="img" onChange={fileChangeHandler} accept="image/*" required />
                </label>
              </div>
              <div className="statsDiv2">
                <div className="statsDiv">
                  <div className="wrapperDiv1">
                    <div className="idk1"></div>
                    <label>
                      <span className="spanClass" htmlFor="attack">Attack:</span>
                      <input className="stats" type="text" name="stats.attack" onChange={changeHandler} value={values.stats.attack} required />
                    </label>
                  </div>
                  <div className="wrapperDiv1">
                    <div className="idk1"></div>
                    <label>
                      <span className="spanClass" htmlFor="defense">Defense:</span>
                      <input className="stats" type="text" name="stats.defense" onChange={changeHandler} value={values.stats.defense} required />
                    </label>
                  </div>
                </div>
                <div className="statsDiv">
                  <div className="wrapperDiv1">
                    <div className="idk1"></div>
                    <label>
                      <span className="spanClass" htmlFor="speed">Speed:</span>
                      <input className="stats" type="text" name="stats.speed" onChange={changeHandler} value={values.stats.speed} required />
                    </label>
                  </div>
                  <div className="wrapperDiv1">
                    <div className="idk1"></div>
                    <label>
                      <span className="spanClass" htmlFor="intelligence">Intelligence:</span>
                      <input className="stats" type="text" name="stats.intelligence" onChange={changeHandler} value={values.stats.intelligence} required />
                    </label>
                  </div>
                </div>
                <div className="statsDiv">
                  <div className="wrapperDiv1">
                    <div className="idk1"></div>
                    <label>
                      <span className="spanClass" htmlFor="health">Health:</span>
                      <input className="stats" type="text" name="stats.health" onChange={changeHandler} value={values.stats.health} required />
                    </label>
                  </div>
                  <div className="wrapperDiv1">
                    <div className="idk1"></div>
                    <label>
                      <span className="spanClass" htmlFor="element">Element:</span>
                      <select
                        id="champion-element"
                        name="element"
                        autoComplete="element"
                        className="stats pt-3 red-600"
                        onChange={changeHandler}
                        value={values.element}
                      >
                        <option className="options" value="Fire">Fire</option>
                        <option className="options" value="Earth">Earth</option>
                        <option className="options" value="Water">Water</option>
                        <option className="options" value="Wind">Wind</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>
              <div className="downPart"></div>
              <button type="submit" className="btnSubmit">
                <div className="btnBackground"></div>
                <div className="btnBackgroundImage"></div>
                <div className="btnText">
                  <span className="btnSpan">Create</span>
                </div>
                {errors.name && <p className="error2">{errors.name}</p>}
                {errors.type && <p className="error2">{errors.type}</p>}
                {errors.description && <p className="error2">{errors.description}</p>}
                {errors.combinedStats && <p className="error2">{errors.combinedStats}</p>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
