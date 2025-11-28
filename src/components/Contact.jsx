import React from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">연락하기</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">
                함께 일하고 싶으신가요?
              </h3>
              <p className="text-gray-600 text-lg">
                데이터 기반의 비즈니스 문제 해결을 위해 항상 준비되어 있습니다.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-primary text-2xl mt-1">
                  <FiMail />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">이메일</h4>
                  <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-primary transition">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-primary text-2xl mt-1">
                  <FiPhone />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">전화</h4>
                  <a href="tel:+82-10-1234-5678" className="text-gray-600 hover:text-primary transition">
                    +82-10-1234-5678
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-primary text-2xl mt-1">
                  <FiMapPin />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">위치</h4>
                  <p className="text-gray-600">
                    서울, 대한민국
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-semibold text-secondary mb-4">소셜 미디어</h4>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                  LinkedIn
                </a>
                <a href="https://kaggle.com" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                  Kaggle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
