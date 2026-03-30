export const CreateSlide = (pptx, slideData) => {
  const slide = pptx.addSlide();

slide.addShape(pptx.ShapeType.rect, {
  x: 0,
  y: 0,
  w: "100%",
  h: 1,
  fill: { color: "7B898A" },
  margin: 20,
});

if (slideData.title) {
  slide.addText(slideData.title, {
    x: 0,       
    y: 0,
    w: "100%",     
    h: 1,
    fontSize: 24,
    bold: true,
    color: "FFFFFF",
    fontFace: "Circe-800",
    valign: "middle",
    align: "left",
  });
}

if (slideData.date) {
  slide.addText(`По состоянию на ${slideData.date}`, {
    x: 0,
    y: 0,
    w: "100%",
    h: 1,
    fontSize: 16,
    color: "FFFFFF",
    fontFace: "Circe-600",
    valign: "middle",
    align: "right",
  });
}
  if (slideData.blocks) {
    slideData.blocks.forEach((block, index) => {
      if (block.type === "text") {
        slide.addText(block.text, {
          x: 0.5,
          y: 1.5 + index * 0.7,
          w: 12,
          fontSize: 16,
          color: "000000",
        });
      }

      if (block.type === "table") {
        slide.addTable(
          [block.headers, ...block.rows],
          {
            x: 0.5,
            y: 1.5 + index * 0.7,
            w: 12,
            border: { pt: 1, color: "000000" },
            fontSize: 12
          }
        );
      }
    });
  }

  return slide;
};
