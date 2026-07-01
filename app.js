const materials = [
  {
    id: "bc-missing-class",
    title: "Missing a class",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/a2/missing-class",
    scene: "学校沟通",
    accent: "英式/国际",
    level: "A2",
    duration: "2-4m",
    format: "音频 + 文本 + 练习",
    priority: 98,
    fit: "孩子缺课、问老师补作业、确认截止日期的核心场景。适合用来练 polite request 和 classroom instructions。",
    phrases: ["missed the class", "What homework did I miss?", "hand it in", "deadline"],
    focus: "弱读的 did I / do I，以及 homework、assignment、deadline 这类学校高频词。"
  },
  {
    id: "bc-arriving-late",
    title: "Arriving late to class",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/b1/arriving-late-class",
    scene: "学校沟通",
    accent: "英式/国际",
    level: "B1",
    duration: "3-5m",
    format: "音频 + 文本 + 练习",
    priority: 96,
    fit: "迟到、没听清老师刚才说什么、向同学确认页码和任务，和家长在学校前台沟通也很接近。",
    phrases: ["I'm sorry I'm late", "Which page are we on?", "What did I miss?", "Can you repeat that?"],
    focus: "快速问句里的 what did I / which page / are we on。"
  },
  {
    id: "bc-changing-meeting",
    title: "Changing a meeting time",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/a2/changing-meeting-time",
    scene: "预约改期",
    accent: "英式/国际",
    level: "A2",
    duration: "2-4m",
    format: "音频 + 文本 + 练习",
    priority: 94,
    fit: "直接迁移到改家长会、改校车沟通、改医生预约。重点是时间、日期和礼貌协商。",
    phrases: ["reschedule", "Does Tuesday work?", "I'm afraid I can't", "How about ...?"],
    focus: "日期和时间在快语速里的边界，例如 Tuesday at two thirty。"
  },
  {
    id: "bc-leaving-message",
    title: "Leaving a message",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/a2/leaving-message",
    scene: "学校沟通",
    accent: "英式/国际",
    level: "A2",
    duration: "2-4m",
    format: "音频 + 文本 + 练习",
    priority: 91,
    fit: "练给学校办公室、校车公司、医生诊所留言。名字、电话、回电请求是听力重点。",
    phrases: ["Could you ask her to call me back?", "My number is ...", "leave a message", "urgent"],
    focus: "电话号码、姓名拼写、call me back 的连读。"
  },
  {
    id: "bc-invitation-party",
    title: "An invitation to a party",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/a2/invitation-party",
    scene: "家长社交",
    accent: "英式/国际",
    level: "A2",
    duration: "2-4m",
    format: "音频 + 文本 + 练习",
    priority: 88,
    fit: "生日会、playdate、家长聚会的邀请与确认。适合练地址、时间、带什么东西。",
    phrases: ["Would you like to come?", "bring something", "address", "See you then"],
    focus: "邀请里的弱读 would you / d'you，以及地址细节。"
  },
  {
    id: "bc-instructions-assignment",
    title: "Instructions for an assignment",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/a2/instructions-assignment",
    scene: "学校沟通",
    accent: "英式/国际",
    level: "A2",
    duration: "4-6m",
    format: "音频 + 文本 + 练习",
    priority: 90,
    fit: "老师解释作业要求、评分标准和提交方式。适合练家长帮孩子复盘学校任务。",
    phrases: ["assignment", "criteria", "submit", "work in pairs"],
    focus: "多步骤指令的排序：first, then, after that, finally。"
  },
  {
    id: "bc-transport-announcements",
    title: "Transport announcements",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/a2/transport-announcements",
    scene: "交通出行",
    accent: "英式/国际",
    level: "A2",
    duration: "2-4m",
    format: "音频 + 文本 + 练习",
    priority: 72,
    fit: "机场、地铁、校外活动集合时常见的广播信息。训练数字、站名和延误信息。",
    phrases: ["platform", "delay", "departure", "arriving at"],
    focus: "噪音背景下的数字和地点捕捉。"
  },
  {
    id: "bc-facts-figures",
    title: "Facts and figures",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/a2/facts-figures",
    scene: "数字信息",
    accent: "英式/国际",
    level: "A2",
    duration: "4-6m",
    format: "音频 + 文本 + 练习",
    priority: 74,
    fit: "练百分比、排名、费用、数量。适合听学校说明会里的学费、班级人数、活动名额。",
    phrases: ["per cent", "approximately", "increase", "compared with"],
    focus: "英式数字读法和相近数字的辨别。"
  },
  {
    id: "bc-chemist",
    title: "At the chemist",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/b1/chemist",
    scene: "健康就医",
    accent: "英式",
    level: "B1",
    duration: "3-5m",
    format: "音频 + 文本 + 练习",
    priority: 92,
    fit: "孩子感冒、过敏、买药、问剂量时非常实用。也能练药房职员的英式口音。",
    phrases: ["sore throat", "take one tablet", "prescription", "side effects"],
    focus: "剂量、频率、症状描述，以及 tablet / capsule / syrup。"
  },
  {
    id: "bc-making-decision",
    title: "Making a decision",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/b1/making-decision",
    scene: "家长社交",
    accent: "英式/国际",
    level: "B1",
    duration: "4-6m",
    format: "音频 + 文本 + 练习",
    priority: 82,
    fit: "家长委员会、志愿者活动、课后班选择都需要听懂不同人的提议与妥协。",
    phrases: ["What do you think?", "I'm not sure", "Let's go with", "pros and cons"],
    focus: "听转折与态度：but, actually, I see your point。"
  },
  {
    id: "bc-diversity-meeting",
    title: "A team meeting about diversity",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/b1/team-meeting-about-diversity",
    scene: "教育议题",
    accent: "英式/国际",
    level: "B1",
    duration: "6-8m",
    format: "音频 + 文本 + 练习",
    priority: 70,
    fit: "国际学校常谈 diversity、inclusion、community culture。适合进阶练多方会议发言。",
    phrases: ["inclusive", "representation", "raise awareness", "take action"],
    focus: "会议中的发言轮换、补充意见和礼貌不同意。"
  },
  {
    id: "bc-work-life-balance",
    title: "Work-life balance",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/b1/work-life-balance",
    scene: "教育议题",
    accent: "英式/国际",
    level: "B1",
    duration: "6-8m",
    format: "音频 + 文本 + 练习",
    priority: 63,
    fit: "可迁移到讨论作业量、课外班、孩子压力和家庭节奏。",
    phrases: ["burnout", "flexible", "workload", "set boundaries"],
    focus: "抽象观点听力：原因、例子、结论的结构。"
  },
  {
    id: "bc-digital-detox",
    title: "Digital detox podcast",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/b2/digital-detox-podcast",
    scene: "数字科技",
    accent: "英式/国际",
    level: "B2",
    duration: "6-8m",
    format: "音频 + 文本 + 练习",
    priority: 76,
    fit: "屏幕时间、手机使用、家庭规则是国际学校家长高频话题。",
    phrases: ["screen time", "disconnect", "online habits", "notifications"],
    focus: "较长播客里抓主张、例子和建议。"
  },
  {
    id: "bc-study-group",
    title: "Creating a study group",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/b2/creating-study-group",
    scene: "学校沟通",
    accent: "英式/国际",
    level: "B2",
    duration: "5-7m",
    format: "音频 + 文本 + 练习",
    priority: 68,
    fit: "孩子小组项目、家长帮忙组织复习小组、同学间协作都能用到。",
    phrases: ["study group", "split the tasks", "keep each other accountable", "meet regularly"],
    focus: "听懂安排分工和不同人的顾虑。"
  },
  {
    id: "bc-office-party",
    title: "Office party planning",
    source: "British Council",
    sourceCode: "BC",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/b2/office-party-planning",
    scene: "家长社交",
    accent: "英式/国际",
    level: "B2",
    duration: "4-6m",
    format: "音频 + 文本 + 练习",
    priority: 69,
    fit: "可迁移到班级聚餐、义卖、家委活动安排。练预算、任务分配和偏好。",
    phrases: ["venue", "budget", "catering", "organise"],
    focus: "多说话人讨论里的提议、同意和反对。"
  },
  {
    id: "esl-cyberbullying",
    title: "Cyberbullying",
    source: "Randall ESL",
    sourceCode: "ESL",
    url: "https://www.esl-lab.com/difficult/cyberbullying/",
    scene: "校园安全",
    accent: "美式",
    level: "C1",
    duration: "8-12m",
    format: "音频 + quiz + transcript",
    priority: 86,
    fit: "家长和老师谈孩子在学校遇到的问题，场景真实且信息密度高。",
    phrases: ["bullying", "online harassment", "report it", "take screenshots"],
    focus: "情绪化话题里抓事实、责任和下一步。"
  },
  {
    id: "esl-school-supplies",
    title: "School Supplies",
    source: "Randall ESL",
    sourceCode: "ESL",
    url: "https://www.esl-lab.com/intermediate/school-supplies/",
    scene: "学校沟通",
    accent: "美式",
    level: "B1",
    duration: "5-7m",
    format: "音频 + quiz + transcript",
    priority: 80,
    fit: "买学习用品、预算和孩子需求，和开学准备很接近。",
    phrases: ["calculator", "notebook", "supplies", "on sale"],
    focus: "物品名、价格、理由的快速识别。"
  },
  {
    id: "esl-homework-debate",
    title: "The Homework Debate",
    source: "Randall ESL",
    sourceCode: "ESL",
    url: "https://www.esl-lab.com/interviews/a-homework-usefulness/",
    scene: "教育议题",
    accent: "美式",
    level: "C1",
    duration: "8-12m",
    format: "访谈 + quiz + transcript",
    priority: 78,
    fit: "讨论作业量、busywork、家庭时间，是家长和老师沟通时常见的议题。",
    phrases: ["busywork", "reinforce learning", "family time", "stress"],
    focus: "观点型访谈里区分事实、个人看法和例子。"
  },
  {
    id: "esl-medical-advice",
    title: "Medical Advice",
    source: "Randall ESL",
    sourceCode: "ESL",
    url: "https://www.esl-lab.com/intermediate/medical-advice/",
    scene: "健康就医",
    accent: "美式",
    level: "B1",
    duration: "5-7m",
    format: "音频 + quiz + transcript",
    priority: 74,
    fit: "孩子生病、问症状和处理建议。和诊所前台或校医沟通很接近。",
    phrases: ["symptoms", "fever", "make an appointment", "see a doctor"],
    focus: "症状描述和建议动作的区分。"
  },
  {
    id: "esl-apartment",
    title: "Apartments for Rent",
    source: "Randall ESL",
    sourceCode: "ESL",
    url: "https://www.esl-lab.com/intermediate/apartments-for-rent/",
    scene: "日常生活",
    accent: "美式",
    level: "B1",
    duration: "5-7m",
    format: "音频 + quiz + transcript",
    priority: 58,
    fit: "搬家、问房源、通勤距离和设施，适合国际家庭日常安顿。",
    phrases: ["rent", "utilities", "neighbourhood", "available"],
    focus: "价格、地址、条件和比较。"
  },
  {
    id: "esl-telephone-message",
    title: "Telephone Message",
    source: "Randall ESL",
    sourceCode: "ESL",
    url: "https://www.esl-lab.com/easy/phone-message/",
    scene: "预约改期",
    accent: "美式",
    level: "A2",
    duration: "3-5m",
    format: "音频 + quiz + transcript",
    priority: 66,
    fit: "练电话留言、姓名和号码。适合学校办公室、牙医、活动机构。",
    phrases: ["message", "available", "call back", "phone number"],
    focus: "电话音质下捕捉数字、名字和回拨请求。"
  },
  {
    id: "elllo-india-school",
    title: "School Life in Asia",
    source: "ELLLO",
    sourceCode: "ELLLO",
    url: "https://www.elllo.org/english/0551/592-Nitya-Lunch.html",
    scene: "口音适应",
    accent: "印度英语",
    level: "B1",
    duration: "3-5m",
    format: "多说话人 + transcript",
    priority: 84,
    fit: "印度说话人比较印度和日本学校生活，适合专门适应印度英语的音节节奏和学校话题词汇。",
    phrases: ["school life", "lunch", "education system", "classes"],
    focus: "印度英语中较清晰的音节边界，以及 t/d/r 的不同实现。"
  },
  {
    id: "elllo-india-family",
    title: "Life in India",
    source: "ELLLO",
    sourceCode: "ELLLO",
    url: "https://www.elllo.org/english/0551/595-Nitya-Varnasi.html",
    scene: "口音适应",
    accent: "印度英语",
    level: "B1",
    duration: "3-5m",
    format: "音频 + transcript",
    priority: 73,
    fit: "印度说话人介绍家乡和日常背景，适合作为印度英语轻量泛听。",
    phrases: ["hometown", "city", "religious", "community"],
    focus: "稳定跟上印度英语的句子重音。"
  },
  {
    id: "elllo-british-daily",
    title: "British English: Daily Routines",
    source: "ELLLO",
    sourceCode: "ELLLO",
    url: "https://elllo.org/english/0701/T704-Phil-Intro.htm",
    scene: "日常生活",
    accent: "英式",
    level: "B1",
    duration: "3-5m",
    format: "音频 + transcript",
    priority: 57,
    fit: "短英式口语素材，用来练真实自然速度下的日常表达。",
    phrases: ["routine", "usually", "at the weekend", "commute"],
    focus: "英式非卷舌音和句尾弱化。"
  },
  {
    id: "elllo-singapore",
    title: "Getting Good Grades",
    source: "ELLLO",
    sourceCode: "ELLLO",
    url: "https://www.elllo.org/video/1001/V1026-Grades.htm",
    scene: "教育议题",
    accent: "新加坡英语",
    level: "B1",
    duration: "3-5m",
    format: "音频 + transcript",
    priority: 62,
    fit: "新加坡说话人讨论成绩是否被过度强调，贴近本地教育压力和家长聊天语境。",
    phrases: ["grades", "overemphasised", "students", "pressure"],
    focus: "新加坡英语的节奏、短元音和教育话题表达。"
  },
  {
    id: "bbc-best-schools",
    title: "Which country has the best schools?",
    source: "BBC Learning English",
    sourceCode: "BBC",
    url: "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
    scene: "教育议题",
    accent: "英式",
    level: "B2",
    duration: "6m",
    format: "播客 + vocabulary",
    priority: 81,
    fit: "教育制度、学校表现和国际比较，适合国际学校家长进阶讨论。",
    phrases: ["education system", "rankings", "performance", "curriculum"],
    focus: "BBC 主持人的英式清晰快语速和观点结构。"
  },
  {
    id: "bbc-smartphones",
    title: "Keeping kids off smartphones",
    source: "BBC Learning English",
    sourceCode: "BBC",
    url: "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
    scene: "数字科技",
    accent: "英式",
    level: "B2",
    duration: "6m",
    format: "播客 + vocabulary",
    priority: 77,
    fit: "手机、屏幕时间、家庭规则，和国际学校家长聊天非常常见。",
    phrases: ["smartphone ban", "screen time", "online safety", "peer pressure"],
    focus: "从自然语速里提取立场和例证。"
  },
  {
    id: "bbc-mum-friends",
    title: "Making mum friends",
    source: "BBC Learning English",
    sourceCode: "BBC",
    url: "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
    scene: "家长社交",
    accent: "英式",
    level: "B2",
    duration: "6m",
    format: "播客 + vocabulary",
    priority: 79,
    fit: "家长之间建立关系、small talk、社群归属感，和国际学校真实生活很贴近。",
    phrases: ["make friends", "small talk", "support network", "parenting"],
    focus: "轻松话题中抓幽默、态度和文化表达。"
  },
  {
    id: "indianexpress-disclosure",
    title: "The need for better public disclosure in schools",
    source: "Indian Express",
    sourceCode: "IE",
    url: "https://indianexpress.com/audio/3-things/central-square-foundation-the-need-for-better-public-disclosure-in-schools/10284641/",
    scene: "教育议题",
    accent: "印度英语",
    level: "B2",
    duration: "10-20m",
    format: "真实播客",
    priority: 93,
    fit: "家长如何评估学校质量、学校信息透明度，主题非常贴近国际学校择校。",
    phrases: ["public disclosure", "school quality", "accountability", "parents"],
    focus: "印度英语真实播客速度，训练抓主旨而非逐词听。"
  },
  {
    id: "indianexpress-ai-education",
    title: "The evolving space for AI in education",
    source: "Indian Express",
    sourceCode: "IE",
    url: "https://indianexpress.com/audio/3-things/central-square-foundation-the-evolving-space-for-ai-in-education/10311525/",
    scene: "数字科技",
    accent: "印度英语",
    level: "B2",
    duration: "10-20m",
    format: "真实播客",
    priority: 89,
    fit: "AI、教育科技、个性化学习，是国际学校家长很容易遇到的话题。",
    phrases: ["AI in education", "personalised learning", "teachers", "assessment"],
    focus: "印度英语中多音节教育词汇的识别。"
  },
  {
    id: "indianexpress-midday-meal",
    title: "Bengal mid-day meal row",
    source: "Indian Express",
    sourceCode: "IE",
    url: "https://indianexpress.com/audio/3-things/bengal-mid-day-meal-row-karnataka-farmers-protest-and-a-mass-poisoning-plot/10761972/",
    scene: "校园安全",
    accent: "印度英语",
    level: "C1",
    duration: "10-20m",
    format: "真实新闻播客",
    priority: 64,
    fit: "学校餐食和儿童营养相关，但新闻背景较复杂，适合作为进阶抗压听力。",
    phrases: ["mid-day meal", "nutrition", "school children", "investigation"],
    focus: "真实新闻里快速区分背景、事件和评论。"
  },
  {
    id: "cna-pisa-schools",
    title: "PISA rankings and Singapore schools",
    source: "CNA",
    sourceCode: "CNA",
    url: "https://www.channelnewsasia.com/podcasts/pisa-ranking-moe-schools-heart-matter-podcast-4088071",
    scene: "教育议题",
    accent: "新加坡英语",
    level: "B2",
    duration: "20m+",
    format: "真实播客",
    priority: 71,
    fit: "如果你在新加坡生活，这类教育讨论能帮助理解本地学校语境和家长关切。",
    phrases: ["PISA", "rankings", "education system", "students"],
    focus: "新加坡英语和广播主持人的较快对谈节奏。"
  },
  {
    id: "cna-parent-classmate",
    title: "My Parent, My Classmate",
    source: "CNA",
    sourceCode: "CNA",
    url: "https://www.channelnewsasia.com/watch/my-parent-my-classmate-back-school-1485021",
    scene: "家长社交",
    accent: "新加坡英语",
    level: "B2",
    duration: "20m+",
    format: "纪录片视频",
    priority: 59,
    fit: "虽然不是国际学校，但很适合听本地家长与孩子的真实叙事和教育词汇。",
    phrases: ["back to school", "classmate", "parent", "challenge"],
    focus: "视频材料中跟随情境推断意思。"
  }
];

