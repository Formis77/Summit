// CAE Lab – celé texty pro Part 1–3 (vlastní texty ve stylu C1 Advanced).
// Každá mezera v textu je {} a odpovídá položce v gaps (ve stejném pořadí).
// Part 1: o[0] je správně (v aplikaci se míchá). Part 2: a = uznávané odpovědi.
// Part 3: w = slovo v okraji, a = uznávané odpovědi.
window.CAE_TEXTS = {
version: 1,
p1: [
{id:"night-owls",title:"The rise of the night owl",
text:"For decades, early risers have been held {} as models of discipline, while those who struggle out of bed have been dismissed as lazy. Recent research, however, is beginning to {} doubt on this assumption. Scientists now believe that our preference for mornings or evenings is largely {} by our genes, and that forcing night owls to {} to an early schedule may do more harm than good. In one study, teenagers whose school day started an hour later were found to be more alert and {} better results in their exams. Critics {} out that later start times are difficult to organise, but supporters argue that the benefits far {} the costs. Either way, the idea that a single timetable suits everyone no longer {} water.",
gaps:[
{o:["up","out","on","over"],e:"hold sb up as (a model) = dávat za vzor."},
{o:["cast","lay","drop","place"],e:"cast doubt on = zpochybnit."},
{o:["determined","decided","resolved","concluded"],e:"be determined by = být dán, určen (čím)."},
{o:["adapt","fit","suit","match"],e:"adapt to = přizpůsobit se. fit / suit / match nemají vazbu „to a schedule“."},
{o:["achieved","made","reached","won"],e:"achieve results."},
{o:["point","set","bring","put"],e:"point out = upozornit."},
{o:["outweigh","overcome","outdo","overtake"],e:"the benefits outweigh the costs = výhody převažují."},
{o:["holds","keeps","carries","bears"],e:"hold water = obstát (o argumentu)."}]},

{id:"car-free-town",title:"The town that banned cars",
text:"When the small Spanish town of Pontevedra decided to ban cars from its centre, many residents were {} by the idea. Shopkeepers feared that business would {}, and older people worried about getting around. Twenty years on, the town has become a {} example of what urban planning can achieve. Traffic deaths have fallen almost to zero, and the population of the centre has grown rather than {}. The mayor insists the change was never about {} war on drivers; it was about giving the streets back to people. Not everyone is convinced, of course. Some argue that the model could never be {} up to suit a large city. Yet planners from all over the world now {} to the town to see the results for themselves, and several cities have already {} suit.",
gaps:[
{o:["appalled","resented","objected","opposed"],e:"be appalled by = být zděšen. opposed by nedává smysl (opposed TO)."},
{o:["suffer","damage","harm","injure"],e:"business suffers = obchod trpí. Ostatní slovesa potřebují předmět."},
{o:["shining","glowing","burning","flashing"],e:"a shining example = zářný příklad."},
{o:["shrunk","lessened","lowered","shortened"],e:"shrink = zmenšit se (o populaci)."},
{o:["declaring","announcing","stating","pronouncing"],e:"declare war on = vyhlásit válku."},
{o:["scaled","sized","measured","grown"],e:"scale up = zvětšit, rozšířit."},
{o:["flock","herd","pack","group"],e:"flock to = hrnout se někam."},
{o:["followed","taken","made","copied"],e:"follow suit = následovat příkladu."}]},

{id:"vinyl",title:"The return of vinyl",
text:"Few would have predicted that vinyl records would make a {}. Just two decades ago, the format seemed {} for extinction, replaced first by CDs and then by streaming. Yet sales have risen every year since 2007, and records now {} for a significant share of physical music sales. Nostalgia plays a {} in this, but many buyers are too young to remember vinyl the first time {}. For them, owning a record is a way of {} a deeper connection with music in an age when songs are endlessly available but rarely treasured. Record shops, many of which had closed their doors, are now {} a revival, and some artists even release albums on vinyl {} of streaming.",
gaps:[
{o:["comeback","rebound","restart","renewal"],e:"make a comeback = vrátit se na scénu."},
{o:["headed","aimed","pointed","directed"],e:"be headed for = mířit k (něčemu špatnému)."},
{o:["account","make","stand","count"],e:"account for = tvořit (podíl)."},
{o:["part","piece","share","portion"],e:"play a part in = hrát roli."},
{o:["round","over","along","through"],e:"the first time round = poprvé (když to bylo v módě)."},
{o:["forging","casting","founding","raising"],e:"forge a connection = vytvořit pouto."},
{o:["enjoying","profiting","gaining","earning"],e:"enjoy a revival = zažívat oživení."},
{o:["ahead","before","prior","front"],e:"ahead of = dříve než. before / prior nemají vazbu s „of“."}]},

{id:"failure",title:"Learning from failure",
text:"In most workplaces, failure is something to be {} at all costs. Employees who make mistakes often try to cover them up for fear of having to {} the blame. Some companies, however, are taking a radically different {}. They hold regular meetings in which staff share their biggest failures and discuss what they learnt. The idea is not to {} a blind eye to poor performance but to create a culture in which people feel safe enough to {} risks. Research seems to {} out the wisdom of this approach: teams that openly discuss mistakes tend to be more innovative. Of course, there is a fine {} between learning from failure and tolerating carelessness. Still, the old belief that admitting an error is a sign of weakness is gradually losing {}.",
gaps:[
{o:["avoided","escaped","fled","deserted"],e:"avoid at all costs = vyhnout se za každou cenu."},
{o:["take","hold","keep","catch"],e:"take the blame = vzít vinu na sebe."},
{o:["tack","track","trail","trace"],e:"take a different tack = zvolit jiný přístup."},
{o:["turn","close","shut","cast"],e:"turn a blind eye to = přimhouřit oko."},
{o:["take","make","give","do"],e:"take risks."},
{o:["bear","carry","hold","prove"],e:"bear out = potvrdit."},
{o:["line","border","edge","limit"],e:"a fine line between = tenká hranice mezi."},
{o:["ground","land","soil","terrain"],e:"lose ground = ztrácet půdu pod nohama."}]},

{id:"trees",title:"The secret life of trees",
text:"Trees may look like solitary beings, but nothing could be further from the {}. Through fungi {} to their roots, they form complex underground networks along which they exchange water, sugar and even warning signals. A tree under {} from insects, for instance, may send chemical messages to its neighbours, which then {} up their own defences. Older 'mother trees' appear to play a {} role, passing nutrients to young trees growing in the shade. These findings have {} implications for forestry. If trees depend on each other to such an {}, clearing large areas at once may weaken the whole system. Some foresters are therefore calling for logging to be {} out over much longer periods.",
gaps:[
{o:["truth","fact","reality","certainty"],e:"nothing could be further from the truth = to není vůbec pravda."},
{o:["attached","adhered","clung","gripped"],e:"attached to = připojený k."},
{o:["attack","offence","strike","raid"],e:"under attack = napadený."},
{o:["step","pace","stride","tread"],e:"step up = zvýšit, posílit."},
{o:["pivotal","sharp","heavy","solid"],e:"a pivotal role = klíčová role."},
{o:["far-reaching","long-stretching","high-reaching","deep-going"],e:"far-reaching implications = dalekosáhlé důsledky."},
{o:["extent","level","amount","measure"],e:"to such an extent = do takové míry. Člen „an“ sedí jen na extent."},
{o:["spread","scattered","sprinkled","strewn"],e:"spread out over = rozložit do (období)."}]},

{id:"procrastination",title:"Why we put things off",
text:"Most of us have, at some point, put {} an important task until the last minute. Psychologists used to {} procrastination down to poor time management, but researchers now see it differently. According to recent studies, people delay tasks not because they are lazy but because the tasks {} unpleasant feelings such as boredom or anxiety. By avoiding them, we gain short-term {}, but at the expense of greater stress later. The good news is that procrastination can be {}. One simple technique is to break a large task into smaller steps, which makes it seem less {}. Another is to forgive yourself for past delays; students who did so were less likely to procrastinate {}. Being kind to yourself, it seems, may be the key to getting things done in good {}.",
gaps:[
{o:["off","out","down","up"],e:"put off = odložit."},
{o:["put","set","lay","place"],e:"put sth down to = připisovat něco něčemu."},
{o:["trigger","launch","fire","release"],e:"trigger feelings = vyvolat pocity."},
{o:["relief","release","rescue","remedy"],e:"short-term relief = krátkodobá úleva."},
{o:["overcome","overtaken","overthrown","overturned"],e:"overcome = překonat."},
{o:["daunting","frightened","scared","alarmed"],e:"daunting = odrazující (o úkolu). -ed tvary popisují pocit člověka."},
{o:["subsequently","consequently","accordingly","respectively"],e:"subsequently = následně, později."},
{o:["time","order","hour","moment"],e:"in good time = včas, s předstihem."}]},

{id:"voluntourism",title:"Holidays that help?",
text:"Every year, thousands of young people pay to spend their holidays building schools or teaching English in developing countries. So-called 'voluntourism' has {} into a multi-million-dollar industry. Yet critics argue that it often does more harm than {}. Unskilled volunteers may take jobs that could {} have gone to local workers, and children in orphanages can be badly affected when volunteers come and go in {} succession. Supporters, on the other hand, claim that such trips {} young people's eyes to global inequality. The answer, experts say, is to choose programmes with a proven {} record and to make sure projects are driven by the needs of the community. Organisers must also {} volunteers' expectations: two weeks is rarely enough to change much. As one charity worker {} it, 'Go to learn, not to save.'",
gaps:[
{o:["grown","raised","risen","lifted"],e:"grow into = vyrůst v."},
{o:["good","help","benefit","well"],e:"do more harm than good = víc uškodit než pomoci."},
{o:["otherwise","elsewise","unlike","contrary"],e:"otherwise = jinak."},
{o:["rapid","hasty","hurried","speedy"],e:"in rapid succession = rychle za sebou."},
{o:["open","raise","lift","wake"],e:"open sb's eyes to = otevřít oči."},
{o:["track","trail","path","trace"],e:"a proven track record = osvědčené výsledky."},
{o:["manage","handle","direct","steer"],e:"manage expectations = krotit očekávání."},
{o:["put","said","told","spoke"],e:"as sb put it = jak to někdo vyjádřil."}]},

{id:"smartphones",title:"A smartphone-free childhood",
text:"A growing number of parents are {} together to delay giving their children smartphones until they are at least fourteen. The movement, which began with a single message in a group chat, has {} momentum at remarkable speed. Its supporters argue that constant access to social media is {} to blame for rising anxiety among teenagers. They also point out that if all the parents in a class {} to the same rule, no child will feel left out. Not all experts are on {}, however. Some warn that the evidence linking phones to poor mental health is far from {}, and that banning devices could leave children unprepared for the digital world. Others believe that teaching responsible use would be a more {} solution. What both sides agree on is that the issue is too important to be {} to chance.",
gaps:[
{o:["banding","binding","bonding","bending"],e:"band together = spojit se."},
{o:["gathered","collected","assembled","picked"],e:"gather momentum = nabírat na síle. pick vyžaduje „up“."},
{o:["largely","broadly","widely","greatly"],e:"be largely to blame = být z velké části na vině."},
{o:["stick","paste","fix","pin"],e:"stick to a rule = držet se pravidla."},
{o:["board","deck","track","line"],e:"be on board = souhlasit, být pro."},
{o:["conclusive","concluded","finished","terminated"],e:"conclusive evidence = přesvědčivý důkaz."},
{o:["viable","living","lively","vital"],e:"a viable solution = proveditelné řešení."},
{o:["left","given","put","laid"],e:"leave sth to chance = nechat náhodě."}]}
],

p2: [
{id:"kunst",title:"The man who walked around the world",
text:"In 1970, at the age of twenty-two, Dave Kunst set out to become the first person {} to walk around the world. He was accompanied by his brother and a mule, {} carried their supplies. The journey was anything {} easy. Halfway through, the brothers were attacked by bandits, and Dave's brother was killed. Many people would have given up at that point, but Dave refused to give {}. After recovering from his own injuries, he returned to the exact spot {} the attack had taken place and continued his walk. {} the time he arrived home four years later, he had worn out twenty-one pairs of shoes. Asked {} had kept him going, he said he simply could not bear to leave the journey unfinished. {} his record has since been matched, it remains a remarkable story of endurance.",
gaps:[
{a:["ever"],e:"the first person ever = vůbec první."},
{a:["which","that"],e:"Vztažná věta o zvířeti; po čárce jen which, ale that se v praxi často uzná."},
{a:["but"],e:"anything but = všechno, jen ne."},
{a:["up"],e:"give up = vzdát se."},
{a:["where"],e:"the spot where = místo, kde."},
{a:["by"],e:"By the time = než, do doby, kdy."},
{a:["what"],e:"Asked what … = Na otázku, co…"},
{a:["although","though","while","whilst"],e:"Přípustková spojka."}]},

{id:"coffee",title:"Coffee and the brain",
text:"Coffee is {} of the most widely consumed drinks on the planet, yet scientists are still trying to understand exactly {} it affects the brain. Caffeine works by blocking adenosine, a chemical {} makes us feel sleepy. {} a result, we feel more alert after a cup or two. However, the body soon adapts, which is {} regular drinkers need more and more coffee to get the same effect. Some studies suggest that moderate coffee drinking may even protect {} certain diseases, although researchers stress that these findings should be treated {} caution. What is clear is that too much caffeine can lead to anxiety and sleepless nights, so it may be wise to cut {} after midday.",
gaps:[
{a:["one"],e:"one of the most …"},
{a:["how"],e:"understand how = pochopit, jak."},
{a:["that","which"],e:"Vztažné zájmeno."},
{a:["as"],e:"As a result = V důsledku toho."},
{a:["why"],e:"which is why = a proto."},
{a:["against"],e:"protect against."},
{a:["with"],e:"treat with caution = brát opatrně."},
{a:["down","back"],e:"cut down / back = omezit."}]},

{id:"great-stink",title:"The Great Stink",
text:"In the summer of 1858, London was hit by {} came to be known as the Great Stink. For years, the city's waste had been poured straight into the Thames, and hot weather turned the river into {} enormous open sewer. The smell was so bad {} Parliament considered moving out of the city. {} was only then that the government finally agreed to fund a new sewer system, designed by the engineer Joseph Bazalgette. {} than build pipes just large enough for the city as it was, Bazalgette made them twice as wide, reasoning that London would keep growing. His foresight proved invaluable: the system is still {} use today. Had it {} been for that terrible summer, the work might have been delayed for decades. It took a crisis to bring {} one of the greatest engineering achievements of the age.",
gaps:[
{a:["what"],e:"what = to, co (bez předchozího podstatného jména)."},
{a:["an"],e:"Člen před samohláskou."},
{a:["that"],e:"so … that."},
{a:["it"],e:"Vytýkací It was only then that…"},
{a:["rather"],e:"Rather than = Místo aby."},
{a:["in"],e:"in use = v provozu."},
{a:["not"],e:"Had it not been for = Nebýt."},
{a:["about"],e:"bring about = způsobit."}]},

{id:"adult-learner",title:"Learning a language as an adult",
text:"It is often said that children learn languages more easily {} adults. While there is some truth in this, adults have advantages of their {}. They are better at understanding grammar rules and can draw {} their knowledge of languages they already speak. The real problem, {} to many experts, is not age but time and motivation. Children are surrounded by a language all day, {} adults may manage only an hour or two a week. {} you want to make real progress, you need to find ways of hearing and using the language every day. Films, podcasts and online chats all count. {} matter how busy you are, fifteen minutes a day is better than nothing. And {} all, don't be afraid of making mistakes.",
gaps:[
{a:["than"],e:"more easily than."},
{a:["own"],e:"of their own = vlastní."},
{a:["on","upon"],e:"draw on = čerpat z."},
{a:["according"],e:"according to = podle."},
{a:["whereas","while","whilst"],e:"Protiklad: zatímco."},
{a:["if"],e:"Podmínka."},
{a:["no"],e:"No matter how = Bez ohledu na to, jak."},
{a:["above"],e:"above all = především."}]},

{id:"antarctica",title:"Winter in Antarctica",
text:"Life at an Antarctic research station is not {} everyone. During the winter months, the sun does not rise {} all, and temperatures can drop to minus seventy degrees. Staff must be prepared to spend months cut {} from the rest of the world, with no possibility of leaving even in an emergency. {} spite of these conditions, there is no shortage of applicants. Many are drawn by the chance to do research {} cannot be carried out anywhere else on Earth. Successful candidates go through a long selection process, {} includes psychological tests to check that they can cope with isolation. As one former team member put it, 'You find out very quickly {} you really are.' Few of {} who go regret the experience.",
gaps:[
{a:["for"],e:"not for everyone = není pro každého."},
{a:["at"],e:"not at all = vůbec ne."},
{a:["off"],e:"cut off = odříznutý."},
{a:["in"],e:"In spite of = Navzdory."},
{a:["that","which"],e:"Vztažné zájmeno."},
{a:["which"],e:"Po čárce jen which."},
{a:["who"],e:"who you really are = kdo doopravdy jsi."},
{a:["those"],e:"those who = ti, kteří."}]},

{id:"four-day-week",title:"The four-day week",
text:"When a group of British companies agreed to trial a four-day working week, few expected the results to be {} positive. Staff worked one day {} each week but were paid the same salary. Far {} falling, productivity at most firms stayed the same or even rose. Employees reported feeling less stressed, and fewer of them took sick days. {} the end of the trial, the vast majority of companies had decided to keep the new schedule. That is not to say the model would work everywhere. In hospitals and schools, {} example, it is hard to see how the same work could be done in less time. Critics also warn that some employees may simply end {} working longer hours on the remaining days. Even {}, the results have convinced many business leaders that the five-day week is not as fixed as it once seemed. {} the coming years, we may well see it change.",
gaps:[
{a:["so"],e:"so + přídavné jméno."},
{a:["less","fewer"],e:"one day less = o den méně."},
{a:["from"],e:"Far from = Zdaleka ne, místo toho aby."},
{a:["by","at"],e:"By the end = Do konce."},
{a:["for"],e:"for example."},
{a:["up"],e:"end up doing = skončit tak, že."},
{a:["so"],e:"Even so = I tak."},
{a:["in","over","during"],e:"In / Over the coming years = v příštích letech."}]},

{id:"lamarr",title:"A forgotten inventor",
text:"Few people associate Hedy Lamarr with science, {} she was one of the most talented inventors of her time. A famous film star of the 1940s, she developed a system {} allowed radio signals to jump between frequencies, making {} almost impossible for an enemy to jam them. The navy showed little interest, and it was not {} decades later that her idea was put to use. Today, the technology on {} Wi-Fi and Bluetooth depend can be traced back to her work. Lamarr received {} money for her invention and was rarely given credit {} her lifetime. It was only shortly before her death in 2000 that she was recognised as {} pioneer of modern communications.",
gaps:[
{a:["yet","but","although","though"],e:"Protiklad."},
{a:["that","which"],e:"Vztažné zájmeno."},
{a:["it"],e:"make it impossible for sb to do sth."},
{a:["until","till"],e:"not until = teprve."},
{a:["which"],e:"on which … depend = na které … závisí."},
{a:["no","little"],e:"no / little money."},
{a:["during","in"],e:"during her lifetime = za jejího života."},
{a:["a"],e:"Neurčitý člen."}]},

{id:"heat-islands",title:"Why cities are getting hotter",
text:"Anyone who has spent a summer in a big city will know that it can feel much hotter {} the surrounding countryside. Concrete and asphalt absorb heat during the day and release it at night, {} that cities never really cool down. The lack of trees makes the problem worse, {} does the heat produced by cars and air conditioners. With heatwaves becoming more frequent, cities are looking for ways to keep temperatures {} check. Some are painting roofs white so that they reflect sunlight rather {} absorb it. Others are planting thousands of trees, {} not only provide shade but also cool the air around them. Such measures may seem small, but together they can make a real difference. After {}, a few degrees can be the difference between discomfort and danger. The question is {} cities can act quickly enough.",
gaps:[
{a:["than"],e:"hotter than."},
{a:["so"],e:"so that = takže."},
{a:["as"],e:"as does X = stejně jako X (inverze)."},
{a:["in"],e:"keep sth in check = držet pod kontrolou."},
{a:["than"],e:"rather than."},
{a:["which"],e:"Po čárce which."},
{a:["all"],e:"After all = Koneckonců."},
{a:["whether","if"],e:"whether = zda."}]}
],

p3: [
{id:"boredom",title:"The benefits of boredom",
text:"We tend to see boredom as something to be avoided, but psychologists are beginning to recognise that it can be {}. When we are bored, our minds start to wander, and this can lead to surprising bursts of {}. In one experiment, participants who had first completed a deliberately {} task came up with more {} ideas than those who had not. Researchers believe boredom acts as a signal that our current activity is {}, pushing us to look for something more meaningful. The problem is that smartphones now make it almost {} to be bored. Whenever we have a spare moment, we reach for our phones {}. Allowing ourselves to be bored {} may be one of the healthiest habits we can adopt.",
gaps:[
{w:"BENEFIT",a:["beneficial"],e:"benefit → beneficial."},
{w:"CREATE",a:["creativity"],e:"create → creative → creativity."},
{w:"TEDIUM",a:["tedious"],e:"tedium → tedious = nudný, zdlouhavý."},
{w:"IMAGINE",a:["imaginative"],e:"imaginative = nápaditý (imaginary = smyšlený)."},
{w:"SATISFY",a:["unsatisfying","unsatisfactory"],e:"Zápor: un-satisfy-ing."},
{w:"POSSIBLE",a:["impossible"],e:"im-possible."},
{w:"THINK",a:["unthinkingly"],e:"un-think-ing-ly = bezmyšlenkovitě."},
{w:"OCCASION",a:["occasionally"],e:"occasion → occasional → occasionally."}]},

{id:"space-tourism",title:"Holidays in space",
text:"Not long ago, the idea of ordinary people travelling into space seemed {}. Today, several companies are competing to offer flights to anyone with enough money. The first tickets were sold at {} prices, but supporters predict that costs will fall {} as the technology improves. Critics question whether such flights are {} at a time of climate crisis, pointing to the huge {} produced by each launch. There are also concerns about {}: passengers receive only a few days of training, and the {} of accidents is far from negligible. Nevertheless, demand shows no sign of slowing, and many see space tourism as an {} step in humanity's exploration of the universe.",
gaps:[
{w:"THINK",a:["unthinkable"],e:"un-think-able = nemyslitelný."},
{w:"ASTRONOMY",a:["astronomical"],e:"astronomical prices = astronomické ceny."},
{w:"DRAMA",a:["dramatically"],e:"Příslovce k fall."},
{w:"JUSTIFY",a:["justifiable","justified"],e:"justifiable = ospravedlnitelný."},
{w:"EMIT",a:["emissions"],e:"emit → emission(s)."},
{w:"SAFE",a:["safety"],e:"safe → safety."},
{w:"LIKELY",a:["likelihood"],e:"likely → likelihood = pravděpodobnost."},
{w:"AVOID",a:["unavoidable"],e:"un-avoid-able; člen „an“ napovídá samohlásku."}]},

{id:"home-office",title:"Working from home",
text:"When offices closed during the pandemic, millions of people discovered the {} of working from home. Many found that they were more {} without long commutes and constant {}. However, the change also brought problems. Some employees felt {} and missed the social side of office life. Others found it hard to switch off, as the {} between work and home became blurred. Managers, too, faced new challenges: how can you judge an employee's {} when you never see them? Most companies have now settled on an {} in which staff split their time between home and the office. Whether this compromise will prove {} in the long term remains to be seen.",
gaps:[
{w:"FLEXIBLE",a:["flexibility"],e:"flexible → flexibility."},
{w:"PRODUCE",a:["productive"],e:"produce → productive."},
{w:"INTERRUPT",a:["interruptions"],e:"Množné číslo – constant interruptions."},
{w:"ISOLATE",a:["isolated"],e:"felt isolated = cítili se izolovaní."},
{w:"BOUND",a:["boundaries","boundary"],e:"bound → boundary / boundaries = hranice."},
{w:"PERFORM",a:["performance"],e:"perform → performance."},
{w:"ARRANGE",a:["arrangement"],e:"arrange → arrangement."},
{w:"SUSTAIN",a:["sustainable"],e:"sustain → sustainable."}]},

{id:"persuasion",title:"The art of persuasion",
text:"Why do some speakers hold an audience's attention while others leave them completely {}? The answer, according to communication experts, lies less in what is said than in how it is said. {} speakers tell stories, use simple language and speak with genuine {}. They also show {}, admitting their own mistakes, which makes them more {}. Facts alone are rarely {}; audiences need an {} connection before they are willing to change their minds. The most common mistake, experts say, is a heavy {} on slides packed with text.",
gaps:[
{w:"MOVE",a:["unmoved"],e:"leave sb unmoved = nechat chladným."},
{w:"SUCCESS",a:["successful"],e:"success → successful."},
{w:"ENTHUSE",a:["enthusiasm"],e:"enthuse → enthusiasm."},
{w:"VULNERABLE",a:["vulnerability"],e:"vulnerable → vulnerability = zranitelnost."},
{w:"LIKE",a:["likeable","likable"],e:"likeable = sympatický. Obojí pravopis se uznává."},
{w:"PERSUADE",a:["persuasive"],e:"persuade → persuasive."},
{w:"EMOTION",a:["emotional"],e:"emotion → emotional."},
{w:"RELY",a:["reliance"],e:"rely → reliance on = spoléhání na."}]},

{id:"fast-fashion",title:"The real price of fast fashion",
text:"Clothes have never been cheaper, but the true cost of fast fashion is becoming {} clear. The industry is one of the world's biggest {}, responsible for vast amounts of waste and water use. Many garments are worn only a handful of times before being thrown away, and most are made from synthetic fibres that are not {}. Workers in some factories face {} conditions and earn wages that are barely enough for {}. In {}, some brands now promote recycling schemes, but critics dismiss these as little more than clever {}. The most {} solution, they argue, is simply to buy less.",
gaps:[
{w:"INCREASE",a:["increasingly"],e:"increasingly clear = čím dál jasnější."},
{w:"POLLUTE",a:["polluters"],e:"Podstatné jméno, osoba / subjekt: polluter(s)."},
{w:"BIODEGRADE",a:["biodegradable"],e:"biodegradable = biologicky odbouratelný."},
{w:"ACCEPT",a:["unacceptable"],e:"un-accept-able."},
{w:"SURVIVE",a:["survival"],e:"survive → survival."},
{w:"RESPOND",a:["response"],e:"In response = V reakci."},
{w:"MARKET",a:["marketing"],e:"market → marketing."},
{w:"EFFECT",a:["effective"],e:"effective = účinný."}]},

{id:"sleep-memory",title:"Sleep on it",
text:"Scientists have long suspected that sleep plays a vital role in memory, and recent research has provided {} evidence. During deep sleep, the brain appears to replay the day's experiences, strengthening the {} between nerve cells. People who are {} of sleep after learning something new perform {} worse when tested the next day. Interestingly, even a short nap can bring {} improvements. These findings have important {} for students, many of whom stay up all night before exams. Such a strategy is not only {} but may actually be {}.",
gaps:[
{w:"CONVINCE",a:["convincing"],e:"convincing evidence = přesvědčivé důkazy."},
{w:"CONNECT",a:["connections"],e:"Množné číslo."},
{w:"DEPRIVE",a:["deprived"],e:"deprived of sleep = nevyspalý."},
{w:"SIGNIFY",a:["significantly"],e:"Příslovce k worse."},
{w:"NOTICE",a:["noticeable"],e:"noticeable = znatelný (pozor na -eable)."},
{w:"IMPLY",a:["implications"],e:"imply → implication(s)."},
{w:"EFFECT",a:["ineffective"],e:"in-effective."},
{w:"PRODUCE",a:["counterproductive","counter-productive"],e:"counterproductive."}]},

{id:"rivers",title:"Setting rivers free",
text:"For centuries, rivers have been straightened, dammed and {} to make them more useful to humans. Now, a growing number of countries are taking the opposite approach and removing {} dams. The results have often been {}. Within a few years, fish return to stretches of river where they had not been seen for {}. The {} of natural flows also reduces the risk of flooding downstream, as water spreads out across the {} land. Not everyone welcomes the changes; some local residents feel a strong {} to old mill ponds. Campaigners, however, argue that the {} benefits far outweigh such concerns.",
gaps:[
{w:"DEEP",a:["deepened"],e:"deep → deepen → deepened."},
{w:"NECESSARY",a:["unnecessary"],e:"un-necessary."},
{w:"REMARK",a:["remarkable"],e:"remarkable = pozoruhodný."},
{w:"GENERATE",a:["generations"],e:"for generations = po generace."},
{w:"RESTORE",a:["restoration"],e:"restore → restoration."},
{w:"SURROUND",a:["surrounding"],e:"the surrounding land = okolní."},
{w:"ATTACH",a:["attachment"],e:"attachment to = citové pouto k."},
{w:"ECOLOGY",a:["ecological"],e:"ecology → ecological."}]},

{id:"queues",title:"The psychology of queuing",
text:"Few things are as {} as waiting in a long queue. Yet research suggests that our {} depends less on how long we actually wait than on how long the wait feels. {} time feels shorter than empty time, which is why some airports make passengers walk further to collect their luggage. Waiting without any {} is particularly hard to bear. People are also very {} to fairness: we become {} if someone pushes in, even when it costs us only a few seconds. Companies that understand these {} can improve customer {} without reducing waiting times at all.",
gaps:[
{w:"FRUSTRATE",a:["frustrating"],e:"-ing popisuje věc, -ed pocit."},
{w:"PATIENT",a:["impatience"],e:"im-patience."},
{w:"OCCUPY",a:["occupied"],e:"Occupied time = vyplněný čas."},
{w:"EXPLAIN",a:["explanation"],e:"explanation (bez i)."},
{w:"SENSE",a:["sensitive"],e:"sensitive to = citlivý na (sensible = rozumný)."},
{w:"FURY",a:["furious"],e:"fury → furious."},
{w:"PRINCIPLE",a:["principles"],e:"Množné číslo – these principles."},
{w:"SATISFY",a:["satisfaction"],e:"customer satisfaction."}]}
]
};
