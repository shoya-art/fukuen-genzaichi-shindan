const questions = [
    {
        key: 'elapsed',
        q: '彼と別れてから、<br>どのくらい経ちますか？',
        options: [
            { text: '1ヶ月未満', relationship: 1 },
            { text: '1〜3ヶ月', relationship: 2 },
            { text: '3〜6ヶ月', relationship: 3 },
            { text: '6ヶ月〜1年', relationship: 2 },
            { text: '1年以上', relationship: 1 }
        ]
    },
    {
        key: 'contact',
        q: '今、彼に連絡できる手段は<br>残っていますか？',
        options: [
            { text: 'LINEで連絡できる', relationship: 5 },
            { text: 'LINE以外のSNSや電話で連絡できる', relationship: 4 },
            { text: '仕事や共通の知人を通じて接点がある', relationship: 3 },
            { text: '連絡先は分かるが、連絡しづらい状態', relationship: 2 },
            { text: 'すべてブロックされ、連絡手段がない', relationship: 0, flag: 'no_contact' },
            { text: '連絡先や現在いる場所が分からない', relationship: 0, flag: 'no_contact' }
        ]
    },
    {
        key: 'reaction',
        q: '彼に連絡したときの反応で、<br>一番近いものはどれですか？',
        options: [
            { text: '彼から連絡が来ることもある', relationship: 5 },
            { text: 'こちらから送れば、普通に返信が来る', relationship: 5 },
            { text: '用事があるときだけ返信が来る', relationship: 4 },
            { text: '返信は遅いが、返ってくることはある', relationship: 3 },
            { text: '既読・未読スルーが多い', relationship: 1 },
            { text: '「連絡しないで」と言われている', relationship: 0, flag: 'contact_refused' },
            { text: '別れてから連絡していない', relationship: 2 }
        ]
    },
    {
        key: 'meeting',
        q: '今後、彼と直接会える可能性について、<br>一番近いものはどれですか？',
        options: [
            { text: '今も会うことがある', relationship: 4 },
            { text: '約束すれば会える可能性がある', relationship: 4 },
            { text: '職場や学校などで顔を合わせる', relationship: 3 },
            { text: '遠距離だが、会おうと思えば会える', relationship: 2 },
            { text: '住んでいる場所は分かるが、今は会えない', relationship: 1 },
            { text: '住んでいる場所も分からず、会う手段がない', relationship: 0, flag: 'no_meeting_path' }
        ]
    },
    {
        key: 'relationship_status',
        q: '現在のお二人の状況について、<br>一番近いものを教えてください。',
        options: [
            { text: '私も彼も未婚で、特定の交際相手はいない', relationship: 3 },
            { text: '彼に新しい恋人がいる可能性がある', relationship: 2 },
            { text: '彼に新しい恋人がいる', relationship: 1 },
            { text: '私に現在交際している相手がいる', relationship: 1 },
            { text: '私または彼のどちらかが既婚', relationship: 0, flag: 'married' },
            { text: 'お互いに既婚', relationship: 0, flag: 'married' },
            { text: '分からない', relationship: 1 }
        ]
    },
    {
        key: 'breakup_reason',
        q: '彼と別れることになった一番大きな原因は、<br>何だと思いますか？',
        options: [
            { text: 'すれ違いやコミュニケーション不足' },
            { text: '喧嘩が増え、感情的になることが多かった' },
            { text: '不安から、彼を束縛したり求めすぎたりした' },
            { text: '彼に合わせすぎて、自分の気持ちを言えなかった' },
            { text: '彼の気持ちが冷めた、または他に好きな人ができた' },
            { text: '遠距離、仕事、家族など環境上の問題' },
            { text: '彼側に問題があったと思う' },
            { text: '理由をはっきり言われていない' },
            { text: 'その他' }
        ]
    },
    {
        key: 'after_breakup',
        q: '別れたあと、彼に対して取った行動で<br>一番近いものはどれですか？',
        options: [
            { text: '必要以上に連絡せず、距離を置いている', readiness: 3 },
            { text: 'ときどき自然な内容で連絡している', readiness: 3 },
            { text: '復縁したい気持ちを一度伝えた', readiness: 2 },
            { text: '何度か復縁をお願いした', readiness: 0, flag: 'chasing' },
            { text: '返信がないときも、続けて連絡した', readiness: -1, flag: 'chasing' },
            { text: '彼のSNSや行動を頻繁に確認している', readiness: 0, flag: 'checking' },
            { text: 'まだ何も行動していない', readiness: 2 }
        ]
    },
    {
        key: 'emotion',
        q: '彼から返信が来なかったり、気持ちが<br>分からないとき、どうなることが多いですか？',
        options: [
            { text: '不安にはなるが、普段の生活は変わらない', readiness: 3 },
            { text: '少し気になるが、落ち着いて待つことができる', readiness: 3 },
            { text: '何度もスマホや彼のSNSを確認してしまう', readiness: 1 },
            { text: '不安になり、追加でLINEを送りたくなる', readiness: 0, flag: 'emotional' },
            { text: '何も手につかず、眠れなくなることがある', readiness: -1, flag: 'severe_emotion' },
            { text: '怒りや悲しさが強くなり、彼を責めたくなる', readiness: -1, flag: 'severe_emotion' }
        ]
    },
    {
        key: 'desire',
        q: '今のあなたの気持ちに、<br>一番近いものはどれですか？',
        options: [
            { text: 'できることがあるなら、本気で復縁を目指したい', readiness: 3 },
            { text: '復縁したいが、また同じことになるのが怖い', readiness: 2 },
            { text: '復縁したいのか、まだ迷っている', readiness: 1 },
            { text: '彼への気持ちはあるが、傷つくのが怖くて動けない', readiness: 1 },
            { text: '復縁よりも、まず今の苦しさから抜け出したい', readiness: 0 },
            { text: '自分でも本当の気持ちが分からない', readiness: 0 }
        ]
    },
    {
        key: 'future',
        q: 'もし彼と復縁できたら、<br>どんな関係になりたいですか？',
        options: [
            { text: 'お互いに本音を伝え、支え合える関係', readiness: 3, lead: 1 },
            { text: '前と同じではなく、別れた原因を乗り越えた関係', readiness: 3, lead: 1 },
            { text: '恋愛だけに依存せず、お互いの生活も大切にできる関係', readiness: 3, lead: 1 },
            { text: '今度こそ嫌われないように、彼に合わせたい', readiness: 0 },
            { text: '彼にずっと愛され、安心させてもらいたい', readiness: 0 },
            { text: '関係性よりも、とにかく復縁できればいい', readiness: -1 },
            { text: 'まだそこまで考えられない', readiness: 1 }
        ]
    },
    {
        key: 'ownership',
        q: '別れた原因について、今の考えに<br>一番近いものはどれですか？',
        options: [
            { text: '彼にも私にも、見直す部分があったと思う', readiness: 3, lead: 2 },
            { text: '自分にも、これから変えられる部分があると思う', readiness: 3, lead: 2 },
            { text: '原因を整理したいが、一人ではよく分からない', readiness: 2, lead: 1 },
            { text: '私がすべて悪かったと思う', readiness: 0 },
            { text: '彼が変わらなければ、関係は変わらないと思う', readiness: -1, lead: -2 },
            { text: '原因よりも、復縁する方法だけを知りたい', readiness: -1, lead: -2 }
        ]
    },
    {
        key: 'coachability',
        q: '「今はその行動をやめた方がいい」と<br>アドバイスされたら、どうしますか？',
        options: [
            { text: '理由を聞いたうえで、まず実践してみる', readiness: 3, lead: 3 },
            { text: '不安はあるが、一度やってみる', readiness: 3, lead: 2 },
            { text: '自分が納得できるまで質問してから決める', readiness: 1, lead: 0 },
            { text: '自分の考えと違う場合は、あまり取り入れたくない', readiness: -1, lead: -2 },
            { text: '何をすればいいか、すべて決めてほしい', readiness: 0, lead: -1 },
            { text: 'そのときの気持ちによって変わると思う', readiness: -1, lead: -1 }
        ]
    },
    {
        key: 'past_support',
        q: '復縁について、これまで誰かに<br>相談したことはありますか？',
        note: '当てはまるものをすべて選んでください',
        multiple: true,
        options: [
            { text: 'ジローの発信や無料プレゼントを見ている', lead: 2 },
            { text: '他の復縁サポートの個別相談を受けた', lead: 1 },
            { text: '他の復縁サポートを購入した', lead: 2 },
            { text: '占いや恋愛相談を利用した', lead: 0 },
            { text: '友人や家族に相談した', lead: 0 },
            { text: '誰にも相談したことがない', lead: 0, exclusive: true },
            { text: '複数の人やサービスへ相談している', lead: -1 }
        ]
    },
    {
        key: 'reason_for_quiz',
        q: '今回、この診断を受けようと思った<br>一番の理由を教えてください。',
        options: [
            { text: 'ジローの発信を見て、自分の状況も見てほしいと思った', lead: 3 },
            { text: 'ジローのお客様の変化や実績を見て、相談してみたいと思った', lead: 3 },
            { text: '無料プレゼントの内容に共感した', lead: 2 },
            { text: '復縁の可能性があるか知りたかった', lead: 1 },
            { text: '彼に送るLINEや、すぐ使える方法を知りたかった', lead: 0 },
            { text: '無料だったので、なんとなく受けてみた', lead: -2 },
            { text: '他の復縁サービスと比較したかった', lead: -1 }
        ]
    },
    {
        key: 'investment',
        q: '復縁を一人で進めるのが難しいと感じたとき、<br>あなたの考えに一番近いものはどれですか？',
        options: [
            { text: '自分に必要な内容なら、前向きに検討したい', lead: 3 },
            { text: '一人で難しいなら、誰かに伴走してもらいたい', lead: 3 },
            { text: '内容を詳しく聞いてから考えたい', lead: 2 },
            { text: 'まずは自分の状況を相談してみたい', lead: 1 },
            { text: 'できるだけ一人で進めたい', lead: -1, flag: 'no_paid_support' },
            { text: '無料の情報だけで進めたい', lead: -3, flag: 'free_only' },
            { text: 'まだ考えたことがない', lead: 0 }
        ]
    }
];

