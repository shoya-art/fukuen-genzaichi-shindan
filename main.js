const option = (text, data = {}) => ({ text, ...data });
const question = (key, text, options, data = {}) => ({ key, text, options, ...data });

const coreQuestions = [
  question('elapsed', '彼と別れてから、<br>どのくらい経ちますか？', ['1ヶ月未満','1〜3ヶ月','3〜6ヶ月','6ヶ月〜1年','1年以上','まだ正式には別れていない']),
  question('initiator', '別れを最初に切り出したのは<br>どちらですか？', ['彼から','自分から','話し合って決めた','自然消滅に近い','はっきり別れていない']),
  question('breakup_style', '別れ方で一番近いものは<br>どれですか？', ['落ち着いて話し合って別れた','彼から一方的に別れを告げられた','喧嘩や感情的なやり取りの中で別れた','何度も別れ話が出た末に別れた','連絡が減り、自然に関係が終わった','自分から別れた後、復縁したくなった','まだ関係が曖昧なまま','その他・よく分からない']),
  question('breakup_reason', '彼から伝えられた別れの理由で、<br>一番近いものはどれですか？', ['気持ちが冷めた','好きか分からなくなった','喧嘩やすれ違いに疲れた','束縛や愛情確認が負担だった','性格や価値観が合わないと言われた','仕事・遠距離・家族など環境の問題','他に気になる人や恋人ができた','今は恋愛をする余裕がない','理由をはっきり言われていない','自分から別れたため、彼から理由は聞いていない']),
  question('breakup_words', '別れ際や別れた後、<br>彼から言われた言葉はありますか？', [
    option('「また同じことになると思う」',{flag:'same_again'}), option('「もう好きじゃない」',{flag:'not_love'}),
    option('「今は恋愛を考えられない」',{flag:'no_romance'}), option('「友達ならいい」',{flag:'friends_only'}),
    option('「復縁は考えていない」',{flag:'no_reunion'}), option('「少し時間が欲しい」',{flag:'need_space'}),
    option('「連絡しないでほしい」',{flag:'contact_refused'}), option('「嫌いになったわけではない」',{flag:'not_hate'}),
    option('特に言われていない',{exclusive:true}), option('よく覚えていない',{exclusive:true})
  ], { multiple:true, note:'当てはまるものをすべて選んでください' }),
  question('relationship_status', '現在のお二人の状況を<br>教えてください。', [
    option('お互い特定の交際相手はいない'), option('彼に気になる女性がいる可能性がある',{flag:'possible_other'}),
    option('彼に新しい恋人がいる',{flag:'new_partner'}), option('自分に現在の交際相手がいる',{flag:'user_partner'}),
    option('自分または彼のどちらかが既婚',{flag:'married'}), option('お互いに既婚',{flag:'married'}), option('分からない',{flag:'status_unknown'})
  ]),
  question('contact_path', '現在、彼との連絡手段は<br>ありますか？', [
    option('LINEで連絡できる',{contact:0}), option('LINE以外のSNSや電話で連絡できる',{contact:0}),
    option('職場・学校・共通の知人などで接点がある',{contact:1}), option('連絡先は分かるが、今は連絡しづらい',{contact:2}),
    option('ブロックされていて直接連絡できない',{contact:3,flag:'blocked'}), option('連絡先や現在いる場所が分からない',{contact:3,flag:'no_contact'})
  ]),
  question('trigger', '彼との関係で、特に不安に<br>なりやすかったのはどんな時ですか？', [
    option('返信が遅くなった時',{tag:'abandonment'}), option('会える回数が減った時',{tag:'abandonment'}),
    option('愛情表現が減った時',{tag:'love_check'}), option('彼の機嫌が悪い時',{tag:'over_adapt'}),
    option('他の女性の存在を感じた時',{tag:'betrayal'}), option('彼が仕事や趣味を優先した時',{tag:'comparison'}),
    option('喧嘩や意見の違いが起きた時',{tag:'self_suppress'}), option('特に強く不安になることはなかった',{heart:0}), option('自分ではまだ分からない',{heart:1})
  ]),
  question('thought', '不安になった時、頭の中に<br>浮かびやすかった言葉はどれですか？', [
    option('「嫌われたかもしれない」',{heart:2,tag:'abandonment'}), option('「他に好きな人ができたかもしれない」',{heart:2,tag:'betrayal'}),
    option('「私が何か悪いことをしたのかもしれない」',{heart:2,tag:'self_blame'}), option('「このまま別れることになるかもしれない」',{heart:3,tag:'abandonment'}),
    option('「もっと頑張らないと愛されない」',{heart:2,tag:'worth'}), option('「私より大切なものがあるんだ」',{heart:2,tag:'comparison'}),
    option('「どうして私の気持ちを分かってくれないの？」',{heart:2,tag:'emotional'}), option('不安でも、落ち着いて考えられていた',{heart:0}), option('自分では分からない',{heart:1})
  ]),
  question('anxious_actions', '不安になった時、実際にしていたことを<br>教えてください。', [
    option('彼の気持ちを何度も確認した',{heart:2,tag:'love_check'}), option('返信がなくても追加でLINEした',{heart:2,tag:'monitoring'}),
    option('彼のSNSや行動を確認した',{heart:2,tag:'monitoring'}), option('会いたいと何度も伝えた',{heart:2,tag:'abandonment'}),
    option('嫌われないように彼へ合わせた',{heart:2,tag:'over_adapt'}), option('言いたいことを我慢した',{heart:2,tag:'self_suppress'}),
    option('自分が悪いと思って何度も謝った',{heart:2,tag:'self_blame'}), option('悲しさや怒りを彼にぶつけた',{heart:3,tag:'emotional'}),
    option('何も言わず、一人で抱え込んだ',{heart:2,tag:'self_suppress'}), option('自分の生活へ気持ちを戻せていた',{heart:0,exclusive:true})
  ], { multiple:true, note:'当てはまるものをすべて選んでください', heartCap:5 }),
  question('self_abandon', '彼との関係で、自分を後回しに<br>していたことはありますか？', [
    option('自分の予定より彼を優先していた',{heart:2,tag:'partner_centered'}), option('彼の機嫌を悪くしないことを優先していた',{heart:2,tag:'over_adapt'}),
    option('嫌なことでも断れなかった',{heart:2,tag:'self_suppress'}), option('本音を伝えずに我慢していた',{heart:2,tag:'self_suppress'}),
    option('彼に愛されるために無理をしていた',{heart:3,tag:'worth'}), option('彼の言葉や態度で一日の気分が決まっていた',{heart:3,tag:'partner_centered'}),
    option('お互いの生活を大切にできていた',{heart:0}), option('あまり思い当たらない',{heart:0})
  ]),
  question('partner_reaction', 'あなたが不安になった時、<br>彼はどう反応することが多かったですか？', [
    option('優しく安心させてくれた',{partner:0}), option('最初は安心させてくれたが、次第に減った',{partner:2}),
    option('困ったり、どう返せばいいか迷っていた',{partner:2}), option('「重い」「疲れる」などと言われた',{partner:3}),
    option('返信を遅らせたり、距離を取った',{partner:3}), option('喧嘩や言い合いになった',{partner:3}),
    option('彼も感情的になった',{partner:2}), option('自分が我慢していたため、彼は気づいていなかった',{partner:1}), option('よく分からない',{partner:1})
  ]),
  question('repeat_pattern', '過去の恋愛でも、<br>似たことはありましたか？', [
    option('毎回、嫌われることが不安になった',{heart:2,tag:'abandonment'}), option('相手に合わせすぎることが多かった',{heart:2,tag:'over_adapt'}),
    option('愛されているか確認したくなった',{heart:2,tag:'love_check'}), option('我慢して、最後に感情が爆発した',{heart:3,tag:'emotional'}),
    option('相手の反応で生活や気分が変わった',{heart:3,tag:'partner_centered'}), option('過去の恋愛でも相手を追いかけた',{heart:3,tag:'abandonment'}),
    option('今回の彼との恋愛で初めて起きた',{heart:1}), option('あまり思い当たらない',{heart:0}), option('恋愛経験がほとんどない',{heart:0})
  ]),
  question('current_self', '今、彼から反応がない時の自分に<br>一番近いものはどれですか？', [
    option('不安でも、自分の生活に戻れる',{heart:0}), option('気になるが、落ち着いて待てる',{heart:0}),
    option('嫌われた理由を何度も考えてしまう',{heart:2,tag:'self_blame'}), option('スマホやSNSを何度も確認する',{heart:2,tag:'monitoring'}),
    option('追加でLINEしたくなる',{heart:2,tag:'love_check'}), option('何をしていても彼のことを考える',{heart:3,tag:'partner_centered'}),
    option('彼の反応で一日の気分が大きく変わる',{heart:3,tag:'partner_centered'}), option('今は自分が何をしたいかも分からない',{heart:3,tag:'partner_centered'})
  ]),
  question('past_experience', 'これまでの経験で、<br>心当たりがあるものを教えてください。', [
    option('大切な人が突然離れていった経験がある',{past:'大切な人が突然離れていった経験',tag:'abandonment'}),
    option('家族や周囲から人と比べられることが多かった',{past:'人と比べられることが多かった経験',tag:'comparison'}),
    option('頑張った時だけ認めてもらえる感覚があった',{past:'頑張った時に認められた経験',tag:'worth'}),
    option('自分の気持ちを伝えて否定されたことがある',{past:'気持ちを伝えて否定された経験',tag:'self_suppress'}),
    option('周りに合わせることで関係を保ってきた',{past:'周りに合わせて関係を保った経験',tag:'over_adapt'}),
    option('信じていた人に裏切られたことがある',{past:'信じていた人に裏切られた経験',tag:'betrayal'}),
    option('過去の恋愛で強く傷ついた',{past:'過去の恋愛で強く傷ついた経験',tag:'abandonment'}),
    option('家族の機嫌を気にして過ごすことが多かった',{past:'周囲の機嫌を気にして過ごした経験',tag:'over_adapt'}),
    option('特に思い当たらない',{exclusive:true}), option('分からない・答えたくない',{exclusive:true})
  ], { multiple:true, note:'無理に思い出さなくて大丈夫です', heartCap:0 }),
  question('belief', 'その経験から感じるようになったことで、<br>近いものはありますか？', [
    option('そのままの自分では愛されない',{belief:'そのままの自分では愛されない',heart:2,tag:'worth'}),
    option('相手に合わせないと嫌われる',{belief:'相手に合わせないと嫌われる',heart:2,tag:'over_adapt'}),
    option('本音を言うと関係が壊れる',{belief:'本音を言うと関係が壊れる',heart:2,tag:'self_suppress'}),
    option('人はいつか自分から離れていく',{belief:'人はいつか自分から離れていく',heart:2,tag:'abandonment'}),
    option('愛されているか確認しないと不安',{belief:'愛されているか確認しないと不安',heart:2,tag:'love_check'}),
    option('自分が我慢すれば関係は続く',{belief:'自分が我慢すれば関係は続く',heart:2,tag:'self_suppress'}),
    option('誰かに必要とされないと自信が持てない',{belief:'誰かに必要とされないと自信が持てない',heart:2,tag:'worth'}),
    option('人を信じすぎると傷つく',{belief:'人を信じすぎると傷つく',heart:2,tag:'betrayal'}),
    option('特に思い当たらない',{belief:'まだ明確ではない',heart:0}), option('分からない・答えたくない',{belief:'まだ明確ではない',heart:0})
  ]),
  question('desired_relation', '復縁できた先で、<br>どんな関係を作りたいですか？', ['お互いに本音を伝えられる関係','前と同じ問題を繰り返さない関係','お互いの生活も大切にできる関係','不安になっても話し合える関係','安心して一緒にいられる関係','結婚や将来まで考えられる関係','とにかくもう一度付き合いたい','まだそこまでは考えられない'])
];

