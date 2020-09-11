import React , { Component } from 'react';
import Lesson from './Lesson'
import ReactImage from './img/react.png'
import JsImage from './img/Js.png'
import CssImage from './img/css.png'
import HtmlImage from './img/html.png'


export class Main extends Component {
  render() 
  {
    const lessonList = [{
      key: 1,
        name: 'HTML',
       
        image:  `${HtmlImage}`
,rate: "50%", introduction: "How a website looks is created using language such as HTML. Let's study these languages while actually creating a website!",
      },
    {
      key: 2,
      name: 'CSS',
        
        image: `${CssImage}` ,rate: "60%"
      ,introduction: "How a website looks is created using languages such as HTML and CSS. Let's study these languages while actually creating a website!",},
      {
        key: 3,
      name: 'JavaScript',
      
      image: `${JsImage}`
,rate: "70%", introduction: 'JavaScript is a versatile language used anywhere from interactive websites to backend servers.',
    },
    {
      key: 4,
    name: 'React',
    image: `${ReactImage}`
,rate: "80%", introduction: 'React is a JavaScript library used to make the appearance of a website like HTML.',
  }
    ];
    return (
    <div className='main-wrapper'>
         <div className='main'>
         <div className='copy-container'>
            <h1>Hello!.</h1>
            <h2>Thank You For Coming Around!</h2>
          </div>
          <div className='lesson-container'>
            <h3 className='section-title'>The Courses We Offer Are Listed Below</h3>
            {/* Display the Lesson component and pass the props */}
            {/* <Lesson    
            name ={lessonItem.name}
            image ={lessonItem.image}
            rate={lessonItem.rate}/> */}
                {lessonList.map((lessonItem) => {
              return (
                <Lesson
                key={lessonItem.key}
                  name={lessonItem.name}
                  image={lessonItem.image}
                  rate={lessonItem.rate}
                  introduction={lessonItem.introduction}
                />
              );
            })}

          </div>
      </div>
    </div>
    )
  }
}

export default Main