const resultContent = {
    S: {
        stage: '復縁可能性 Sランク',
        title: '動き方次第で、<br>復縁の可能性をかなり高められます。',
        img: 'images/result-s-couple.png',
        desc: '彼とのつながりが残っている今は、諦める段階ではありません。<br><br>ただ、可能性があるからこそ、焦って動くのはもったいないです。',
        advice: '彼の心理と別れた原因を整理して、連絡するタイミングと順番を間違えないこと。ここからどう進めるか、僕も一緒に考えます。'
    },
    A: {
        stage: '復縁可能性 Aランク',
        title: '可能性は残っています。<br>今は作戦を整理する段階です。',
        img: 'images/result-a-couple.png',
        desc: '復縁したい。でも、また傷ついたり、同じことを繰り返したりするのが怖い。そんな迷いがあるのではないでしょうか。',
        advice: '今すぐ復縁すると決めなくても大丈夫です。何もしないまま終わって後悔しないために、気持ちと彼との可能性を一度整理してみてください。'
    },
    B: {
        stage: '現在の復縁ステージ Bランク',
        title: '今は彼を追うより、<br>気持ちを整えるタイミングです。',
        img: 'images/result-b-couple.png',
        desc: '彼の返信や反応が気になって、苦しくなっていませんか？<br><br>不安の勢いで動くと、残っている可能性まで下げてしまうことがあります。',
        advice: '今は「何を送るか」よりも、焦らず判断できる自分に戻ることが先です。動かないことも、復縁のための大切な一歩です。'
    },
    C: {
        stage: '現在の復縁ステージ Cランク',
        title: '今の最優先は、<br>あなた自身を守ることです。',
        img: 'images/result-c-couple.png',
        desc: '今、かなり心が疲れているのではないでしょうか。焦って彼を動かそうとすると、あなた自身がもっと苦しくなる可能性があります。',
        advice: '今は連絡を重ねず、まず普段の生活と落ち着きを取り戻してください。「今は動かない方がいい」と「もう可能性がない」は同じではありません。'
    }
};

