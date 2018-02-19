import React from 'react';



class TodoForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          placeholder="Add A Todo"
          required
          value={this.state.name}
          onChange={this.handleChange}

        />
        <table>

            <tbody>
            <li>{}</li>
              <button>Delete</button>

              <button>Completed</button>

            </tbody>

        </table>

      </form>
    )
  }

  // render() {
  //   return (
  //     <table className="highlight">
  //       <tbody>
  //         <tr>
  //           <td>Alvin</td>
  //           <td>Eclair</td>
  //           <td>$0.87</td>
  //         </tr>
  //
  //     </table>
  //   )
  // }

}

export default TodoForm;
