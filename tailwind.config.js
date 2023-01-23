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
        // คณะกรรมการตรวจเงินแผ่นดิน:
        //   "url('/design_assets/05_profile_pic/top/คณะกรรมการตรวจเงินแผ่นดิน.jpg')",
        // "เฉลิมพล-ศรีสวัสดิ์-1":
        //   "url('/design_assets/05_profile_pic/top/เฉลิมพล-ศรีสวัสดิ์-1.jpg')",
        // "เฉลิมพล-ศรีสวัสดิ์":
        //   "url('/design_assets/05_profile_pic/top/เฉลิมพล-ศรีสวัสดิ์.jpg')",
        // "ดำรงศักดิ์-กิตติประภัสร์":
        //   "url('/design_assets/05_profile_pic/top/ดำรงศักดิ์-กิตติประภัสร์.jpg')",
        // "ทักษิณ-ชินวัตร":
        //   "url('/design_assets/05_profile_pic/top/ทักษิณ-ชินวัตร.jpg')",
        "พลเอก-เปรม-ติณสูลานนท์":
          "url('/design_assets/05_profile_pic/top/พลเอก-เปรม-ติณสูลานนท์.jpg')",
        พระบาทสมเด็จพระวชิรเกล้าเจ้าอยู่หัว:
          "url('/design_assets/05_profile_pic/top/พระบาทสมเด็จพระวชิรเกล้าเจ้าอยู่หัว.jpg')",
        "ทูลกระหม่อมหญิงอุบลรัตนราชกัญญา-สิริวัฒนาพรรณวดี":
          "url('/design_assets/05_profile_pic/top/ทูลกระหม่อมหญิงอุบลรัตนราชกัญญา-สิริวัฒนาพรรณวดี.jpg')",

        "พลเอก-อภิรัชต์-คงสมพงษ์":
          "url('/design_assets/05_profile_pic/top/พลเอก-อภิรัชต์-คงสมพงษ์.jpg')",
        "พลตำรวจเอก-จักรทิพย์-ชัยจินดา":
          "url('/design_assets/05_profile_pic/top/พลตำรวจเอก-จักรทิพย์-ชัยจินดา.jpg')",
        "พลอากาศเอก-แอร์บูล-สุทธิวรรณ":
          "url('/design_assets/05_profile_pic/top/พลอากาศเอก-แอร์บูล-สุทธิวรรณ.jpg')",

        ศาลปกครอง: "url('/design_assets/05_profile_pic/top/ศาลปกครอง.jpg')",
        // ศาลยุติธรรม: "url('/design_assets/05_profile_pic/top/ศาลยุติธรรม.jpg')",
        ผู้ตรวจการแผ่นดิน:
          "url('/design_assets/05_profile_pic/top/ผู้ตรวจการแผ่นดิน.jpg')",
        คณะกรรมการการเลือกตั้ง:
          "url('/design_assets/05_profile_pic/top/คณะกรรมการการเลือกตั้ง.jpg')",
        คณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ:
          "url('/design_assets/05_profile_pic/top/คณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ.jpg')",
        ศาลรัฐธรรมนูญ:
          "url('/design_assets/05_profile_pic/top/ศาลรัฐธรรมนูญ.jpg')",

        พรรคประชาธิปัตย์:
          "url('/design_assets/05_profile_pic/top/พรรคประชาธิปัตย์.jpg')",
        พรรคเพื่อไทย:
          "url('/design_assets/05_profile_pic/top/พรรคเพื่อไทย.jpg')",
        "พลเอก-ประยุทธ์-จันทร์โอชา":
          "url('/design_assets/05_profile_pic/top/พลเอก-ประยุทธ์-จันทร์โอชา.jpg')"
        // "พลเอก-สุรยุทธ์-จุลานนท์":
        //   "url('/design_assets/05_profile_pic/top/พลเอก-สุรยุทธ์-จุลานนท์.jpg')"
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
