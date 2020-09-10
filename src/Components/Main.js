import React , { Component } from 'react';
import Lesson from './Lesson'



export class Main extends Component {
  render() 
  {
    const lessonList = [{
      key: 1,
        name: 'HTML',
        // image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
        image:  "data:image/png;base64,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"
,rate: "50%", introduction: "How a website looks is created using language such as HTML. Let's study these languages while actually creating a website!",
      },
    {
      key: 2,
      name: 'CSS',
        // image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
        image:  "data:image/png;base64,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",rate: "60%"
      ,introduction: "How a website looks is created using languages such as HTML and CSS. Let's study these languages while actually creating a website!",},
      {
        key: 3,
      name: 'JavaScript',
      // image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
      image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgP904DuXesgey20f7AligEGGTHCw_g6ad2A&usqp=CAU"
,rate: "70%", introduction: 'JavaScript is a versatile language used anywhere from interactive websites to backend servers.',
    },
    {
      key: 4,
    name: 'React',
    // image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
    image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGzHyBI-yMU1fhVaD6fdKdYukIESV0zHNOjw&usqp=CAU"
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