const contactBranch = [
  question('reply_state', '現在の返信で、<br>一番近いものはどれですか？', [
    option('彼から連絡が来る',{reply:0}), option('送れば普通に返信が来る',{reply:0}), option('彼から質問や話題が出る',{reply:0,positive:1}),
    option('用事がある時だけ返信が来る',{reply:1}), option('返信は遅いが返ってくる',{reply:1}), option('既読・未読スルーが多い',{reply:3}),
    option('そっけない・必要最低限',{reply:2}), option('別れてからまだ連絡していない',{reply:2})
  ]),
  question('meeting_state', '会うことについて、<br>彼はどんな反応ですか？', [
    option('彼から会おうと言われる',{meeting:0,positive:2}), option('誘えば会える可能性が高い',{meeting:0}),
    option('誘ったが予定が合わなかった',{meeting:1}), option('誘ったが断られた',{meeting:3}),
    option('会う話を避けられている',{meeting:3}), option('まだ誘っていない',{meeting:2}), option('今は誘える状態ではない',{meeting:3})
  ]),
  question('interaction_state', '今の彼との会話や空気感で、<br>近いものを教えてください。', [
    option('彼から楽しそうに話してくれる',{reunion:0,positive:2}), option('以前より自然で落ち着いた雰囲気',{reunion:0,positive:2}),
    option('思い出話や自分の近況を話してくれる',{reunion:0,positive:2}), option('会話はできるが友達のような雰囲気',{reunion:2}),
    option('どこか警戒されている感じがする',{reunion:3}), option('そっけない・早く終わらせたそう',{reunion:3}), option('まだ判断できるやり取りがない',{reunion:2})
  ])
];

