import React, {useState, FormEvent} from 'react';
import asideImg from '../../assets/aside.svg';
import '../../styles/home.scss'


interface UserCredentials {
    username?: string,
    password?: string,
}

export default function Home(){
    const [credentials, setCredentials] = useState<UserCredentials | null>({
        username: '',
        password: ''
    });

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();
        
        if(credentials?.username?.trim() === '' ||credentials?.username?.trim() === undefined || credentials?.password?.trim() === '') {
            return;
        }
        console.log(credentials.username)
        console.log(credentials.password)


        // Validar no banco de dados!
        alert('Redirecionando....')
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
                    <button>Entrar</button>
                </form>
            </div>
        </main>
    </div>
}