// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "",
        "main":    "<p></p>",
        "results": "<span style='font-size:20px'>Ecology in few words:</span><p> Ecology starts with our personal care. It provides balance between human and nature.</p>",
        "level1": "Eco Ready",
        "level2": "Eco Contender",
        "level3": "Eco Amateur",
        "level4": "Eco Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1
            "q": "Bathing everyday is not a good habbit.",
            "a": [
                {"option": "True",      "correct": false},                
                {"option": "False",      "correct": true}               
            ],
            "correct": "<p><span>That's right!</span> You should bath everyday. Having a bath keeps you germ free!</p>",
            "incorrect": "<p><span>Uhh no.</span> It is the first thing you should ever do in the morning.</p>" // no comma here
        },
        { // Question 2
            "q": "What is good habit after using toilet?",
            "a": [
                {"option": "Rushing away to play.",    "correct": false},
                {"option": "Wash your hand with soap.",     "correct": true},
                {"option": "Drink a glass of water.",      "correct": false},
                {"option": "Rub your hands with cloth.",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Washing your hands after using toilet keeps germs away. Its a good habit, keep it up.</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. You mush wash your hands with soap after using toilet. This is the first habit that you should learn right away.</p>" // no comma here
        },
        { // Question 3
            "q": "Seeta is throwing garbage to Gita's door, Geeta throwing to garbage tank, so who is the good Seeta or Geeta?",
            "a": [
                {"option": "Seeta",        "correct": false},
                {"option": "Geeta",           "correct": true}               
            ],
            "correct": "<p><span>Nice!</span> You understand that keeping surroundings clean is our responsibility.</p>",
            "incorrect": "<p><span>No.</span> Keeping our home clean is not enough. It is important to keep cleanliness everywhere. That is the only way to be away from diseases.</p>" // no comma here
        },
        { // Question 4
            "q": "How should we use the waste kitchen water ?",
            "a": [
                {"option": "Gardening",    "correct": true},
                {"option": "Washing and Cleaning",     "correct": false},
                {"option": "Drinking",     "correct": false},
                {"option": "No Use",     "correct": false}
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> Kitchen water has many ingredinets that can be used by plants for growth.</p>" // no comma here
        },
        { // Question 5
            "q": "Ashas Mother is not separating wet and dry garbase Nisha Mother is doing. who is good Mom?",
            "a": [
                {"option": "Asha Mother",   "correct": false},
                {"option": "Nisha Mother",  "correct": true}              
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, kid.</p>",
            "incorrect": "<p><span>Not Quite.</span> Wet and dry garbage separation will help your muncipalty in handling garbage.</p>" // no comma here
        },
        { // Question 6
            "q": "Rakesh Like to eat an apple everyday but he did not wash it before eating so which is the good habit of Rakesh and bad habit?",
            "a": [
                {"option": "Eating an apple everyday is a good habit.",   "correct": true},
                { "option": "Eating an apple everyday is a bad habit.", "correct": false },
                {"option": "Not washing an apple before eating is a bad habit.",  "correct": true},
                { "option": "Not washing an apple before eating is a good habit", "correct": false } // no comma here
            ],
            "correct": "<p><span>That's right!</span> An apple a day, keeps docter away.</p>",
            "incorrect": "<p><span>Uhh no.</span> Clean the apple and have it everday.</p>" // no comma here
        }, 
        { // Question 7
            "q": "Meena's Mother cook all types of vegetables but she wash vegetable after cutting its, is she is doing the good job?",
            "a": [
                {"option": "No",   "correct": true},
                {"option": "Yes",  "correct": false}               
            ],
            "correct": "<p><span>That's right!</span> You know value of vitamins in vegetables!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. Washing vegatbles washes away vitamins from the vegetables.</p" // no comma here
        }, 
        { // Question 8
            "q": "Rajan like jilebi but he refuse to eat Jalebi which is put in open place without covering of net, its good habit or bad?",
            "a": [
                { "option": "Bad Habit", "correct": false },
                { "option": "Good Habit", "correct": true }
            ],
            "correct": "<p><span>Nice!</span> You understand eating food kept in open place is not good.</p>",
            "incorrect": "<p><span>No.</span> You may get infected by eating food kept in open place!</p>" // no comma here
        },
        { // question 9
            "q": "Sampat and Ganpat both are farmers. Sampat use Chemicals and Ganpat use organics, Who is ideal farmer?",
            "a": [
                { "option": "Sampat", "correct": false },
                { "option": "Ganpat", "correct": true }                
            ],
            "correct": "<p><span>Good Job!</span> Organic chemicals are the best option for crops.</p>",
            "incorrect": "<p><span>ERRRR!</span> Using chemicals are injurious to health.</p>" // no comma here
        },
       { // Question 10
           "q": "Select things which help to keep your body clean",
           "a": [
               { "option": "Nail cutter", "correct": true },
               { "option": "Comb", "correct": true },
               { "option": "Perfume", "correct": false },
               { "option": "Google", "correct": false } // no comma here
           ],
           "correct": "<p><span>Brilliant!</span> Nail cutter and comb takes away dead parts from your body.</p>",
           "incorrect": "<p><span>Not Quite.</span>Perfume is just a fragrance, it does not clean your body! Google does not help in everything!</p>" // no comma here
        } // no comma here
    ]
};