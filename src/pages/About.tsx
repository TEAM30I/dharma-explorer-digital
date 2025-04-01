
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, History, Globe, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-tripitaka-100 to-background py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-wood-pattern"></div>
        <div className="tripitaka-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-tripitaka-800 mb-6">
              팔만대장경 디지털 아카이브 소개
            </h1>
            <p className="text-lg text-muted-foreground">
              유네스코 세계기록유산인 팔만대장경을 디지털화하여 
              누구나 쉽게 접근하고 연구할 수 있는 플랫폼을 구축하는 프로젝트입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="tripitaka-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* About Tripitaka Koreana */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-tripitaka-800 mb-6">
                  팔만대장경이란?
                </h2>
                <div className="prose max-w-none text-foreground">
                  <p>
                    팔만대장경은 고려시대에 완성된 목판 불경으로, 정식 명칭은 '고려대장경(高麗大藏經)'입니다. 
                    '팔만대장경'이라는 이름은 8만여 개의 목판에 새겨져 있다는 데서 유래했습니다.
                  </p>
                  <p>
                    현재 경상북도 합천 해인사에 보관되어 있는 팔만대장경은 1237년부터 1251년까지 
                    약 16년에 걸쳐 제작되었으며, 총 81,258장의 목판에 새겨져 있습니다. 이는 약 52,382,960자에 
                    달하는 방대한 분량입니다.
                  </p>
                  <p>
                    팔만대장경은 그 제작 기술, 정교함, 보존 상태 등이 뛰어나 
                    1995년 유네스코 세계기록유산으로 등재되었습니다. 지금까지 800년 가까이 원형 그대로 
                    보존되어 온 것은 세계적으로도 매우 드문 사례입니다.
                  </p>
                </div>
              </div>

              <Separator />

              {/* About the Digital Archive Project */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-tripitaka-800 mb-6">
                  디지털 아카이브 프로젝트
                </h2>
                <div className="prose max-w-none text-foreground">
                  <p>
                    팔만대장경 디지털 아카이브 프로젝트는 이 귀중한 문화유산을 디지털화하여 
                    누구나 쉽게 접근하고 연구할 수 있도록 하는 것을 목표로 합니다.
                  </p>
                  <p>
                    주요 목표는 다음과 같습니다:
                  </p>
                  <ul>
                    <li>팔만대장경의 전체 내용을 디지털 텍스트로 변환</li>
                    <li>원문과 번역본, 주석을 함께 제공하여 이해 도모</li>
                    <li>사용자 친화적인 인터페이스로 쉽게 검색하고 열람 가능</li>
                    <li>태그, 필터링 등의 기능으로 효율적인 정보 탐색 지원</li>
                    <li>AI 기술을 활용한 질의응답 시스템 구축</li>
                    <li>연구자들을 위한 API 제공</li>
                  </ul>
                  <p>
                    이 프로젝트는 불교학, 역사학, 문헌학, 디지털 인문학 등 
                    다양한 학문 분야의 전문가들과 기술 전문가들의 협업으로 진행되고 있습니다.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Technical Information */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-tripitaka-800 mb-6">
                  기술적 특징
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="tripitaka-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-tripitaka-100 flex items-center justify-center shrink-0">
                          <Server className="h-5 w-5 text-tripitaka-800" />
                        </div>
                        <div>
                          <h3 className="font-medium text-tripitaka-800 mb-2">
                            데이터베이스 구축
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            팔만대장경의 모든 경전을 구조화된 데이터베이스로 구축하여 
                            빠른 검색과 효율적인 데이터 관리가 가능합니다.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="tripitaka-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-tripitaka-100 flex items-center justify-center shrink-0">
                          <Globe className="h-5 w-5 text-tripitaka-800" />
                        </div>
                        <div>
                          <h3 className="font-medium text-tripitaka-800 mb-2">
                            다국어 지원
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            한국어 외에도 영어, 중국어 등 다양한 언어로 번역을 
                            제공하여 전 세계 연구자들의 접근성을 높였습니다.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="tripitaka-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-tripitaka-100 flex items-center justify-center shrink-0">
                          <BookOpen className="h-5 w-5 text-tripitaka-800" />
                        </div>
                        <div>
                          <h3 className="font-medium text-tripitaka-800 mb-2">
                            텍스트 분석 도구
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            경전의 내용을 분석하고 연구할 수 있는 다양한 
                            텍스트 분석 도구를 제공합니다.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="tripitaka-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-tripitaka-100 flex items-center justify-center shrink-0">
                          <History className="h-5 w-5 text-tripitaka-800" />
                        </div>
                        <div>
                          <h3 className="font-medium text-tripitaka-800 mb-2">
                            역사적 맥락 제공
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            각 경전의 역사적 맥락, 제작 배경, 사회적 의미 등에 
                            대한 정보를 함께 제공합니다.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Future Plans */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-tripitaka-800 mb-6">
                  향후 계획
                </h2>
                <div className="prose max-w-none text-foreground">
                  <p>
                    팔만대장경 디지털 아카이브 프로젝트는 지속적으로 발전하고 있습니다. 
                    향후 계획은 다음과 같습니다:
                  </p>
                  <ul>
                    <li>고해상도 이미지 데이터베이스 구축 및 제공</li>
                    <li>AR/VR 기술을 활용한 가상 열람 서비스 개발</li>
                    <li>국제 불교 문헌 데이터베이스와의 연계</li>
                    <li>시민 참여형 번역 및 주석 프로젝트 진행</li>
                    <li>교육용 콘텐츠 개발 및 제공</li>
                  </ul>
                  <p>
                    이러한 계획을 통해 팔만대장경의 가치를 더 많은 사람들에게 
                    알리고, 불교 연구와 문화 발전에 기여하고자 합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                <Card className="tripitaka-card overflow-hidden">
                  <div className="h-48 bg-wood-pattern"></div>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-tripitaka-800 mb-4">
                      팔만대장경 관련 자료
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a 
                          href="https://www.unesco.org/en/world-heritage" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-tripitaka-700 hover:text-primary transition-colors"
                        >
                          유네스코 세계기록유산
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#" 
                          className="text-sm text-tripitaka-700 hover:text-primary transition-colors"
                        >
                          해인사 팔만대장경
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#" 
                          className="text-sm text-tripitaka-700 hover:text-primary transition-colors"
                        >
                          한국불교학 연구자료
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#" 
                          className="text-sm text-tripitaka-700 hover:text-primary transition-colors"
                        >
                          대장경 연구소
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="tripitaka-card">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-tripitaka-800 mb-4">
                      디지털 아카이브 이용하기
                    </h3>
                    <div className="space-y-4">
                      <Button asChild variant="outline" className="w-full justify-start">
                        <Link to="/browse" className="text-sm">
                          <BookOpen className="h-4 w-4 mr-2" />
                          경전 열람하기
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <Link to="/ai-assistant" className="text-sm">
                          <Server className="h-4 w-4 mr-2" />
                          AI 도움말 이용하기
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="tripitaka-card bg-tripitaka-50 border-tripitaka-200">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-tripitaka-800 mb-2">
                      프로젝트 참여하기
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      팔만대장경 디지털 아카이브 프로젝트에 다양한 방법으로 참여할 수 있습니다.
                    </p>
                    <Button asChild>
                      <Link to="/contact">
                        자세히 알아보기
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
