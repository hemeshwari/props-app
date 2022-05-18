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
            <div className='col-sm-6 col-md-4 col-lg-3 '>
                <Card
                    imgsrc={movieData[0].imgsrc}
                    title={movieData[0].title}
                    description={movieData[0].description}
                    link={movieData[0].link}
                /></div>
            <div className='col-sm-6 col-md-4 col-lg-3 '>
                <Card imgsrc={movieData[1].imgsrc}
                    title={movieData[1].title}
                    description={movieData[1].description}
                    link={movieData[1].link}
                /></div>
            <div className='col-sm-6 col-md-4 col-lg-3 '>
                <Card imgsrc={movieData[2].imgsrc}
                    title={movieData[2].title}
                    description={movieData[2].description}
                    link={movieData[2].link}
                /></div>
            <div className='col-sm-6 col-md-4 col-lg-3 '>
                <Card imgsrc={movieData[3].imgsrc}
                    title={movieData[3].title}
                    description={movieData[3].description}
                    link={movieData[3].link}
                />
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3 '>
                <Card imgsrc={movieData[4].imgsrc}
                    title={movieData[4].title}
                    description={movieData[4].description}
                    link={movieData[4].link}
                />
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3 '>
                <Card imgsrc={movieData[5].imgsrc}
                    title={movieData[5].title}
                    description={movieData[5].description}
                    link={movieData[5].link}
                />
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3 '>
                <Card imgsrc={movieData[6].imgsrc}
                    title={movieData[6].title}
                    description={movieData[6].description}
                    link={movieData[6].link}
                />
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3 '>
                <Card imgsrc={movieData[7].imgsrc}
                    title={movieData[7].title}
                    description={movieData[7].description}
                    link={movieData[7].link}
                />
            </div>
        </div>

    </>
}

export default App;



