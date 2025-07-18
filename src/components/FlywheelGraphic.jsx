import React from 'react';

const FlywheelGraphic = ({ steps }) => {
  const size = 300;
  const center = size / 2;
  const radius = size / 2 - 30; // Main radius for icon positioning
  const iconContainerSize = 48;

  const getCoords = (angle) => ({
    x: center + radius * Math.cos(angle),
    y: center + radius * Math.sin(angle),
  });

  const arcs = steps.map((_, index) => {
    const numSteps = steps.length;
    const angleStep = (2 * Math.PI) / numSteps;

    const startAngle = index * angleStep - Math.PI / 2;
    const endAngle = (index + 1) * angleStep - Math.PI / 2;

    // Shorten arc to not overlap with icons
    const arcLength = (endAngle - startAngle) * radius;
    const gap = 0.4; // Gap in radians, adjust as needed
    const arcStartAngle = startAngle + gap / 2;
    const arcEndAngle = endAngle - gap / 2;

    const start = getCoords(arcStartAngle);
    const end = getCoords(arcEndAngle);

    const largeArcFlag = angleStep > Math.PI ? 1 : 0;

    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="absolute">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="5"
            markerHeight="3.5"
            refX="4.5"
            refY="1.75"
            orient="auto"
          >
            <polygon points="0 0, 5 1.75, 0 3.5" fill="#BAE9F4" />
          </marker>
        </defs>
        {arcs.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="#BAE9F4"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
        ))}
      </svg>

      {steps.map((step, index) => {
        const angle = (index / steps.length) * 2 * Math.PI - Math.PI / 2;
        const position = getCoords(angle);
        const Icon = step.icon;

        return (
          <div
            key={index}
            className="absolute flex items-center justify-center bg-[#191E1B] border-2 border-[#BAE9F4] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-cyan-glow"
            style={{
              width: iconContainerSize,
              height: iconContainerSize,
              left: position.x - iconContainerSize / 2,
              top: position.y - iconContainerSize / 2,
              boxShadow: '0 0 15px rgba(186, 233, 244, 0.2)',
            }}
          >
            <Icon className="w-6 h-6 text-[#BAE9F4]" />
          </div>
        );
      })}
    </div>
  );
};

export default FlywheelGraphic;
