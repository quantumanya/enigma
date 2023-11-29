const contentDictionary = {
        what: 'Whatttt',
        when: 'wheeeen',
        who: 'whoooo',
        why: 'whyyy'
    }


  const [text, setText] = useState('Default Text');

    {/* INFO MENU ITEMS */}
      <div className='leftLeftContentDivStyle' style={{ opacity: dimContent ? 0.3 : 1 }}>
              <a href="#" className='buttonStyle'  onClick={() => changeText('what')}>What</a><br/>
              <a href="#" className='buttonStyle'  onClick={() => changeText('when')}>When</a><br/>
              <a href="#" className='buttonStyle'  onClick={() => changeText('who')}>Who</a><br/>
              <a href="#" className='buttonStyle'  onClick={() => changeText('why')}>Why</a><br/>
              <a href="#" className='buttonStyle'  onClick={() => changeText('why')}>Where</a><br/>
              <a href="#" className='buttonStyle'  onClick={() => changeText('why')}>Whom</a><br/>
       </div>

         // Function to change the text
  const changeText = (newText) => {
    setText(contentDictionary[newText]);
  };

  {/* Content Div: LEFT */}
            <div className='leftContentDivStyle' style={{ opacity: dimContent ? 0.3 : 1 }}>
                    {/* Div displaying the text */}
                    <div>{text}</div>  
            </div>
