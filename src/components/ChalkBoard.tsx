import WoodenFrame from '../assets/WoodenFrame.jpg';
import MainMenu from '../pages/Home/MainMenu';

export default function ChalkBoard() {
  return (
    <div className='chalk-container'>
        <div className='wooden-frame' style={{backgroundImage:`url(${WoodenFrame})`,backgroundRepeat:"no-repeat"}}>
            <div className='chalkboard'>
                <MainMenu />
            </div>
        </div>
    </div>
  )
}
