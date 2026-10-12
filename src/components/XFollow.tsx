import { X_HANDLE, X_URL } from '@/lib/site'

export default function XFollow() {
  return (
    <a
      href={X_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 self-center rounded-full border border-[var(--color-ice-blue)] bg-[var(--color-ice-blue)]/40 px-3 py-1.5 hover:bg-[var(--color-ice-blue)] transition-colors"
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-2.5 w-2.5 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </span>
      <span className="text-xs text-gray-700">
        Xもやっています <span className="text-gray-500">@{X_HANDLE}</span>
      </span>
    </a>
  )
}
