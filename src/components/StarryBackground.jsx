'use client';

import React, { useEffect, useState, useRef } from 'react';

const StarryBackground = ({ starCount = 240 }) => {
  const [stars, setStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

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

  // 监听鼠标移动
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // 计算鼠标相对于容器中心的位置
        const x = (e.clientX - rect.left - centerX) / centerX;
        const y = (e.clientY - rect.top - centerY) / centerY;
        
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  // 计算星星的位移
  const getStarTransform = (star) => {
    // 不同层级的鼠标位移系数（与鼠标移动方向相反）
    const mouseLayerMultipliers = {
      1: 1,   // 最上层，位移最小
      2: 2,   // 中间层
      3: 4,   // 最下层，位移最大
    };
    
    const mouseMultiplier = mouseLayerMultipliers[star.layer];
    
    const offsetX = -mousePosition.x * mouseMultiplier;
    const offsetY = -mousePosition.y * mouseMultiplier;
    
    return `translate(${offsetX}px, ${offsetY}px)`;
  };

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
      transform: getStarTransform(star),
      transition: 'transform 0.1s ease-out',
    };
  };

  return (
    <div 
      ref={containerRef}
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