const programVersion = "india-rhythm-v1";
const indiaDrillOrder = [
  "elllo-india-school",
  "elllo-india-family",
  "indianexpress-disclosure",
  "indianexpress-ai-education",
  "indianexpress-midday-meal"
];

const storageKey = "parent-listening-lab";
const progress = loadProgress();
normalizeProgram();

const state = {
  selectedId: progress.selectedId || indiaDrillOrder[0],
  filters: {
    scene: new Set(),
    accent: new Set(),
    level: new Set(),
    query: ""
  },
  sort: "priority",
  focusMode: progress.focusMode || "india",
  activePanel: null
};

const els = {
  homeButton: document.querySelector("#homeButton"),
  focusIndian: document.querySelector("#focusIndian"),
  taskModeLabel: document.querySelector("#taskModeLabel"),
  pickToday: document.querySelector("#pickToday"),
  selectedMeta: document.querySelector("#selectedMeta"),
  selectedTitle: document.querySelector("#selectedTitle"),
  selectedFit: document.querySelector("#selectedFit"),
  drillHint: document.querySelector("#drillHint"),
  selectedTags: document.querySelector("#selectedTags"),
  openSource: document.querySelector("#openSource"),
  sourceMark: document.querySelector("#sourceMark"),
  trainingSteps: document.querySelector("#trainingSteps"),
  toggleDone: document.querySelector("#toggleDone"),
  toggleReview: document.querySelector("#toggleReview"),
  taskEstimate: document.querySelector("#taskEstimate"),
  panelButtons: document.querySelectorAll("[data-panel]"),
  drawer: document.querySelector("#drawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  drawerEyebrow: document.querySelector("#drawerEyebrow"),
  drawerTitle: document.querySelector("#drawerTitle"),
  drawerBody: document.querySelector("#drawerBody"),
  closeDrawer: document.querySelector("#closeDrawer")
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {
      done: [],
      review: [],
      notes: {},
      steps: {},
      ratings: {},
      selectedId: "",
      focusMode: "india",
      trainingVersion: ""
    };
  } catch {
    return { done: [], review: [], notes: {}, steps: {}, ratings: {}, selectedId: "", focusMode: "india", trainingVersion: "" };
  }
}

