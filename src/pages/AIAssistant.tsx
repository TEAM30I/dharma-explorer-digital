
import React, { useState } from 'react';
import { Bot, Send, User, RefreshCw, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

// Example questions for demonstration
const exampleQuestions = [
  "금강경은 어떤 내용을 담고 있나요?",
  "화엄경과 법화경의 차이점은 무엇인가요?",
  "팔만대장경의 역사적 가치는 무엇인가요?",
  "불교의 공(空) 사상에 대해 설명해주세요.",
  "선종과 교종의 차이점은 무엇인가요?",
  "대승불교와 소승불교의 주요 차이점은 무엇인가요?"
];

// Mock responses for demonstration
const mockResponses: Record<string, string> = {
  "금강경은 어떤 내용을 담고 있나요?": `금강경(金剛經)은 대승불교의 핵심 경전 중 하나로, 정식 명칭은 '금강반야바라밀경(金剛般若波羅蜜經)'입니다. 이 경전은 공(空)의 개념을 중심으로 한 가르침을 담고 있습니다.

주요 내용으로는:
1. 모든 현상은 공(空)하다는 가르침
2. 집착하지 않는 보살행의 실천
3. 일체 법의 무상(無相)함을 깨닫는 지혜
4. '아상(我相)', '인상(人相)', '중생상(衆生相)', '수자상(壽者相)'의 네 가지 상(相)에 집착하지 말라는 가르침

금강경은 "일체유위법 여몽환포영 여로역여전 응작여시관(一切有爲法 如夢幻泡影 如露亦如電 應作如是觀)"이라는 유명한 게송으로 마무리되는데, 이는 "모든 유위법(有爲法)은 꿈, 환상, 물거품, 그림자와 같고, 이슬과 번개와 같으니 이와 같이 관찰해야 한다"는 의미로, 불교의 공사상을 잘 요약하고 있습니다.`,

  "화엄경과 법화경의 차이점은 무엇인가요?": `화엄경(華嚴經)과 법화경(法華經)은 모두 대승불교의 중요한 경전이지만, 강조점과 내용에 차이가 있습니다.

**화엄경**:
1. 정식 명칭은 '대방광불화엄경(大方廣佛華嚴經)'입니다.
2. 부처의 깨달음의 세계를 장엄하게 묘사하는 경전입니다.
3. '사사무애(事事無礙)'라는 개념을 통해 모든 현상이 서로 방해됨 없이 원융(圓融)하게 어우러지는 세계관을 설명합니다.
4. 보살의 수행 단계를 '십신(十信)', '십주(十住)', '십행(十行)', '십회향(十廻向)', '십지(十地)'로 설명하는 체계적인 수행 과정을 제시합니다.

**법화경**:
1. 정식 명칭은 '묘법연화경(妙法蓮華經)'입니다.
2. '일승사상(一乘思想)'을 중심으로, 모든 중생이 성불할 수 있다는 가르침을 강조합니다.
3. '방편(方便)'의 개념을 통해 부처가 중생의 근기에 맞게 가르침을 전하지만, 궁극적으로는 모두가 성불할 수 있다는 점을 강조합니다.
4. '구원실성(久遠實成)'의 부처를 설명하며, 석가모니 부처의 영원성을 강조합니다.

**주요 차이점**:
- 화엄경은 부처의 깨달음의 세계와 그 장엄함을 묘사하는 데 중점을 두는 반면, 법화경은 모든 중생의 성불 가능성을 강조합니다.
- 화엄경은 우주의 원융한 세계관을 중심으로, 법화경은 구원론적 측면을 중심으로 가르침을 펼칩니다.
- 화엄경은 화엄종의 근본 경전이 되었고, 법화경은 천태종과 일본 불교의 근본 경전이 되었습니다.`
};

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      role: 'user',
      content: input
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate API response
    setTimeout(() => {
      const responseContent = mockResponses[userMessage.content] || 
        "죄송합니다. 해당 질문에 대한 정보를 찾을 수 없습니다. 다른 질문을 해주시거나 더 자세한 내용을 알려주세요.";
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: responseContent
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleExampleQuestion = (question: string) => {
    setInput(question);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className="py-8 md:py-12">
      <div className="tripitaka-container">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-semibold text-tripitaka-800 mb-4">
            AI 도움말
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            팔만대장경과 불교에 관한 질문이 있으신가요? AI 도움말에게 물어보세요. 경전의 내용, 불교 개념, 역사적 맥락 등에 대해 답변해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with example questions */}
          <div className="lg:col-span-1">
            <Card className="tripitaka-card">
              <CardContent className="p-6">
                <h3 className="font-medium text-tripitaka-800 mb-4">예시 질문</h3>
                <div className="space-y-2">
                  {exampleQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start text-left h-auto py-2 px-3"
                      onClick={() => handleExampleQuestion(question)}
                    >
                      <span className="line-clamp-2 text-sm">{question}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat area */}
          <div className="lg:col-span-3">
            <Card className="tripitaka-card h-[600px] flex flex-col">
              <div className="flex items-center justify-between border-b p-4">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-tripitaka-700" />
                  <h3 className="font-medium">팔만대장경 AI 도움말</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearChat}
                  className="text-muted-foreground"
                >
                  <RefreshCw className="h-4 w-4 mr-1" />
                  대화 초기화
                </Button>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-grow p-4">
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-[400px] text-center">
                    <div className="w-16 h-16 rounded-full bg-tripitaka-100 flex items-center justify-center mb-4">
                      <Book className="h-8 w-8 text-tripitaka-700" />
                    </div>
                    <h3 className="font-medium text-tripitaka-800 mb-2">
                      팔만대장경 AI 도움말입니다
                    </h3>
                    <p className="text-muted-foreground max-w-md">
                      경전의 내용, 불교 개념, 역사적 의미 등에 대해 질문해주세요.
                      예시 질문을 클릭하거나 직접 질문을 입력할 수 있습니다.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {message.role === 'assistant' && (
                          <div className="w-8 h-8 rounded-full bg-tripitaka-100 flex items-center justify-center flex-shrink-0">
                            <Bot className="h-4 w-4 text-tripitaka-700" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] rounded-lg p-4 ${
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          }`}
                        >
                          <div className="whitespace-pre-line">{message.content}</div>
                        </div>
                        {message.role === 'user' && (
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <User className="h-4 w-4 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-tripitaka-100 flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-tripitaka-700" />
                        </div>
                        <div className="max-w-[80%] rounded-lg p-4 bg-muted">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-tripitaka-400 animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-tripitaka-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 rounded-full bg-tripitaka-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </ScrollArea>

              {/* Input area */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="질문을 입력하세요..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="min-h-[60px] resize-none"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="flex-shrink-0"
                    disabled={!input.trim() || isLoading}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Enter 키를 누르면 메시지가 전송됩니다. Shift+Enter로 줄바꿈을 할 수 있습니다.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
