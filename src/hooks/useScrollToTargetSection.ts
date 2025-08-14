export default function useScrollToTargetSection() {
  const handleScrollToTargetSection = (targetID: string) => {
    const element = document.getElementById(targetID);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { handleScrollToTargetSection };
}