const blockedBranch = [
  question('block_trigger', 'ブロックや連絡拒否の前に、<br>何がありましたか？', [
    option('復縁したいと繰り返し伝えた',{reply:3}), option('返信がなくても連絡を続けた',{reply:3}),
    option('喧嘩や感情的なやり取りがあった',{reply:3}), option('会いに行った・会おうとした',{reply:3}),
    option('他の女性について問い詰めた',{reply:3}), option('特に大きな出来事はなかった',{reply:2}), option('分からない',{reply:2})
  ]),
  question('after_block', 'その後、別の方法で<br>連絡しましたか？', [
    option('何も連絡していない',{boundary:0}), option('一度だけ別の方法で連絡した',{boundary:1}),
    option('別のSNSから何度か連絡した',{boundary:3}), option('電話をかけた',{boundary:2}),
    option('共通の知人を通して連絡した',{boundary:2}), option('会いに行った',{boundary:3}), option('答えたくない',{boundary:1})
  ]),
  question('current_distance', '今の彼が望んでいる距離について、<br>一番近いと思うものはどれですか？', [
    option('今は連絡せず、距離を置いてほしいと思う',{reply:3}), option('落ち着くまで時間が欲しいと思う',{reply:3}),
    option('必要な連絡だけなら受け取れると思う',{reply:2}), option('嫌いというより、どう接すればいいか迷っていると思う',{reply:2}),
    option('自分ではまだ分からない',{reply:3})
  ])
];

