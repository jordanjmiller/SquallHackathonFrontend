import React, {useState, useEffect} from 'react'

export default function Account() {
    const [isChecked, setIsChecked] = useState([true, true, true, true, true, true, true, true, true, true]);
    const [textToggle, setTextToggle] = useState('false')

    useEffect(() => {
        let allfalse = true;
        for(let i = 0; i < isChecked.length; i++){
            if (isChecked[i] === true){
                allfalse = false;
            }
        }
        console.log('allfalse: ', allfalse);
    }, [isChecked])

    const handleClick = (e) => {
        // console.log('click click');
        // console.log(e.target);
        
        setIsChecked(isChecked.map((value, index)=>{
            // console.log(index, Number(e.target.name));
            if (index === Number(e.target.name)){
                return !value;
            }
            else {
                return value;
            }
        }));
        // console.log(e.target.checked);
    }

    const handleSave = () => {
        console.log('handleSave');
    }

    return (
        <div className='accountContainer'>
            <div className='accountCard'>
                <div className='innerAccountCard'>
                    <h1>Hi, Graham!</h1>
                    <p>Customize your text alerts here</p>

                    <h3>Turn Texts On or Off</h3>
                    <div>
                        <p style={{width: '181px'}}>Enable Texts</p>
                        <span style={{marginRight: '10px'}}>Off</span>
                        <label className="switch" style={{width:'60px'}}>
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <span style={{marginLeft: '10px'}}>On</span>
                    </div>
                    
                    <h3 style={{marginTop: '0'}}>Choose your Alerts</h3>

                    <label> <input type="radio" name='0' value="option1" onClick={handleClick} checked={isChecked[0]} /> Extreme Cold </label>
                    <label> <input type="radio" name='1' value="option1" onClick={handleClick} checked={isChecked[1]} /> Extreme Hot </label>
                    <label> <input type="radio" name='2' value="option1" onClick={handleClick} checked={isChecked[2]} /> High Winds </label>
                    <label> <input type="radio" name='3' value="option1" onClick={handleClick} checked={isChecked[3]} /> Heavy Rain </label>
                    <label> <input type="radio" name='4' value="option1" onClick={handleClick} checked={isChecked[4]} /> Lightning </label>
                    <label> <input type="radio" name='5' value="option1" onClick={handleClick} checked={isChecked[5]} /> Hail </label>
                    <label> <input type="radio" name='6' value="option1" onClick={handleClick} checked={isChecked[6]} /> Flash Flooding </label>
                    <label> <input type="radio" name='7' value="option1" onClick={handleClick} checked={isChecked[7]} /> Snow Showers </label>
                    <label> <input type="radio" name='8' value="option1" onClick={handleClick} checked={isChecked[8]} /> Blizzard </label>
                    <label style={{margin: '0'}}> <input type="radio" name='9' value="option1" onClick={handleClick} checked={isChecked[9]} /> Tornado </label>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    )
}
