


//the items to drag - the outside array is for the question order (index 0 - question 1)
//the inner array is for the three targets - מבחן שליטה is index 0
quesLi = [['<li data-draggable=\"item\" id=\"item1\" class=\"drag2\">NodeJS</li> <li data-draggable=\"item\" id=\"item2\" class=\"drag1\">React</li> <li data-draggable="item" id="item6" class="drag1">Angular</li>' ,'<li data-draggable=\"item\" id=\"item4\" class=\"drag3\">mySQL</li> <li data-draggable=\"item\" id=\"item3\" class=\"drag3\">MongoDB</li>', '<li data-draggable=\"item\" id=\"item5\" class=\"drag2\">JavaScript</li>' ],
         ['<li data-draggable=\"item\" id=\"item1\" class=\"drag1\">Front-End</li> <li data-draggable=\"item\" id=\"item2\" class=\"drag1\">Back-End</li>' ,'<li data-draggable=\"item\" id=\"item4\" class=\"drag3\">Developer</li> <li data-draggable=\"item\" id=\"item3\" class=\"drag3\">Web</li>', '<li data-draggable="item" id="item5" class="drag3">Design</li>'],
         ['<li data-draggable=\"item\" id=\"item4\" class=\"drag1\">Invent</li>' ,' <li data-draggable=\"item\" id=\"item1\" class=\"drag1\">one</li> <li data-draggable=\"item\" id=\"item2\" class=\"drag1\">More</li> <li data-draggable=\"item\" id=\"item3\" class=\"drag3\">Sentece</li>', ''],
         ['<li data-draggable=\"item\" id=\"item1\" class=\"drag2\">Program</li> ' ,'<li data-draggable=\"item\" id=\"item2\" class=\"drag1\">First</li> <li data-draggable=\"item\" id=\"item4\" class=\"drag3\">World</li> <li data-draggable="item" id="item3" class="drag2">Hello</li>','' ]
        ];

//the titles of the questions (array length according the num of questions)
quesTitle=["Question 1", "Question 2", "Question 3", "Question 4"];

//the question itself (array length according the num of questions)
quesText=['This question talks about techonology','This questio talks about titles of profession','This question talks about nothing ','This question talks about first sentecnce in programming as you all know'];



//the title for each target
quesDropTitle= ['<p class="text-center"><b>Target 1</b></p>', ' <p class="text-center"><b>Target 2 </b></p>','<p class="text-center"><b>Target 3</b></p>' ];

//the items(drags) in the correct order - the outside array is for the question order (index 0 - question 1)
//the inner array is for the three targets - Target 1 is index 0
quesLiCorrect= [['<li class=\"drags\">React</li> <li class=\"drags\">Angular</li>', '<li class=\"drags\">NodeJs</li> <li class=\"drags\">JavaScript</li>', ' <li class=\"drags\">MongoDB</li> <li class=\"drags\">MySQL</li> ' ],
['<li  class=\"drags\">Front-End</li> <li  class=\"drags\">Back-End</li>',"",'<li  class=\"drags\">Web</li> <li  class=\"drags\">Developer</li> <li  class=\"drags\">Design</li>'],
['<li class=\"drags\">Invent</li> <li class=\"drags\">One</li> <li class=\"drags\">More</li>',"",'<li class=\"drags\">Sentence</li>' ],
['<li class=\"drags\">First</li>','<li class=\"drags\">Program</li> <li class=\"drags\">Hello</li>', '<li class=\"drags\">World</li>' ]
];

//the feedback for each target - the outside array is for the question order (index 0 - question 1)
//the inner array is for the three targets - מבחן שליטה is index 0
quesFeedback=[
        ['Feeback 3','Feedback 2','Feedback 1'],
        ['Feeback 3','','Feedback 3'],
        ['Feeback 3','Feedback 2','Feedback 1'],
        ['Feeback 3','','Feedback 1']
];

checkIfCorrectPlace=[
        [false,true,false,false,false,true],
        [true,true,false,false,true],
        [false,false,false,true],
        [false,false,true,false]
]