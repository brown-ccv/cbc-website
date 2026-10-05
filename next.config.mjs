import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "standalone",
  images: {
    // Next.js 16 narrowed the default to [75]; Hero.tsx renders at quality 90.
    qualities: [75, 90],
  },
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // Turbopack requires plugins referenced by name; functions can't cross
    // into Rust. See node_modules/next/dist/docs/01-app/02-guides/mdx.md
    remarkPlugins: ["remark-frontmatter", "remark-gfm"],
    rehypePlugins: ["rehype-prism-plus"],
  },
})

export default withMDX(nextConfig)
