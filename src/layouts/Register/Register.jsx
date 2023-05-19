import { Link, useLocation, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import lotti from '../../assets/lotti/lotti.json'
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Register = () => {

  const { createUser ,googleSignIn} = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('')
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    if(password.length <6){
      setError('passoword should be at leastn 6 characters')
      return
    }
    if(!email.trim() || !password.trim()){
      setError('please enter valid email and password')
      return
    }
    const createdUser = {
      name, email, password, photo
    };

    createUser(email, password)
      .then(result => {
        navigate(from,{replace: true})
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess('User created successfully!');
      })
      .catch(error => {
        setError(error.message);
      });
  };
  const handleGoogleSignIn =()=>{
    googleSignIn()
    .then(result=>{
      navigate(from,{replace: true})
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error=>{
      setError(error.message)
    })
  }

  return (
    <div className="md:mt-5 md:w-2/3 mx-auto p-10 rounded-lg">
  <div className="md:grid grid-cols-2 gap-2  rounded-lg">
    <div className="md:mt-10 h-[600px] w-[400px] text-center lg:text-left bg-base-100 md:p-10 rounded-3xl mx-auto mb-5">
      <h1 className="text-3xl font-bold text-[#0C5AE5] text-center">Please Sign Up</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="mt-14 mx-auto">
        <Player autoplay loop src={lotti} style={{ height: "300px", width: "300px" }} />
      </div>
    </div>
    <form onSubmit={handleSubmit} className="h-[600px] w-[400px] rounded-3xl p-10 md:mt-10 max-w-sm shadow-2xl bg-base-100 mx-auto lg:ml-6">
      <div className="">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photo" placeholder="Enter your photo URL" className="input input-bordered" required />
        </div>
        <div>
          <span className="text-blue-500 font-bold mt-5">
            Already have an account? <Link to="/login">Please Login</Link>
          </span>
        </div>
        <div className="form-control mt-6">
          <input className="bg-[#0C5AE5] p-3 font-bold text-white text-lg rounded-lg" type="submit" value="Please sign up" />
        </div>
        <div>
          <button className="bg-[#0C5AE5] p-3 font-bold w-full text-white text-lg rounded-lg mt-3 flex items-center" onClick={handleGoogleSignIn}>
            <span className="mx-5"><FaGoogle></FaGoogle></span> Sign with Google
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

  );
};

export default Register;
