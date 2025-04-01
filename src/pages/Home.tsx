
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Search, Tag, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-tripitaka-100 to-background py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-wood-pattern"></div>
        <div className="tripitaka-container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="tripitaka-heading animate-fade-in">
              팔만대장경 디지털 아카이브
            </h1>
            <p className="tripitaka-subheading mt-6 text-center text-muted-foreground animate-slide-in">
              유네스코 세계기록유산인 '팔만대장경'을 디지털화하여 언제 어디서나 쉽게 접근하고 탐색할 수 있는 플랫폼입니다.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button asChild className="tripitaka-button tripitaka-button-primary">
                <Link to="/browse">
                  열람하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="tripitaka-button">
                <Link to="/about">소개 알아보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="tripitaka-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-semibold text-tripitaka-800">
              디지털 아카이브 특징
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              누구나 쉽게 팔만대장경을 탐색하고 연구할 수 있도록 다양한 기능을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="tripitaka-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-tripitaka-100 flex items-center justify-center mb-4">
                  <Book className="h-6 w-6 text-tripitaka-800" />
                </div>
                <h3 className="text-xl font-serif font-medium text-tripitaka-800 mb-2">디지털 텍스트</h3>
                <p className="text-muted-foreground">
                  경전 전체가 디지털화되어 쉽게 접근하고 읽을 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="tripitaka-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-tripitaka-100 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-tripitaka-800" />
                </div>
                <h3 className="text-xl font-serif font-medium text-tripitaka-800 mb-2">고급 검색</h3>
                <p className="text-muted-foreground">
                  키워드, 내용, 주제별로 원하는 정보를 빠르게 찾을 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="tripitaka-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-tripitaka-100 flex items-center justify-center mb-4">
                  <Tag className="h-6 w-6 text-tripitaka-800" />
                </div>
                <h3 className="text-xl font-serif font-medium text-tripitaka-800 mb-2">태그 및 필터링</h3>
                <p className="text-muted-foreground">
                  다양한 태그와 필터를 통해 원하는 주제나 분류의 경전을 찾을 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="tripitaka-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-tripitaka-100 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-tripitaka-800" />
                </div>
                <h3 className="text-xl font-serif font-medium text-tripitaka-800 mb-2">AI 도움말</h3>
                <p className="text-muted-foreground">
                  AI를 활용한 질문 답변 시스템으로 경전에 대한 궁금증을 해결할 수 있습니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Texts Section */}
      <section className="py-20 bg-tripitaka-50">
        <div className="tripitaka-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-semibold text-tripitaka-800">
              주요 경전 컬렉션
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              팔만대장경의 중요한 경전들을 소개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTexts.map((text, index) => (
              <Link to={`/text/${text.id}`} key={text.id} className="block">
                <Card className="tripitaka-card h-full overflow-hidden">
                  <div className="h-48 bg-tripitaka-200 overflow-hidden">
                    <div className="w-full h-full bg-wood-pattern opacity-30 hover:opacity-20 transition-opacity"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {text.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tripitaka-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-serif font-medium text-tripitaka-800 mb-2 line-clamp-2">
                      {text.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {text.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="tripitaka-button tripitaka-button-primary">
              <Link to="/browse">
                모든 경전 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="tripitaka-container">
          <div className="bg-gradient-to-r from-tripitaka-100 to-tripitaka-200 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-wood-pattern opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-semibold text-tripitaka-800 mb-4">
                팔만대장경의 지혜를 탐험해보세요
              </h2>
              <p className="text-lg text-tripitaka-700 mb-8">
                수천 년의 지혜가 담긴 경전을 지금 바로 디지털로 만나보세요. 쉽게 검색하고, 읽고, 이해할 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="tripitaka-button tripitaka-button-primary">
                  <Link to="/browse">경전 열람하기</Link>
                </Button>
                <Button asChild variant="outline" className="tripitaka-button bg-white/80 hover:bg-white">
                  <Link to="/ai-assistant">AI 도움말 이용하기</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data for featured texts
const featuredTexts = [
  {
    id: '1',
    title: '금강반야바라밀경 (金剛般若波羅蜜經)',
    description: '반야부 경전 중 하나로, 공(空)의 개념을 중심으로 하는 대승불교의 핵심 가르침을 담고 있습니다.',
    tags: ['반야부', '대승불교']
  },
  {
    id: '2',
    title: '법화경 (法華經)',
    description: '대승불교의 중요 경전으로, 모든 중생이 성불할 수 있다는 일승사상을 설파합니다.',
    tags: ['대승불교', '일승사상']
  },
  {
    id: '3',
    title: '화엄경 (華嚴經)',
    description: '부처의 깨달음의 세계를 설명하며, 사사무애(事事無礙)의 원융한 세계관을 보여줍니다.',
    tags: ['대승불교', '화엄사상']
  }
];

export default Home;