const noContactBranch = [
  question('last_contact', '彼と最後に直接やり取りした時の状態で、<br>一番近いものはどれですか？', [
    option('普通に会話ができていた',{reply:1}), option('少し距離を感じていた',{reply:2}),
    option('そっけない・必要最低限だった',{reply:3}), option('喧嘩や感情的なやり取りで終わった',{reply:3}),
    option('自然に連絡が途切れた',{reply:3}), option('覚えていない・分からない',{reply:3})
  ]),
  question('lost_contact_reason', '現在の連絡先や居場所が<br>分からなくなった理由は何ですか？', [
    option('彼が連絡先を変更した'), option('SNSのアカウントがなくなった'),
    option('引っ越しや転職などで接点がなくなった'), option('共通の知人との接点もなくなった'),
    option('長期間連絡していないうちに分からなくなった'), option('詳しい理由は分からない')
  ]),
  question('safe_contact_path', '彼の意思を尊重したうえで使える接点は、<br>現在残っていますか？', [
    option('自然に会う可能性がある',{reply:2}), option('共通の知人などを通して近況を知ることはある',{reply:2}),
    option('接点はあるが、連絡に使うべきではないと思う',{reply:3}), option('安全に使える接点は一つもない',{reply:3}),
    option('分からない',{reply:3})
  ])
];

const tagLabels = {
  abandonment:'置いていかれる怖さ', love_check:'愛情を確認したくなる不安', over_adapt:'相手に合わせすぎる考え方',
  self_suppress:'本音を言うことへの怖さ', worth:'そのままでは愛されない不安', betrayal:'人を信じることへの怖さ',
  comparison:'自分より誰かを選ばれる不安', self_blame:'自分を責めてしまう考え方', emotional:'感情が大きく揺れる状態',
  monitoring:'反応を確認し続ける状態', partner_centered:'彼の反応が生活の中心になる状態'
};

const stageData = {
  reply:{label:'返信のブロック',title:'まずは、自然に連絡できる関係へ戻す段階です',photo:'images/result-c-couple.png'},
  remeet:{label:'再会のブロック',title:'また2人で自然に会える関係を作る段階です',photo:'images/result-a-couple.png'},
  reunion:{label:'復縁のブロック',title:'「また同じことになるかも」を外す段階です',photo:'images/result-b-couple.png'},
  accelerator:{label:'復縁のアクセル',title:'「やっぱり戻りたい」を育てていく段階です',photo:'images/result-s-couple.png'}
};

let questions = [...coreQuestions];
let answers = Array(20).fill(null);
let currentIndex = 0;
let profile = { name:'', age:'', job:'', income:'', partnerAge:'', partnerJob:'', partnerIncome:'' };
let diagnosis = null;
let completed = false;

const $ = id => document.getElementById(id);
const screens = ['start-screen','profile-screen','partner-profile-screen','question-screen','loading-screen','result-screen'];

function showScreen(id) {
  screens.forEach(screenId => $(screenId).classList.toggle('active', screenId === id));
  window.scrollTo(0,0);
}

