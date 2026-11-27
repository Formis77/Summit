// CAE Lab – Writing: zadání (vlastní, ve formátu C1 Advanced) a databáze ohodnocených prací.
// Hodnocení podle Cambridge: 4 kritéria po 0–5 bodech (Content, Communicative Achievement,
// Organisation, Language) = max 20 bodů za jednu práci.
window.CAE_WRITING = {
version: 1,

types: {
essay: {name:"Essay", part:1,
  tips:["Úvod: uveď téma vlastními slovy a naznač, které dva body rozebereš.","Dva odstavce, každý pro jeden bod z poznámek – argument, vysvětlení, příklad.","Závěr: jasně řekni, který bod je podle tebe důležitější / účinnější, a proč. Bez toho ztrácíš body za Content.","Neutrální až formální styl, žádné zkratky (don't → do not)."],
  phrases:["It is often argued that …","One of the most compelling arguments for … is that …","This is particularly true when it comes to …","Admittedly, … ; nevertheless, …","Weighing up both options, I am convinced that …","All things considered, … would seem to be the more effective approach."]},
letter: {name:"Letter / Email", part:2,
  tips:["Zjisti, komu píšeš (redakce, ředitel, kamarád) – podle toho volíš formální nebo neformální styl.","Oslovení a závěr: Dear Sir or Madam … Yours faithfully / Dear Ms Novak … Yours sincerely / Hi Tom … Best wishes.","Hned v prvním odstavci řekni, proč píšeš.","Pokryj všechny body ze zadání, každý ve vlastním odstavci."],
  phrases:["I am writing with regard to …","I would like to draw your attention to …","I would be grateful if you could …","I look forward to hearing from you.","Anyway, enough about me – …","Let me know if there's anything else you'd like to know."]},
proposal: {name:"Proposal", part:2,
  tips:["Čtenář je nadřízený nebo instituce – formální styl.","Nadpis a nadpisy odstavců (Introduction, Current situation, Recommendations, Conclusion).","Navrhuj konkrétně a vysvětli přínos každého návrhu.","Píšeš o budoucnosti: would, could, I suggest that … / I propose that …"],
  phrases:["The aim of this proposal is to …","At present, …","It would be advisable to …","I would strongly recommend that the college invest in …","This would not only … but also …","Implementing these measures would undoubtedly …"]},
report: {name:"Report", part:2,
  tips:["Čtenář je nadřízený – formální, věcný styl.","Nadpis a nadpisy odstavců (Introduction, Findings, Recommendations).","Report popisuje, co se stalo nebo jak to je (minulost a přítomnost), a hodnotí to.","Konec vždy s doporučením."],
  phrases:["The purpose of this report is to …","The findings are based on …","The majority of those surveyed felt that …","A significant drawback was …","It is therefore recommended that …","In light of the above, …"]},
review: {name:"Review", part:2,
  tips:["Čtenáři jsou lidé, kteří se rozhodují, jestli film / místo / aplikaci zkusit – živý, zajímavý styl.","Chytlavý nadpis a úvod, který čtenáře vtáhne.","Popis + hodnocení: co je dobré, co méně, pro koho to je.","Závěr s jasným doporučením."],
  phrases:["If you're looking for …, look no further.","What really sets it apart is …","The only real letdown was …","It is well worth a visit, if only for …","While it may not appeal to everyone, …","All in all, I would wholeheartedly recommend …"]}
},

prompts: [
// ---------- Part 1: Essay ----------
{id:"E01",type:"essay",title:"Reducing traffic in cities",
task:"Your class has watched a documentary about traffic problems in large cities. You have made the notes below.\n\nWrite an essay discussing two of the methods in your notes. You should explain which method would be more effective in reducing traffic, giving reasons in support of your answer.\n\nYou may, if you wish, make use of the opinions expressed in the documentary, but you should use your own words as far as possible.",
notes:{head:"Methods city councils could use to reduce traffic:",points:["higher parking charges","better public transport","car-free zones"],opinions:["People won't leave their cars at home unless the alternative is genuinely better.","Charging drivers more only punishes people who can't afford it.","Once streets are free of cars, people quickly realise what they were missing."]}},
{id:"E02",type:"essay",title:"Getting teenagers to read",
task:"Your class has attended a panel discussion on how to encourage teenagers to read more. You have made the notes below.\n\nWrite an essay discussing two of the ideas in your notes. You should explain which idea is more likely to succeed, giving reasons in support of your answer.\n\nYou may, if you wish, make use of the opinions expressed in the discussion, but you should use your own words as far as possible.",
notes:{head:"Ways of encouraging teenagers to read more:",points:["modern school libraries","reading apps and e-books","visits by authors"],opinions:["Teenagers live on their phones, so that's where books need to be.","A good library is a place, not just a collection of books.","Meeting a real writer can change the way a young person sees books for ever."]}},
{id:"E03",type:"essay",title:"Keeping traditions alive",
task:"Your class has watched a documentary about how local cultures and traditions can be preserved. You have made the notes below.\n\nWrite an essay discussing two of the ways in your notes. You should explain which way would be more effective, giving reasons in support of your answer.\n\nYou may, if you wish, make use of the opinions expressed in the documentary, but you should use your own words as far as possible.",
notes:{head:"Ways of preserving local traditions:",points:["funding for local festivals","teaching traditions at school","local museums"],opinions:["Traditions survive when people live them, not when they look at them behind glass.","Children are the only ones who can carry traditions into the future.","Festivals have become little more than tourist attractions."]}},
{id:"E04",type:"essay",title:"A healthier population",
task:"Your class has attended a lecture on what governments can do to improve public health. You have made the notes below.\n\nWrite an essay discussing two of the measures in your notes. You should explain which measure would be more effective, giving reasons in support of your answer.\n\nYou may, if you wish, make use of the opinions expressed in the lecture, but you should use your own words as far as possible.",
notes:{head:"Measures governments could take to improve health:",points:["taxing sugary food and drinks","free sports facilities","health education in schools"],opinions:["People only change their habits when it hits their wallet.","If exercise were free, far more people would do it.","Knowledge alone rarely changes behaviour."]}},
{id:"E05",type:"essay",title:"Ready for the world of work",
task:"Your class has had a discussion about how schools could better prepare young people for work. You have made the notes below.\n\nWrite an essay discussing two of the suggestions in your notes. You should explain which suggestion would be more beneficial for students, giving reasons in support of your answer.\n\nYou may, if you wish, make use of the opinions expressed in the discussion, but you should use your own words as far as possible.",
notes:{head:"How schools could prepare students for work:",points:["work experience placements","careers advice","practical skills courses"],opinions:["You only find out what a job is really like by doing it.","Most students have no idea what jobs even exist.","Schools teach plenty of theory but hardly any useful skills."]}},
{id:"E06",type:"essay",title:"Cutting down on waste",
task:"Your class has watched a documentary about the amount of waste people produce. You have made the notes below.\n\nWrite an essay discussing two of the measures in your notes. You should explain which measure would be more effective in reducing waste, giving reasons in support of your answer.\n\nYou may, if you wish, make use of the opinions expressed in the documentary, but you should use your own words as far as possible.",
notes:{head:"Measures that could reduce waste:",points:["deposit schemes for bottles and cans","banning single-use plastics","repair cafés"],opinions:["Give people money back and they'll return anything.","Bans simply replace one kind of rubbish with another.","We throw things away because nobody knows how to fix them any more."]}},
{id:"E07",type:"essay",title:"Why young people should travel",
task:"Your class has attended a panel discussion on the benefits of travelling abroad when you are young. You have made the notes below.\n\nWrite an essay discussing two of the benefits in your notes. You should explain which benefit is more important, giving reasons in support of your answer.\n\nYou may, if you wish, make use of the opinions expressed in the discussion, but you should use your own words as far as possible.",
notes:{head:"Benefits of travelling abroad for young people:",points:["learning languages","becoming more independent","understanding other cultures"],opinions:["Two weeks abroad teaches you more than a year in a classroom.","Travelling forces you to solve your own problems.","You only really understand your own country once you've left it."]}},
{id:"E08",type:"essay",title:"Elderly people living alone",
task:"Your class has attended a lecture on how to support elderly people who live alone. You have made the notes below.\n\nWrite an essay discussing two of the options in your notes. You should explain which option would be more effective, giving reasons in support of your answer.\n\nYou may, if you wish, make use of the opinions expressed in the lecture, but you should use your own words as far as possible.",
notes:{head:"Ways of supporting elderly people who live alone:",points:["technology such as video calls and alarms","volunteers who visit regularly","shared housing with students"],opinions:["No app can replace a knock on the door.","Many older people are more tech-savvy than we think.","Young and old can help each other more than they realise."]}},
// ---------- Part 2: Letter / Email ----------
{id:"L01",type:"letter",title:"Save our sports centre",
task:"Your local council is planning to close the town's youth sports centre and use the land for a car park. You decide to write a letter to the editor of your local newspaper.\n\nIn your letter, you should explain what the centre means to young people in the town, describe what effects its closure would have, and suggest an alternative solution.\n\nWrite your letter."},
{id:"L02",type:"letter",title:"Advice for a new colleague",
task:"An English-speaking friend of yours is coming to live and work in your country for a year. They have emailed you asking for advice.\n\nWrite an email to your friend explaining what they should know about working life in your country, suggesting how they could meet people and make friends, and warning them about anything they should avoid.\n\nWrite your email."},
{id:"L03",type:"letter",title:"A disappointing course",
task:"You recently attended a two-week summer language course abroad. The course did not match the description in the advertisement in several ways.\n\nWrite a letter to the director of the language school explaining what was different from what had been advertised, describing how this affected you, and saying what you expect the school to do now.\n\nWrite your letter."},
{id:"L04",type:"letter",title:"A reference for a friend",
task:"A friend of yours has applied for a job as a leader at an international summer camp for teenagers. The camp director has asked you to write a reference.\n\nIn your reference, you should describe your friend's character and abilities, mention any relevant experience they have, and explain why they would be suitable for the job.\n\nWrite your reference."},
// ---------- Part 2: Proposal ----------
{id:"P01",type:"proposal",title:"Spending the student grant",
task:"Your college has received a grant to improve facilities for students. The principal has asked students to submit proposals for how the money should be spent.\n\nIn your proposal, you should briefly describe the current facilities, suggest which facilities should be improved or added, and explain how students would benefit.\n\nWrite your proposal."},
{id:"P02",type:"proposal",title:"Attracting young tourists",
task:"Your town's tourist office wants to attract more young visitors and has invited proposals from local residents.\n\nWrite a proposal explaining why young people do not currently visit the town, suggesting what could be done to attract them, and explaining how the town would benefit.\n\nWrite your proposal."},
{id:"P03",type:"proposal",title:"Staff wellbeing",
task:"You work part-time for a company which wants to improve the wellbeing of its staff. The manager has asked employees to send in proposals.\n\nIn your proposal, you should describe the main causes of stress for staff, suggest two or three practical changes, and explain how both staff and the company would benefit.\n\nWrite your proposal."},
{id:"P04",type:"proposal",title:"A greener school",
task:"Your school wants to become more environmentally friendly and has asked students for proposals.\n\nWrite a proposal outlining what the school currently does badly, suggesting changes that students and staff could make, and explaining how these changes could be encouraged.\n\nWrite your proposal."},
// ---------- Part 2: Report ----------
{id:"R01",type:"report",title:"The exchange visit",
task:"Your school recently took part in an exchange visit with a school abroad. The principal has asked you to write a report.\n\nIn your report, you should describe what went well, explain any problems that arose, and make recommendations for future exchange visits.\n\nWrite your report."},
{id:"R02",type:"report",title:"Leisure facilities for young people",
task:"The local council wants to know whether there are enough leisure facilities for young people in your area. You have been asked to write a report.\n\nIn your report, you should describe the facilities that currently exist, evaluate how well they meet young people's needs, and recommend improvements.\n\nWrite your report."},
{id:"R03",type:"report",title:"Technology in the classroom",
task:"Your school has carried out a survey on how students use technology for learning. The head teacher has asked you to write a report on the results.\n\nIn your report, you should describe how students use technology, explain which uses are most and least helpful, and recommend how the school could make better use of technology.\n\nWrite your report."},
{id:"R04",type:"report",title:"The charity race",
task:"You helped organise a charity sports event in your town. The organising committee has asked you to write a report.\n\nIn your report, you should outline how the event was organised, evaluate how successful it was, and suggest how it could be improved next year.\n\nWrite your report."},
// ---------- Part 2: Review ----------
{id:"V01",type:"review",title:"From page to screen",
task:"An international film website is inviting reviews of films or series that were adapted from books.\n\nWrite a review of a film or series you have seen that was based on a book. Explain how well it captured the original, what changes were made and whether you would recommend it to people who loved the book.\n\nWrite your review."},
{id:"V02",type:"review",title:"A museum for young people",
task:"A travel magazine for young people is publishing a series of reviews of museums and exhibitions.\n\nWrite a review of a museum or exhibition you have visited. Describe what it offers, explain how well it appeals to young visitors and say whether you would recommend it.\n\nWrite your review."},
{id:"V03",type:"review",title:"An app that teaches you something",
task:"A technology blog is asking readers to review apps that help people learn new skills.\n\nWrite a review of an app you have used to learn something. Describe what the app does, evaluate how effective it is and say who would benefit most from using it.\n\nWrite your review."},
{id:"V04",type:"review",title:"A café for students",
task:"An international student guide to your town is inviting reviews of cafés and restaurants.\n\nWrite a review of a café or restaurant that would be popular with students. Describe the atmosphere and the food, comment on the value for money and explain why it would appeal to international students.\n\nWrite your review."}
],

// ---------- Moje ohodnocené práce ----------
// Přidává Claude po ohodnocení. Schéma:
// {id, prompt:"E01" nebo {type,title,task}, date, text, scores:{content,ca,org,lang},
//  summary, comments:{content,ca,org,lang}, good:[…], fix:[{orig,fix,why}], phrases:[{en,cz}], improved}
essays: []
};
