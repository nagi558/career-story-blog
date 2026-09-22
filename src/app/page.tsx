import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen px-6 py-16 bg-white">
      <div className="w-full max-w-sm flex flex-col gap-8">
        <header className="flex flex-col gap-3">
          <span className="inline-block w-fit rounded-full bg-[var(--color-ice-blue)] px-3 py-1 text-xs font-semibold text-[var(--color-asagi-dark)]">
            雑記ブログ
          </span>
          <h1 className="text-3xl font-bold text-[var(--color-asagi-dark)]">
            nagi&apos;s blog
          </h1>
          <p className="text-sm text-gray-700 leading-relaxed">
            28歳未経験から地方でエンジニア転職しました。日々の学びや気づきを雑記として書いています。
          </p>
        </header>

        <Link
          href="/articles"
          className="w-full py-4 text-center text-sm font-semibold text-white rounded-xl bg-[var(--color-asagi)] hover:bg-[var(--color-asagi-dark)] transition-colors"
        >
          記事一覧を見る
        </Link>
      </div>
    </main>
  )
}
