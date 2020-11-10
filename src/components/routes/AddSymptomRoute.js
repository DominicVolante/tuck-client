import React, {Component} from 'react';

class AddSymptomRoute extends Component{
    
    render(){
        return(
        <div className="register-form">
        <form>
          <h3>New Symptom</h3>
          <select name="rate" id="rate">
              <option className="hidden">Severity</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
          </select>
          <br/>
          <label for="email">Enter your symptom</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Fly-biting"
          />
          <label for="confirm-password">Description</label>
            <textarea></textarea>
            <button><a href="home.html">Submit</a></button>
        </form>
      </div>
        )
    }
}
export default AddSymptomRoute