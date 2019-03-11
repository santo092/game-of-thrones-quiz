
 $("#button1").click(function (event) {
   
    window.location.href = "questions.html";
    
  
   });
  
  
  var questions = [{
      "question" : " Should the government of a nation play a role in how the economy regulated?  If so, how big of one??",
      "option1" : " I shall be the final authority on any policies governing economics", 
      "option2" : " The govermnet should play no role in regulating its country's economy.  ", 
      "option3" : " The government should play a huge role in how the economy is regulated.", 
      "option4" : " Economics?  We don't need no stinking economics.  Quid pro quo is good enough for us", 
      "option5" : " The government should play a moderate role in regulating its country's economy", 
      "option6" : " The govermnet should play very little role in regulating its country's economy.", 
      "answer1": "T",
      "answer2": "G",
      "answer3": "M",
      "answer4": "W",
      "answer5": "S",
      "answer6": "L"
  }, {
      "question" : " When choosing to ally yourself with another nation, what qualitites do you look for? ",
      "option1" : "I have no allies.  Only future subjects ", 
      "option2" : "Don't be needy.  I hate people who are overly needy.", 
      "option3" : "Just don't betray me.  Or you'll regret it.", 
      "option4" : "I don't need an ally.  Just a wall separating me from everyone else.", 
      "option5" : "Honor, respect and trust.", 
      "option6" : "Do they have money and respect family values?  Then welcome.", 
      "answer1": "T",
      "answer2": "G",
      "answer3": "M",
      "answer4": "W",
      "answer5": "S",
      "answer6": "L"
  }, {
      "question" : "How big of a role should government play in the lives of the governed?",
      "option1" : " I am the government.", 
      "option2" : " Virtually no role", 
      "option3" : " A heavy role", 
      "option4" : " No one governs me! ", 
      "option5" : " A moderate role", 
      "option6" : " A limited role", 
      "answer1": "T",
      "answer2": "G",
      "answer3": "M",
      "answer4": "W",
      "answer5": "S",
      "answer6": "L"
  }, {
      "question" : "When it comes to your enemies, what method would you use to handle them?",
      "option1" : " Burn them all if they don't agree to join up with me", 
      "option2" : " Drown them under the might of my superior navy", 
      "option3" : " Pretend to be there friend, then, when they least expect it, strike like a snake from the shadows", 
      "option4" : " Mob them with overwhelming numbers", 
      "option5" : " Diplomacy.  And if that fails, I got wolves. ", 
      "option6" : " Beat them with superior tactics and technology", 
      "answer1": "T",
      "answer2": "G",
      "answer3": "M",
      "answer4": "W",
      "answer5": "S",
      "answer6": "L"
  }, {
      "question" : " Which historical leader do you think your style of leadership would most closely emulate?",
      "option1" : " I emulate no one as there has never been a ruler like me.", 
      "option2" : " None come to mind.  They were all too involved in the day to day lives of their citizens", 
      "option3" : " Franklin Roosevelt", 
      "option4" : " Kayne West", 
      "option5" : " Martin Luther King", 
      "option6" : " Henry VIII", 
      "answer1": "T",
      "answer2": "G",
      "answer3": "M",
      "answer4": "W",
      "answer5": "S",
      "answer6": "L"
  }, {
      "question" : " Should all drugs be legal for use in any capacity?",
      "option1" : " Yes, as long as it doesn't prevent them from stay committed to the cause.  That cause being my cause.", 
      "option2" : " Sure, as as long as the drug use of others doesn't affect me in any direct way", 
      "option3" : " Absolutely.", 
      "option4" : " What?  Did you say something?  Sorry, I'm a little wacked out on some mushrooms I found on the ground a couple minutes ago.", 
      "option5" : " It depends on the negative effects of the drug", 
      "option6" : " If it can be taxed, then it should be legal.  Otherwise, no. ", 
      "answer1": "T",
      "answer2": "G",
      "answer3": "M",
      "answer4": "W",
      "answer5": "S",
      "answer6": "L"
  }, {
      "question" : " Do you think it is the job of the government to help underpriviledged groups in their society?",
      "option1" : " Of course.  I am their mother and all children deserve my protection.", 
      "option2" : " No.  People must learn to sink or swim on their own.", 
      "option3" : " Yes. A nation is only as strong as its weakest members.", 
      "option4" : " Bless the Old Gods of the Forest, I have no idea what is going on.  Those mushrooms were a bad idea.  TOO MANY COLORS. ", 
      "option5" : " Within reason.  People should be given a helping hand, but, in doing so, must be made to learn to fend for themselves.", 
      "option6" : " Only if they are capable of paying taxes ", 
      "answer1": "T",
      "answer2": "G",
      "answer3": "M",
      "answer4": "W",
      "answer5": "S",
      "answer6": "L"
  }, {
      "question" : " What is your stance on people from outside of the nation immigrating into the nation?",
      "option1" : " All people are my people.", 
      "option2" : " As long as they leave me along, I don't really care.  Good luck getting across the ocean though. ", 
      "option3" : " As long as they are willing to integrate into our culture, then all our welcome.  Hope they like sand", 
      "option3" : " As long as they are willing to integrate into our culture, then all our welcome.  Hope they like sand", 
      "option4" : " Not too interested in meeting new people.  I can barely get along with the ones I'm with now", 
      "option5" : " As long as it is done legally and they want to be valued members of the nation, I would encourage it", 
      "option6" : " Do they have money?  Running a nation isn't cheap.", 
      "answer1": "T",
      "answer2": "G",
      "answer3": "M",
      "answer4": "W",
      "answer5": "S",
      "answer6": "L"
  }, {
      "question" : " Should religion play a role in the governance of a nation?",
      "option1" : " I am the religion of my people.", 
      "option2" : " Normally I would say no, but I am in too deep here to say anything but yes", 
      "option3" : " Absolutely not", 
      "option4" : " No?  Yes?  I don't know.  Ask me again in an hour. ", 
      "option5" : " I think religion should be a valued part of the culture that can be sought for guidance, but ultimately should remain separated from any governmental affairs ", 
      "option6" : " Yes.  Religion makes the nation too much money not to be an influential part of the government. ", 
      "answer1": "T",
      "answer2": "G",
      "answer3": "M",
      "answer4": "W",
      "answer5": "S",
      "answer6": "L"
  }, {
      "question" : "What do you think is more important?  Individual freedom or social responsibility?",
      "option1" : " An individual's responsibility is to me and to the cause I represent ", 
      "option2" : " Nothing is more important than the individual.", 
      "option3" : " Social responsibility is cornerstone of any successful nation  ", 
      "option4" : " It can vary from day to day.", 
      "option5" : " I think there needs to be a balance of both.", 
      "option6" : " Whichever gets the bills paid quicker and makes the nation richer.", 
      "answer1": "T",
      "answer2": "G",
      "answer3": "M",
      "answer4": "W",
      "answer5": "S",
      "answer6": "L"
  }]





