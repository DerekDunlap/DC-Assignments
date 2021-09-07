import React, { Component } from 'react';

class Articles extends Component{

    constructor(){
        super()
        this.Articles=[{
            title:"Hello WatchKit",
            content:"Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.",
            comments: "12",
            likes: 124
        },
        {
            title:"Introduction to Swift",
            content:"Swift is a modern programming language developed by Apple to create the next generation fo iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.",
            comments: 15,
            likes: 45
        }]
    }

    render(){
        const articleItem=this.Articles.map(function(article,index){
            return <li id="articleLi" key={index}>
                <div>
                    <h3 href="#">{article.title}</h3>
                </div>
                <p>
                    {article.content}
                </p>
                <div id="articleDiv">
                    <span id="articleSpan">{article.comments} comments  {article.likes} likes</span>
                </div>
            </li>
        })

        return (
            <div id="articlesDiv">
                <ul id="articlesUL">
                    {articleItem}
                </ul>
            </div>
            
        )
    }
}

export default Articles