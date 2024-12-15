// 測驗題目
const allQuizData = [
    { word: 'a', options: ['一(個)', '二個', '三個', '四個'], correct: 0 },
    { word: 'A.M.', options: ['上午', '下午', '晚上', '凌晨'], correct: 0 },
    { word: 'ability', options: ['能力', '智慧', '體力', '精神'], correct: 0 },
    { word: 'able', options: ['無能的', '能夠的', '軟弱的', '虛弱的'], correct: 1 },
    { word: 'about', options: ['遠離', '大約', '完全', '絕對'], correct: 1 },
    { word: 'above', options: ['下面', '旁邊', '上面', '裡面'], correct: 2 },
    { word: 'abroad', options: ['國內', '在國外', '遠方', '近處'], correct: 1 },
    { word: 'absent', options: ['出席的', '專心的', '缺席的', '認真的'], correct: 2 },
    { word: 'accept', options: ['拒絕', '收受', '放棄', '否認'], correct: 1 },
    { word: 'accident', options: ['計畫', '意外事故', '活動', '慶典'], correct: 1 },
    { word: 'achieve', options: ['失敗', '放棄', '達到', '停止'], correct: 2 },
    { word: 'across', options: ['直行', '橫過', '轉彎', '迴轉'], correct: 1 },
    { word: 'act', options: ['休息', '表演', '睡覺', '玩耍'], correct: 1 },
    { word: 'action', options: ['動作', '靜止', '休息', '思考'], correct: 0 },
    { word: 'active', options: ['懶惰的', '活躍的', '疲倦的', '安靜的'], correct: 1 },
    { word: 'activity', options: ['睡眠', '活動', '休息', '放鬆'], correct: 1 },
    { word: 'actor', options: ['觀眾', '演員', '導演', '作家'], correct: 1 },
    { word: 'actress', options: ['女演員', '女歌手', '女作家', '女導演'], correct: 0 },
    { word: 'actually', options: ['可能', '或許', '實際上', '也許'], correct: 2 },
    { word: 'add', options: ['減少', '加上', '除以', '乘以'], correct: 1 },
    { word: 'addition', options: ['減法', '加法', '除法', '乘法'], correct: 1 },
    { word: 'address', options: ['名字', '地址', '電話', '郵件'], correct: 1 },
    { word: 'admire', options: ['討厭', '欽佩', '忽視', '批評'], correct: 1 },
    { word: 'admit', options: ['否認', '承認', '拒絕', '放棄'], correct: 1 },
    { word: 'adopt', options: ['遺棄', '領養', '販賣', '忽視'], correct: 1 },
    { word: 'adult', options: ['小孩', '成年人', '青少年', '嬰兒'], correct: 1 },
    { word: 'advance', options: ['後退', '前進', '停止', '轉向'], correct: 1 },
    { word: 'advantage', options: ['缺點', '優點', '問題', '困難'], correct: 1 },
    { word: 'adventure', options: ['平靜', '冒險', '無聊', '例行'], correct: 1 },
    { word: 'advertisement', options: ['新聞', '廣告', '報導', '小說'], correct: 1 },
    { word: 'advice', options: ['命令', '建議', '威脅', '懲罰'], correct: 1 },
    { word: 'advise', options: ['強迫', '建議', '命令', '懲罰'], correct: 1 },
    { word: 'affair', options: ['娛樂', '事務', '遊戲', '運動'], correct: 1 },
    { word: 'affect', options: ['保護', '影響', '忽視', '避免'], correct: 1 },
    { word: 'afraid', options: ['勇敢的', '害怕的', '開心的', '興奮的'], correct: 1 },
    { word: 'after', options: ['之前', '之後', '現在', '同時'], correct: 1 },
    { word: 'afternoon', options: ['早上', '下午', '晚上', '半夜'], correct: 1 },
    { word: 'again', options: ['從不', '再一次', '永遠', '偶爾'], correct: 1 },
    { word: 'against', options: ['支持', '反對', '幫助', '讚同'], correct: 1 },
    { word: 'age', options: ['身高', '年齡', '體重', '速度'], correct: 1 },
    { word: 'ago', options: ['之後', '以前', '現在', '將來'], correct: 1 },
    { word: 'agree', options: ['反對', '同意', '懷疑', '拒絕'], correct: 1 },
    { word: 'ahead', options: ['後面', '前面', '旁邊', '中間'], correct: 1 },
    { word: 'aid', options: ['阻礙', '幫助', '破壞', '忽視'], correct: 1 },
    { word: 'aim', options: ['放棄', '目標', '失敗', '退縮'], correct: 1 },
    { word: 'air', options: ['水', '空氣', '土', '火'], correct: 1 },
    { word: 'air conditioner', options: ['電扇', '冷氣機', '暖氣', '除濕機'], correct: 1 },
    { word: 'aircraft', options: ['汽車', '飛機', '船', '火車'], correct: 1 },
    { word: 'airline', options: ['鐵路', '航空公司', '巴士公司', '輪船公司'], correct: 1 },
    { word: 'airplane', options: ['直升機', '飛機', '熱氣球', '滑翔機'], correct: 1 },
    { word: 'airport', options: ['車站', '機場', '港口', '站牌'], correct: 1 },
    { word: 'alarm', options: ['時鐘', '鬧鐘', '手錶', '碼錶'], correct: 1 },
    { word: 'album', options: ['書本', '相簿', '筆記本', '日記'], correct: 1 },
    { word: 'alike', options: ['不同的', '相似的', '特別的', '獨特的'], correct: 1 },
    { word: 'alive', options: ['死的', '活著的', '睡著的', '生病的'], correct: 1 },
    { word: 'all', options: ['部分', '全部', '一些', '少許'], correct: 1 },
    { word: 'allow', options: ['禁止', '准許', '阻止', '拒絕'], correct: 1 },
    { word: 'almost', options: ['完全', '幾乎', '絕對', '永遠'], correct: 1 },
    { word: 'alone', options: ['群體的', '單獨的', '熱鬧的', '擁擠的'], correct: 1 },
    { word: 'along', options: ['遠離', '沿著', '背離', '偏離'], correct: 1 },
    { word: 'aloud', options: ['安靜地', '大聲地', '輕聲地', '無聲地'], correct: 1 },
    { word: 'alphabet', options: ['數字', '字母表', '符號', '標點'], correct: 1 },
    { word: 'already', options: ['尚未', '已經', '從不', '永遠'], correct: 1 },
    { word: 'also', options: ['只有', '也', '除了', '但是'], correct: 1 },
    { word: 'although', options: ['因為', '雖然', '所以', '但是'], correct: 1 },
    { word: 'altogether', options: ['部分', '全部', '一些', '少許'], correct: 1 },
    { word: 'always', options: ['從不', '總是', '偶爾', '很少'], correct: 1 },
    { word: 'ambulance', options: ['警車', '救護車', '消防車', '計程車'], correct: 1 },
    { word: 'America', options: ['歐洲', '美國', '亞洲', '非洲'], correct: 1 },
    { word: 'American', options: ['英國的', '美國的', '法國的', '德國的'], correct: 1 },
    { word: 'among', options: ['之外', '之中', '之前', '之後'], correct: 1 },
    { word: 'amount', options: ['品質', '數量', '大小', '重量'], correct: 1 },
    { word: 'ancient', options: ['現代的', '古代的', '未來的', '當代的'], correct: 1 },
    { word: 'and', options: ['或', '和', '但', '所以'], correct: 1 },
    { word: 'angel', options: ['魔鬼', '天使', '精靈', '妖怪'], correct: 1 },
    { word: 'anger', options: ['快樂', '憤怒', '悲傷', '害怕'], correct: 1 },
    { word: 'angry', options: ['開心的', '生氣的', '平靜的', '害怕的'], correct: 1 },
    { word: 'animal', options: ['植物', '動物', '礦物', '細菌'], correct: 1 },
    { word: 'ankle', options: ['手腕', '腳踝', '手肘', '膝蓋'], correct: 1 },
    { word: 'another', options: ['相同', '另一個', '這個', '那個'], correct: 1 },
    { word: 'answer', options: ['問題', '答案', '疑問', '猜測'], correct: 1 },
    { word: 'ant', options: ['蜜蜂', '螞蟻', '蒼蠅', '蚊子'], correct: 1 },
    { word: 'any', options: ['沒有', '任何', '所有', '某些'], correct: 1 },
    { word: 'anybody', options: ['沒人', '任何人', '所有人', '某人'], correct: 1 },
    { word: 'anymore', options: ['永遠', '再也不', '仍然', '依然'], correct: 1 },
    { word: 'anyone', options: ['沒人', '任何人', '某人', '每個人'], correct: 1 },
    { word: 'anything', options: ['沒什麼', '任何事', '某事', '每件事'], correct: 1 },
    { word: 'anytime', options: ['從不', '任何時候', '某時', '每次'], correct: 1 }
];