function normalizeProgram() {
  progress.done = Array.isArray(progress.done) ? progress.done : [];
  progress.review = Array.isArray(progress.review) ? progress.review : [];
  progress.notes = progress.notes || {};
  progress.steps = progress.steps || {};
  progress.ratings = progress.ratings || {};
  progress.focusMode = progress.focusMode || "india";
  if (progress.trainingVersion !== programVersion) {
    progress.trainingVersion = programVersion;
    if (!isIndianMaterialId(progress.selectedId)) {
      progress.selectedId = indiaDrillOrder[0];
    }
  }
}

function saveProgress() {
  progress.selectedId = state.selectedId;
  progress.focusMode = state.focusMode;
  progress.trainingVersion = programVersion;
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  } catch {
    // Some file:// browser contexts restrict localStorage. Keep the in-memory session usable.
  }
}

function uniqueValues(key) {
  return [...new Set(materials.map((item) => item[key]))].sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function isIndianMaterial(item) {
  return item?.accent === "印度英语";
}

function isIndianMaterialId(id) {
  return isIndianMaterial(materials.find((item) => item.id === id));
}

function orderedIndianMaterials() {
  const ordered = indiaDrillOrder
    .map((id) => materials.find((item) => item.id === id))
    .filter(Boolean);
  const rest = materials.filter((item) => isIndianMaterial(item) && !indiaDrillOrder.includes(item.id));
  return [...ordered, ...rest];
}

function filteredMaterials() {
  const query = state.filters.query.trim().toLowerCase();
  return materials
    .filter((item) => {
      const matchesScene = state.filters.scene.size === 0 || state.filters.scene.has(item.scene);
      const matchesAccent = state.filters.accent.size === 0 || state.filters.accent.has(item.accent);
      const matchesLevel = state.filters.level.size === 0 || state.filters.level.has(item.level);
      const haystack = [
        item.title,
        item.source,
        item.scene,
        item.accent,
        item.level,
        item.fit,
        ...item.phrases
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      return matchesScene && matchesAccent && matchesLevel && matchesQuery;
    })
    .sort((a, b) => {
      if (state.sort === "level") {
        return levelRank(a.level) - levelRank(b.level) || b.priority - a.priority;
      }
      if (state.sort === "source") {
        return a.source.localeCompare(b.source) || b.priority - a.priority;
      }
      return b.priority - a.priority;
    });
}

function levelRank(level) {
  return { A2: 1, B1: 2, B2: 3, C1: 4 }[level] || 9;
}

function selectMaterial(id) {
  state.selectedId = id;
  saveProgress();
  renderSelected();
  if (state.activePanel === "library") {
    renderDrawer("library");
  }
}

function selectedMaterial() {
  return materials.find((item) => item.id === state.selectedId) || materials[0];
}

function renderSelected() {
  const item = selectedMaterial();
  const done = progress.done.includes(item.id);
  const review = progress.review.includes(item.id);
  const indian = isIndianMaterial(item);

  els.selectedMeta.textContent = `${item.source} · ${item.format} · ${item.duration}`;
  els.selectedTitle.textContent = item.title;
  els.selectedFit.textContent = item.fit;
  els.drillHint.textContent = indian
    ? "今天不要追每个词。先抓句子节奏和内容词：名词、动词、数字、学校相关词；漏掉虚词也没关系。"
    : "这条适合作为热身。主训练建议切回印度英语材料，练节奏和内容词捕捉。";
  els.drillHint.hidden = false;
  els.openSource.href = item.url;
  els.sourceMark.textContent = item.sourceCode;
  els.sourceMark.style.background = sourceColor(item.sourceCode);
  els.taskEstimate.textContent = `预计 ${item.duration.includes("20") || item.level === "C1" ? "50" : "40"} 分钟`;
  els.selectedTags.innerHTML = [
    `<span class="tag scene">${item.scene}</span>`,
    `<span class="tag accent">${item.accent}</span>`,
    `<span class="tag level">${item.level}</span>`,
    `<span class="tag">${item.duration}</span>`
  ].join("");

  els.toggleDone.classList.toggle("active", done);
  els.toggleDone.textContent = done ? "已完成" : "标记完成";
  els.toggleReview.classList.toggle("active", review);
  els.toggleReview.innerHTML = `<i data-lucide="${review ? "bookmark-check" : "bookmark"}"></i>`;
  els.toggleReview.title = review ? "已加入复习" : "加入复习";
  els.toggleReview.setAttribute("aria-label", review ? "已加入复习" : "加入复习");
  els.taskModeLabel.textContent = state.focusMode === "india" ? "印度节奏专项" : "今日任务";
  els.focusIndian.classList.toggle("active", state.focusMode === "india");

  renderSteps(item);
  refreshIcons();
}

function sourceColor(code) {
  const colors = {
    BC: "#d9eeeb",
    ESL: "#f4ddd5",
    ELLLO: "#e5ead6",
    BBC: "#dce8ee",
    IE: "#f2e5c8",
    CNA: "#eadfd5"
  };
  return colors[code] || "#f1efe7";
}

function renderSteps(item) {
  const saved = progress.steps[item.id] || {};
  const steps = isIndianMaterial(item) ? indianRhythmSteps(item) : standardSteps(item);

  els.trainingSteps.innerHTML = steps
    .map(
      (step) => `
        <article class="step-card ${saved[step.id] ? "is-done" : ""}">
          <label>
            <input type="checkbox" data-step="${step.id}" ${saved[step.id] ? "checked" : ""} />
            <span class="step-title">${step.title}</span>
            <span class="step-time">${step.time}</span>
          </label>
          <p>${step.text}</p>
        </article>
      `
    )
    .join("");

  els.trainingSteps.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.addEventListener("change", () => {
      progress.steps[item.id] = progress.steps[item.id] || {};
      progress.steps[item.id][input.dataset.step] = input.checked;
      input.closest(".step-card")?.classList.toggle("is-done", input.checked);
      saveProgress();
    });
  });
}