const keywordContent = {
    S: { keyword: '未来設計', heading: 'ここからの動き方が重要です', copy: 'あなたの回答を僕が直接確認して、まず何から始めるべきかを考えてLINEでお送りします。' },
    A: { keyword: '後悔しない', heading: '迷ったまま終わらせたくないあなたへ', copy: 'あなたの回答を僕が直接確認して、今後の選択を一緒に整理するためのLINEをお送りします。' },
    B: { keyword: '心の整理', heading: 'まず何から整えるか知りたいあなたへ', copy: 'あなたの回答を僕が直接確認して、今のあなたが最初に取り組むことをLINEでお送りします。' },
    C: { keyword: '今は待つ', heading: 'これ以上、状況を悪くしないために', copy: 'あなたの回答を僕が直接確認して、今の過ごし方についてLINEでお送りします。' }
};

let currentQuestion = 0;
let answers = Array(questions.length).fill(null);
let profile = { name: '', age: '', job: '' };
let finalDiagnosis = null;
let loadingTimers = [];

const dom = {
    startScreen: document.getElementById('start-screen'),
    profileScreen: document.getElementById('profile-screen'),
    questionScreen: document.getElementById('question-screen'),
    loadingScreen: document.getElementById('loading-screen'),
    resultScreen: document.getElementById('result-screen'),
    startBtn: document.getElementById('start-btn'),
    nextToQBtn: document.getElementById('next-to-q-btn'),
    userNameInput: document.getElementById('user-name-input'),
    userAgeInput: document.getElementById('user-age-input'),
    userJobSelect: document.getElementById('user-job-select'),
    profileError: document.getElementById('profile-error'),
    qNum: document.getElementById('q-num'),
    qText: document.getElementById('question-text'),
    qNote: document.getElementById('question-note'),
    optionsContainer: document.getElementById('options-container'),
    multiNextBtn: document.getElementById('multi-next-btn'),
    progressBar: document.getElementById('progress-bar'),
    resultStage: document.getElementById('result-stage'),
    resultTitle: document.getElementById('result-title'),
    resultImg: document.getElementById('result-img'),
    resultDesc: document.getElementById('result-desc'),
    resultAdvice: document.getElementById('result-advice'),
    keywordSection: document.getElementById('keyword-section'),
    keywordHeading: document.getElementById('keyword-heading'),
    keywordCopy: document.getElementById('keyword-copy'),
    resultKeyword: document.getElementById('result-keyword'),
    copyKeywordBtn: document.getElementById('copy-keyword-btn'),
    copyStatus: document.getElementById('copy-status'),
    backBtn: document.getElementById('back-btn'),
    closeBtn: document.getElementById('close-btn')
};

