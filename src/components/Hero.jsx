import React from 'react'
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 64, 175, 0.75) 100%), 
              url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="1200" height="600" fill="url(%23grid)"/><circle cx="200" cy="150" r="100" fill="rgba(59,130,246,0.1)"/><circle cx="1000" cy="450" r="150" fill="rgba(30,64,175,0.1)"/><path d="M 0 200 Q 300 100 600 200 T 1200 200" stroke="rgba(99,102,241,0.1)" stroke-width="2" fill="none"/></svg>')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              데이터 사이언티스트
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 drop-shadow-md">
              데이터 분석, 머신러닝, 예측 모델링으로 비즈니스 문제를 해결합니다
            </p>
            <p className="text-lg text-blue-100 mb-12 drop-shadow-md">
              Python, SQL, Tableau를 활용한 실무 데이터 전문가
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2">
                프로젝트 보기 <FiArrowRight />
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center justify-center gap-2">
                연락하기
              </a>
            </div>

            <div className="flex justify-center gap-6 text-3xl">
              <a href="https://github.com/todaycodes/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30">
                <FiGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30">
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
