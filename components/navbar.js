import Link from 'next/link'
import Image from 'next/image'




export default function navbar() {
    return (
            
            <div className='main'>
                <Image className='logo' src="/demo-logo.png" alt="Vercel Logo" width={150} height={75} />
                <nav>
                    <ul className ="nav__links">
                        <li className="nav__CSS"><Link href="./"><a href="">Home</a></Link></li>
                        <li className="nav__CSS"><Link href="./demo"><a href="">Demo</a></Link></li>
                        <li className="nav__CSS"><Link href={`https://www.google.com/`}><a href="https://www.google.com/"> Help !</a></Link></li>
                        <li className="nav__CSS"><Link href="./login"><a href="">Login</a></Link></li>
                        
                    </ul>
                </nav>
                <a className="cta" href="#"><button className="nav__CSS"> Contact</button></a>
            </div>
        

    )
}