function standardSteps(item) {
  return [
    {
      id: "blind",
      title: "裸听",
      time: "5m",
      text: `不看文本听一遍，只写主旨、人物关系和一个可执行信息。关键词：${item.phrases.slice(0, 2).join(" / ")}。`
    },
    {
      id: "decode",
      title: "精听",
      time: "15m",
      text: `截取 45-90 秒，逐句暂停。重点拆 ${item.focus}`
    },
    {
      id: "shadow",
      title: "影子跟读",
      time: "10m",
      text: `模仿原音 3 遍，跟停顿和重音，不追求每个音完美。短语：${item.phrases.join(" / ")}。`
    },
    {
      id: "speed",
      title: "提速复听",
      time: "10m",
      text: "0.9x 理清细节，1.0x 正常听，1.25x 抗压听。最后用 5 句话复述。"
    }
  ];
}

function indianRhythmSteps(item) {
  return [
    {
      id: "blind",
      title: "抓骨架",
      time: "6m",
      text: `原速听一遍，只写主题、说话人立场和 3 个内容词。先抓：${item.phrases.slice(0, 3).join(" / ")}。`
    },
    {
      id: "decode",
      title: "切节奏",
      time: "14m",
      text: "截 30-60 秒，按意群暂停，不逐词抄。用斜线标出停顿，圈出重读的名词、动词、数字。"
    },
    {
      id: "shadow",
      title: "回声跟读",
      time: "10m",
      text: "每次只跟 3-6 个词，模仿音节节奏和句尾语气。印度英语常更像 syllable-timed，不要套美式弱读预期。"
    },
    {
      id: "speed",
      title: "回原速",
      time: "10m",
      text: "0.85x 理清结构，1.0x 听两遍不断开。最后写 5 个 bullet：主题、原因、例子、数字、下一步。"
    }
  ];
}