function track(event, detail = {}) {
  const payload = { event, timestamp:new Date().toISOString(), ...detail };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  try {
    const history = JSON.parse(localStorage.getItem('jiroKaruteEvents') || '[]');
    localStorage.setItem('jiroKaruteEvents', JSON.stringify([...history.slice(-199), payload]));
  } catch (_) {}
}

function selectedOptions(index) {
  const q = questions[index];
  const value = answers[index];
  if (!q) return [];
  if (q.multiple) return (value || []).map(i => q.options[i]);
  return value === null ? [] : [q.options[value]];
}

function selectedByKey(key) {
  const index = questions.findIndex(q => q.key === key);
  return selectedOptions(index);
}

function renderQuestion() {
  const q = questions[currentIndex];
  $('progress-label').textContent = `${currentIndex + 1} / 20`;
  $('progress-bar').style.width = `${((currentIndex + 1) / 20) * 100}%`;
  $('phase-label').textContent = currentIndex < 7 ? '別れ方と今の2人' : currentIndex < 14 ? 'あなたの恋愛反応' : currentIndex < 17 ? 'ハートの背景' : 'あなたに合わせた確認';
  $('question-number').textContent = `Q${currentIndex + 1}`;
  $('question-text').innerHTML = q.text;
  $('question-note').textContent = q.note || '';
  $('question-note').hidden = !q.note;
  $('branch-message').hidden = currentIndex !== 17;
  $('options-container').innerHTML = '';
  const selected = answers[currentIndex] || (q.multiple ? [] : null);
  q.options.forEach((opt, optionIndex) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-btn';
    button.textContent = typeof opt === 'string' ? opt : opt.text;
    if (q.multiple && selected.includes(optionIndex)) button.classList.add('selected');
    button.addEventListener('click', () => q.multiple ? toggleMultiple(optionIndex) : chooseSingle(optionIndex));
    $('options-container').appendChild(button);
  });
  $('multi-next-btn').hidden = !q.multiple;
  if (q.multiple) $('multi-next-btn').disabled = selected.length === 0;
  $('back-btn').hidden = currentIndex === 0;
}

function chooseSingle(optionIndex) {
  answers[currentIndex] = optionIndex;
  track('question_answered',{question_number:currentIndex + 1,question_key:questions[currentIndex].key});
  window.setTimeout(nextQuestion, 150);
}

function toggleMultiple(optionIndex) {
  const q = questions[currentIndex];
  const opt = q.options[optionIndex];
  let selected = Array.isArray(answers[currentIndex]) ? [...answers[currentIndex]] : [];
  if (opt.exclusive) selected = selected.includes(optionIndex) ? [] : [optionIndex];
  else {
    selected = selected.filter(i => !q.options[i].exclusive);
    selected = selected.includes(optionIndex) ? selected.filter(i => i !== optionIndex) : [...selected, optionIndex];
  }
  answers[currentIndex] = selected;
  renderQuestion();
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex === 17) {
    const contact = selectedByKey('contact_path')[0] || {};
    const branch = contact.flag === 'no_contact' ? noContactBranch : contact.contact >= 3 ? blockedBranch : contactBranch;
    questions = [...coreQuestions, ...branch];
    answers.splice(17,3,null,null,null);
  }
  if (currentIndex < 20) renderQuestion();
  else finishDiagnosis();
}

function optionText(key) {
  return selectedByKey(key).map(opt => typeof opt === 'string' ? opt : opt.text).join('・');
}

function buildDiagnosis() {
  let heartScore = 0;
  const tagCounts = {};
  const flags = new Set();
  questions.forEach((q,index) => {
    const selected = selectedOptions(index);
    const subtotal = selected.reduce((sum,opt) => sum + (typeof opt === 'string' ? 0 : opt.heart || 0),0);
    heartScore += q.heartCap === undefined ? subtotal : Math.min(q.heartCap, subtotal);
    selected.forEach(opt => {
      if (typeof opt === 'string') return;
      if (opt.tag) tagCounts[opt.tag] = (tagCounts[opt.tag] || 0) + 1;
      if (opt.flag) flags.add(opt.flag);
    });
  });
  const tags = Object.entries(tagCounts).sort((a,b) => b[1]-a[1]).map(([tag]) => tag);
  const contact = selectedByKey('contact_path')[0] || {};
  const reply = selectedByKey('reply_state')[0] || selectedByKey('block_trigger')[0] || selectedByKey('last_contact')[0] || {};
  const meeting = selectedByKey('meeting_state')[0] || {};
  const interaction = selectedByKey('interaction_state')[0] || {};
  let stage = 'reply';
  if (contact.contact < 3 && (reply.reply || 0) < 2) {
    stage = (meeting.meeting || 0) >= 2 ? 'remeet' : (interaction.reunion || 0) >= 2 ? 'reunion' : (interaction.positive || 0) >= 2 ? 'accelerator' : 'reunion';
  }
  const heartLevel = heartScore <= 5 ? 'steady' : heartScore <= 12 ? 'swayed' : 'affected';
  const past = selectedByKey('past_experience').filter(opt => opt.past).map(opt => opt.past);
  const belief = (selectedByKey('belief')[0] || {}).belief || 'まだ明確ではない';
  const excludedJobs = ['学生','パート・アルバイト','求職中','無職'];
  const exclusions = [];
  if (excludedJobs.includes(profile.job)) exclusions.push(`職業:${profile.job}`);
  if (flags.has('married')) exclusions.push('既婚関係');
  if (flags.has('blocked') || flags.has('no_contact')) exclusions.push('直接の連絡経路なし');
  return { heartScore, heartLevel, tags, flags:[...flags], past, belief, stage, exclusions, canConsult:exclusions.length === 0 };
}

