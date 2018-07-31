class MyApp extends React.Component {
  render() {
    return (
      <div onClick={()=>{umdLibrary.b();umdLibrary.t()}}>
        <h1>Hello from React {React.version}</h1>
        <h2>Test</h2>
        <umdLibrary.TextInput type="text" label="Email Address" value="name@example.com" onChange={x=>console.log(x)} onClick={x=>console.log(x)} />
      </div>
    );
  }
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
)
