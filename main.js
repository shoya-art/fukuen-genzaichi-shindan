const questions = [
    {
        q: "彼と別れてから、<br>どのくらい経ちますか？",
        options: [
            { text: "1ヶ月未満", type: "C" },
            { text: "1ヶ月〜3ヶ月", type: "C" },
            { text: "3ヶ月〜半年", type: "A" },
            { text: "半年以上", type: "A" }
        ]
    },
    {
        q: "今、彼との連絡は<br>どのような状態ですか？",
        options: [
            { text: "普通にLINEや電話ができるし、会えている", type: "A" },
            { text: "業務連絡や特定の用事があれば返信は来る", type: "A" },
            { text: "既読や未読スルーが多く、返信がほとんど来ない", type: "C" },
            { text: "完全な音信不通、またはブロックされている", type: "C" }
        ]
    },
    {
        q: "彼から1日LINEの返信が来ません。<br>あなたの心の状態は？",
        options: [
            { text: "「忙しいのかな」と気にせず、自分の時間を楽しむ", type: "A" },
            { text: "「後で返ってくるだろう」と少し気になりつつも待てる", type: "A" },
            { text: "そわそわして何度もスマホを開いて確認してしまう", type: "B" },
            { text: "「嫌われた？」「他の女性がいる？」と不安で眠れなくなる", type: "C" }
        ]
    },
    {
        q: "今回の別れの原因は、<br>主にどこにあったと感じていますか？",
        options: [
            { text: "お互いの価値観や、すれ違い", type: "A" },
            { text: "コミュニケーション不足で本音を言えなかったこと", type: "B" },
            { text: "私のわがままや、重い態度が原因だった気がする", type: "D" },
            { text: "彼に非があったと思うが、私がもっと我慢すれば別れずに済んだ", type: "D" }
        ]
    },
    {
        q: "ご自身の性格について、<br>どう感じることが多いですか？",
        options: [
            { text: "良いところも悪いところも、これが私だと思える", type: "A" },
            { text: "落ち込むこともあるが、立ち直るのも早い方だ", type: "A" },
            { text: "SNSなどで他人のキラキラした生活を見て落ち込むことが多い", type: "C" },
            { text: "自分のことが好きになれず、自信が持てる部分が少ない", type: "D" }
        ]
    },
    {
        q: "今のあなたは、どんな未来（自分）に<br>なりたいと一番強く望んでいますか？",
        options: [
            { text: "彼と復縁して、今度こそずっと一緒にいたい", type: "B" },
            { text: "恋愛だけでなく、仕事や趣味も楽しめる自分になりたい", type: "A" },
            { text: "不安や自己嫌悪を手放して、心穏やかに過ごしたい", type: "D" },
            { text: "どうなりたいか分からないくらい、今は心に余裕がない", type: "C" }
        ]
    },
    {
        q: "もし彼と復縁できたら、<br>どんな関係になりたいですか？",
        options: [
            { text: "お互いに自立して、支え合える対等な関係", type: "A" },
            { text: "以前よりも素直に気持ちを伝え合える関係", type: "A" },
            { text: "今度こそ嫌われないように、彼に合わせて尽くす関係", type: "B" },
            { text: "彼にずっと愛されて、私を安心させてくれる関係", type: "B" }
        ]
    }
];

