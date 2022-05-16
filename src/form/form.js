import { useForm } from "../hooks/useForm";


const defaultFormValue = {
  name: "Foo",
  email: "foo@bar.baz",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
};


export const Form = () => {
  const { value, onChange, onSubmit, buttonState } = useForm(defaultFormValue);

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1>Contact</h1>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={value.name}
          onChange={onChange("name")}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={value.email}
          onChange={onChange("email")}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">message</label>
        <textarea
          id="message"
          name="message"
          value={value.message}
          onChange={onChange("message")}
        ></textarea>
      </div>

      <button type="submit" className="button" disabled={!buttonState}>
        Submit
      </button>
    </form>
  );
};