function renderMaterialCards() {
  const list = filteredMaterials();

  if (list.length === 0) {
    return `<div class="empty-state">没有匹配的材料。清空筛选或换一个关键词。</div>`;
  }

  return list
    .map((item) => {
      const isDone = progress.done.includes(item.id);
      const isReview = progress.review.includes(item.id);
      const active = item.id === state.selectedId;
      return `
        <button class="material-card ${active ? "active" : ""} ${isDone ? "done" : ""} ${isReview ? "review" : ""}" data-material-id="${item.id}">
          <div class="card-top">
            <span class="card-source">${item.source} · ${item.level} · ${item.duration}</span>
            <span class="card-source">${isDone ? "已完成" : isReview ? "复习" : ""}</span>
          </div>
          <h3>${item.title}</h3>
          <p class="card-desc">${item.fit}</p>
          <div class="mini-tags">
            <span>${item.scene}</span>
            <span>${item.accent}</span>
            <span>${item.level}</span>
            <span>${item.duration}</span>
          </div>
        </button>
      `;
    })
    .join("");
}

function attachMaterialCards() {
  els.drawerBody.querySelectorAll("[data-material-id]").forEach((card) => {
    card.addEventListener("click", () => {
      selectMaterial(card.dataset.materialId);
      closeDrawer();
    });
  });
}

