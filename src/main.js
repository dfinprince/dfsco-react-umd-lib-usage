import React from 'react'
import ReactDOM from 'react-dom'
import { TextInput } from 'dfsco-react-umd-lib'

class MyApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from React {React.version}</h1>
        <h2>Test</h2>
        <TextInput type="text"
          label="Email Address"
          value="name@example.com"
          onChange={x => console.log(x)}
          onClick={x => console.log(x)} />
      </div>
    );
  }
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
)


// ReactDOM.render(
//   <MyApp />,
//   document.body
// )