function init() {
    dom.startBtn.addEventListener('click', () => showScreen(dom.profileScreen));
    dom.nextToQBtn.addEventListener('click', goToQuestions);
    dom.backBtn.addEventListener('click', goBack);
    dom.multiNextBtn.addEventListener('click', submitMultipleAnswer);
    dom.copyKeywordBtn.addEventListener('click', copyKeyword);
    dom.closeBtn.addEventListener('click', () => window.close());
}

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(item => item.classList.remove('active'));
    screen.classList.add('active');
    window.scrollTo(0, 0);
}

function goToQuestions() {
    const name = dom.userNameInput.value.trim();
    const age = Number(dom.userAgeInput.value);
    const job = dom.userJobSelect.value;

    if (!name) return showProfileError('公式LINEで使用しているお名前を入力してください。');
    if (!Number.isInteger(age) || age < 15 || age > 99) return showProfileError('年齢を半角数字で入力してください。');
    if (!job) return showProfileError('現在のお仕事を選択してください。');

    profile = { name, age, job };
    dom.profileError.textContent = '';
    currentQuestion = 0;
    answers = Array(questions.length).fill(null);
    renderQuestion();
    showScreen(dom.questionScreen);
}

function showProfileError(message) {
    dom.profileError.textContent = message;
}