function partnerMessage() {
  const flags = new Set(diagnosis.flags);
  const reaction = selectedByKey('partner_reaction')[0] || {};
  if (flags.has('contact_refused') || flags.has('blocked')) return ['今は、自分の気持ちと距離を尊重してほしいと思っていそうです','完全に嫌いだと決めつける必要はありません。ただ、現時点では関係を進めることよりも、彼が求めている距離を守ることが必要です。'];
  if (flags.has('same_again')) return ['「また同じ関係になるかもしれない」と不安を感じていそうです','あなたへの気持ちだけではなく、以前と同じ不安ややり取りが繰り返されることを心配している可能性があります。'];
  if (flags.has('friends_only')) return ['関係を切りたいわけではないものの、恋愛に戻ることには迷いがありそうです','まずは安心して関われる相手として、以前とは違う関係を体験してもらうことが大切です。'];
  if ((reaction.partner || 0) >= 2) return ['あなたを嫌いというより、どう向き合えばいいか迷っていそうです','気持ちを確認された時に、安心させ続けなければならない負担や、少し距離を置きたい気持ちが生まれていた可能性があります。'];
  return ['あなたとの関係を完全に終わらせたい状態とは限りません','今は焦って答えを求めるよりも、安心して関われる時間を重ねながら、彼の気持ちを見ていく必要があります。'];
}

function stageReason() {
  const breakup = optionText('breakup_style');
  const current = diagnosis.stage === 'reply' ? optionText('reply_state') || optionText('current_distance') || optionText('last_contact') : diagnosis.stage === 'remeet' ? optionText('meeting_state') : optionText('interaction_state');
  return `「${breakup}」という別れ方と、現在の「${current}」という回答を合わせると、今は${stageData[diagnosis.stage].label}を整える段階だと考えられます。`;
}

const actionContent = {
  reply:{do:['彼が求めている距離を尊重する','彼の反応がなくても、自分の生活へ戻れる状態を作る','次に動く前に、別れ方と現在の状況を整理する'],dont:['別の連絡手段から追いかける','不安なまま追加の連絡を重ねる','復縁できるかを今すぐ彼に確認する']},
  remeet:{do:['彼の反応だけで一日が崩れない状態を作る','彼が負担を感じにくい自然な関係へ戻す','会うことを急がず、今の反応を丁寧に見る'],dont:['不安な状態で会おうとする','一つの返信だけで距離が縮まったと判断する','復縁の気持ちを繰り返し伝える']},
  reunion:{do:['言葉ではなく、以前と違う自分を関わりの中で見せる','安心して一緒にいられる時間を増やす','彼の反応を複数合わせて判断する'],dont:['会えたことだけで復縁できると判断する','彼に答えや決断を急がせる','変わったことを言葉だけで証明しようとする']},
  accelerator:{do:['今の良い関係を焦らず維持する','一緒にいる心地よさと楽しい感情を増やす','復縁後に作りたい関係を自分の中で明確にする'],dont:['良い反応一つで復縁を迫る','彼の気持ちを試す行動をする','不安から関係を急に進める']}
};