function toggleArrayValue(array, value) {
  const index = array.indexOf(value);
  if (index >= 0) {
    array.splice(index, 1);
  } else {
    array.push(value);
  }
}

function getCurrentNotes() {
  const item = selectedMaterial();
  return progress.notes[item.id] || {};
}

function saveNotesFromDrawer() {
  const item = selectedMaterial();
  progress.notes[item.id] = {
    gist: document.querySelector("#gistNote")?.value || "",
    detail: document.querySelector("#detailNote")?.value || "",
    miss: document.querySelector("#missNote")?.value || ""
  };
  progress.ratings[item.id] = document.querySelector("#difficultyRating")?.value || 3;
  saveProgress();
}

function pickToday() {
  const basePool = state.focusMode === "india" ? orderedIndianMaterials() : materials;
  const currentIndex = Math.max(0, basePool.findIndex((item) => item.id === state.selectedId));
  const unseen = basePool.filter((item) => !progress.done.includes(item.id) && item.id !== state.selectedId);
  const pool = unseen.length > 0 ? unseen : basePool.filter((item) => item.id !== state.selectedId);
  const nextInOrder = basePool
    .slice(currentIndex + 1)
    .concat(basePool.slice(0, currentIndex))
    .find((item) => pool.includes(item));
  const next = nextInOrder || pool[0] || materials[0];
  selectMaterial(next.id);
}

