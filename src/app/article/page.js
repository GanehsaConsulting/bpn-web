import { ArticleBanner } from "@/components/article-banner";
import { CardArticle } from "@/components/card-article";
import { SearchArticle } from "@/components/search-article";

export default function ArticlePage() {
    return (
        <>
            <ArticleBanner />
            <SearchArticle />
            <CardArticle />
        </>
    );
}