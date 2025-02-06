import './App.css'



function Profile({height, border, text, width, color}) {
  return (
    <div className='title'>
      <h1>John Mark I. Salas</h1>
      <div className='box' style={{
        height: height,
        width: width,
        border: `3px solid ${border}`,
        backgroundColor: color,
        color: 'black',
      }}>
        {text}
      </div>
    </div>
  )
}

function App() {
  return (
    <section>
      <Profile  text={'CPEITEL'} border={'black'} color={'#ce93d8'} width={200} height={200}/>
    </section>
  );
}


export default App
