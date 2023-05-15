import {useState} from 'react';
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import LoginForm from "../../Components/LogInForm/LogInForm";
import './AuthPage.css';
import ParticleBackground from '../../Components/Particles/Particles';

export default function AuthPage({setUser}) {
    const [button, setButton] = useState(true);

    function handleToggle() {
        setButton(!button);
    }

    return (
        <div className="auth-container">
            <ParticleBackground />
            <h1>Morty's Multiverse</h1>
            <img src="https://i.vimeocdn.com/video/714420464-f196a6e7c9e848632ed8d433cfd4b5ec973eadc122b85900d76a04211a3544a2-d" alt="morty-logo"/>
            { button ?
                <>
                    <button onClick={handleToggle}>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%" />
                        </svg>
                        Press to Login
                    </button>
                    <SignUpForm setUser={setUser}/>
                </>
            :    
                <>
                    <button onClick={handleToggle}>
                        <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%" />
                        </svg>
                        Press to SignUp
                    </button>
                    <LoginForm setUser={setUser}/>
                </>
            }
        </div>
    )
}