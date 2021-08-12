import React, { FormEvent } from 'react'
import { useState } from 'react'
import logoWhiteImg from '../../assets/logo-white.svg'
import '../../styles/main.scss'

export default function Main() {
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function handleSearch(event: FormEvent) {
        event.preventDefault();

        if(search === "") {
            return;
        }

        alert('Artist name: ' + search)
    }

    return <div id="main-page">
        <header className="header">
            <img src={logoWhiteImg} alt="logo" width="128px" height="64px" />

            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="Search" 
                    name="search"
                    onChange={(event) => {setSearch(event?.target.value)}}
                    value={search}
                />
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="10" cy="10" r="7"></circle>
                    <line x1="21" y1="21" x2="15" y2="15"></line>
                </svg>

                </button>
            </form>
        </header>

        <main>
            <h2>Here it's</h2>
            <div className="content">
                <div className="result-card">
                    <img src="https://source.unsplash.com/daily" 
                        alt="result card" 
                        width="300px"
                        height="250px"
                        />

                    <div>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                            </svg>
                        </button>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-share" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="6" r="3"></circle>
                                <circle cx="18" cy="18" r="3"></circle>
                                <line x1="8.7" y1="10.7" x2="15.3" y2="7.3"></line>
                                <line x1="8.7" y1="13.3" x2="15.3" y2="16.7"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
}