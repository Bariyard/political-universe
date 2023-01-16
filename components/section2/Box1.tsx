import React from 'react'
import * as d3 from 'd3'
type Props = {
  opacity?: number;
}

const Box1 = ({ opacity }: Props) => {


  const MAIN_VIZ_DATA = [
    {
      icon:
        <svg className='w-full h-full' viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M134.391 42.5602L173.554 53.8537L152.11 88.5148L151.956 88.7636L152.097 89.0196L171.804 124.697L132.131 134.043L131.847 134.11L131.766 134.391L120.472 173.554L85.811 152.11L85.5622 151.956L85.3062 152.097L49.6286 171.804L40.2825 132.131L40.2154 131.847L39.9344 131.766L0.772136 120.472L22.2159 85.811L22.3698 85.5622L22.2284 85.3062L2.52227 49.6285L42.1944 40.2825L42.4791 40.2155L42.5602 39.9344L53.8537 0.772136L88.5148 22.2159L88.7636 22.3698L89.0196 22.2284L124.697 2.52227L134.043 42.1944L134.11 42.4791L134.391 42.5602Z" fill="white" stroke="black" />
          <path d="M58.8319 98.937L60.8046 104.98" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M85.8501 107.973C85.8729 107.838 85.4519 107.654 84.9099 107.563C84.3678 107.472 83.9103 107.508 83.8875 107.643C83.8647 107.779 84.2853 107.962 84.8273 108.053C85.3693 108.145 85.8273 108.109 85.8501 107.973Z" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M84.9034 107.663C85.5618 107.823 86.1716 108.14 86.6806 108.588C87.3554 109.154 88.1996 109.479 89.0798 109.512" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M93.4456 108.173C93.9876 108.082 94.4085 107.898 94.3857 107.762C94.3629 107.627 93.9051 107.591 93.363 107.682C92.821 107.773 92.4 107.957 92.4228 108.092C92.4456 108.228 92.9036 108.264 93.4456 108.173Z" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M93.4516 107.663C92.7933 107.823 92.1835 108.14 91.6744 108.588C90.9942 109.156 90.1435 109.481 89.2574 109.512" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M80.7624 107.663C80.7624 107.663 79.4829 106.188 81.9709 103.611" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M79.234 118.735H99.1207" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M80.5846 118.735C80.5846 118.735 86.1472 122.289 89.1684 122.289C92.3452 122.069 95.3642 120.822 97.77 118.735" fill="black" />
          <path d="M80.5846 118.735C80.5846 118.735 86.1472 122.289 89.1684 122.289C92.3452 122.069 95.3642 120.822 97.77 118.735" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M97.6457 118.735C95.3531 118.735 92.5096 114.647 89.1685 116.691C85.8452 114.647 83.2327 118.735 80.7091 118.735" fill="black" />
          <path d="M97.6457 118.735C95.3531 118.735 92.5096 114.647 89.1685 116.691C85.8452 114.647 83.2327 118.735 80.7091 118.735" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M68.5177 89.998C68.5177 89.998 77.1015 84.862 81.2068 90.9044" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M76.0174 91.633C76.9106 91.633 77.6346 90.9087 77.6346 90.0155C77.6346 89.1223 76.9106 88.3984 76.0174 88.3984C75.1242 88.3984 74.4001 89.1223 74.4001 90.0155C74.4001 90.9087 75.1242 91.633 76.0174 91.633Z" fill="black" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M109.837 89.998C109.837 89.998 101.253 84.862 97.1482 90.9044" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M102.338 91.633C103.231 91.633 103.955 90.9087 103.955 90.0155C103.955 89.1223 103.231 88.3984 102.338 88.3984C101.445 88.3984 100.72 89.1223 100.72 90.0155C100.72 90.9087 101.445 91.633 102.338 91.633Z" fill="black" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M65.2653 83.8132C65.2653 83.8132 70.7923 79.4946 82.5751 83.8132L81.2066 81.5917C81.2066 81.5917 72.8183 80.2588 71.983 80.2588C69.6553 81.2682 67.4093 82.4566 65.2653 83.8132V83.8132Z" fill="black" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M89.1685 57.8131C121.158 57.8131 119.505 98.9193 119.505 98.9193C119.505 98.9193 121.78 96.9646 123.059 97.871C124.339 98.7774 123.522 101.336 121.282 104.073C119.043 106.81 118.794 113.883 115.169 112.373C112.599 118.954 108.799 124.985 103.972 130.145C96.4194 137.84 90.9279 138 89.204 138C87.4802 138 82.0953 137.84 74.4534 130.145C69.6269 124.985 65.8271 118.954 63.2571 112.373C59.7027 113.883 59.3295 106.792 57.1436 104.073C54.9576 101.354 54.1934 98.7418 55.3664 97.871C56.5393 97.0002 58.9208 98.9193 58.9208 98.9193C58.9208 98.9193 57.2324 57.8131 89.1685 57.8131Z" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M119.505 98.937L117.55 104.98" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M97.5924 107.663C97.5924 107.663 98.872 106.188 96.3839 103.611" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M113.09 83.8132C113.09 83.8132 107.563 79.4946 95.7798 83.8132L97.1482 81.5917C97.1482 81.5917 105.537 80.2588 106.372 80.2588C108.7 81.2682 110.946 82.4566 113.09 83.8132V83.8132Z" fill="black" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M59.3651 100.555C59.7205 89.3228 64.1813 57.8132 89.1685 57.8132C116.768 57.8132 118.794 91.7753 118.972 100.128L122.526 97.0892C124.126 95.1521 127.289 83.8136 123.539 64.6733C119.576 44.4489 99.103 42.3695 99.103 42.3695C79.8205 28.312 59.1163 39.6858 53.7492 55.5383C43.015 87.3144 58.672 100.217 59.3651 100.555Z" fill="black" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M65.2653 77.9844C87.8355 30.569 96.6859 56.8178 96.6859 56.8178" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M60.8048 116.62C61.5998 116.62 62.2443 115.976 62.2443 115.181C62.2443 114.386 61.5998 113.741 60.8048 113.741C60.0097 113.741 59.3652 114.386 59.3652 115.181C59.3652 115.976 60.0097 116.62 60.8048 116.62Z" fill="black" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M117.55 116.62C118.345 116.62 118.99 115.976 118.99 115.181C118.99 114.386 118.345 113.741 117.55 113.741C116.755 113.741 116.111 114.386 116.111 115.181C116.111 115.976 116.755 116.62 117.55 116.62Z" fill="black" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M56.646 100.128C57.4816 100.424 58.2448 100.893 58.8851 101.506C59.5255 102.119 60.0283 102.861 60.3603 103.682" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M121.709 100.128C120.873 100.424 120.11 100.893 119.47 101.506C118.829 102.119 118.327 102.861 117.995 103.682" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
      title: 'ยิ่งลักษณ์',
      range: "xx มี.ค. 54 - xx พ.ค. 57",
      total: "2 ปี  6 เดือน",
      count: 2433,
    },
    {
      icon:
        <svg className='w-full h-full' viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M134.391 42.886L173.554 54.1795L152.11 88.8406L151.956 89.0894L152.097 89.3454L171.804 125.023L132.131 134.369L131.847 134.436L131.766 134.717L120.472 173.879L85.811 152.436L85.5622 152.282L85.3062 152.423L49.6286 172.129L40.2825 132.457L40.2154 132.173L39.9344 132.091L0.772136 120.798L22.2159 86.1368L22.3698 85.888L22.2284 85.632L2.52227 49.9544L42.1944 40.6083L42.4791 40.5413L42.5602 40.2602L53.8537 1.09794L88.5148 22.5417L88.7636 22.6956L89.0196 22.5542L124.697 2.84807L134.043 42.5202L134.11 42.8049L134.391 42.886Z" fill="white" stroke="black" />
          <path d="M60.1628 81.8857L59.4569 96.0338" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M114.975 81.8857L116.51 94.9136" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M85.0064 100.177C84.9947 100.357 84.9477 100.532 84.868 100.693C84.7883 100.855 84.6776 100.998 84.5421 101.117C84.4067 101.235 84.2492 101.326 84.0787 101.383C83.9082 101.44 83.728 101.463 83.5486 101.451C83.3706 101.47 83.1906 101.452 83.0201 101.398C82.8496 101.343 82.6926 101.253 82.5592 101.133C82.4259 101.014 82.3192 100.868 82.2462 100.704C82.1731 100.541 82.1354 100.364 82.1354 100.185C82.1354 100.006 82.1731 99.8287 82.2462 99.6653C82.3192 99.5018 82.4259 99.3556 82.5592 99.2361C82.6926 99.1167 82.8496 99.0267 83.0201 98.972C83.1906 98.9173 83.3706 98.8992 83.5486 98.9188C83.9085 98.8934 84.2639 99.0116 84.537 99.2474C84.8101 99.4831 84.9789 99.8174 85.0064 100.177Z" fill="black" />
          <path d="M82.2288 81.1187C83.3056 82.5113 83.9606 84.1835 84.1162 85.937" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M92.9089 81.1187C91.8321 82.5113 91.1771 84.1835 91.0215 85.937" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M106.136 84.6326C106.136 84.6326 99.8602 81.8859 95.0419 84.6326" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M107.594 79.8142C106.443 79.3232 104.034 78.9548 100.275 78.0034L91.5587 75.7631L92.3567 72.9397C94.2594 73.4768 99.4614 74.9191 100.704 75.1032C102.555 75.6033 104.37 76.2287 106.136 76.9753L107.594 79.8142Z" fill="black" />
          <path d="M69.0782 85.2158C69.0782 85.2158 75.0014 81.8859 80.1727 85.2158" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M76.1215 85.5072C76.1215 85.8107 76.0315 86.1073 75.8629 86.3596C75.6943 86.612 75.4546 86.8086 75.1742 86.9248C74.8938 87.0409 74.5853 87.0715 74.2876 87.0123C73.99 86.953 73.7165 86.8069 73.5019 86.5923C73.2873 86.3777 73.1412 86.1042 73.082 85.8065C73.0228 85.5088 73.0532 85.2003 73.1693 84.9199C73.2854 84.6395 73.4821 84.4 73.7345 84.2313C73.9868 84.0627 74.2835 83.9727 74.587 83.9727C74.994 83.9727 75.3843 84.1343 75.672 84.422C75.9598 84.7098 76.1215 85.1002 76.1215 85.5072Z" fill="black" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M101.149 85.5072C101.149 85.8107 101.059 86.1073 100.891 86.3596C100.722 86.612 100.482 86.8086 100.202 86.9248C99.9217 87.0409 99.6131 87.0715 99.3155 87.0123C99.0178 86.953 98.7444 86.8069 98.5298 86.5923C98.3152 86.3777 98.169 86.1042 98.1098 85.8065C98.0506 85.5088 98.081 85.2003 98.1971 84.9199C98.3133 84.6395 98.51 84.4 98.7623 84.2313C99.0147 84.0627 99.3113 83.9727 99.6148 83.9727C100.022 83.9727 100.412 84.1343 100.7 84.422C100.988 84.7098 101.149 85.1002 101.149 85.5072Z" fill="black" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M66.2548 80.4893L67.7893 77.1901C69.8338 76.0377 72.0973 75.3267 74.4336 75.1032C76.0449 74.8577 82.7967 72.9397 82.7967 72.9397L83.1803 75.4561C80.5827 76.7959 77.7657 77.6587 74.8633 78.0034C71.8961 78.4459 69.0011 79.2819 66.2548 80.4893Z" fill="black" />
          <path d="M78.1472 112.898C84.2169 110.564 90.9366 110.564 97.0062 112.898" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M121.251 91.0466C118.029 92.4584 116.648 101.006 116.648 101.006" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M80.4028 97.2922C80.4028 97.2922 76.7814 100.975 81.4462 103.43" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M90.1316 100.177C90.1427 100.364 90.192 100.546 90.2765 100.713C90.361 100.88 90.4788 101.027 90.6226 101.147C90.7665 101.266 90.9333 101.355 91.1128 101.407C91.2923 101.459 91.4806 101.474 91.6661 101.451C91.844 101.47 92.0241 101.452 92.1946 101.398C92.3651 101.343 92.5221 101.253 92.6555 101.134C92.7888 101.014 92.8955 100.868 92.9685 100.704C93.0416 100.541 93.0793 100.364 93.0793 100.185C93.0793 100.006 93.0416 99.8288 92.9685 99.6653C92.8955 99.5019 92.7888 99.3556 92.6555 99.2362C92.5221 99.1167 92.3651 99.0267 92.1946 98.9721C92.0241 98.9174 91.844 98.8992 91.6661 98.9189C91.4818 98.8954 91.2947 98.9098 91.1162 98.9612C90.9377 99.0126 90.7715 99.0999 90.6279 99.2176C90.4843 99.3354 90.3662 99.4812 90.2808 99.6462C90.1955 99.8112 90.1447 99.992 90.1316 100.177V100.177Z" fill="black" />
          <path d="M94.7505 97.2922C94.7505 97.2922 98.3565 100.975 93.0625 103.43" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M87.5688 69.7327V75.3334" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M79.2059 99.8855L74.3722 115.369" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M95.932 99.8855L100.781 115.369" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M84.1315 88.9292V91.9982C84.125 92.7682 83.8292 93.5076 83.3029 94.0697L81.4462 96.0032" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M85.7736 114.985H90.1315" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M116.632 98.7654V103.262" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M53.8866 91.0466C57.2165 92.4584 58.4901 101.006 58.4901 101.006" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M58.5055 98.7654V103.262" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M87.569 131.957C87.569 131.957 69.6767 133.246 63.8149 121.768C62.3568 118.309 61.2564 114.709 60.5311 111.026C58.1526 111.579 56.3265 108.832 56.1424 107.175C55.9583 105.517 53.2115 102.065 51.3854 98.3972C49.5594 94.7298 48.6387 87.4255 53.0274 87.2414C57.416 87.0572 59.3648 92.5048 59.3648 92.5048" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M87.5688 131.956C87.5688 131.956 105.461 133.245 111.323 121.767C112.764 118.302 113.864 114.705 114.607 111.026C116.985 111.578 118.811 108.832 118.995 107.174C119.18 105.517 121.926 102.064 123.752 98.397C125.578 94.7295 126.499 87.4252 122.11 87.2411C117.722 87.057 116.264 91.998 116.264 91.998" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M118.029 88.9291C118.029 88.9291 123.461 73.8296 122.187 67.799C120.914 61.7684 111.2 55.3542 111.2 55.3542C111.2 55.3542 110.847 49.692 103.159 45.8404C95.4716 41.9888 88.9346 40.5309 77.9629 43.8301C66.9912 47.1293 62.9402 50.2136 60.04 52.2545C57.1397 54.2954 49.6821 65.4514 52.1066 76.3924C54.5311 87.3334 55.8968 87.9163 55.8968 87.9163C56.9974 88.7756 57.9466 89.8129 58.7049 90.9853L60.1627 81.7783L61.2522 69.6098C61.2522 69.6098 55.5285 59.4513 74.8019 53.4207C74.8019 53.4207 85.5434 47.9273 108.914 56.9348C108.914 56.9348 116.586 62.0448 115.052 82.515L116.08 90.4636" fill="black" />
          <path d="M118.029 88.9291C118.029 88.9291 123.461 73.8296 122.187 67.799C120.914 61.7684 111.2 55.3542 111.2 55.3542C111.2 55.3542 110.847 49.692 103.159 45.8404C95.4716 41.9888 88.9346 40.5309 77.9629 43.8301C66.9912 47.1293 62.9402 50.2136 60.04 52.2545C57.1397 54.2954 49.6821 65.4514 52.1066 76.3924C54.5311 87.3334 55.8968 87.9163 55.8968 87.9163C56.9974 88.7756 57.9466 89.8129 58.7049 90.9853L60.1627 81.7783L61.2522 69.6098C61.2522 69.6098 55.5285 59.4513 74.8019 53.4207C74.8019 53.4207 85.5434 47.9273 108.914 56.9348C108.914 56.9348 116.586 62.0448 115.052 82.515L116.08 90.4636" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M60.5309 110.98L59.7637 107.635" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M114.622 110.98L115.267 107.635" stroke="black" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M55.1143 97.2922L56.2038 101.451" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M120.024 97.2922L118.949 101.451" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
      title: 'ยิ่งลักษณ์',
      range: "xx มี.ค. 54 - xx พ.ค. 57",
      total: "2 ปี  6 เดือน",
      count: 4433,

    }
  ]

  var x = d3.scaleLinear()
    .domain([0, Math.max.apply(Math, MAIN_VIZ_DATA.map(function (o) { return o.count; }))])
    .range([0, 120]);

  return (

    <div className='py-[10px] px-[10px] border-dashed border-white border-[1px] rounded-[10px] text-center
              flex flex-col justify-center'>
      <div className='wv-kondolar wv-bold wv-h11 leading-[140%] !mb-[10px]'>จากข้อมูลข่าวออนไลน์ย้อนหลัง 10 ปีกว่า</div>
      <div className='wv-kondolar wv-bold wv-h8 leading-[140%]'>10 กว่าปีที่ผ่านมา<br /> การเมืองไทยอยู่ในรัฐบาล 2<br /> ช่วงหลัก คือ</div>
      <div className='flex flex-row gap-x-[20px] px-[50px] mt-[20px]'>
        {MAIN_VIZ_DATA.map((data, index) => (
          <div key={`${data.title}`} id={`main-viz-${index}`}
            className='w-1/2 h-full flex flex-col items-center transition-opacity' style={{ opacity: index === MAIN_VIZ_DATA.length - 1 ? opacity || 1 : 1 }}>
            <div className='w-[48px] h-[48px] mb-[6px]'>{data.icon}</div>
            <div className='wv-kondolar wv-bold wv-h10'>
              <div>รัฐบาล</div>
              <div>{data.title}</div>
            </div>
            <div className='wv-ibmplex wv-b6 !mb-[20px]'>
              {data.range}
            </div>
            <div className={`w-full bg-white mt-auto`} style={{ height: `${x(data.count)}px` }} />
            <div className='mt-[10px] wv-ibmplex wv-bold wv-h11'>{data.count} เหตุการณ์</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Box1