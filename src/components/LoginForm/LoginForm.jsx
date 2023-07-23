import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

// import React from 'react';
// import ReactDOM from 'react-dom';

// const formStyle = {
//   margin: '0 auto',
//   padding: '10px',
//   border: '1px solid #c9c9c9',
//   borderRadius: '5px',
//   background: '#f7fdf8',
//   width: '220px',
// };

// const labelStyle = {
//   margin: '10px 0 5px 0',
//   fontFamily: 'Arial, Helvetica, sans-serif',
//   fontSize: '15px',
// };

// const inputStyle = {
//   margin: '5px 0 10px 0',
//   border: '1px solid #bfbfbf',
//   borderRadius: '3px',
//   padding: '5px',
//   boxSizing: 'border-box',
//   width: '100%',
// };

// const submitStyle = {
//   margin: '10px 0 0 0',
//   padding: '7px 10px',
//   border: '1px solid #efffff',
//   borderRadius: '3px',
//   background: '#3085d6',
//   width: '100%',
//   fontSize: '15px',
//   color: 'white',
//   display: 'block',
// };

// const Field = React.forwardRef(({ label, type }, ref) => {
//   return (
//     <div>
//       <label style={labelStyle}>{label}</label>
//       <input ref={ref} type={type} style={inputStyle} />
//     </div>
//   );
// });

// const Form = ({ onSubmit }) => {
//   const usernameRef = React.useRef();
//   const passwordRef = React.useRef();
//   const handleSubmit = e => {
//     e.preventDefault();
//     const data = {
//       username: usernameRef.current.value,
//       password: passwordRef.current.value,
//     };
//     onSubmit(data);
//   };
//   return (
//     <form style={formStyle} onSubmit={handleSubmit}>
//       <Field ref={usernameRef} label="Nazwa użytkownika:" type="text" />
//       <Field ref={passwordRef} label="Hasło:" type="password" />
//       <div>
//         <button style={submitStyle} type="submit">
//           Zaloguj
//         </button>
//       </div>
//     </form>
//   );
// };

// // Przykład:

// const App = () => {
//   const handleSubmit = data => {
//     const json = JSON.stringify(data, null, 4);
//     console.clear();
//     console.log(json);
//   };
//   return (
//     <div>
//       <Form onSubmit={handleSubmit} />
//     </div>
//   );
// };

// const root = document.querySelector('#root');
// ReactDOM.render(<App />, root);
