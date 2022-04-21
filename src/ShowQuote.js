import React from 'react';

const ShowQuote = (props) => {
  

  return (
  <div>

<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>
                <img src="https://th.bing.com/th/id/R.7bbf0140498129252d5d884a4c66820b?rik=OHo4EFdeLTdHUA&riu=http%3a%2f%2fstrefatradziku.pl%2fwp-content%2fuploads%2f2014%2f06%2fznaki-zapytania.jpg&ehk=Ko0D%2fb7GV4kOi9PVCcwzwzmlzZSDPq9JNlVxTJwVtSA%3d&risl=&pid=ImgRaw&r=0" alt="display image" />
            </div>
  <div>{props.quote}</div>
  <div>{props.owner}</div>
  </div>)
};

export default ShowQuote;
