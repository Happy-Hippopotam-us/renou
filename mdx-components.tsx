import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-8 text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-semibold mb-3 mt-6 text-gray-800">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base md:text-lg mb-4 text-gray-700 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-renou-gold hover:text-renou-gold/80 underline"
      >
        {children}
      </a>
    ),
    ...components,
  }
}
