import React,{useState} from 'react'
import { Button, Image } from 'react-bootstrap';
import Logo from "../Assets/logo_soluxe.png";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import "./Login.css";
import Navigationbar from '../Components/Navigationbar';
import { useNavigate } from 'react-router-dom';
const  Login=()=>{
    const [formData, setFormData] = useState({
        password: '',
        email: '',
      });
      const [error, setError] = useState(null);
      const navigate = useNavigate();
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        loging(formData);
      };

      const loging = (data) => {
        Axios.post('http://localhost:3001/api/login', data)
          .then((response) => {
            const { token, email } = response.data;
            console.log(`Login: ${token}`);
    
            if (token) {
              localStorage.setItem('authToken', token);
              setError(null);
              navigate('/');
            } else {
              setError('Login failed: no token received');
            }
          })
          .catch((error) => {
            if (error.response && error.response.status === 400) {
              setError(error.response.data.error);
            } else {
              setError('An unexpected error occurred');
            }
          });
      };    

  return (
    <div>
        <Navigationbar/>
        <div className='log_in'>
            <Image className='logo' src={Logo}/>
            <h1 className='log_in_header'>LOGIN</h1>

            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="form_one">
                <div className='input_fields'>
                    <label>Email</label>
                    <label>Password</label>
                </div>

                <div className='input_fields'>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />                    
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />                
            </div>
            </div>
                

                <Button className="login_button" type='submit' >Login</Button>
            </form>
            <div className='bottom_buttons'>
                <Button className="login_button2">Forgot Password</Button>
                <Button className="login_button2"><Link to="/signup">No Account? Sign Up</Link></Button>
            </div>
        </div>
      
    </div>
  )
}

export default Login;