function renderQuestion() {
    const question = questions[currentQuestion];
    dom.backBtn.style.display = currentQuestion === 0 ? 'none' : 'block';
    dom.qNum.textContent = currentQuestion + 1;
    dom.qText.innerHTML = question.q;
    dom.qNote.textContent = question.note || '';
    dom.qNote.style.display = question.note ? 'block' : 'none';
    dom.progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
    dom.optionsContainer.innerHTML = '';

    const selected = answers[currentQuestion] || (question.multiple ? [] : null);
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'option-btn';
        button.textContent = option.text;
        button.style.animation = `slideInUp 0.3s ease ${index * 0.06}s both`;

        if (question.multiple && selected.includes(index)) button.classList.add('selected');
        if (question.multiple) {
            button.addEventListener('click', () => toggleMultipleAnswer(index));
        } else {
            button.addEventListener('click', () => submitSingleAnswer(index));
        }
        dom.optionsContainer.appendChild(button);
    });

    dom.multiNextBtn.hidden = !question.multiple;
    if (question.multiple) dom.multiNextBtn.disabled = selected.length === 0;
}

function submitSingleAnswer(optionIndex) {
    answers[currentQuestion] = optionIndex;
    advanceQuestion();
}

function toggleMultipleAnswer(optionIndex) {
    const question = questions[currentQuestion];
    let selected = Array.isArray(answers[currentQuestion]) ? [...answers[currentQuestion]] : [];
    const option = question.options[optionIndex];

    if (option.exclusive) {
        selected = selected.includes(optionIndex) ? [] : [optionIndex];
    } else {
        selected = selected.filter(index => !question.options[index].exclusive);
        selected = selected.includes(optionIndex)
            ? selected.filter(index => index !== optionIndex)
            : [...selected, optionIndex];
    }
    answers[currentQuestion] = selected;
    renderQuestion();
}

function submitMultipleAnswer() {
    if (!answers[currentQuestion] || answers[currentQuestion].length === 0) return;
    advanceQuestion();
}

function advanceQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    } else {
        showScreen(dom.profileScreen);
    }
}

function getSelectedOptions(questionIndex) {
    const question = questions[questionIndex];
    const value = answers[questionIndex];
    if (question.multiple) return (value || []).map(index => question.options[index]);
    return value === null ? [] : [question.options[value]];
}

function calculateDiagnosis() {
    let relationship = 0;
    let readiness = 0;
    let lead = 0;
    const flags = new Set();

    questions.forEach((question, index) => {
        getSelectedOptions(index).forEach(option => {
            relationship += option.relationship || 0;
            readiness += option.readiness || 0;
            lead += option.lead || 0;
            if (option.flag) flags.add(option.flag);
        });
    });

    const hasSevereEmotionalRisk = flags.has('severe_emotion') && (flags.has('chasing') || flags.has('emotional'));
    let displayRank;
    if (flags.has('no_contact') || hasSevereEmotionalRisk) displayRank = 'C';
    else if (relationship >= 14 && readiness >= 12) displayRank = 'S';
    else if (relationship >= 9 && readiness >= 8) displayRank = 'A';
    else if (relationship >= 4 && readiness >= 4) displayRank = 'B';
    else displayRank = 'C';

    const excludedJobs = ['学生', 'パート・アルバイト', '求職中', '無職'];
    const hardExclusions = [];
    if (excludedJobs.includes(profile.job)) hardExclusions.push(`職業:${profile.job}`);
    if (flags.has('no_contact')) hardExclusions.push('連絡手段なし');
    if (flags.has('married')) hardExclusions.push('既婚関係');

    let consultRank;
    if (hardExclusions.length > 0) consultRank = 'C';
    else if (['S', 'A'].includes(displayRank) && readiness >= 12 && lead >= 7) consultRank = 'S';
    else if (displayRank !== 'C' && readiness >= 8 && lead >= 3) consultRank = 'A';
    else if (displayRank !== 'C' && readiness >= 4 && lead >= 0) consultRank = 'B';
    else consultRank = 'C';

    return {
        displayRank,
        consultRank,
        relationship,
        readiness,
        lead,
        flags: [...flags],
        hardExclusions,
        canReceivePersonalReply: hardExclusions.length === 0
    };
}

