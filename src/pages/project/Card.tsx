import { useRef, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";
import { gsap } from "gsap";

let globalMaxHeight = 0;
let allCards: HTMLDivElement[] = [];

const ProjectCard = ({
  title,
  description,
  image,
  tags,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
}) => {
  const theme = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    allCards.push(card);
    const observer = new ResizeObserver(() => {
      const height = card.offsetHeight;
      if (height > globalMaxHeight) {
        globalMaxHeight = height;
        allCards.forEach((c) => (c.style.height = `${globalMaxHeight}px`));
      }
    });
    observer.observe(card);
    return () => {
      observer.disconnect();
      allCards = allCards.filter((c) => c !== card);
      if (allCards.length === 0) globalMaxHeight = 0;
    };
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!card || !image || !content) return;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 5;
      const rotateY = ((x - centerX) / centerX) * 5;

      gsap.to(card, {
        rotateX: -rotateX,
        rotateY: rotateY,
        transformPerspective: 800,
        ease: "power1.out",
        duration: 0.3,
      });

      gsap.to(image, {
        x: -(rotateY * 2),
        y: rotateX * 2,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    const handleEnter = () => {
      gsap.to(card, { scale: 1.05, duration: 0.4, ease: "power3.out" });
      gsap.to(image, { scale: 1.1, duration: 0.6, ease: "power3.out" });
      gsap.from(content.querySelectorAll(".tag"), {
        y: 10,
        opacity: 1,
        stagger: 0.05,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.to(image, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      className="project-card"
      sx={{
        width: "320px",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
        cursor: "pointer",
        userSelect: "none",
        transition: "box-shadow 0.3s ease",
        display: "flex",
        flexDirection: "column",
        transformStyle: "preserve-3d",
        border: "none",
      }}
    >
      <CardMedia
        ref={imageRef}
        component="div"
        sx={{
          minHeight: "180px",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.3s ease",
        }}
      />
      <CardContent
        ref={contentRef}
        sx={{
          pt: 2,
          px: 2,
          backgroundColor: theme.palette.background.paper,
          borderRadius: "0 0 12px 12px",
          transition: "background-color 0.4s, color 0.4s",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography variant="h6" component="h3" fontWeight={700} gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2 }}
            title={description.length > 150 ? description : undefined} // tooltip only if truncated
          >
            {description.length > 150
              ? description.slice(0, 150) + "..."
              : description}
          </Typography>
        </div>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              className="tag"
              sx={{
                bgcolor: "#eee",
                fontWeight: 600,
                color: "#333",
                marginBottom: 0.5,
              }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
