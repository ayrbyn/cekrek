import { useScrollReveal } from "../hooks/useScrollReveal";

const transforms = {
  up: "translateY(40px)",
  down: "translateY(-40px)",
  left: "translateX(-40px)",
  right: "translateX(40px)",
};

export default function Reveal({ children, delay = 0, className = "", direction = "up" }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity 0.7s ${delay}s, transform 0.7s ${delay}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : transforms[direction],
      }}
    >
      {children}
    </div>
  );
}
