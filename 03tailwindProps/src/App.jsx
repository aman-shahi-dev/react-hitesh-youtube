import Card from './components/Card'

function App() {

  let myObj = {
    username: 'Aman',
    age: 22,
  }

  let newArr = [1,2,3,4]

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col gap-10 items-center justify-center p-4">
      <h1 className="text-4xl">Tailwind and Props</h1>
      <div className="flex gap-10 md:flex-row flex-col">
        <Card
          username="chaiaurcode"
          someObject={myObj}
          someArray={newArr}
          price="$12"
        />
        <Card username="thebinarycoder" price="$20" />
        <Card username="john snow"  />
      </div>
    </div>
  );
}

export default App
