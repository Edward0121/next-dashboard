import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  subsets: ["latin"], // 修正：Lusitana 字体只支持 latin 子集
  weight: ["400", "700"],
});
