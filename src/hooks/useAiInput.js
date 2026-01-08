import { useState, useRef } from 'react';
import { callGemini } from '../utils/helpers';

export default function useAiInput({
    setLocalAmount,
    setNote,
    setCurrency,
    setSelectedCategory,
    currentCats,
    isPrivateProject,
    onSuccess // Callback to close modal or trigger updates
}) {
    const [isAiModalOpen, setIsAiModalOpen] = useState(false);
    const [aiModalInput, setAiModalInput] = useState('');
    const [isAiProcessing, setIsAiProcessing] = useState(false);
    const [isRecording, setIsRecording] = useState(false);

    const recognitionRef = useRef(null);

    const toggleVoiceRecording = () => {
        if (isRecording) {
            recognitionRef.current?.stop();
            setIsRecording(false);
        } else {
            if (!window.webkitSpeechRecognition && !window.SpeechRecognition) {
                alert("您的瀏覽器不支援語音辨識");
                return;
            }
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.lang = 'zh-TW';
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.onresult = (event) => {
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
                }
                if (finalTranscript) setAiModalInput(prev => prev + finalTranscript);
            };
            recognition.onerror = (event) => { console.error("Speech error", event.error); setIsRecording(false); };
            recognitionRef.current = recognition;
            recognition.start();
            setIsRecording(true);
        }
    };

    const handleAiModalSubmit = async () => {
        if (!aiModalInput) return;
        setIsAiModalOpen(false);
        setIsAiProcessing(true);
        let prompt = `你是一個記帳助手。請分析使用者的輸入，並回傳一個 JSON 物件。
目前的日期是：${new Date().toLocaleString('zh-TW')}。
        可用的分類 ID: ${currentCats.map(c => c.id).join(', ')}
請解析：1. 金額(amount) 2. 類別 ID(categoryId) 3. 備註(note) 4. 幣別(currency, 預設 TWD)
        只回傳 JSON。`;

        if (isPrivateProject) {
            prompt += `\n[重要指令] 此為「私人帳本」模式。請將所有交易視為使用者個人支出，不需要考慮分帳、代墊或AA制邏輯。`;
        }

        if (aiModalInput) prompt += `\n使用者文字: "${aiModalInput}"`;

        const result = await callGemini(prompt, null);
        setIsAiProcessing(false);
        setAiModalInput('');

        if (!result) { alert("AI 無法解析"); return; }
        try {
            const cleanJson = result.replace(/```json/g, '').replace(/```/g, '').trim();
            const parsed = JSON.parse(cleanJson);

            if (parsed.amount) {
                setLocalAmount(parsed.amount.toString());
            }
            if (parsed.note) setNote(parsed.note);
            if (parsed.currency) setCurrency(parsed.currency);
            if (parsed.categoryId) {
                const cat = currentCats.find(c => c.id === parsed.categoryId);
                if (cat) setSelectedCategory(cat);
            }

            if (onSuccess) onSuccess();

        } catch (e) {
            console.error("AI Parse Error", e);
            alert("AI 解析失敗");
        }
    };

    return {
        isAiModalOpen,
        setIsAiModalOpen,
        aiModalInput,
        setAiModalInput,
        isAiProcessing,
        isRecording,
        toggleVoiceRecording,
        handleAiModalSubmit
    };
}
