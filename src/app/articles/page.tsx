import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: '記事一覧',
  description: '28歳未経験からのエンジニア転職・地方リモートワークについての雑記一覧。',
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <main className="flex flex-col items-center min-h-screen px-6 py-10 bg-white">
      <div className="w-full max-w-sm flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-[var(--color-asagi-dark)] font-semibold">
            nagi&apos;s blog
          </p>
          <h1 className="text-2xl font-bold text-gray-900">記事一覧</h1>
        </div>

        <div className="flex flex-col gap-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="flex flex-col gap-1 px-4 py-4 border border-[var(--color-ice-blue)] rounded-xl hover:bg-[var(--color-ice-blue)]/40 transition-colors"
            >
              <span className="text-xs text-gray-500">{article.date}</span>
              <span className="text-sm font-semibold text-gray-900">
                {article.title}
              </span>
              <span className="text-xs text-gray-600 leading-relaxed">
                {article.description}
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="w-full py-4 text-center text-sm text-[var(--color-asagi-dark)] font-medium"
        >
          ← ホームへ戻る
        </Link>
      </div>
    </main>
  )
}
