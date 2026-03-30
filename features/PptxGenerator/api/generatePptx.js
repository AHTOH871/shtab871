import { CreateSlide } from "@/entities/Slide_Region/model/CreateSlide";
import PptxGenJS from "pptxgenjs";


export const generatePptx = (slidesData) => {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 in

  slidesData.forEach(slideData => CreateSlide(pptx, slideData));

  pptx.writeFile({ fileName: "presentation.pptx" });
};