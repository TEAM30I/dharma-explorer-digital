
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tripitaka-50 border-t border-border mt-auto">
      <div className="tripitaka-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-tripitaka-800" />
              <span className="font-serif text-xl font-semibold text-tripitaka-800">팔만대장경</span>
            </Link>
            <p className="text-sm text-tripitaka-700 mt-2">
              유네스코 세계기록유산인 팔만대장경의 디지털 아카이브
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-serif font-medium text-lg mb-4 text-tripitaka-800">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-tripitaka-700 hover:text-primary transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link to="/browse" className="text-sm text-tripitaka-700 hover:text-primary transition-colors">
                  열람
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-sm text-tripitaka-700 hover:text-primary transition-colors">
                  검색
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-tripitaka-700 hover:text-primary transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link to="/ai-assistant" className="text-sm text-tripitaka-700 hover:text-primary transition-colors">
                  AI 도움말
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-serif font-medium text-lg mb-4 text-tripitaka-800">자료</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/documentation" className="text-sm text-tripitaka-700 hover:text-primary transition-colors">
                  API 문서
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-sm text-tripitaka-700 hover:text-primary transition-colors">
                  개발자 정보
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-tripitaka-700 hover:text-primary transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-tripitaka-700 hover:text-primary transition-colors">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-serif font-medium text-lg mb-4 text-tripitaka-800">연락처</h3>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-tripitaka-700" />
              <span className="text-sm text-tripitaka-700">contact@tripitakakoreana.org</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4 text-tripitaka-700" />
              <a 
                href="https://github.com/tripitaka-koreana"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-tripitaka-700 hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-tripitaka-600">
            © {new Date().getFullYear()} 팔만대장경 디지털 아카이브. 모든 권리 보유.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
