
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Tag, MessageSquare, Copy, CheckCheck, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Separator } from '@/components/ui/separator';

// Sample texts data
const textsData = {
  '1': {
    id: '1',
    title: '금강반야바라밀경 (金剛般若波羅蜜經)',
    originalTitle: '金剛般若波羅蜜經',
    description: '반야부 경전 중 하나로, 공(空)의 개념을 중심으로 하는 대승불교의 핵심 가르침을 담고 있습니다.',
    category: '반야부',
    tags: ['반야부', '대승불교', '공사상'],
    volume: '30',
    period: '고려시대',
    translator: '구마라집 (鳩摩羅什)',
    content: `如是我聞：一時，佛在舍衛國祇樹給孤獨園，與大比丘衆千二百五十人俱。爾時，世尊食時，著衣持鉢，入舍衛大城乞食。於其城中，次第乞已，還至本處。飯食訖，收衣鉢，洗足已，敷座而坐。
    
時，長老須菩提在大衆中即從座起，偏袒右肩，右膝著地，合掌恭敬而白佛言："希有！世尊！如來善護念諸菩薩，善付囑諸菩薩。世尊！善男子、善女人，發阿耨多羅三藐三菩提心，應云何住，云何降伏其心？"
    
佛言："善哉，善哉。須菩提！如汝所說，如來善護念諸菩薩，善付囑諸菩薩。汝今諦聽！當為汝說：善男子、善女人，發阿耨多羅三藐三菩提心，應如是住，如是降伏其心。"
    
"唯然，世尊！願樂欲聞。"`,
    translation: `이와 같이 나는 들었다. 어느 때 부처님께서는 사위국 기수급고독원에 계시면서 천이백오십 명의 대비구 대중과 함께 계셨다. 그 때 세존께서는 식사 시간에 가사를 입고 발우를 가지고 사위 대성에 들어가 차례로 탁발하셨다. 성 안에서 차례로 탁발을 마치고 본래 있던 장소로 돌아오셨다. 식사를 마치시고 가사와 발우를 거두고 발을 씻은 뒤에 자리에 앉으셨다.
    
그때 장로 수보리가 대중 가운데에서 자리에서 일어나 오른쪽 어깨를 드러내고, 오른쪽 무릎을 땅에 대고 합장하여 공경히 부처님께 말씀드렸다. "희유하도다, 세존이시여! 여래께서는 모든 보살들을 잘 보호하여 생각하시고, 모든 보살들을 잘 부촉하시나이다. 세존이시여! 선남자 선여인이 아뇩다라삼먁삼보리심을 발하였다면, 어떻게 머물러야 하며, 어떻게 그 마음을 항복받아야 합니까?"
    
부처님께서 말씀하셨다. "선하도다, 선하도다. 수보리여! 네가 말한 대로 여래는 모든 보살들을 잘 보호하여 생각하고, 모든 보살들을 잘 부촉하느니라. 너는 지금 자세히 들으라! 내가 너를 위해 말하리라. 선남자 선여인이 아뇩다라삼먁삼보리심을 발하였다면, 이와 같이 머물러야 하며, 이와 같이 그 마음을 항복받아야 한다."
    
"그러하옵니다, 세존이시여! 기쁘게 듣고자 하나이다."`,
    commentary: `금강경은 대승불교에서 가장

중요한 경전 중 하나로, 공(空)의 개념을 중심으로 한 가르침을 담고 있습니다. 경전의 첫 부분에서는 수보리가 부처님께 질문을 던지는 장면으로 시작합니다.

"아뇩다라삼먁삼보리심(阿耨多羅三藐三菩提心)"은 '무상정등정각심'이라고 번역되며, 이는 불교에서 최고의 깨달음을 향한 마음을 의미합니다. 수보리의 질문은 이러한 깨달음을 추구하는 보살들이 어떻게 자신의 마음을 머물게 하고 항복받아야 하는지에 관한 것입니다.

부처님의 대답은 금강경 전체를 통해 펼쳐지며, 모든 현상은 공(空)하다는 가르침을 통해 보살의 수행 방법을 설명합니다. 공의 개념은 모든 사물이 고정된 실체가 없다는 것을 의미하며, 이는 금강경의 핵심 가르침입니다.`
  },
  '2': {
    id: '2',
    title: '법화경 (法華經)',
    originalTitle: '妙法蓮華經',
    description: '대승불교의 중요 경전으로, 모든 중생이 성불할 수 있다는 일승사상을 설파합니다.',
    category: '법화부',
    tags: ['법화부', '대승불교', '일승사상'],
    volume: '10',
    period: '고려시대',
    translator: '구마라집 (鳩摩羅什)',
    content: `...`,
    translation: `...`,
    commentary: `...`
  }
};

const TextDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('translation');
  const { toast } = useToast();
  
  // If no ID or ID doesn't exist in our data, show error
  if (!id || !textsData[id as keyof typeof textsData]) {
    return (
      <div className="tripitaka-container py-12">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-semibold text-tripitaka-800 mb-4">
            경전을 찾을 수 없습니다
          </h1>
          <Button asChild>
            <Link to="/browse">돌아가기</Link>
          </Button>
        </div>
      </div>
    );
  }

  const text = textsData[id as keyof typeof textsData];

  const handleCopyText = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: "텍스트가 복사되었습니다.",
      description: "클립보드에 경전 내용이 복사되었습니다.",
    });
  };

  return (
    <div className="py-8 md:py-12">
      <div className="tripitaka-container">
        {/* Breadcrumb and back button */}
        <div className="mb-6">
          <Button asChild variant="ghost" className="p-0 hover:bg-transparent">
            <Link to="/browse" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              경전 목록으로 돌아가기
            </Link>
          </Button>
        </div>

        {/* Text header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {text.tags.map((tag, index) => (
              <span key={index} className="tripitaka-tag">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-serif font-semibold text-tripitaka-800">
            {text.title}
          </h1>
          <p className="text-muted-foreground mt-3 max-w-3xl">
            {text.description}
          </p>
        </div>

        {/* Text metadata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">원문</h3>
            <p className="font-serif text-foreground">{text.originalTitle}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">번역자</h3>
            <p className="text-foreground">{text.translator}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">권수</h3>
            <p className="text-foreground">{text.volume}권</p>
          </div>
        </div>

        {/* Text content tabs */}
        <div className="mb-4 flex justify-between items-center flex-wrap gap-4">
          <Tabs defaultValue="translation" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="original">원문</TabsTrigger>
              <TabsTrigger value="translation">번역본</TabsTrigger>
              <TabsTrigger value="commentary">해설</TabsTrigger>
            </TabsList>
            <TabsContent value="original" className="space-y-4">
              <div className="flex justify-end gap-2 mb-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleCopyText(text.content)}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-3.5 w-3.5" />
                  복사
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Download className="h-3.5 w-3.5" />
                  다운로드
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  공유
                </Button>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 font-serif text-lg whitespace-pre-line">
                {text.content}
              </div>
            </TabsContent>
            <TabsContent value="translation" className="space-y-4">
              <div className="flex justify-end gap-2 mb-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleCopyText(text.translation)}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-3.5 w-3.5" />
                  복사
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Download className="h-3.5 w-3.5" />
                  다운로드
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  공유
                </Button>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-lg whitespace-pre-line">
                {text.translation}
              </div>
            </TabsContent>
            <TabsContent value="commentary" className="space-y-4">
              <div className="flex justify-end gap-2 mb-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleCopyText(text.commentary)}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-3.5 w-3.5" />
                  복사
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Download className="h-3.5 w-3.5" />
                  다운로드
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  공유
                </Button>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-lg whitespace-pre-line">
                {text.commentary}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <Separator className="my-12" />

        {/* Ask AI section */}
        <div className="mb-12">
          <div className="bg-tripitaka-50 border border-tripitaka-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-tripitaka-100 flex items-center justify-center shrink-0">
                <MessageSquare className="h-6 w-6 text-tripitaka-800" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-tripitaka-800 mb-2">
                  AI 도움말에게 질문하기
                </h3>
                <p className="text-muted-foreground mb-4">
                  이 경전에 대해 더 알고 싶은 내용이 있으신가요? AI 도움말에게 질문하세요.
                </p>
                <Button asChild>
                  <Link to="/ai-assistant" className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    AI 도움말로 이동하기
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related texts */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-tripitaka-800 mb-6">
            관련 경전
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(textsData)
              .filter(relatedText => relatedText.id !== id)
              .slice(0, 3)
              .map(relatedText => (
                <Link to={`/text/${relatedText.id}`} key={relatedText.id} className="block">
                  <div className="tripitaka-card p-4 hover:shadow-md transition-shadow h-full">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 bg-tripitaka-100 rounded-md flex items-center justify-center shrink-0">
                        <BookOpen className="h-5 w-5 text-tripitaka-700" />
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-1 mb-1">
                          {relatedText.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="tripitaka-tag text-[10px] px-1.5 py-0">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-medium text-tripitaka-800 line-clamp-2">
                          {relatedText.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextDetail;
