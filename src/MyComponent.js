import React, { useEffect, useState }  from "react";
import ShowQuote from "./ShowQuote";
import LoadingComponent from "./LoadingComponent";
const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://quotes15.p.rapidapi.com/quotes/random/',
    headers: {
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      'X-RapidAPI-Key': 'aaa97c66d2msh42419edc94b9206p13ed86jsn60999aceb399'
    }
  };
  
  var quote = ''
  var owner = ''
  var IsLoading = false;

export default class MyComponent extends React.Component{

  
  
    onSearchSubmit = (term) => {
      IsLoading = true;
      this.setState({});
        axios.request(options).then(function (response) {
            console.log(response.data);
            quote = response.data.content;
            owner = response.data.originator.name;
            console.log(response.data);
        }).then((result) => {
          this.setState({});
          IsLoading = false;
        });
      };

    render(){
        console.log('render() method')
        return(
            <ul>
<div>     
            {
                (() => {
                    if(IsLoading) {
                            return (
                                <LoadingComponent />
                            )
                        } else {
                            return (

                              


                                <ul>

<div>

            </div>





                                <ShowQuote quote={quote} owner = {owner} />
                                  <div>
<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>
  <button onClick={
  this.onSearchSubmit
}>Wylosuj cytat</button>
</div>
                </div>
                                  </ul>
                            )
                        }
                })()  
              }  
        </div>  



            </ul>
        )
    }
}
//<img src="https://th.bing.com/th/id/R.7bbf0140498129252d5d884a4c66820b?rik=OHo4EFdeLTdHUA&riu=http%3a%2f%2fstrefatradziku.pl%2fwp-content%2fuploads%2f2014%2f06%2fznaki-zapytania.jpg&ehk=Ko0D%2fb7GV4kOi9PVCcwzwzmlzZSDPq9JNlVxTJwVtSA%3d&risl=&pid=ImgRaw&r=0" alt="display image" />