function renderResult() {
  const stage = stageData[diagnosis.stage];
  const partner = partnerMessage();
  $('result-name').textContent = profile.name;
  $('stage-badge').textContent = stage.label;
  $('result-photo').src = stage.photo;
  const trigger = optionText('trigger');
  const thought = optionText('thought');
  const actions = selectedByKey('anxious_actions').slice(0,2).map(opt => opt.text).join('・');
  const reaction = optionText('partner_reaction');
  $('loop-title').textContent = `「${thought.replace(/[「」]/g,'')}」と感じた時に、行動が起きやすかったようです`;
  $('reaction-loop').innerHTML = [trigger,thought,actions,reaction,'さらに不安が大きくなる'].map((text,index) => `<div class="loop-step">${text}</div>${index < 4 ? '<span>↓</span>' : ''}`).join('');
  $('loop-copy').textContent = 'これは「あなたが悪い」という話ではありません。不安を彼によって落ち着かせようとした結果、2人の間で同じ流れが繰り返されていた可能性があります。';
  const topTags = diagnosis.tags.slice(0,3);
  $('heart-title').textContent = diagnosis.belief === 'まだ明確ではない' ? '今は、彼の反応によってハートが揺れやすくなっています' : `「${diagnosis.belief}」という不安が表れている可能性があります`;
  $('heart-tags').innerHTML = topTags.map(tag => `<span>${tagLabels[tag]}</span>`).join('');
  $('heart-copy').textContent = '僕は、自分の中でまだ満たせていない部分を「ハートの欠け」と呼んでいます。この傷は性格の問題ではなく、自分で安心を作れるように整えていけるものです。';
  const pastText = diagnosis.past.length ? diagnosis.past.slice(0,2).join('・') : 'まだ明確になっていない過去の体験';
  $('past-chain').innerHTML = `<div>${pastText}</div><span>↓</span><div>「${diagnosis.belief}」という考え方</div><span>↓</span><div>${trigger}にハートが反応</div><span>↓</span><div>${actions}</div>`;
  $('partner-title').textContent = partner[0];
  $('partner-copy').textContent = partner[1];
  $('stage-title').textContent = stage.title;
  $('stage-reason').textContent = stageReason();
  document.querySelectorAll('.stage-road div').forEach(node => node.classList.toggle('current', node.dataset.stage === diagnosis.stage));
  $('do-list').innerHTML = actionContent[diagnosis.stage].do.map(item => `<li>${item}</li>`).join('');
  $('dont-list').innerHTML = actionContent[diagnosis.stage].dont.map(item => `<li>${item}</li>`).join('');
  $('offer-panel').hidden = !diagnosis.canConsult;
  $('no-offer-panel').hidden = diagnosis.canConsult;
  showScreen('result-screen');
  track('result_view',{heart_level:diagnosis.heartLevel,current_stage:diagnosis.stage});
  submitToGoogleForm();
}

function finishDiagnosis() {
  completed = true;
  diagnosis = buildDiagnosis();
  track('diagnosis_complete',{heart_level:diagnosis.heartLevel,current_stage:diagnosis.stage});
  showScreen('loading-screen');
  const items = [...document.querySelectorAll('.analysis-item')];
  const statuses = ['別れ方を確認しています…','恋愛中の反応をつないでいます…','ハートの傷を整理しています…','今の彼の気持ちを考えています…','復縁ステージを確認しています…','カルテを仕上げています…'];
  items.forEach(item => item.classList.remove('done'));
  $('loading-bar').style.width = '0%';
  statuses.forEach((status,index) => window.setTimeout(() => {
    items[index].classList.add('done');
    $('loading-status').textContent = status;
    $('loading-bar').style.width = `${((index + 1) / statuses.length) * 100}%`;
  }, index * 600));
  window.setTimeout(() => { $('loading-status').textContent = 'あなた専用の復縁カルテが完成しました'; }, 3650);
  window.setTimeout(renderResult, 4300);
}

function answerSummary(index) {
  return selectedOptions(index).map(opt => typeof opt === 'string' ? opt : opt.text).join('／');
}

function groupedAnswers(start,end) {
  const lines = [];
  for (let i = start; i <= end; i += 1) lines.push(`Q${i + 1}:${answerSummary(i)}`);
  return lines.join('｜');
}

