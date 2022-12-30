import naviDB from '../data/navi.json'
import logo from '../img/log.svg'

const Hd = (props) => {
    const naviJson = naviDB.naviDB; //Arr

  return (
    <div className="App">
      {/* header#hd.fixed-top>.container-md.row>h1+ul#gnb>li*4>a*/}
      <header id="hd" className={"fixed-top border-bottom" + props.bgColor}>
        <div className="container-fluid px-3 d-flex justify-content-between align-items-center">
          <h1 className='col-2 mx-auto mx-md-0'>
            <a href='#top'><img src={logo} alt=''/></a>
          </h1>
          {/* d-none d-md-flex 작은사이즈때 안나오고 768사이즈에 나타남 */}
          <ul id="gnb" className="font50 fw600 mb-0 d-none d-md-flex">
            {
                naviJson.map( (value, index) => {
                    return(
                        <li className='px-1'>
                            <a href={value.naviLink} className={ index > 0 ? "" : "activeColor"} > {value.naviTitle}</a>
                        </li>
                    )
                })
            }
          </ul>
          <a href="https://github.com/jihyeonnnn" target="_blank" className="git btn bgActive text-white">Git</a>
        </div>
      </header>
    </div>
  )
}

export default Hd;