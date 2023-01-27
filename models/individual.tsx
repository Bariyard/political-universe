export type VIZ6_RAW = {
  id: number;
  groups: string;
  sub_categories: string;
  categories: string;
  person: string;
  keyword: string | string[];
  count: number;
  total_event: number
  period_1_plus: number
  period_1_minus: number
  period_1_total: number
  period_2_plus: number
  period_2_minus: number
  period_2_total: number
  period_1_plus_percentage: number
  period_1_minus_percentage: number
  period_2_plus_percentage: number
  period_2_minus_percentage: number
  img?: string
}

export type VIZ6_TYPE = {
  [index: string]: VIZ6_RAW[];
}


export type INDIVIDUAL_DATA_TYPE = {
  id: number;
  groups: string;
  sub_categories: string;
  categories: string;
  person: string;
  keyword: string | string[];
  count: number;
  total_event: number
  period_1_plus: number
  period_1_minus: number
  period_1_total: number
  period_2_plus: number
  period_2_minus: number
  period_2_total: number
  period_1_plus_percentage: number
  period_1_minus_percentage: number
  period_2_plus_percentage: number
  period_2_minus_percentage: number
  img?: string
}

export const IMG_LIST = [
  "พลเอก-เปรม-ติณสูลานนท์",
  "พระบาทสมเด็จพระวชิรเกล้าเจ้าอยู่หัว",
  "ทูลกระหม่อมหญิงอุบลรัตนราชกัญญา-สิริวัฒนาพรรณวดี",
  "พลเอก-อภิรัชต์-คงสมพงษ์",
  "พลตำรวจเอก-จักรทิพย์-ชัยจินดา",
  "พลอากาศเอก-แอร์บูล-สุทธิวรรณ",
  "ศาลปกครอง",
  "คณะกรรมการการเลือกตั้ง",
  "คณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ",
  "ศาลรัฐธรรมนูญ",
  "พรรคประชาธิปัตย์",
  "พรรคเพื่อไทย",
  "พลเอก-ประยุทธ์-จันทร์โอชา",
]