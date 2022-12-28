import React from 'react';
import { Link } from 'react-router-dom';
import VIPLogo from '/home/matthew/Desktop/coding/my-sites/kulaLodge/client/src/images/VIPLogo.webp';
import SyscoLogo from '/home/matthew/Desktop/coding/my-sites/kulaLodge/client/src/images/SyscoLogo.jpg';
import LHLogo from '/home/matthew/Desktop/coding/my-sites/kulaLodge/client/src/images/LHLogo.jpg';
import RimfireLogo from '/home/matthew/Desktop/coding/my-sites/kulaLodge/client/src/images/RimfireLogo.png';


const OrderingGuide = () => {

  const imgStyle = {width: '150px'}
  const btnStyle = {border: 'none', backgroundColor: 'white'}

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '50px'}}>
      <h2 style={{paddingTop: '50px'}}>Vendors:</h2>

      <div className='vip' style={{paddingTop: '100px'}}>
        <Link to='/OrderingGuide/VIP'>
            <button style={btnStyle}>
              <img style={imgStyle} src={VIPLogo} alt="VIP Logo"></img>
            </button>
        </Link>
      </div>

      <div className='sysco' style={{paddingTop: '100px'}}>
        <Link to='/OrderingGuide/Sysco'>
            <button style={btnStyle}>
              <img style={imgStyle} src={SyscoLogo} alt="Sysco Logo"></img>
            </button>
        </Link>
      </div>

      <div className='localHarvest' style={{paddingTop: '100px'}}>
        <Link to='/OrderingGuide/LocalHarvest'>
            <button style={btnStyle}>
              <img style={imgStyle} src={LHLogo} alt="Local Harvest Logo"></img>
              {/* ^ put image through a resizer to make slightly bigger to match */}
            </button>
        </Link>
      </div>

      <div className='rainbow' style={{paddingTop: '100px'}}>
        <Link to='/OrderingGuide/RainbowFarms'>
            <button style={btnStyle}>
              <h4>Rainbow Farms - Waipoli Greens</h4>
              {/* <img style={imgStyle} src={VIPLogo} alt="Rainbow Farms Logo"></img> */}
            </button>
        </Link>
      </div>

      <div className='rimfire' style={{paddingTop: '100px'}}>
        <Link to='/OrderingGuide/RimfireImports'>
            <button style={btnStyle}>
              <img style={imgStyle} src={RimfireLogo} alt="Rimfire Imports Logo"></img>
            </button>
        </Link>
      </div>


    </div>


  )
}

export default OrderingGuide;