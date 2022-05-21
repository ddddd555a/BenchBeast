# BenchBeast
<h2>
 motivation
  <h1>
Bodybuilding is a universal sport community that focuses on muscle growth. The goal and purpose may differ in bodybuilding. But bench press is one of the most basic yet important exercises for chest muscle growth which almost every person in the gym never skips. 

    <h2>
   IdeaSketch
      </h2>
![IdeaSketch](https://user-images.githubusercontent.com/89341312/168734463-b71c365c-6eb4-40e9-ac64-efece74ae3fa.jpeg)

-Idea Sketch for each page

There are total three pages for the project: home page, question page, result page. The home page has a big title 'RU Benchpress freak?' with square button that leads users to question page.

  
<h2>
 Questions 
 </h2> 
 ![firstPageSketch](https://user-images.githubusercontent.com/89341312/168734671-9c15adcd-5e17-4849-be0c-b5af9a6b0741.jpeg)

-List of questions

 In the first 5 questions the quiz asks correct posture and method in breathing, wrist angle, shoulder, speed of bar path, and bar grabbing position. Users can choose answers from the question to see if they are bench press freaks or not.
 
 
 Next, we have a tool for chest muscle simulation. This helps to check which muscle is used in a certain posture. I chose three most important postures that decide the stimulus point of the chest: Armpit angle, waist arch, angle of a bench.
 
 Once the users are done with answering all the questions, they can click the button below to go to the result page.
 
<img width="1440" alt="Screen Shot 2022-05-17 at 1 38 33 AM" src="https://user-images.githubusercontent.com/89341312/168737254-3b20613c-d78b-45b9-b36c-bf0e0a4026b9.png">

<h2>
 Result
</h2>  
In the result page, based on the lcoalstorage of the answers that users made, the wrong choices and the right answer are shown in the result page.


<img width="1440" alt="Screen Shot 2022-05-17 at 1 31 57 AM" src="https://user-images.githubusercontent.com/89341312/168737306-25467018-b5cb-4e54-9482-f374b5980dc2.png">

And for the motion stimulus part,
The tool shows activated muscle in a posture and bench angle the user chose.


<img width="1440" alt="Screen Shot 2022-05-17 at 1 42 07 AM" src="https://user-images.githubusercontent.com/89341312/168737529-09796beb-2243-4217-bce4-019cba6a58a0.png">

Lastly, there is a small tip section that I use while doing a bench press.

<h2>
Coding
</h2>
    
<img width="563" alt="Screen Shot 2022-05-20 at 8 41 27 PM" src="https://user-images.githubusercontent.com/89341312/169628267-c06642c8-0a9d-4baf-8fdc-d33e36be47ba.png">
(local storages)
Brought up the images through local storages in Javascript.

The local storage was used to know whether the questions are all selected in the question pages. And collecting data of which answers were chosen, users can get their wrong answers and right answers at the same time in the result page.
    
    
    <img width="830" alt="Screen Shot 2022-05-20 at 9 00 32 PM" src="https://user-images.githubusercontent.com/89341312/169628390-4e1ba7be-795c-4d89-8290-816e037b57b4.png">

In the slider, I set the value 1,2,3 for each selection.

    <img width="563" alt="Screen Shot 2022-05-20 at 8 41 27 PM" src="https://user-images.githubusercontent.com/89341312/169628334-b51012fc-afc8-4af8-9ccd-a296c333441e.png">

These values were used to create a result for muscle stimulus. From 27(3x3x3) possibilities of selection, you can get 7 factual results.
    