let quizData = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;
let answerHistory = [];

// 初始化遊戲
function initGame() {
    // 隨機選擇10題題目
    quizData = shuffleArray([...allQuizData]).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    answerHistory = [];
    document.getElementById('currentScore').textContent = score;
    showQuestion();
}

// Fisher-Yates 洗牌算法
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 顯示問題
function showQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        endGame();
        return;
    }

    const question = quizData[currentQuestionIndex];
    document.getElementById('currentWord').textContent = question.word;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    document.getElementById('feedback').textContent = '';
    startTimer();
}

// 開始計時器
function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    updateTimerDisplay();

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false);
            setTimeout(nextQuestion, 2000);
        }
    }, 1000);
}

// 更新計時器顯示
function updateTimerDisplay() {
    document.getElementById('timer').textContent = `剩餘時間: ${timeLeft}秒`;
}

// 檢查答案
function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const correct = selectedIndex === quizData[currentQuestionIndex].correct;
    
    if (correct) {
        score += 10;
        document.getElementById('currentScore').textContent = score;
    }
    
    // 記錄答題歷史
    answerHistory.push({
        word: quizData[currentQuestionIndex].word,
        correct: correct,
        userAnswer: quizData[currentQuestionIndex].options[selectedIndex],
        correctAnswer: quizData[currentQuestionIndex].options[quizData[currentQuestionIndex].correct]
    });
    
    showFeedback(correct);
    setTimeout(nextQuestion, 2000);
}

