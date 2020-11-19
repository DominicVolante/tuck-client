import { React, Component } from "react";
import DefaultContext from "./context/DefaultContext";
import { withRouter } from "react-router-dom";

class AddSymptomForm extends Component {
  static contextType = DefaultContext;

  handleSubmit = (form) => {
      const f = new FormData(form);
      const data = {
        severity: f.get("severity"),
        name: f.get("name"),
        description: f.get("description")
      }
      this.addSymptom(data)
  }

  addSymptom = (data) => {
      fetch(`${this.context.url}/symptoms`, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(r => {
          this.context.updateStore();
          this.props.history.push('/');
      })
      .catch(e => {
          console.error(e)
          throw new Error("Error adding symptom")
      });
  }


  render() {
    return (
      <div className="register-form">
        <form
            onSubmit={(e)=>{
                e.preventDefault();
                this.handleSubmit(e.target);
            }}
        >
          <h3>New Symptom</h3>
          <input type="date"></input>
          <input type="time"></input>
          <select name="severity" id="severity">
            <option className="hidden" required>Severity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <label htmlFor="name">Enter your symptom</label>
          <input type="text" name="name" id="name" placeholder="Fly-biting" required />
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" required></textarea>
          <button type="submit">Tuck it</button>
          <button type="reset" onClick={() => this.props.history.push('/')}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddSymptomForm);
