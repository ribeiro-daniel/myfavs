import React, {useState, FormEvent} from 'react';
import { api } from '../../services/api';
import asideImg from '../../assets/aside.svg';
import '../../styles/home.scss'
import { useHistory } from 'react-router';


interface UserCredentials {
    username?: string,
    password?: string,
}

export default function Home(){
    const [credentials, setCredentials] = useState<UserCredentials | null>({
        username: '',
        password: ''
    });
    const history = useHistory();

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();
        
        if(credentials?.username?.trim() === '' ||credentials?.username?.trim() === undefined || credentials?.password?.trim() === '') {
            return;
        }
        
        const result = await api.post('/users/validate', {
            username: credentials.username,
            password: credentials.password
        });

        const { data } = result;

        if(data === "") {
            return;
        }

        alert('Seja bem vindo de volta, ' + credentials.username);

        history.push('/app');
    }

    function handleFillCredentialsFields(event: any) {
        const {name, value} = event.target;

        setCredentials({
            ...credentials,
            [name]: value,
        })
    }

    return <div id="page-home">
        <aside>
            <img src={asideImg} alt="dancing illustration"/>
            <p><strong>Listen, save and share music everywhere</strong></p>
        </aside>

        <main>
            <div className="register-block">
                <h2>Sign in</h2>
                <form onSubmit={handleSignIn}>
                    <input 
                    name="username"
                    type="text"
                    placeholder="username / e-mail"
                    onChange={handleFillCredentialsFields}
                    value={credentials?.username}
                    />
                    <input 
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={handleFillCredentialsFields}
                    value={credentials?.password}
                    />
                    <button>Play!</button>
                </form>
            </div>
        </main>
    </div>
}