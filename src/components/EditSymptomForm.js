import { React, Component } from "react";
import DefaultContext from "./context/DefaultContext";
import { withRouter } from "react-router-dom";

class EditSymptomForm extends Component {
  static contextType = DefaultContext;

  handleSubmit = (form) => {
      const f = new FormData(form);
      const data = {
        severity: f.get("severity"),
        name: f.get("name"),
        description: f.get("description")
      }
      this.editSymptom(data)
  }

  editSymptom = (data) => {
      fetch(`${this.context.url}/symptoms/${this.props.id}`, {
          method: 'PATCH',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(r => {
          this.context.updateStore();
        //   this.props.history.push('/');
      })
      .catch(e => {
          throw new Error("Error updating symptom")
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
          <select name="severity" id="severity" value={this.props.severity}>
            <option className="hidden" required>Severity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <label htmlFor="name">Edit your symptom</label>
          <input type="text" name="name" id="name" value={this.props.name} required />
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" value={this.props.description} required></textarea>
          <button type="submit">Tuck it</button>
          <button>Cancel</button>
        </form>
      </div>
    );
  }
}
export default EditSymptomForm;
//export default withRouter(EditSymptomForm);