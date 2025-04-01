
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="py-20">
      <div className="tripitaka-container text-center max-w-md mx-auto">
        <h1 className="text-6xl font-serif font-semibold text-tripitaka-800 mb-6">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          요청하신 페이지를 찾을 수 없습니다
        </p>
        <Button asChild>
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            홈으로 돌아가기
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
