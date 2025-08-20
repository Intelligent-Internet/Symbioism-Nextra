'use client';

import React, { useEffect, useState } from 'react';

const StarryBackground = ({ starCount = 240 }) => {
  const [stars, setStars] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // 检测是否为移动端
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm 断点是 640px
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 生成随机星星
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      // 移动端减少星星数量以提升性能
      const actualStarCount = isMobile ? Math.floor(starCount * 0.4) : starCount;
      
      for (let i = 0; i < actualStarCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // 0-100%
          y: Math.pow(Math.random(), 2) * 100, // Skew distribution towards the top
          layer: Math.floor(Math.random() * 3) + 1, // 1, 2, 3 三层
        });
      }
      
      setStars(newStars);
    };

    generateStars();
  }, [starCount, isMobile]); // 添加isMobile作为依赖项

  // 根据层级获取星星的透明度和大小
  const getStarStyle = (star) => {
    const layerStyles = {
      1: { opacity: 0.4, size: '2px' },  // 最上层，最暗最小
      2: { opacity: 0.7, size: '3px' },  // 中间层
      3: { opacity: 1, size: '4px' },    // 最下层，最亮
    };
    
    const style = layerStyles[star.layer];
    
    return {
      opacity: style.opacity,
      width: style.size,
      height: style.size,
      // 保持静止：不使用 transform/transition
      transform: 'none',
      transition: 'none',
    };
  };

  return (
    <div 
      className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden bg-[#191E1B]"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-[#BAE9F4] rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            ...getStarStyle(star),
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;