function finishQuiz() {
    dom.progressBar.style.width = '100%';
    finalDiagnosis = calculateDiagnosis();
    loadingTimers.forEach(clearTimeout);
    loadingTimers = [];

    setTimeout(() => {
        showScreen(dom.loadingScreen);
        const items = [...document.querySelectorAll('.analysis-item')];
        items.forEach((item, index) => item.classList.toggle('active', index === 0));
        loadingTimers.push(setTimeout(() => items[1].classList.add('active'), 1100));
        loadingTimers.push(setTimeout(() => items[2].classList.add('active'), 2200));
        loadingTimers.push(setTimeout(showResult, 3400));
    }, 350);
}

function showResult() {
    const content = resultContent[finalDiagnosis.displayRank];
    dom.resultStage.textContent = content.stage;
    dom.resultTitle.innerHTML = content.title;
    dom.resultImg.src = content.img;
    dom.resultDesc.innerHTML = content.desc;
    dom.resultAdvice.innerHTML = content.advice;

    if (finalDiagnosis.canReceivePersonalReply) {
        const keyword = keywordContent[finalDiagnosis.consultRank];
        dom.keywordHeading.textContent = keyword.heading;
        dom.keywordCopy.textContent = keyword.copy;
        dom.resultKeyword.textContent = keyword.keyword;
        dom.keywordSection.hidden = false;
    } else {
        dom.keywordSection.hidden = true;
    }

    showScreen(dom.resultScreen);
    sendDataToGoogleForms();
}

async function copyKeyword() {
    const keyword = dom.resultKeyword.textContent.trim();
    try {
        await navigator.clipboard.writeText(keyword);
    } catch (error) {
        const input = document.createElement('textarea');
        input.value = keyword;
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        input.remove();
    }
    dom.copyStatus.textContent = `「${keyword}」をコピーしました。公式LINEに戻って送ってください。`;
}

function answerText(index) {
    return getSelectedOptions(index).map(option => option.text).join('／');
}

function groupedAnswer(start, end) {
    const lines = [];
    for (let index = start; index <= end; index++) {
        lines.push(`Q${index + 1}:${answerText(index)}`);
    }
    return lines.join('｜');
}

function sendDataToGoogleForms() {
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScQG2p7YdrsRRnE2Y8LSCMWKNTwpKdRfDLsorCwqzWxz61ONw/formResponse';
    const iframeName = `hidden_iframe_${Date.now()}`;
    const iframe = document.createElement('iframe');
    iframe.name = iframeName;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.action = formUrl;
    form.method = 'POST';
    form.target = iframeName;
    form.style.display = 'none';

    const keyword = finalDiagnosis.canReceivePersonalReply
        ? keywordContent[finalDiagnosis.consultRank].keyword
        : 'CTAなし';
    const resultSummary = [
        `表示:${finalDiagnosis.displayRank}`,
        `相談見込み:${finalDiagnosis.consultRank}`,
        `キーワード:${keyword}`,
        `復縁余地:${finalDiagnosis.relationship}`,
        `準備度:${finalDiagnosis.readiness}`,
        `見込み点:${finalDiagnosis.lead}`,
        `除外:${finalDiagnosis.hardExclusions.join('／') || 'なし'}`
    ].join('｜');

    const data = {
        'entry.808125093': profile.name,
        'entry.1761508389': `年齢:${profile.age}｜職業:${profile.job}`,
        'entry.1005036062': groupedAnswer(0, 2),
        'entry.199990545': groupedAnswer(3, 4),
        'entry.838626022': groupedAnswer(5, 6),
        'entry.1200021442': groupedAnswer(7, 9),
        'entry.1848582778': groupedAnswer(10, 12),
        'entry.1178729743': groupedAnswer(13, 14),
        'entry.721169860': resultSummary
    };

    Object.entries(data).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    setTimeout(() => {
        form.remove();
        iframe.remove();
    }, 2500);
}

document.addEventListener('DOMContentLoaded', init);
