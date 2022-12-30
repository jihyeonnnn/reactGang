
//notieceDb는 컴포넌트로 들어가는게 아니고 app.js로 받아야됨.
import Hd from './component/Header';
import Work from './component/work';
function App() {

  return (
    <div className="App">
      <Hd bgColor='bg-white'></Hd>
      <div id="portfolio">
        <h2 className='mt-5 pt-5 text-center'>나의 작품</h2>
        <Work contentId="react" title="나의 피땀"></Work>
        <Work contentId="ec" title="나의 피땀"></Work>
      </div>
    </div>
  );
}

export default App;
