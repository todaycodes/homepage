import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">나에 대해</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-blue-600 rounded-lg shadow-lg"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                안녕하세요! 저는 데이터 기반의 인사이트를 발굴하고 비즈니스 문제를 해결하는 데 열정적인 데이터 사이언티스트입니다.
              </p>
              
              <p className="text-lg text-gray-700">
                5년 이상의 경험을 통해 데이터 수집, 정제, 분석부터 머신러닝 모델 개발 및 배포까지 전 과정을 주도했습니다.
              </p>

              <p className="text-lg text-gray-700">
                복잡한 데이터를 이해하기 쉬운 시각화로 전환하고, 정확한 예측 모델로 비즈니스 의사결정을 지원합니다.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-secondary mb-3">경력</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 머신러닝 엔지니어 (2022 - 현재)</li>
                  <li>✓ 데이터 분석가 (2020 - 2022)</li>
                  <li>✓ 비즈니스 분석가 (2019 - 2020)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
