import Notice from'./component/Notice';
import noticeDb from './data/notice.json';
//notieceDb는 컴포넌트로 들어가는게 아니고 app.js로 받아야됨.

function App() {
  const noticejs = noticeDb;

  return (
    <div className="App">
      <Notice title={noticejs.title} 
              cls = {noticejs.cls}
              contents={noticejs.contents}>
      </Notice>
    </div>
  );
}

export default App;
