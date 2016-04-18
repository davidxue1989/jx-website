import React from 'react';

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <div style={{backgroundColor:'clear', 
          position:'absolute', top:0, width:'100%', height:'100%', 
          backgroundImage:'url(http://cdn1.editmysite.com/uploads/6/1/1/2/61127083/background-images/2077511424.jpg',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'}}>
        </div>
        <div style={{position:'absolute', top:'50%', left:'10%', maxWidth:'80%'}}>
          <div style={{backgroundColor:'black', padding:10}}>
            <h1 style={{color:'#f3f3f3', fontSize:'3em', fontFamily: 'Maven Pro, sans-serif', fontWeight: 900, display:'inline', marginRight:30}}>
              DR. JASON XUE
            </h1>
            <p style={{color:'#f3f3f3', fontSize:'1em', fontFamily: 'Maven Pro, sans-serif', display:'inline'}}>
                  B.SC.(HONS.)., D.C.
            </p>
          </div>
          <div style={{height:20}}></div>
          <div style={{backgroundColor:'black', padding:10}}>
            <p style={{color:'#fa6804', fontSize:'1.5em', fontFamily: 'Maven Pro, sans-serif', fontWeight: 900, margin:0}}>
              <i>HELPING YOU ACHIEVE YOUR FUNCTIONAL GOALS</i>
            </p>
          </div>
        </div>
      </div>
    )
  }
});

export default Home