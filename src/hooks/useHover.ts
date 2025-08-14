import { useState } from "react";

interface IHoverElements {
  [key: string]: boolean;
}

export default function useHover(data: IHoverElements) {
  const [hoverElements, setHoverElements] = useState<IHoverElements>(data);

  const setHover = (data: IHoverElements) => {
    setHoverElements({
      ...hoverElements,
      ...data,
    });
  };

  return { hoverElements, setHover };
}
