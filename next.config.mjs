/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    // rehypePlugins: [rehypeMdxCodeProps],
  },
});

const createConfig = (phase, ...params) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_HREF;
  return withMDX({
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
    reactStrictMode: true,
    transpilePackages: ["react-syntax-highlighter"],
    output: "export",
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: "dist",
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    webpack(config) {
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.(".svg")
      );
      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgoConfig: {
                  multipass: true,
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          cleanupIds: false,
                          removeViewBox: false,
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        }
      );
      fileLoaderRule.exclude = /\.svg$/i;
      return config;
    },
    ...(phase === "phase-production-build" &&
      basePath && {
        basePath: "/duc-huy-hoang-blog-v2",
        assetPrefix: "/duc-huy-hoang-blog-v2",
      }),
  });
};

export default createConfig;