const results = {
    A: {
        title: "復縁の可能性は十分！<br>でも今のままでは「同じことの繰り返し」かも。",
        img: "images/result_a.png",
        desc: "彼との関係は決して最悪ではなく、お互いにまだ情や繋がりを感じられる状態です。それなのに進展しないのは、あなたが心の奥底で抱えている「また離れていったらどうしよう」「今の私じゃダメだ」という自信のなさが、無意識に彼に対する遠慮や不自然な態度として伝わってしまっているからです。",
        advice: "彼に愛されることで自分の価値を確かめるのではなく、「私なら大丈夫」という根拠のない自信を取り戻すこと。復縁の決定打になるのは、駆け引きのテクニックではなく『あなた自身の自己肯定感』です。今の関係性なら、あなたの心が自立するだけで、彼から追ってくる可能性が極めて高いです。"
    },
    B: {
        title: "「愛されたい」が強すぎて、<br>本当のあなたが見えなくなっていませんか？",
        img: "images/result_b.png",
        desc: "彼を想う気持ちが強いあまり、「彼がどう思うか」「彼に嫌われないか」を基準に行動していませんか？自分の本当の気持ちや意見を抑え込んで彼に合わせる恋愛は、一時的には上手くいっても、彼にとって徐々に「都合のいい存在」や「重い存在」に変わってしまう危険信号です。",
        advice: "相手軸で生きているため、彼からの愛情がないと自分の存在価値を感じられなくなっています。彼が本当に恋に落ちたのは、顔色をうかがうあなたではなく、自由に笑っていたあなたのはず。「尽くす」のをやめて「自分を大切にする」自己肯定感を育てることが、対等な関係での復縁に絶対必要です。"
    },
    C: {
        title: "今は「彼」ではなく「自分」を癒やす時期。<br>復縁の鍵はあなたの中にあります。",
        img: "images/result_c.png",
        desc: "別れのショックや彼との冷たい距離感から、「このまま忘れられたらどうしよう」と夜も眠れないほどの焦りや強い不安を感じている状態ですね。本当に辛い時期だと思います。ですが、今そのパニック状態のまま無理に彼に連絡しても、重い空気が伝わってしまい逆効果になってしまいます。",
        advice: "「彼とどうなりたいか」を考える余裕すらないほど、今のあなたは心が傷つき、疲労しています。まずは彼に向いた矢印を自分に戻してあげてください。無理に前を向こうとするのではなく、傷ついた自分を受け入れ、グラグラになった自己肯定感を土台からそっと立て直すことが、結果的に彼を引き寄せる一番の近道です。"
    },
    D: {
        title: "「私が我慢すれば…」はもう卒業！<br>彼が本当に好きなのは「笑顔のあなた」です。",
        img: "images/result_d.png",
        desc: "「私なら大丈夫」という言葉に根拠のない自信を持てていますか？「全部自分が悪かった」「私がもっと頑張れば別れずに済んだのに」と、自分を強く責め続けていませんか？相手に愛されるために自分を犠牲にし、本来のあなたの魅力が完全に隠れてしまっています。優しすぎるがゆえに、いつも自分が損をする恋愛パターンに陥りやすい状態です。",
        advice: "自己肯定感が極めて低いため、「ありのままの自分では愛される資格がない」と心が勘違いを起こしています。彼が復縁したくなるのは、彼に媚びて尽くす女性ではなく、自分自身を認めて心から笑っている女性です。まずは「自分責め」をストップし、自分で自分を抱きしめてあげる方法を知る必要があります。"
    }
};

let currentQuestion = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };
let userAnswers = []; // 各質問で選んだテキストを保存する配列
let userTypes = []; // 各質問で選んだタイプを保存する配列
let userName = ""; // ユーザー名を保存する変数

const dom = {
    startScreen: document.getElementById('start-screen'),
    nameScreen: document.getElementById('name-screen'),
    questionScreen: document.getElementById('question-screen'),
    loadingScreen: document.getElementById('loading-screen'),
    resultScreen: document.getElementById('result-screen'),
    startBtn: document.getElementById('start-btn'),
    nextToQBtn: document.getElementById('next-to-q-btn'),
    userNameInput: document.getElementById('user-name-input'),
    qNum: document.getElementById('q-num'),
    qText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    progressBar: document.getElementById('progress-bar'),
    resultTitle: document.getElementById('result-title'),
    resultImg: document.getElementById('result-img'),
    resultDesc: document.getElementById('result-desc'),
    resultAdvice: document.getElementById('result-advice'),
    backBtn: document.getElementById('back-btn'),
    closeBtn: document.getElementById('close-btn')
};

function init() {
    dom.startBtn.addEventListener('click', () => showScreen(dom.nameScreen));
    if (dom.nextToQBtn) dom.nextToQBtn.addEventListener('click', goToQuestions);
    if (dom.backBtn) dom.backBtn.addEventListener('click', goBack);
    if (dom.closeBtn) dom.closeBtn.addEventListener('click', () => { window.close(); });
}

function goToQuestions() {
    userName = dom.userNameInput.value.trim();
    if (!userName) {
        alert("お名前を教えてくださいね。");
        return;
    }
    startQuiz();
}

