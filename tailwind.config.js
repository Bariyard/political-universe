/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }
        "cus-tablet": "700px",

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
        "xxl-desktop": "1480px"
      },
      colors: {
        /* Color styles */
        "party-01": "#FFEC3F",
        "party-02": "#94A86B",
        "party-03": "#FF8A00",
        "party-04": "#676DFF",
        "action-positive": "#60C1AF",
        "action-negative": "#F92D46",
        "action-neutral": "#888888",
        "action-soft-positive": "#D2FFF7",
        "action-soft-negative": "#FFCAD0",
        "neutral-super-black": "#000000",
        "neutral-gray-1": "#555555",
        "neutral-gray-2": "#AAAAAA",
        "neutral-gray-3": "#EEEEEE",
        "neutral-super-white": "#FFFFFF",
        "transparent-party-01": "#FFEC3F",
        "transparent-party-02": "#94A86B",
        "transparent-party-03": "#FF8A00",
        "transparent-party-04": "#676DFF",
        "transparent-positive": "#60C1AF",
        "transparent-negative": "#F92D46",
        "transparent-white-50": "#FFFFFF",
        "transparent-white-20": "#FFFFFF"
      },
      backgroundImage: {
        คณะกรรมการการเลือกตั้ง:
          "url('/design_assets/05_profile_pic/top/คณะกรรมการการเลือกตั้ง.jpg')",
        คณะกรรมการตรวจเงินแผ่นดิน:
          "url('/design_assets/05_profile_pic/top/คณะกรรมการตรวจเงินแผ่นดิน.jpg')",
        คณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ:
          "url('/design_assets/05_profile_pic/top/คณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ.jpg')",
        "เฉลิมพล-ศรีสวัสดิ์-1":
          "url('/design_assets/05_profile_pic/top/เฉลิมพล-ศรีสวัสดิ์-1.jpg')",
        "เฉลิมพล-ศรีสวัสดิ์":
          "url('/design_assets/05_profile_pic/top/เฉลิมพล-ศรีสวัสดิ์.jpg')",
        "ดำรงศักดิ์-กิตติประภัสร์":
          "url('/design_assets/05_profile_pic/top/ดำรงศักดิ์-กิตติประภัสร์.jpg')",
        "ทักษิณ-ชินวัตร":
          "url('/design_assets/05_profile_pic/top/ทักษิณ-ชินวัตร.jpg')",
        "เปรม-ติณสูลานนท์":
          "url('/design_assets/05_profile_pic/top/เปรม-ติณสูลานนท์.jpg')",
        ผู้ตรวจการแผ่นดิน:
          "url('/design_assets/05_profile_pic/top/ผู้ตรวจการแผ่นดิน.jpg')",
        พระบาทสมเด็จพระวชิรเกล้าเจ้าอยู่หัว:
          "url('/design_assets/05_profile_pic/top/พระบาทสมเด็จพระวชิรเกล้าเจ้าอยู่หัว.jpg')",
        ศาลปกครอง: "url('/design_assets/05_profile_pic/top/ศาลปกครอง.jpg')",
        ศาลยุติธรรม: "url('/design_assets/05_profile_pic/top/ศาลยุติธรรม.jpg')",
        ศาลรัฐธรรมนูญ:
          "url('/design_assets/05_profile_pic/top/ศาลรัฐธรรมนูญ.jpg')",
        "สมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี":
          "url('/design_assets/05_profile_pic/top/สมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี.jpg')",
        "สมเด็จพระเจ้าน้องนางเธอ เจ้าฟ้าจุฬาภรณวลัยลักษณ์ อัครราชกุมารี กรมพระศรีสวางควัฒน วรข":
          "url('/design_assets/05_profile_pic/top/สมเด็จพระเจ้าน้องนางเธอ เจ้าฟ้าจุฬาภรณวลัยลักษณ์ อัครราชกุมารี กรมพระศรีสวางควัฒน วรข.jpg')",
        "สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง":
          "url('/design_assets/05_profile_pic/top/สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง.jpg')",
        "สุรยุทธ์-จุลานนท์":
          "url('/design_assets/05_profile_pic/top/สุรยุทธ์-จุลานนท์.jpg')"
      },
      boxShadow: {
        /* Effect styles */
        "small-shadow": "0px 2px 4px rgba(0, 0, 0, 0.08)",
        "regular-shadow": "0px 8px 16px rgba(0, 0, 0, 0.15)",
        "large-shadow": "0px 16px 48px rgba(0, 0, 0, 0.18)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
