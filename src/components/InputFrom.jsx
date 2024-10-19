import { useState } from "react";
import PropTypes from 'prop-types'


const InputFrom = ({mode, showAlert}) => {

    let [text, setText] = useState("")
    const handleOnClick = (event) => {
        setText(event.target.value)
    }
    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        showAlert("Change To The Upper Case", "success")
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        showAlert("Change To The Lower Case", "success")
    }
    const handleClearBtn = () => {
        let newText = "";
        setText(newText);
        showAlert("All Text Has Cleared!", "success")
    }

    return <div className={`container py-4 px-4 bg-${mode==='light'? "ligth":"dark"}`}>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${mode==='light'? "dark":"light"}`}>Here Enter Text Bellow.</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnClick}> </textarea>
            <div className="buttoms mt-2">
                <button className="btn btn-primary mx-1" type="button" onClick={handleUpperClick}>Convert To Upper Case</button>
                <button className="btn btn-primary mx-1" type="button" onClick={handleLowerClick}>Convert To Lower Case</button>
                <button className="btn btn-primary mx-1" type="button" onClick={handleClearBtn}>Clear Text</button>
            </div>
            <div className={`mt-3 text-${mode==='light'? "dark":"light"}`}>
                <p>{text.length === 0 ? "0": text.split(" ").length} Words And {text.length} Charectors</p>
                <p>{text.length === 0 ? "0": 0.008 * text.split(" ").length} w/s Minutes Read This Paragraph</p>
                <div className="priview">
                    <h4>Priview</h4>
                    {text}
                </div>
            </div>
        </div>
    </div>

}
InputFrom.propTypes = {
    mode: PropTypes.string,
    showAlert: PropTypes.func,
}

export default InputFrom;