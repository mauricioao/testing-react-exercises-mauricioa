import * as React from "react";
 
const initialValues = { username: "", password: "" };
 
function Login({ onFormSubmit }) {
  const [formData, setFormData] = React.useState(initialValues);
 
  function handleSubmit(e) {
    e.preventDefault();
    onFormSubmit(formData);
  }
 
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
 
export default Login;