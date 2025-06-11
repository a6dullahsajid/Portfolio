import photo from '../assets/photo1.jpeg';
export default function Header() {
    return <header>
        <div className="logo"><img src={photo} alt="" /></div>
        <div className="heading">Portfolio</div>
    </header>   
}