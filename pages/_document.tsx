import { Html, Main, Head, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          defer
          data-domain="wevis.info/politics-on-social"
          src="https://analytics.punchup.world/js/plausible.js"
        ></script>
        <link rel="icon" href="/design_assets/sns/favicon.png" />
        <meta property="og:url" content={`${process.env.SECURE_HOST}${process.env.BASE_PATH}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ส่องเพจพรรค" />
        <meta property="og:description" content="ร่วมรู้จักตัวตนของพรรคการเมืองผ่านช่องทางในโลกออนไลน์จากประเด็นน่าสนใจ" />
        <meta property="og:image" content={`${process.env.SECURE_HOST}/design_assets/sns/og.jpg`} />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${process.env.SECURE_HOST}${process.env.BASE_PATH}`} />
        <meta name="twitter:title" content="ส่องเพจพรรค" />
        <meta name="twitter:description" content="ร่วมรู้จักตัวตนของพรรคการเมืองผ่านช่องทางในโลกออนไลน์จากประเด็นน่าสนใจ" />
        <meta name="twitter:image" content={`${process.env.SECURE_HOST}/design_assets/sns/og.jpg`} />
      </Head>
      <body className="scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