// 顯示答題結果
function showFeedback(correct) {
    const feedback = document.getElementById('feedback');
    const correctAnswer = quizData[currentQuestionIndex].options[quizData[currentQuestionIndex].correct];
    
    if (correct) {
        feedback.innerHTML = '<div style="font-size: 24px; color: #2e7d32;">✓ 答對了！</div>';
    } else {
        feedback.innerHTML = `<div style="font-size: 24px; color: #c62828;">✗ 答錯了！</div>正確答案是: ${correctAnswer}`;
    }
}

// 下一題
function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

// 結束遊戲
function endGame() {
    const container = document.querySelector('.quiz-container');
    let historyHTML = '<h3>答題記錄：</h3><ul style="list-style: none; padding: 0;">';
    
    answerHistory.forEach((record, index) => {
        const icon = record.correct ? '✓' : '✗';
        const color = record.correct ? '#2e7d32' : '#c62828';
        historyHTML += `
            <li style="margin: 10px 0; padding: 10px; background: #f5f5f5; border-radius: 4px;">
                <span style="color: ${color}; font-weight: bold;">${icon}</span>
                <strong>${record.word}</strong> - 
                您的答案: ${record.userAnswer}
                ${!record.correct ? `<br>正確答案: ${record.correctAnswer}` : ''}
            </li>
        `;
    });
    
    container.innerHTML = `
        <h2>測驗結束！</h2>
        <p>你的得分是: ${score} / 100</p>
        ${historyHTML}</ul>
        <button onclick="initGame()" class="option-btn" style="margin-top: 20px;">重新開始</button>
    `;
}

// 單字發音功能
function speakWord() {
    const word = quizData[currentQuestionIndex].word;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
}

// 開始遊戲
initGame();