function copyNotes() {
  const item = selectedMaterial();
  const notes = getCurrentNotes();
  const text = [
    `Material: ${item.title}`,
    `Source: ${item.source}`,
    `URL: ${item.url}`,
    "",
    `Context: ${notes.gist || ""}`,
    `Keywords / numbers: ${notes.detail || ""}`,
    `Missed because: ${notes.miss || ""}`,
    `Difficulty: ${progress.ratings[item.id] || 3}/5`
  ].join("\n");

  navigator.clipboard?.writeText(text);
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function openDrawer(panel) {
  state.activePanel = panel;
  els.drawer.hidden = false;
  els.drawerBackdrop.hidden = false;
  els.drawer.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => els.drawer.classList.add("is-open"));
  document.querySelectorAll("[data-panel]").forEach((button) => {
    button.classList.toggle("active", button.dataset.panel === panel);
  });
  renderDrawer(panel);
}

function closeDrawer() {
  state.activePanel = null;
  els.drawer.classList.remove("is-open");
  els.drawer.setAttribute("aria-hidden", "true");
  els.drawerBackdrop.hidden = true;
  document.querySelectorAll("[data-panel]").forEach((button) => button.classList.remove("active"));
}

function renderDrawer(panel) {
  const renderers = {
    library: renderLibraryPanel,
    notes: renderNotesPanel,
    progress: renderProgressPanel,
    guide: renderGuidePanel
  };
  (renderers[panel] || renderLibraryPanel)();
  refreshIcons();
}

function renderLibraryPanel() {
  els.drawerEyebrow.textContent = "Materials";
  els.drawerTitle.textContent = "材料库";
  els.drawerBody.innerHTML = `
    <div class="drawer-section">
      <label class="search-box">
        <i data-lucide="search"></i>
        <input id="searchInput" type="search" value="${escapeAttribute(state.filters.query)}" placeholder="搜场景、来源、关键词" />
      </label>
      ${filterBlock("场景", "scene", uniqueValues("scene"))}
      ${filterBlock("口音", "accent", uniqueValues("accent"))}
      ${filterBlock("难度", "level", ["A2", "B1", "B2", "C1"])}
      <div class="segmented" aria-label="排序">
        ${segmentButton("priority", "推荐")}
        ${segmentButton("level", "难度")}
        ${segmentButton("source", "来源")}
      </div>
      <p class="muted">${filteredMaterials().length} 个材料</p>
      <div class="material-list">${renderMaterialCards()}</div>
    </div>
  `;

  const searchInput = document.querySelector("#searchInput");
  searchInput?.addEventListener("input", (event) => {
    state.filters.query = event.target.value;
    renderLibraryPanel();
  });

  els.drawerBody.querySelectorAll("[data-filter-key]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.filterKey;
      const value = button.dataset.filterValue;
      toggleSetValue(state.filters[key], value);
      renderLibraryPanel();
    });
  });

  els.drawerBody.querySelectorAll("[data-sort]").forEach((button) => {
    button.addEventListener("click", () => {
      state.sort = button.dataset.sort;
      renderLibraryPanel();
    });
  });

  attachMaterialCards();
}

function filterBlock(title, key, values) {
  const buttons = values
    .map((value) => {
      const active = state.filters[key].has(value);
      return `<button class="chip ${active ? "active" : ""}" data-filter-key="${key}" data-filter-value="${escapeAttribute(value)}">${value}</button>`;
    })
    .join("");
  return `
    <div class="filter-block">
      <p>${title}</p>
      <div class="chip-row">${buttons}</div>
    </div>
  `;
}

function segmentButton(sort, label) {
  return `<button class="segment ${state.sort === sort ? "active" : ""}" data-sort="${sort}">${label}</button>`;
}