function submitToGoogleForm() {
  if (['localhost','127.0.0.1'].includes(location.hostname)) return;
  const iframe = document.createElement('iframe');
  const iframeName = `karute_${Date.now()}`;
  iframe.name = iframeName;
  iframe.hidden = true;
  const form = document.createElement('form');
  form.action = 'https://docs.google.com/forms/d/e/1FAIpQLScQG2p7YdrsRRnE2Y8LSCMWKNTwpKdRfDLsorCwqzWxz61ONw/formResponse';
  form.method = 'POST';
  form.target = iframeName;
  form.hidden = true;
  const data = {
    'entry.808125093':profile.name,
    'entry.1761508389':`本人年齢:${profile.age}｜本人職業:${profile.job}｜本人年収:${profile.income}｜彼年齢:${profile.partnerAge}｜彼職業:${profile.partnerJob}｜彼年収:${profile.partnerIncome}`,
    'entry.1005036062':groupedAnswers(0,2),
    'entry.199990545':groupedAnswers(3,5),
    'entry.838626022':groupedAnswers(6,8),
    'entry.1200021442':groupedAnswers(9,11),
    'entry.1848582778':groupedAnswers(12,15),
    'entry.1178729743':groupedAnswers(16,19),
    'entry.721169860':`heart_score:${diagnosis.heartScore}｜heart_level:${diagnosis.heartLevel}｜heart_tags:${diagnosis.tags.join(',')}｜stage:${diagnosis.stage}｜belief:${diagnosis.belief}｜flags:${diagnosis.flags.join(',')}｜除外:${diagnosis.exclusions.join('/') || 'なし'}｜CTA:${diagnosis.canConsult ? '作戦相談' : 'なし'}`
  };
  Object.entries(data).forEach(([name,value]) => {
    const input = document.createElement('input');
    input.type = 'hidden'; input.name = name; input.value = value; form.appendChild(input);
  });
  document.body.append(iframe,form);
  form.submit();
  window.setTimeout(() => { iframe.remove(); form.remove(); },2500);
}

document.addEventListener('DOMContentLoaded',() => {
  track('diagnosis_view');
  $('start-btn').addEventListener('click',() => showScreen('profile-screen'));
  $('profile-next-btn').addEventListener('click',() => {
    const name = $('user-name-input').value.trim();
    const age = Number($('user-age-input').value);
    const job = $('user-job-select').value;
    const income = $('user-income-select').value;
    if (!name) return $('profile-error').textContent = '公式LINEで使用しているお名前を入力してください。';
    if (!Number.isInteger(age) || age < 15 || age > 99) return $('profile-error').textContent = '年齢を半角数字で入力してください。';
    if (!job) return $('profile-error').textContent = '現在のお仕事を選択してください。';
    if (!income) return $('profile-error').textContent = '現在の年収に近いものを選択してください。';
    profile = { ...profile,name,age,job,income };
    $('profile-error').textContent = '';
    showScreen('partner-profile-screen');
  });
  $('partner-profile-next-btn').addEventListener('click',() => {
    const partnerAge = Number($('partner-age-input').value);
    const partnerJob = $('partner-job-select').value;
    const partnerIncome = $('partner-income-select').value;
    if (!Number.isInteger(partnerAge) || partnerAge < 15 || partnerAge > 99) return $('partner-profile-error').textContent = '彼の年齢を半角数字で入力してください。';
    if (!partnerJob) return $('partner-profile-error').textContent = '彼の現在のお仕事を選択してください。';
    if (!partnerIncome) return $('partner-profile-error').textContent = '彼の現在の年収に近いものを選択してください。';
    profile = { ...profile,partnerAge,partnerJob,partnerIncome };
    $('partner-profile-error').textContent = '';
    questions = [...coreQuestions]; answers = Array(20).fill(null); currentIndex = 0; completed = false;
    track('diagnosis_start'); renderQuestion(); showScreen('question-screen');
  });
  $('partner-profile-back-btn').addEventListener('click',() => showScreen('profile-screen'));
  $('multi-next-btn').addEventListener('click',() => {
    if (!answers[currentIndex] || answers[currentIndex].length === 0) return;
    track('question_answered',{question_number:currentIndex + 1,question_key:questions[currentIndex].key});
    nextQuestion();
  });
  $('back-btn').addEventListener('click',() => {
    if (currentIndex === 0) return;
    track('question_back',{from_question:currentIndex + 1,to_question:currentIndex});
    currentIndex -= 1; renderQuestion();
  });
  $('commit-checkbox').addEventListener('change',event => { $('consult-btn').disabled = !event.target.checked; });
  $('consult-btn').addEventListener('click',() => {
    $('line-instruction').hidden = false;
    $('line-instruction').scrollIntoView({behavior:'smooth',block:'center'});
    track('consultation_cta_click',{heart_level:diagnosis.heartLevel,current_stage:diagnosis.stage});
  });
  $('copy-keyword-btn').addEventListener('click',async() => {
    try { await navigator.clipboard.writeText('作戦相談'); }
    catch (_) { window.prompt('この言葉をコピーしてください','作戦相談'); }
    $('copy-keyword-btn').textContent = 'コピーしました ✓';
  });
  $('close-btn').addEventListener('click',() => window.close());
  window.addEventListener('pagehide',() => {
    if (!completed && currentIndex > 0) track('diagnosis_abandon',{question_number:currentIndex + 1});
  });
});
