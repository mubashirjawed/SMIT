const Register = () => {
  return (
    <div className="p-10 bg-gray-400 flex flex-col">
      <h2>Register Users</h2>
      <br />
      <input type="text" placeholder=" Enter your name" />
      <br />
      <input type="number" placeholder=" Enter your Age" />
      <br />
      <button>Register</button>
    </div>
  );
};

export default Register;
