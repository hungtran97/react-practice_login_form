import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Login Form
        </p>
        <FormLogin />
      </header>
    </div>
  );
}

function FormLogin() {
  const [formState, setFormState] = React.useState({
    username: '',
    password: '',
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.currentTarget.checked,
    })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formState));
  }
  return (
    <>
      <form className="form-login" onSubmit={handleSubmit}>
        <label className="label">
          <div> Username: </div>
          <input
            className="text-input form-login__username"
            name="username"
            type="text"
            value={formState.username}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          <div> Password: </div>
          <input
            className="text-input form-login__password"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            className="form-login__remember"
            name="remember"
            type="checkbox"
            checked={formState.remember}
            onChange={handleChecked}
          />
          remember me?
        </label>

        <input className="form-login__submit" type="submit" />
      </form>
    </>
  )
}

export default App;
