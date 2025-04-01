
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, BookOpen, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

// Sample text data
const textsData = [
  {
    id: '1',
    title: '금강반야바라밀경 (金剛般若波羅蜜經)',
    description: '반야부 경전 중 하나로, 공(空)의 개념을 중심으로 하는 대승불교의 핵심 가르침을 담고 있습니다.',
    category: '반야부',
    tags: ['반야부', '대승불교', '공사상'],
    volume: '30',
    period: '고려시대'
  },
  {
    id: '2',
    title: '법화경 (法華經)',
    description: '대승불교의 중요 경전으로, 모든 중생이 성불할 수 있다는 일승사상을 설파합니다.',
    category: '법화부',
    tags: ['법화부', '대승불교', '일승사상'],
    volume: '10',
    period: '고려시대'
  },
  {
    id: '3',
    title: '화엄경 (華嚴經)',
    description: '부처의 깨달음의 세계를 설명하며, 사사무애(事事無礙)의 원융한 세계관을 보여줍니다.',
    category: '화엄부',
    tags: ['화엄부', '대승불교', '화엄사상'],
    volume: '80',
    period: '고려시대'
  },
  {
    id: '4',
    title: '아미타경 (阿彌陀經)',
    description: '아미타불과 서방 극락정토에 대해 설명하며, 염불을 통한 왕생을 가르칩니다.',
    category: '정토부',
    tags: ['정토부', '대승불교', '아미타불'],
    volume: '1',
    period: '고려시대'
  },
  {
    id: '5',
    title: '능엄경 (楞嚴經)',
    description: '부처의 가르침과 수행법에 대해 자세히 설명하며, 선종에서 중요시하는 경전입니다.',
    category: '방등부',
    tags: ['방등부', '선종', '수행법'],
    volume: '10',
    period: '고려시대'
  },
  {
    id: '6',
    title: '대반열반경 (大般涅槃經)',
    description: '부처님의 열반에 관한 가르침과 불성(佛性)에 대한 내용을 담고 있습니다.',
    category: '열반부',
    tags: ['열반부', '대승불교', '불성'],
    volume: '40',
    period: '고려시대'
  }
];

// Categories for filtering
const categories = [
  '전체',
  '반야부',
  '법화부',
  '화엄부',
  '정토부',
  '열반부',
  '방등부'
];

// Tags for filtering
const allTags = [
  '대승불교',
  '소승불교',
  '공사상',
  '일승사상',
  '화엄사상',
  '아미타불',
  '선종',
  '불성',
  '수행법'
];

// Periods for filtering
const periods = [
  '전체',
  '고려시대',
  '조선시대'
];

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedPeriod, setSelectedPeriod] = useState('전체');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('title');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter and sort texts
  const filteredTexts = textsData.filter((text) => {
    const matchesSearch = text.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          text.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '전체' || text.category === selectedCategory;
    const matchesPeriod = selectedPeriod === '전체' || text.period === selectedPeriod;
    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.some(tag => text.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesPeriod && matchesTags;
  }).sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'volume') {
      return parseInt(a.volume) - parseInt(b.volume);
    }
    return 0;
  });

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="py-8 md:py-12">
      <div className="tripitaka-container">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-semibold text-tripitaka-800 mb-4">
            팔만대장경 경전 열람
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            팔만대장경의 다양한 경전을 검색하고 열람할 수 있습니다. 원하는 경전을 찾기 위해 카테고리, 태그, 키워드로 필터링하세요.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="경전 이름 또는 내용으로 검색..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="mb-6 md:hidden">
          <Button
            variant="outline"
            className="w-full flex items-center justify-between"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <div className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              필터
            </div>
            <ChevronDown className={`h-4 w-4 transition-transform ${isMobileFilterOpen ? 'rotate-180' : ''}`} />
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className={`md:w-64 shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-medium text-tripitaka-800 mb-4">필터</h3>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">카테고리</h4>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="카테고리 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">시대</h4>
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <SelectTrigger>
                    <SelectValue placeholder="시대 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    {periods.map((period) => (
                      <SelectItem key={period} value={period}>
                        {period}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">태그</h4>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      className={`tripitaka-tag ${selectedTags.includes(tag) ? 'bg-tripitaka-300 border-tripitaka-400' : ''}`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">정렬</h4>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="정렬 기준" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">제목순</SelectItem>
                    <SelectItem value="volume">권수순</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grow">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                총 <span className="font-medium">{filteredTexts.length}</span>개의 경전
              </p>
            </div>

            <div className="space-y-4">
              {filteredTexts.length > 0 ? (
                filteredTexts.map((text) => (
                  <Link to={`/text/${text.id}`} key={text.id} className="block">
                    <Card className="tripitaka-card p-4 hover:shadow-md transition-shadow">
                      <div className="flex gap-4">
                        <div className="h-14 w-14 bg-tripitaka-100 rounded-md flex items-center justify-center shrink-0">
                          <BookOpen className="h-6 w-6 text-tripitaka-700" />
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-1 mb-1">
                            {text.tags.slice(0, 2).map((tag, i) => (
                              <span key={i} className="tripitaka-tag text-[10px] px-1.5 py-0">
                                {tag}
                              </span>
                            ))}
                            {text.tags.length > 2 && (
                              <span className="text-[10px] text-muted-foreground">+{text.tags.length - 2}</span>
                            )}
                          </div>
                          <h3 className="font-medium text-tripitaka-800 line-clamp-1">{text.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                            {text.description}
                          </p>
                          <div className="mt-2 flex items-center text-xs text-muted-foreground">
                            <span>권수: {text.volume}</span>
                            <span className="mx-2">•</span>
                            <span>{text.period}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="text-center py-12 bg-card border border-border rounded-lg">
                  <p className="text-muted-foreground">검색 결과가 없습니다.</p>
                </div>
              )}
            </div>

            {filteredTexts.length > 0 && (
              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
