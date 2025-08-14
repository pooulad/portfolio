import useRotateIconAnimation from "../../../../hooks/gsap/useRotateIconAnimation";

interface FooterGSAPAnimationProps {}

export default function FooterGSAPAnimation({}: FooterGSAPAnimationProps) {
  const { handleEnterIconAnimation, handleLeaveIconAnimation } =
    useRotateIconAnimation();

  return { handleEnterIconAnimation, handleLeaveIconAnimation };
}