function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        const lastType = userTypes.pop();
        if (scores[lastType] !== undefined) {
            scores[lastType]--;
        }
        userAnswers.pop();
        renderQuestion();
    } else {
        // Q1で戻るボタンを押した場合は名前入力画面へ戻す
        showScreen(dom.nameScreen);
    }
}

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });
    screen.classList.add('active');
}

function startQuiz() {
    currentQuestion = 0;
    scores = { A: 0, B: 0, C: 0, D: 0 };
    userAnswers = [];
    userTypes = [];
    renderQuestion();
    showScreen(dom.questionScreen);
}

function renderQuestion() {
    if (dom.backBtn) {
        dom.backBtn.style.display = currentQuestion === 0 ? 'none' : 'block';
    }
    const q = questions[currentQuestion];
    dom.qNum.textContent = currentQuestion + 1;
    dom.qText.innerHTML = q.q;

    // プログレスバー更新
    const progress = (currentQuestion / questions.length) * 100;
    setTimeout(() => {
        dom.progressBar.style.width = `${progress}%`;
    }, 50);

    dom.optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = opt.text;
        btn.addEventListener('click', () => handleAnswer(opt.type, opt.text));

        // アニメーション
        btn.style.animation = `slideInUp 0.3s ease ${index * 0.1}s both`;

        dom.optionsContainer.appendChild(btn);
    });
}

function handleAnswer(type, text) {
    if (scores[type] !== undefined) {
        scores[type]++;
    }

    // 選んだ回答テキストを保存
    userAnswers.push(text);
    userTypes.push(type);

    currentQuestion++;

    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    dom.progressBar.style.width = '100%';

    setTimeout(() => {
        showScreen(dom.loadingScreen);

        // 2.5秒後に結果表示（期待感を高める演出）
        setTimeout(() => {
            showResult();
        }, 2500);
    }, 400);
}

function showResult() {
    // 判定ロジック：最も多く選ばれたタイプを結果とする
    let resultType = 'A';
    let max = scores.A;

    if (scores.B > max) {
        max = scores.B;
        resultType = 'B';
    }
    if (scores.C > max) {
        max = scores.C;
        resultType = 'C';
    }
    if (scores.D >= max) {
        max = scores.D;
        resultType = 'D';
    }

    const res = results[resultType];
    dom.resultTitle.innerHTML = res.title;
    dom.resultImg.src = res.img;
    dom.resultDesc.innerHTML = res.desc;
    dom.resultAdvice.innerHTML = res.advice;

    showScreen(dom.resultScreen);
    window.scrollTo(0, 0); // 画面トップへスクロール

    // 裏側でGoogleフォームへデータを送信
    sendDataToGoogleForms(resultType);
}

// Googleフォームへ回答データを送信する関数
function sendDataToGoogleForms(resultType) {
    // フォームのPOST用URL（ユーザー提供の正規ID）
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScQG2p7YdrsRRnE2Y8LSCMWKNTwpKdRfDLsorCwqzWxz61ONw/formResponse';

    // データ送信用の一時的なiframeを作成（画面遷移を防ぐため）
    const iframeName = 'hidden_iframe_' + new Date().getTime();
    const iframe = document.createElement('iframe');
    iframe.name = iframeName;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // データ送信用の一時的なformを作成
    const form = document.createElement('form');
    form.action = formUrl;
    form.method = 'POST';
    form.target = iframeName;
    form.style.display = 'none';

    // 送信するデータを設定
    const data = {
        'entry.808125093': userName, // お名前
        'entry.1761508389': userAnswers[0] || '', // Q1
        'entry.1005036062': userAnswers[1] || '', // Q2
        'entry.199990545': userAnswers[2] || '',  // Q3
        'entry.838626022': userAnswers[3] || '',  // Q4
        'entry.1200021442': userAnswers[4] || '', // Q5
        'entry.1848582778': userAnswers[5] || '', // Q6
        'entry.1178729743': userAnswers[6] || '', // Q7
        'entry.721169860': '結果' + resultType   // 最終結果パターン
    };

    // フォームに送信データを追加
    for (const key in data) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = data[key];
        form.appendChild(input);
    }

    document.body.appendChild(form);

    // 送信実行（JSからフォームを送信し、結果を隠しiframeで受け取る）
    form.submit();

    // 送信後、少し待ってからDOM上の不要な要素を削除
    setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        console.log("診断データの送信処理を完了しました");
    }, 2000);
}

document.addEventListener('DOMContentLoaded', init);
