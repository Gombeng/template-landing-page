
import { ImgHome } from '../assets';
import { Button, ButtonOutline } from './../components';
const Home = () => {
  return (
    <div id='home' className='pages container-fluid d-flex justify-content-between text-light px-sm-5 text-center text-lg-start' style={{ backgroundColor: '#515A79' }}>

      <div className="left align-self-center container">
        <h1 className="mb-3">Great Landing Page For
          <br />
          <span className="fw-bold" style={{ color: '#00C6BF' }}>
            Your Business.
          </span>
        </h1>
        <p className="mx-auto mb-4 mx-lg-0" style={{ maxWidth: "30rem" }}>
          Welcome to our SaaS platform, where you can take your business to the next level with powerful tools and features designed to streamline your operations and boost your bottom line.
        </p>
        {/* <div className="text-center text-lg-start"> */}
        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start ">
          <Button label='Order Now'/>
          <span className='p-2' />
          <ButtonOutline bg='transparent' />
        </div>
      </div>

      <div className="right align-self-end d-none d-lg-block">
        <img width={'100%'} src={ImgHome} alt="testing" />
      </div>

    </div>
  )
}

export default Home