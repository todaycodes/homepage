import React from 'react'
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            데이터 사이언티스트
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            데이터 분석, 머신러닝, 예측 모델링으로 비즈니스 문제를 해결합니다
          </p>
          <p className="text-lg text-blue-100 mb-12">
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FiGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
