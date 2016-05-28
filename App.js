import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = { data : [
      {id: 1, name: 'Simon Bailey'},
      {id: 2, name: 'Simona Bailey'},
      {id: 3, name: 'Simon Ailey'},
      {id: 4, name: 'Simone Iley'},
      {id: 5, name: 'Shimon Ley'},
      {id: 6, name: 'Smon Baile'},
      {id: 7, name: 'Simon Bailey'},
      {id: 8, name: 'Sion Baley'},
      {id: 9, name: 'Siman Biley'},
      {id: 10, name: 'Samon Bailey'},
      {id: 11, name: 'Simen Beiley'},
      ]
    }
  }
  render() {
    let rows = this.state.data.map( person => {
      return <PersonRow key={person.id} data={person} />
    })
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}
const PersonRow = props => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
    </tr>
}
export default App
