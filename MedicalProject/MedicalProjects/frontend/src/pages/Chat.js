import React,{Component} from 'react'
import Base from '../Components/Base';

export class Chat extends Component{
  componentDidMount(){
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"2965ca7df88d3553578a8659cc85f52fb","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }
  render(){
    return (
        <Base>
        <div>
            ChatBot
        </div>
        </Base>
    )
  }
}

