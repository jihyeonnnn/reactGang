
function Notice(name) {
    //xml은 태그 짝이 맞아야됨 꼭
    //부모태그가 하나
    //컴포넌트의 첫번째짜리(첫번째인자)는 컴포넌트 옵션의 값을 가져오겠다는것(props)
    //컴포넌트함수는 손오공, 컴포넌트는 손오공분신 (컴포넌트함수가 바뀌면 그 해당 컴포넌트도 다 바뀜)
    return(
      <>
        <h2>{name.title}</h2>
        <p>{name.contents.length}건의 게시글이 있습니다.</p>
        {/* ul>li*5 */}
        <ul className={`${name.cls[0]} ${name.cls[1]}` }>
          {
            name.contents.map((item, index) => {
              //map메서드는 정렬객체(props.contents)를 선택자로 한다. 
              //변수만 쓰는게 아니라 태그자체를 return해서 return을 꼭 붙여줘야됨.
              return <li key={'list' + index}>
                        <p>{item.subject}</p>
                        <div>{item.contents}</div>
                    </li>;
            })
          }
        </ul>
      </>
    )
  }

  export default Notice;