function renderNotesPanel() {
  const item = selectedMaterial();
  const notes = getCurrentNotes();
  const rating = progress.ratings[item.id] || 3;
  els.drawerEyebrow.textContent = item.title;
  els.drawerTitle.textContent = "听力笔记";
  els.drawerBody.innerHTML = `
    <div class="note-panel">
      <label>
        <span>裸听主旨</span>
        <textarea id="gistNote" placeholder="例：老师说明孩子缺课后的补作业安排。">${escapeHtml(notes.gist || "")}</textarea>
      </label>
      <label>
        <span>关键词 / 数字 / 日期</span>
        <textarea id="detailNote" placeholder="例：next Tuesday, 9 o'clock, assignment, pick up...">${escapeHtml(notes.detail || "")}</textarea>
      </label>
      <label>
        <span>错听原因</span>
        <textarea id="missNote" placeholder="连读、弱读、印度英语音节节奏、英式吞音...">${escapeHtml(notes.miss || "")}</textarea>
      </label>
      <div class="rating-row">
        <span>难度感受</span>
        <input id="difficultyRating" type="range" min="1" max="5" value="${rating}" />
        <strong id="difficultyValue">${rating}</strong>
      </div>
      <button class="text-button" id="copyNotes">复制笔记</button>
    </div>
  `;

  ["#gistNote", "#detailNote", "#missNote"].forEach((selector) => {
    document.querySelector(selector)?.addEventListener("input", saveNotesFromDrawer);
  });
  document.querySelector("#difficultyRating")?.addEventListener("input", (event) => {
    document.querySelector("#difficultyValue").textContent = event.target.value;
    saveNotesFromDrawer();
  });
  document.querySelector("#copyNotes")?.addEventListener("click", () => {
    saveNotesFromDrawer();
    copyNotes();
  });
}

function renderProgressPanel() {
  els.drawerEyebrow.textContent = "Progress";
  els.drawerTitle.textContent = "进度";
  const completed = materials.filter((item) => progress.done.includes(item.id));
  const reviews = materials.filter((item) => progress.review.includes(item.id));
  const currentSteps = progress.steps[state.selectedId] || {};
  const stepCount = Object.values(currentSteps).filter(Boolean).length;

  els.drawerBody.innerHTML = `
    <div class="drawer-section">
      <div class="stat-grid">
        <div class="stat"><strong>${completed.length}</strong><span>已完成</span></div>
        <div class="stat"><strong>${reviews.length}</strong><span>待复习</span></div>
        <div class="stat"><strong>${stepCount}/4</strong><span>今日步骤</span></div>
      </div>
      <h3>复习列表</h3>
      <div class="material-list">${reviews.length ? reviews.map(renderMiniMaterial).join("") : `<div class="empty-state">还没有加入复习的材料。</div>`}</div>
      <h3>已完成</h3>
      <div class="material-list">${completed.length ? completed.map(renderMiniMaterial).join("") : `<div class="empty-state">完成第一条后这里会亮起来。</div>`}</div>
    </div>
  `;
  attachMaterialCards();
}

function renderMiniMaterial(item) {
  return `
    <button class="material-card ${item.id === state.selectedId ? "active" : ""}" data-material-id="${item.id}">
      <div class="card-top">
        <span class="card-source">${item.source} · ${item.level}</span>
      </div>
      <h3>${item.title}</h3>
      <div class="mini-tags">
        <span>${item.scene}</span>
        <span>${item.accent}</span>
      </div>
    </button>
  `;
}

function renderGuidePanel() {
  els.drawerEyebrow.textContent = "Method";
  els.drawerTitle.textContent = "训练方法";
  els.drawerBody.innerHTML = `
    <ul class="guide-list">
      <li><strong>先骨架</strong><span>印度英语听不懂时，先抓名词、动词、数字和态度词，不要追 every / the / to 这类虚词。</span></li>
      <li><strong>切意群</strong><span>截 30-60 秒，用斜线标停顿。目标是听懂 phrase groups，不是单词听写。</span></li>
      <li><strong>跟节奏</strong><span>回声跟读 3-6 个词一组，模仿音节节奏。印度英语常更平均，不一定像英美口音那样大量弱读。</span></li>
      <li><strong>回原速</strong><span>0.85x 只是拆解工具，最后必须回到 1.0x，输出 5 个 bullet。</span></li>
    </ul>
  `;
}

function toggleSetValue(set, value) {
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}

function setupEvents() {
  els.pickToday.addEventListener("click", pickToday);
  els.focusIndian.addEventListener("click", () => {
    state.focusMode = "india";
    const pool = orderedIndianMaterials();
    const next = pool.find((item) => !progress.done.includes(item.id)) || pool[0];
    if (next) {
      selectMaterial(next.id);
    } else {
      saveProgress();
      renderSelected();
    }
  });
  els.homeButton.addEventListener("click", closeDrawer);
  els.panelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openDrawer(button.dataset.panel);
    });
  });
  els.closeDrawer.addEventListener("click", closeDrawer);
  els.drawerBackdrop.addEventListener("click", closeDrawer);

  els.toggleDone.addEventListener("click", () => {
    const item = selectedMaterial();
    const wasDone = progress.done.includes(item.id);
    toggleArrayValue(progress.done, item.id);
    if (!wasDone) {
      progress.steps[item.id] = { blind: true, decode: true, shadow: true, speed: true };
    }
    saveProgress();
    renderSelected();
    if (state.activePanel === "progress") {
      renderDrawer("progress");
    }
  });

  els.toggleReview.addEventListener("click", () => {
    toggleArrayValue(progress.review, selectedMaterial().id);
    saveProgress();
    renderSelected();
    if (state.activePanel === "progress") {
      renderDrawer("progress");
    }
  });
}

setupEvents();
renderSelected();
saveProgress();
refreshIcons();
