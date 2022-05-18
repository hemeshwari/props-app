import React from 'react';
import reactDom from 'react-dom';
import Card from './Card';
import card from './App.css'
import movieData from './movieData';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    // console.log(movieData[0].title)
    return <>
        <div className='text-center '><h1>Top 4 Horror Movies in Mx-Player</h1></div>
        <hr />
        <div className='row'>
                {movieData.map(function mxCard(val){
                    return (
                        <div className='col-sm-6 col-md-4 col-lg-3 '>
                            <Card
                                imgsrc={val.imgsrc}
                                title={val.title}
                                description={val.description}
                                link={val.link}
                            />
                        </div>
                    )
                })}
        </div>

    </>
}

export default App;