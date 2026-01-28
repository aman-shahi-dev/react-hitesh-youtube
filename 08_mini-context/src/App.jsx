import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <div className="bg-black min-h-screen text-white p-2 flex flex-col items-center gap-10">
        <h1 className="text-center text-xl md:text-4xl mt-6">Mini Context Project</h1>
        <Login />
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App;
