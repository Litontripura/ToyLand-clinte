import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import lotti from '../../assets/lotti/lotti.json'
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    const createdUser = {
      name, email, password, photo
    };

    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess('User created successfully!');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="md:mt-5 md:w-2/3 mx-auto p-10 rounded-lg">
      <div className="md:grid grid-cols-2 gap-2 shadow-xl rounded-lg">
        <div className="md:mt-5 h-[500px] w-[380px] text-center lg:text-left bg-base-100 md:p-10 rounded-3xl mx-auto mb-5">
          <h1 className="text-3xl font-bold text-[#0C5AE5] text-center">Please Sign Up</h1>
          <div className="mt-14 mx-auto">
            <Player
              autoplay
              loop
              src={lotti}
              style={{ height: "300px", width: "300px" }}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="h-[500px] w-[380px] rounded-3xl p-10 md:mt-5 max-w-sm shadow-2xl bg-base-100 mx-auto">
          <div className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <span>
                Already have an account? <Link to="/login">Please Login</Link>
              </span>
            </div>
            <div className="form-control mt-6">
              <input className="bg-[#0C5AE5] p-3 font-bold text-white text-lg rounded-lg" type="submit" value="Please sign up" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
