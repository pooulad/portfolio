import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useActiveUrlPath() {
  const [active, setActive] = useState<string>("/");

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "":
        setActive("/");
        break;
      case "/":
        setActive("/");
        break;
      default:
        setActive("/not-found");
        break;
    }
  }, [location]);

  return { active };
}

export default useActiveUrlPath;
