
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <div className="container">
                <div className="extra">
                    <div className='header'>Task By <a id='link' href='https://wethedevelopers.com/' target='_blank' rel="noreferrer"><u>WeTheDeveloper</u></a></div>
                    <div className='header-below'>
                        TO MAKE LOGIN PAGE AND SIGNUP PAGE USING REACT JS
                    </div>
                    <div className='text-center'>
                        <a href='/login'><button className='btn'>Login</button></a>
                        <Link to='/signup'>
                            <button className='btn'>Sign up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home